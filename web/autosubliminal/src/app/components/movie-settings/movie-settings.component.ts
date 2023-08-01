import { NgIf } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SelectItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MovieSettings } from '../../models/movie';
import { MovieService } from '../../services/api/movie.service';
import { ArtworkService } from '../../services/artwork.service';
import { MessageService } from '../../services/message.service';
import { FormUtils } from '../../utils/form-utils';
import { FormValidators } from '../../utils/form-validators';
import { IconDropdownComponent } from '../icon-dropdown/icon-dropdown.component';
import { InputMultiSelectComponent } from '../input/multi-select/input-multi-select.component';
import { InputSwitchComponent } from '../input/switch/input-switch.component';

@Component({
  selector: 'app-movie-settings',
  templateUrl: './movie-settings.component.html',
  styleUrls: ['./movie-settings.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, DialogModule, ButtonModule, SharedModule, LazyLoadImageModule, IconDropdownComponent, InputMultiSelectComponent, InputSwitchComponent]
})
export class MovieSettingsComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  imdbId: string; // needed to update the movie settings afterwards

  @Input()
  title: string; // needed to display the title

  @Input()
  movieSettings: MovieSettings; // if specified, these settings will be used instead of fetching them via the imdbId

  settingsForm: UntypedFormGroup;

  languages: SelectItem[];

  loaded = false;

  private fb = inject(UntypedFormBuilder);
  private movieService = inject(MovieService);
  private artworkService = inject(ArtworkService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    if (!this.movieSettings) {
      this.movieService.getMovieSettings(this.imdbId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (movieSettings) => {
          this.buildForm(movieSettings);
          this.loaded = true;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the movie settings!')
      });
    } else {
      this.buildForm(this.movieSettings);
      this.loaded = true;
    }
  }

  getMoviePosterThumbnailUrl(): string {
    return this.artworkService.getMoviePosterThumbnailUrl(this.imdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  saveMovieSettings(): void {
    this.movieService.saveMovieSettings(this.imdbId, this.getMovieSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.messageService.showSuccessMessage(`Move settings saved and will be applied on next disk scan.`);
        this.close();
      },
      error: () => this.messageService.showErrorMessage(`Unable to save the movie settings!`)
    });
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  private buildForm(movieSettings: MovieSettings): void {
    this.settingsForm = this.fb.group({
      wantedLanguages: [movieSettings.wantedLanguages || [], [Validators.required, FormValidators.notEmpty]],
      refine: [movieSettings.refine, [Validators.required]],
      hearingImpaired: [movieSettings.hearingImpaired, [Validators.required]],
      utf8Encoding: [movieSettings.utf8Encoding || [Validators.required]]
    });
  }

  private getMovieSettings(): MovieSettings {
    const movieSettings = new MovieSettings();
    movieSettings.wantedLanguages = FormUtils.getFormControlValue<string[]>(this.settingsForm, 'wantedLanguages');
    movieSettings.refine = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'refine');
    movieSettings.hearingImpaired = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'hearingImpaired');
    movieSettings.utf8Encoding = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'utf8Encoding');
    return movieSettings;
  }
}
