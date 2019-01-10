<%!
    import os
    import platform

    import autosubliminal
    from autosubliminal import version
    from autosubliminal.core.enums import InstallType
    from autosubliminal.util.system import get_python_location, get_python_version_full
%>

<%
    current_branch = autosubliminal.CHECKVERSION.process.current_branch
    current_branch_url = autosubliminal.CHECKVERSION.process.current_branch_url
    current_version = autosubliminal.CHECKVERSION.process.current_version
    current_version_url = autosubliminal.CHECKVERSION.process.current_version_url
%>

<div class="form-horizontal">

    <div class="form-group section-title">
        <div class="col-xs-12">
            <span class="badge">General</span>
        </div>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>OS</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            ${platform.platform()}
        </span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Version</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            % if autosubliminal.CHECKVERSION.process.install_type == InstallType.SOURCE:
                % if current_version_url:
                    <a href="${current_version_url}" target="_blank">${current_version}</a>
                % else:
                    ${current_version}
                % endif
            % else:
                ${version.RELEASE_VERSION}
            % endif
        </span>
    </div>

    % if autosubliminal.CHECKVERSION.process.install_type == InstallType.GIT:
        <div class="form-group narrow">
            <span class="col-xs-4 col-md-2"><label>Git branch</label></span>
            <span class="col-xs-8 col-md-10 wrapped">
                % if current_branch_url:
                    <a href="${current_branch_url}" target="_blank">${current_branch}</a>
                % else:
                    ${current_branch}
                % endif
            </span>
        </div>
        <div class="form-group narrow">
            <span class="col-xs-4 col-md-2"><label>Git version</label></span>
            <span class="col-xs-8 col-md-10 wrapped">
                % if current_version_url:
                    <a href="${current_version_url}" target="_blank">${current_version}</a>
                % else:
                    ${current_version}
                % endif
            </span>
        </div>
    % endif

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>System encoding</label></span>
        <span class="col-xs-8 col-md-10 wrapped">${autosubliminal.SYSENCODING}</span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Python version</label></span>
        <span class="col-xs-8 col-md-10 wrapped">${get_python_version_full()}</span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Python location</label></span>
        <span class="col-xs-8 col-md-10 wrapped">${get_python_location()}</span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Config file</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            % if not os.path.split(autosubliminal.CONFIGFILE)[0]:
            ${os.path.join(autosubliminal.PATH, autosubliminal.CONFIGFILE)}
            % else:
            ${autosubliminal.CONFIGFILE}
            % endif
        </span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Database file</label></span>
        <span class="col-xs-8 col-md-10 wrapped">${os.path.join(autosubliminal.PATH, autosubliminal.DBFILE)}</span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Log file</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            % if not os.path.split(autosubliminal.LOGFILE)[0]:
            ${os.path.join(autosubliminal.PATH, autosubliminal.LOGFILE)}
            % else:
            ${autosubliminal.LOGFILE}
            % endif
        </span>
    </div>

    <hr>

    <div class="form-group section-title">
        <div class="col-xs-12">
            <span class="badge">Links</span>
        </div>
    </div>


    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Source</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            <a href="${autosubliminal.GITHUBURL}" target="_blank">${autosubliminal.GITHUBURL}</a>
        </span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Issues</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            <a href="${autosubliminal.GITHUBURL}/issues" target="_blank">${autosubliminal.GITHUBURL}/issues</a>
        </span>
    </div>

    <div class="form-group narrow">
        <span class="col-xs-4 col-md-2"><label>Wiki</label></span>
        <span class="col-xs-8 col-md-10 wrapped">
            <a href="${autosubliminal.GITHUBURL}/wiki" target="_blank">${autosubliminal.GITHUBURL}/wiki</a>
        </span>
    </div>

</div>