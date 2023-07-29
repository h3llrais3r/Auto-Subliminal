import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SystemService } from '../../../core/services/api/system.service';
import { MessageService } from '../../../core/services/message.service';
import { SystemInfo, SystemInstallType } from '../../../shared/models/systeminfo';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.scss']
})
export class SystemInfoComponent implements OnInit {

  readonly SOURCE_URL = 'https://github.com/h3llrais3r/Auto-Subliminal';
  readonly ISSUES_URL = `${this.SOURCE_URL}/issues`;
  readonly WIKI_URL = `${this.SOURCE_URL}/wiki`;

  systemInfo: SystemInfo;
  changelog: string;
  version: string;
  versionUrl: string;
  gitInstall = false;

  private readonly NOT_AVAILABLE = 'N/A';
  private readonly CHANGELOG_URL = 'https://raw.githubusercontent.com/h3llrais3r/Auto-Subliminal/master/changelog.html';

  private httpClient = inject(HttpClient);
  private systemService = inject(SystemService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Get system info
    this.systemService.getSystemInfo().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (systemInfo) => {
        this.systemInfo = systemInfo;
        if (this.systemInfo.installType === SystemInstallType.SOURCE) {
          this.version = this.systemInfo.currentVersion;
          this.versionUrl = this.systemInfo.currentVersionUrl;
        } else if (this.systemInfo.installType === SystemInstallType.GIT) {
          this.version = this.systemInfo.releaseVersion;
          this.gitInstall = true;
        } else {
          this.version = this.NOT_AVAILABLE;
        }
      },
      error: () => this.messageService.showErrorMessage('Unable to get the system info!')
    });

    // Get changelog
    this.httpClient.get(this.CHANGELOG_URL, { responseType: 'text' }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (changelog) => {
        this.changelog = this.parseChangelog(changelog);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the changelog!')
    });
  }

  private parseChangelog(changelogHtml: string): string {
    let result = '';
    const parser = new DOMParser();
    const parsedChangelog = parser.parseFromString(changelogHtml, 'text/html');
    const releases = parsedChangelog.getElementsByClassName('release');
    Array.from(releases).forEach((release, index) => {
      const version = release.getElementsByClassName('version')[0];
      const releaseDate = release.getElementsByClassName('releasedate')[0];
      const changelog = release.getElementsByClassName('changelog')[0];
      if (index > 0) {
        result += '<hr class="separator">';
      }
      result += '<div class="release">';
      result += '<div class="version-label">Version</div>' + version.outerHTML;
      result += '<div class="releasedate-label">Release date</div>' + releaseDate.outerHTML;
      result += '<div class="changelog-label">Changelog</div>' + changelog.outerHTML;
      result += '</div>';
    });
    return result;
  }

}
