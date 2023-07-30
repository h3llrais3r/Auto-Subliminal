import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SelectItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormUtils } from '../../../components/forms/form-utils';
import { InputMultiSelectComponent } from '../../../components/input/multi-select/input-multi-select.component';
import { VideoSubtitles } from '../../../models/video';

@Component({
  selector: 'app-library-video-subtitles',
  templateUrl: './library-video-subtitles.component.html',
  styleUrls: ['./library-video-subtitles.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, DialogModule, ButtonModule, SharedModule, InputMultiSelectComponent]
})
export class LibraryVideoSubtitlesComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  videoSubtitles: VideoSubtitles;

  @Output()
  save = new EventEmitter<VideoSubtitles>(); // allows custom onSave functionality (save)="..." when component is created

  videoSubtitlesForm: UntypedFormGroup;
  languages: SelectItem[];

  private fb = inject(UntypedFormBuilder);

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    this.buildForm();
  }

  saveVideoSubtitles(): void {
    const videoSubtitles = new VideoSubtitles();
    videoSubtitles.fileLocation = FormUtils.getFormControlValue<string>(this.videoSubtitlesForm, 'fileLocation');
    videoSubtitles.fileName = FormUtils.getFormControlValue<string>(this.videoSubtitlesForm, 'fileName');
    videoSubtitles.languages = FormUtils.getFormControlValue<string[]>(this.videoSubtitlesForm, 'languages');
    this.save.emit(videoSubtitles); // ouput the videoSubtitles object on save
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  private buildForm(): void {
    this.videoSubtitlesForm = this.fb.group({
      fileLocation: [this.videoSubtitles.fileLocation, []],
      fileName: [this.videoSubtitles.fileName, []],
      languages: [this.videoSubtitles.languages || [], []]
    });
  }
}
