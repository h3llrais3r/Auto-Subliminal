import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { AppSettingsService } from '../../../app-settings.service';
import { SettingsService } from '../../../services/api/settings.service';
import { MessageService } from '../../../services/message.service';
import { FormUtils } from '../../../components/forms/form-utils';
import { IconDropdownComponent } from '../../../components/icon-dropdown/icon-dropdown.component';
import { InputDropdownComponent } from '../../../components/input/dropdown/input-dropdown.component';
import { InputNumberComponent } from '../../../components/input/number/input-number.component';
import { InputTextComponent } from '../../../components/input/text/input-text.component';
import { NotificationSettings, TwitterRegistration } from '../../../models/settings';

@Component({
  selector: 'app-settings-notification',
  templateUrl: './settings-notification.component.html',
  styleUrls: ['./settings-notification.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, PanelModule, ButtonModule, DialogModule, InputTextModule, MessageModule, IconDropdownComponent, InputDropdownComponent, InputTextComponent, InputNumberComponent]
})
export class SettingsNotificationComponent implements OnInit {

  settingsForm: UntypedFormGroup;

  enabledOrDisabled: SelectItem[];
  growlProwlPriorities: SelectItem[];

  twitterRegistration: TwitterRegistration;
  twitterRegistrationDialog = false;

  saveAttempt = false;

  private fb = inject(UntypedFormBuilder);
  private settingsService = inject(SettingsService);
  private appSettingsService = inject(AppSettingsService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildSelectItems();
    this.settingsService.getNotificationSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (notificationSettings) => {
        this.buildForm(notificationSettings);
      },
      error: () => this.messageService.showErrorMessage('Unable to get the notification settings!')
    });
  }

  save(): void {
    this.saveAttempt = true;
    if (this.settingsForm.valid) {
      this.settingsService.updateNotificationSettings(this.getNotificationSettings()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage('Notification settings saved.');
          this.appSettingsService.reload(); // reload app settings
        },
        error: () => this.messageService.showErrorMessage('Unable to save the notification settings!')
      });
    } else {
      FormUtils.scrollToFirstInvalidField(this.settingsForm);
    }
  }

  test(notifierName: string): void {
    this.settingsService.testNotifier(notifierName).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.messageService.showSuccessMessage(`Test ${notifierName} notification sent.`),
      error: () => this.messageService.showErrorMessage(`Test ${notifierName} notification failed!`)
    });
  }

  registerTwitter(): void {
    this.settingsService.registerTwitter().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (twitterRegistration) => {
        // Show dialog to finish the registration
        this.twitterRegistration = twitterRegistration;
        this.twitterRegistrationDialog = true;
      },
      error: () => this.messageService.showErrorMessage('Twitter registration failed!')
    });
  }

  authorizeTwitter(): void {
    this.settingsService.authorizeTwitter(this.twitterRegistration).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (twitterAuthorization) => {
        // Update form with twitter key and secret
        FormUtils.setFormControlValue(this.settingsForm, 'twitterKey', twitterAuthorization.twitterKey);
        FormUtils.setFormControlValue(this.settingsForm, 'twitterSecret', twitterAuthorization.twitterSecret);
        this.messageService.showSuccessMessage('Twitter registration successful. Please save and test Twitter.');
      },
      error: () => this.messageService.showErrorMessage('Twitter authorization failed!')
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
      notifyMail: [notificationSettings.notifyMail, []],
      mailServer: [notificationSettings.mailServer, []],
      mailFromName: [notificationSettings.mailFromName, []],
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
    settings.mailFromName = FormUtils.getFormControlValue<string>(this.settingsForm, 'mailFromName');
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
