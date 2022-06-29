import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../core/services/api/settings.service';
import { MessageService } from '../../../core/services/message.service';
import { FormUtils } from '../../../shared/components/forms/form-utils';
import { NotificationSettings, TwitterRegistration } from '../../../shared/models/settings';

@Component({
  selector: 'app-settings-notification',
  templateUrl: './settings-notification.component.html',
  styleUrls: ['./settings-notification.component.scss']
})
export class SettingsNotificationComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];
  growlProwlPriorities: SelectItem[];

  twitterRegistration: TwitterRegistration;
  twitterRegistrationDialog = false;

  saveAttempt = false;

  constructor(
    private fb: UntypedFormBuilder,
    private settingsService: SettingsService,
    private appSettingsService: AppSettingsService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getNotificationSettings().subscribe(
      (notificationSettings) => {
        this.buildForm(notificationSettings);
      },
      () => this.messageService.showErrorMessage('Unable to get the notification settings!')
    );
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateNotificationSettings(this.getNotificationSettings()).subscribe(
        () => {
          this.messageService.showSuccessMessage('Notification settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        () => this.messageService.showErrorMessage('Unable to save the notification settings!')
      );
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  test(notifierName: string): void {
    this.settingsService.testNotifier(notifierName).subscribe(
      () => this.messageService.showSuccessMessage(`Test ${notifierName} notification sent.`),
      () => this.messageService.showErrorMessage(`Test ${notifierName} notification failed!`)
    );
  }

  registerTwitter(): void {
    this.settingsService.registerTwitter().subscribe(
      (twitterRegistration) => {
        // Show dialog to finish the registration
        this.twitterRegistration = twitterRegistration;
        this.twitterRegistrationDialog = true;
      },
      () => this.messageService.showErrorMessage('Twitter registration failed!')
    );
  }

  authorizeTwitter(): void {
    this.settingsService.authorizeTwitter(this.twitterRegistration).subscribe(
      (twitterAuthorization) => {
        // Update form with twitter key and secret
        FormUtils.setFormControlValue(this.settingsForm, 'twitterKey', twitterAuthorization.twitterKey);
        FormUtils.setFormControlValue(this.settingsForm, 'twitterSecret', twitterAuthorization.twitterSecret);
        this.messageService.showSuccessMessage('Twitter registration successful. Please save and test Twitter.');
      },
      () => this.messageService.showErrorMessage('Twitter authorization failed!')
    );
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
      notifyMail: [notificationSettings.notifyMail, []],
      mailServer: [notificationSettings.mailServer, []],
      mailFrom: [notificationSettings.mailFrom, []],
      mailTo: [notificationSettings.mailTo, []],
      mailUserName: [notificationSettings.mailUserName, []],
      mailPassword: [notificationSettings.mailPassword, []],
      mailSubject: [notificationSettings.mailSubject, []],
      mailEncryption: [notificationSettings.mailEncryption, []],
      mailAuthentication: [notificationSettings.mailAuthentication, []],
      notifyTwitter: [notificationSettings.notifyTwitter, []],
      twitterKey: [notificationSettings.twitterKey, []],
      twitterSecret: [notificationSettings.twitterSecret, []],
      notifyPushalot: [notificationSettings.notifyPushalot, []],
      pushalotApi: [notificationSettings.pushalotApi, []],
      notifyPushover: [notificationSettings.notifyPushover, []],
      pushoverKey: [notificationSettings.pushoverKey, []],
      pushoverApi: [notificationSettings.pushoverApi, []],
      pushoverDevices: [notificationSettings.pushoverDevices, []],
      notifyGrowl: [notificationSettings.notifyGrowl, []],
      growlHost: [notificationSettings.growlHost, []],
      growlPort: [notificationSettings.growlPort, []],
      growlPassword: [notificationSettings.growlPassword, []],
      growlPriority: [notificationSettings.growlPriority || 0, []],
      notifyProwl: [notificationSettings.notifyProwl, []],
      prowlApi: [notificationSettings.prowlApi, []],
      prowlPriority: [notificationSettings.prowlPriority || 0, []],
      notifyPushbullet: [notificationSettings.notifyPushbullet, []],
      pushbulletApi: [notificationSettings.pushbulletApi, []],
      notifyTelegram: [notificationSettings.notifyTelegram, []],
      telegramBotApi: [notificationSettings.telegramBotApi, []],
      telegramChatId: [notificationSettings.telegramChatId, []]
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
