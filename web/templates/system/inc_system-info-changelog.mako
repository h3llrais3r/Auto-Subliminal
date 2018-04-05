<%!
    from bs4 import BeautifulSoup

    from autosubliminal.util import common
%>

<%
    parsed = True
    try:
        response = utils.connect_url('https://raw.github.com/h3llrais3r/Auto-Subliminal/master/changelog.html')
        page = BeautifulSoup(response.text, 'html5lib')
        releases = page.find_all("div", "release")
    except Exception:
        parsed = False
%>

% if parsed:
    <div class="form-horizontal">

        <div class="form-group section-title">
            <div class="col-xs-12">
                <span class="badge">Current version</span>
            </div>
        </div>

        <% counter = 0 %>
        % for index, release in enumerate(releases):

        <%
            version = release.find("div", "version").string
            releasedate = release.find("div", "releasedate").string
            changelog = release.find("ul", "changelog")
        %>

            <hr>

        % if index == 1:
            <div class="form-group section-title">
                <div class="col-xs-12">
                    <span class="badge">Previous version(s)</span>
                </div>
            </div>
        % endif

            <div class="form-group narrow">
                <span class="col-xs-4 col-md-2"><label>Version</label></span>
                <span class="col-xs-8 col-md-10">${version}</span>
            </div>

            <div class="form-group narrow">
                <span class="col-xs-4 col-md-2"><label>Release date</label></span>
                <span class="col-xs-8 col-md-10">${releasedate}</span>
            </div>

            <div class="form-group narrow">
                <span class="col-xs-4 col-md-2"><label>Changelog</label></span>
                <span class="col-xs-8 col-md-10 wrapped">${changelog}</span>
            </div>

        <% counter += 1 %>

        % endfor

    </div>
% else:
    Changelog cannot be found right now, please try again later.
% endif