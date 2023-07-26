import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { VideoSubtitles } from '../../../shared/models/video';

@Component({
  selector: 'app-library-video-subtitles',
  templateUrl: './library-video-subtitles.component.html',
  styleUrls: ['./library-video-subtitles.component.scss']
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

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.languages = FormUtils.languageSelectItems();
    this.buildForm();
  }

  private buildForm(): void {
    this.videoSubtitlesForm = this.fb.group({
      fileLocation: [this.videoSubtitles.fileLocation, []],
      fileName: [this.videoSubtitles.fileName, []],
      languages: [this.videoSubtitles.languages || [], []]
    });
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  saveVideoSubtitles(): void {
    const videoSubtitles = new VideoSubtitles();
    videoSubtitles.fileLocation = FormUtils.getFormControlValue<string>(this.videoSubtitlesForm, 'fileLocation');
    videoSubtitles.fileName = FormUtils.getFormControlValue<string>(this.videoSubtitlesForm, 'fileName');
    videoSubtitles.languages = FormUtils.getFormControlValue<string[]>(this.videoSubtitlesForm, 'languages');
    this.save.emit(videoSubtitles); // ouput the videoSubtitles object on save
  }
}
