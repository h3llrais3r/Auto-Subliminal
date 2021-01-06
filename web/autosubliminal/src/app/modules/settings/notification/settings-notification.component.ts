import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { SettingsService } from '../../../core/services/api/settings.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { NotificationSettings, TwitterRegistration } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-notification',
  templateUrl: './settings-notification.component.html',
  styleUrls: ['./settings-notification.component.scss']
})
export class SettingsNotificationComponent implements OnInit {

  settingsForm: FormGroup;

  enabledOrDisabled: SelectItem[];
  growlProwlPriorities: SelectItem[];

  twitterRegistration: TwitterRegistration;
  twitterRegistrationDialog = false;

  saveAttempt = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getNotificationSettings().subscribe(
      result => {
        this.buildForm(result);
      });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateNotificationSettings(this.getNotificationSettings()).subscribe(
        result => {
          // updated
        });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  test(notifierName: string): void {
    this.settingsService.testNotifier(notifierName).subscribe(
      result => {
        // ok
      },
      error => {
        // TODO: show error
        console.error(error);
      }
    );
  }

  registerTwitter(): void {
    this.settingsService.registerTwitter().subscribe(
      result => {
        // Show dialog to finish the registration
        this.twitterRegistration = result;
        this.twitterRegistrationDialog = true;
      });
  }

  authorizeTwitter(): void {
    this.settingsService.authorizeTwitter(this.twitterRegistration).subscribe(
      result => {
        // Update form with twitter key and secret
        FormUtils.setFormControlValue(this.settingsForm, 'twitterKey', result.twitterKey);
        FormUtils.setFormControlValue(this.settingsForm, 'twitterSecret', result.twitterSecret);
      });
  }

  private buildSelectItems(): void {
    // Enabled or disabled
    this.enabledOrDisabled = FormUtils.enabledOrDisabledSelectItems();
    // Growl/Prowl priorities
    this.growlProwlPriorities = [];
    this.growlProwlPriorities.push({ label: 'Very low', value: -2 });
    this.growlProwlPriorities.push({ label: 'Moderate', value: -1 });
    this.growlProwlPriorities.push({ label: 'Normal', value: 0 });
    this.growlProwlPriorities.push({ label: 'High', value: 1 });
    this.growlProwlPriorities.push({ label: 'Emergency', value: 2 });
  }

  private buildForm(notificationSettings: NotificationSettings): void {
    this.settingsForm = this.fb.group({
      notify: [notificationSettings.notify, [Validators.required]],
      notifyMail: [notificationSettings.notifyMail, [Validators.required]],
      mailServer: [notificationSettings.mailServer, [Validators.required]],
      mailFrom: [notificationSettings.mailFrom, [Validators.required]],
      mailTo: [notificationSettings.mailTo, [Validators.required]],
      mailUserName: [notificationSettings.mailUserName, [Validators.required]],
      mailPassword: [notificationSettings.mailPassword, [Validators.required]],
      mailSubject: [notificationSettings.mailSubject, [Validators.required]],
      mailEncryption: [notificationSettings.mailEncryption, [Validators.required]],
      mailAuthentication: [notificationSettings.mailAuthentication, [Validators.required]],
      notifyTwitter: [notificationSettings.notifyTwitter, [Validators.required]],
      twitterKey: [notificationSettings.twitterKey, [Validators.required]],
      twitterSecret: [notificationSettings.twitterSecret, [Validators.required]],
      notifyPushalot: [notificationSettings.notifyPushalot, [Validators.required]],
      pushalotApi: [notificationSettings.pushalotApi, [Validators.required]],
      notifyPushover: [notificationSettings.notifyPushover, [Validators.required]],
      pushoverKey: [notificationSettings.pushoverKey, [Validators.required]],
      pushoverApi: [notificationSettings.pushoverApi, [Validators.required]],
      pushoverDevices: [notificationSettings.pushoverDevices, [Validators.required]],
      notifyGrowl: [notificationSettings.notifyGrowl, [Validators.required]],
      growlHost: [notificationSettings.growlHost, [Validators.required]],
      growlPort: [notificationSettings.growlPort, [Validators.required]],
      growlPassword: [notificationSettings.growlPassword, [Validators.required]],
      growlPriority: [notificationSettings.growlPriority || 0, [Validators.required]],
      notifyProwl: [notificationSettings.notifyProwl, [Validators.required]],
      prowlApi: [notificationSettings.prowlApi, [Validators.required]],
      prowlPriority: [notificationSettings.prowlPriority || 0, [Validators.required]],
      notifyPushbullet: [notificationSettings.notifyPushbullet, [Validators.required]],
      pushbulletApi: [notificationSettings.pushbulletApi, [Validators.required]],
      notifyTelegram: [notificationSettings.notifyTelegram, [Validators.required]],
      telegramBotApi: [notificationSettings.telegramBotApi, [Validators.required]],
      telegramChatId: [notificationSettings.telegramChatId, [Validators.required]]
    });
  }

  private getNotificationSettings(): NotificationSettings {
    const settings = new NotificationSettings();
    settings.notify = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notify');
    settings.notifyMail = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyMail');
    settings.mailServer = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailServer');
    settings.mailFrom = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailFrom');
    settings.mailTo = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailTo');
    settings.mailUserName = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailUserName');
    settings.mailPassword = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailPassword');
    settings.mailSubject = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailSubject');
    settings.mailEncryption = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailEncryption');
    settings.mailAuthentication = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailAuthentication');
    settings.notifyTwitter = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyTwitter');
    settings.twitterKey = FormUtils.getFormControlValue<string>(this.settingsForm, 'twitterKey');
    settings.twitterSecret = FormUtils.getFormControlValue<string>(this.settingsForm, 'twitterSecret');
    settings.notifyPushalot = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyPushalot');
    settings.pushalotApi = FormUtils.getFormControlValue<string>(this.settingsForm, 'pushalotApi');
    settings.notifyPushover = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyPushover');
    settings.pushoverKey = FormUtils.getFormControlValue<string>(this.settingsForm, 'pushoverKey');
    settings.pushoverApi = FormUtils.getFormControlValue<string>(this.settingsForm, 'pushoverApi');
    settings.pushoverDevices = FormUtils.getFormControlValue<string>(this.settingsForm, 'pushoverDevices');
    settings.notifyGrowl = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyGrowl');
    settings.growlHost = FormUtils.getFormControlValue<string>(this.settingsForm, 'growlHost');
    settings.growlPort = FormUtils.getFormControlValue<number>(this.settingsForm, 'growlPort');
    settings.growlPassword = FormUtils.getFormControlValue<string>(this.settingsForm, 'growlPassword');
    settings.growlPriority = FormUtils.getFormControlValue<number>(this.settingsForm, 'growlPriority');
    settings.notifyProwl = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyProwl');
    settings.prowlApi = FormUtils.getFormControlValue<string>(this.settingsForm, 'prowlApi');
    settings.prowlPriority = FormUtils.getFormControlValue<number>(this.settingsForm, 'prowlPriority');
    settings.notifyPushbullet = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyPushbullet');
    settings.pushbulletApi = FormUtils.getFormControlValue<string>(this.settingsForm, 'pushbulletApi');
    settings.notifyTelegram = FormUtils.getFormControlValue<boolean>(this.settingsForm, 'notifyTelegram');
    settings.telegramBotApi = FormUtils.getFormControlValue<string>(this.settingsForm, 'telegramBotApi');
    settings.telegramChatId = FormUtils.getFormControlValue<string>(this.settingsForm, 'telegramChatId');
    return settings;
  }
}
