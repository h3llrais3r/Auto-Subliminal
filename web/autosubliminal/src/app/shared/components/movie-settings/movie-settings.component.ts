import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MovieService } from '../../../core/services/api/movie.service';
import { ArtworkService } from '../../../core/services/artwork.service';
import { MovieSettings } from '../../models/movie';
import { FormUtils } from '../forms/form-utils';
import { FormValidators } from '../forms/form-validators';

@Component({
  selector: 'app-movie-settings',
  templateUrl: './movie-settings.component.html',
  styleUrls: ['./movie-settings.component.scss']
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

  settingsForm: FormGroup;

  languages: SelectItem[];

  loaded = false;

  constructor(private fb: FormBuilder, private movieService: MovieService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    if (!this.movieSettings) {
      this.movieService.getMovieSettings(this.imdbId).subscribe(
        (movieSettings) => {
          this.buildForm(movieSettings);
          this.loaded = true;
        });
    } else {
      this.buildForm(this.movieSettings);
      this.loaded = true;
    }
  }

  private buildForm(movieSettings: MovieSettings): void {
    this.settingsForm = this.fb.group({
      wantedLanguages: [movieSettings.wantedLanguages || [], [Validators.required, FormValidators.notEmpty]],
      refine: [movieSettings.refine, [Validators.required]],
      hearingImpaired: [movieSettings.hearingImpaired, [Validators.required]],
      utf8Encoding: [movieSettings.utf8Encoding || [Validators.required]]
    });
  }

  getMoviePosterThumbnailUrl(): string {
    return this.artworkService.getMoviePosterThumbnailUrl(this.imdbId);
  }

  getPosterPlaceholderUrl(): string {
    return 'assets/poster-placeholder.jpg';
  }

  saveMovieSettings(): void {
    this.movieService.saveMovieSettings(this.imdbId, this.movieSettings).subscribe(
      () => {
        this.close();
      }
    );
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
