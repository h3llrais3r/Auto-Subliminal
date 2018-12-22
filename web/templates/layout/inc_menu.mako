<%!
    import autosubliminal
%>

<!-- Menu -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <!-- Header -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand no-padding" href="${autosubliminal.WEBROOT}/home/" title="Auto-Subliminal homepage">
                <img src="${autosubliminal.WEBROOT}/images/autosubliminal.png" alt="Auto-Subliminal" title="Auto-Subliminal">
            </a>
        </div>
        <!-- Buttons -->
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <!-- Home -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-hover="dropdown" data-delay="500" data-close-others="true" href="${autosubliminal.WEBROOT}/home/">
                        <i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home
                    </a>
                </li>
                <!-- Library (only shown when enabled in config) -->
                % if autosubliminal.LIBRARYMODE:
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="500" data-close-others="true" href="${autosubliminal.WEBROOT}/library/">
                            <i class="fa fa-list" aria-hidden="true"></i>&nbsp;Library&nbsp;<b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-inverse">
                            <li>
                                <a href="${autosubliminal.WEBROOT}/library/shows"><i class="fa fa-television" aria-hidden="true"></i>&nbsp;Shows</a>
                            </li>
                            <li>
                                <a href="${autosubliminal.WEBROOT}/library/movies"><i class="fa fa-video-camera" aria-hidden="true"></i>&nbsp;Movies</a>
                            </li>
                        </ul>
                    </li>
                % endif
                <!-- Config -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="500" data-close-others="true" href="${autosubliminal.WEBROOT}/config/">
                        <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp;Config&nbsp;<b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-inverse">
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/general"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;General</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/library"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;Library</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/logging"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;Logging</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/webserver"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;Webserver</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/subliminal"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;Subliminal</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/namemapping"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;NameMapping</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/skipmapping"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;SkipMapping</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/notification"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;Notification</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/config/postprocessing"><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;PostProcessing</a>
                        </li>
                    </ul>
                </li>
                <!-- Log -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="500" data-close-others="true" href="${autosubliminal.WEBROOT}/log/">
                        <i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Log&nbsp;<b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-inverse">
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;All</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog/debug"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Debug</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog/info"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Info</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog/warning"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Warning</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog/error"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Error</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/viewLog/critical"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;Critical</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/log/clearLog"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Clear log</a>
                        </li>
                    </ul>
                </li>
                <!-- System -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="500" data-close-others="true" href="${autosubliminal.WEBROOT}/system/">
                        <i class="fa fa-microchip" aria-hidden="true"></i>&nbsp;System&nbsp;<b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-inverse">
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system" class="run-process" data-process-name="${autosubliminal.SCANDISK.name}"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;Scan Disk</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system" class="run-process" data-process-name="${autosubliminal.CHECKSUB.name}"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;Check Subtitles</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system" class="run-process" data-process-name="${autosubliminal.SCANLIBRARY.name}"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;Scan Library</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/restart"><i class="fa fa-repeat" aria-hidden="true"></i>&nbsp;Restart</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/shutdown"><i class="fa fa-stop" aria-hidden="true"></i>&nbsp;Shutdown</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/info"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;Info</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/status"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;Status</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system" class="run-process" data-process-name="${autosubliminal.CHECKVERSION.name}"><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp;Check Version</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/flushCache"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Flush Cache</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/flushWantedItems"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Flush Wanted</a>
                        </li>
                        <li>
                            <a href="${autosubliminal.WEBROOT}/system/flushLastDownloads"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Flush Downloaded</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="${autosubliminal.GITHUBURL}/issues" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>&nbsp;Report issue</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>