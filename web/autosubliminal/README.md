# Autosubliminal

## Development

* Run `npm run start` to use the development server for your frontend.
* Navigate to `http://localhost:4200/autosubliminal`.
* The app will automatically reload if you change any of the source files.
* This also requires that your backend server is running as well.
* REMARK: change the port in `target` in `proxy.localhost.conf.json` to the port of your backend server ('Webserver port' in Webserver settings).

## Build

* Run `npm run build` to build the project when frontend development is completed.
* The build artifacts will be stored in the `static` directory.
* This makes sure that all your changes (as javascript) are available for the backend server so they can be served from there as well.
* REMARK: in order to get the same output in github workflows, we pin the node version in the `package.json` to the version used on the local machine as well.
* Navigate to `http://localhost:xxxx/autosubliminal` to test your changes, where `xxxx` is the port of your backend server.
