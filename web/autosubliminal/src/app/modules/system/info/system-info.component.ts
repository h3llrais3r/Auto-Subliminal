import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../core/services/api/system.service';
import { MessageService } from '../../../core/services/message.service';
import { SystemInfo, SystemInstallType } from '../../../shared/models/systeminfo';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.scss']
})
export class SystemInfoComponent implements OnInit {

  private readonly NOT_AVAILABLE = 'N/A';
  private readonly CHANGELOG_URL = 'https://raw.githubusercontent.com/h3llrais3r/Auto-Subliminal/master/changelog.html';

  readonly SOURCE_URL = 'https://github.com/h3llrais3r/Auto-Subliminal';
  readonly ISSUES_URL = `${this.SOURCE_URL}/issues`;
  readonly WIKI_URL = `${this.SOURCE_URL}/wiki`;

  systemInfo: SystemInfo;
  changelog: string;
  version: string;
  versionUrl: string;
  gitInstall = false;

  constructor(private httpClient: HttpClient, private systemService: SystemService, private messageService: MessageService) { }

  ngOnInit(): void {
    // Get system info
    this.systemService.getSystemInfo().subscribe(
      (systemInfo) => {
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
      () => this.messageService.showErrorMessage('Unable to get system info! Please check the log file!')
    );

    // Get changelog
    this.httpClient.get(this.CHANGELOG_URL, { responseType: 'text' }).subscribe(
      (changelog) => {
        this.changelog = this.parseChangelog(changelog);
      },
      () => this.messageService.showErrorMessage('Unable to get changelog!')
    );
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
