<%inherit file="/layout/page.mako"/>

<%!
    import autosubliminal
%>

<%block name="bodyContent">

    <% saveUrl = autosubliminal.WEBROOT + "/config/notification/save" %>

    <div class="container">

        <form>

            <div class="panel panel-default">

                <div class="panel-heading">
                    <span class="h3 weighted">Notification settings</span>
                </div>

                <div class="panel-body">

                    <div class="form-horizontal">

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-warning">WARNING: Password is stored in plaintext!</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <div class="col-xs-12 col-md-9">
                                <span class="alert-info">INFORMATION: You first need to save before you can test a notification.</span>
                            </div>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">General</span>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notify">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, notification(s) will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notify" name="notify" class="form-control input-sm">
                                    % if autosubliminal.NOTIFY:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Mail</span>
                                <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/email.png" alt="mail" title="mail">
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifymail">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, an email notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifymail" name="notifymail" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYMAIL:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailsrv">Mail server
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The mail server address (and port if needed).</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.MAILSRV}" id="mailsrv" name="mailsrv" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailfromaddr">Sender
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The email address from which the notification will be sent.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="email" value="${autosubliminal.MAILFROMADDR}" id="mailfromaddr" name="mailfromaddr" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailtoaddr">Recipient
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The email address(es) to which the notification will be sent.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="email" value="${autosubliminal.MAILTOADDR}" id="mailtoaddr" name="mailtoaddr" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailusername">Username
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The username on the mail server.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.MAILUSERNAME}" id="mailusername" name="mailusername" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailpassword">Password
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The password for the username on the mail server.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="password" value="${autosubliminal.MAILPASSWORD}" id="mailpassword" name="mailpassword" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailsubject">Subject
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The email subject.<br>
                                                If not provided, the default subject will be used.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.MAILSUBJECT}" id="mailsubject" name="mailsubject" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailencryption">Encryption
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The encryption method used by the mail server.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.MAILENCRYPTION}" id="mailencryption" name="mailencryption" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="mailauth">Authentication
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The authentication mechanism used by the mail server.<br>
                                                Don't change this if you don't know what you are doing.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.MAILAUTH}" id="mailauth" name="mailauth" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/mail" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Twitter</span>
                                <a href="https://twitter.com/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/twitter.png" alt="twitter" title="twitter">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifytwitter">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Twitter notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifytwitter" name="notifytwitter" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYTWITTER:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="twitterkey">API Key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The API key for Twitter.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.TWITTERKEY}" id="twitterkey" name="twitterkey" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="twittersecret">Secret code
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The secret code for Twitter.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.TWITTERSECRET}" id="twittersecret" name="twittersecret" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/regTwitter" class="btn btn-sm btn-default">Register</a>
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/twitter" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Pushalot</span>
                                <a href="https://pushalot.com/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/pushalot.png" alt="pushalot" title="pushalot">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifypushalot">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Pushalot notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifypushalot" name="notifypushalot" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYPUSHALOT:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="pushalotapi">API key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The API key for Pushalot.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PUSHALOTAPI}" id="pushalotapi" name="pushalotapi" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/pushalot" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Pushover</span>
                                <a href="https://pushover.net/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/pushover.png" alt="pushover" title="pushover">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifypushover">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Pushover notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifypushover" name="notifypushover" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYPUSHOVER:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="pushoverkey">User key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The user key for Pushover.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PUSHOVERKEY}" id="pushoverkey" name="pushoverkey" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="pushoverapi">API key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The API key for Pushover.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PUSHOVERAPI}" id="pushoverapi" name="pushoverapi" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="pushoverdevices">Devices
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The devices (comma separated list) used for Pushover notifications.<br>
                                                If not provided, notifications will be sent to all your Pushover devices.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PUSHOVERDEVICES}" id="pushoverdevices" name="pushoverdevices" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/pushover" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Growl</span>
                                <a href="http://www.growl.info/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/growl.png" alt="growl" title="growl">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifygrowl">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Growl notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifygrowl" name="notifygrowl" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYGROWL:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="growlhost">Host server
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The Growl host server address.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.GROWLHOST}" id="growlhost" name="growlhost" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="growlport">Port
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The port of the growl host server.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.GROWLPORT}" id="growlport" name="growlport" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="growlpass">Password
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The password on the growl host server.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="password" value="${autosubliminal.GROWLPASS}" id="growlpass" name="growlpass" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="growlpriority">Priority
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The priority for the Growl notification.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <% priormapper = {-2 : 'Very Low', -1 : 'Moderate', 0 : 'Normal', 1 : 'High', 2 : 'Emergency'} %>
                                <select id="growlpriority" name="growlpriority" class="form-control input-sm">
                                    % for prior in list(range(-2, 3, 1)):
                                        % if prior == autosubliminal.GROWLPRIORITY:
                                            <option value="${prior}" selected="selected">${priormapper[prior]}</option>
                                        % else:
                                            <option value="${prior}">${priormapper[prior]}</option>
                                        % endif
                                    % endfor
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/growl" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Prowl</span>
                                <a href="http://www.prowlapp.com/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/prowl.png" alt="prowl" title="prowl">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifyprowl">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Prowl notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifyprowl" name="notifyprowl" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYPROWL:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="prowlapi">API key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The API key for Prowl.<br>
                                                <span>Your api key can be found by visiting:
                                                    <a href="https://prowlapp.com/api_settings.php" target="_blank">https://prowlapp.com/api_settings.php</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PROWLAPI}" id="prowlapi" name="prowlapi" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="prowlpriority">Priority
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>The priority for the Prowl notification.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <% priormapper = {-2 : 'Very Low', -1 : 'Moderate', 0 : 'Normal', 1 : 'High', 2 : 'Emergency'} %>
                                <select id="prowlpriority" name="prowlpriority" class="form-control input-sm">
                                    % for prior in list(range(-2, 3, 1)):
                                        % if prior == autosubliminal.PROWLPRIORITY:
                                            <option value="${prior}" selected="selected">${priormapper[prior]}</option>
                                        % else:
                                            <option value="${prior}">${priormapper[prior]}</option>
                                        % endif
                                    % endfor
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/prowl" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Pushbullet</span>
                                <a href="https://www.pushbullet.com/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/pushbullet.png" alt="pushbullet" title="pushbullet">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifypushbullet">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Pushbullet notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifypushbullet" name="notifypushbullet" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYPUSHBULLET:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="pushbulletapi">API key
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The API key for Pushbullet.<br>
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.PUSHBULLETAPI}" id="pushbulletapi" name="pushbulletapi" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/pushbullet" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                        <div class="form-group section-title">
                            <div class="col-xs-12 col-md-9">
                                <span class="badge">Telegram</span>
                                <a href="https://telegram.org/" target="_blank">
                                    <img class="img-notifier" src="${autosubliminal.WEBROOT}/images/notifiers/telegram.png" alt="telegram" title="telegram">
                                </a>
                            </div>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="notifytelegram">Notify
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>When enabled, a Telegram notification will be sent when a subtitle has been downloaded.</li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <select id="notifytelegram" name="notifytelegram" class="form-control input-sm">
                                    % if autosubliminal.NOTIFYTELEGRAM:
                                        <option value="True" selected="selected">Enabled</option>
                                        <option value="False">Disabled</option>
                                    % else:
                                        <option value="True">Enabled</option>
                                        <option value="False" selected="selected">Disabled</option>
                                    % endif
                                </select>
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="telegrambotapi">Bot API key (token)
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                The bot api key (token) for Telegram.<br>
                                                Contact @BotFather on Telegram to set up one.<br>
                                                <span>See
                                                    <a href="https://core.telegram.org/bots" target="_blank">https://core.telegram.org/bots</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.TELEGRAMBOTAPI}" id="telegrambotapi" name="telegrambotapi" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3">
                                <label for="telegramchatid">Chat id
                                    <span class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-info-circle" aria-hidden="true" title="Click for more info"></i>
                                        </a>
                                        <ul class="dropdown-menu has-tip info-list">
                                            <li>
                                                Unique identifier for the target chat or username of the target channel (in the format @channelusername).<br>
                                                Contact @myidbot on Telegram to get an ID.
                                            </li>
                                        </ul>
                                    </span>
                                </label>
                            </span>
                            <span class="col-xs-8 col-md-6">
                                <input type="text" value="${autosubliminal.TELEGRAMCHATID}" id="telegramchatid" name="telegramchatid" class="form-control input-sm">
                            </span>
                        </div>

                        <div class="form-group narrow">
                            <span class="col-xs-4 col-md-3"></span>
                            <span class="col-xs-8 col-md-6">
                                <a href="${autosubliminal.WEBROOT}/config/notification/test/telegram" class="btn btn-sm btn-default btn-test">Test</a>
                                <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <a href="${saveUrl}" class="btn btn-sm btn-primary btn-save">Save</a>

        </form>

    </div>

</%block>

<%block name="footerContent">

    <script type="text/javascript" src="${autosubliminal.WEBROOT}/js/config.js?v=${appUUID}"></script>

</%block>
