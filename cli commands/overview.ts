/*

----------- Updating angular-cli
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest

----------- Create a project called project-name and adds prefix pn to all selector names---------
ng new project-name --prefix pn

----------- Change directory to project------------
cd project-name

------------ Serving an Angular2 project via a development server-----------
ng serve
ng serve --port 4201 --live-reload-port 49153

ng serve -prod
(prod: serve as production application)

------------ Unit Testing ---------------------
ng test
[
	Test will execute after a build is executed via Karma, and it will automatically watch your files for changes.
	You can run tests a single time via --watch=false, and turn off building of the app via --build=false (useful
	for running it at the same time as ng serve).

	On Windows, ng test is hitting a file descriptor limit. The solution for now is to instead run ng serve and
	ng test --build=false in separate console windows.
]

----------- Run end to end tests --------------
ng e2e
[
	Before running the tests make sure you are serving the app via ng serve.
]

------------ Generating Components, Directives, Pipes and Services--------------
ng generate component my-new-component
ng g component my-new-component
ng g c my-new-component
ng g c my-new-component --flat -it -is
(flat: save in current folder, it: inline template, is: inline style)

#######################################################
Scaffold         |           Usage
#######################################################
Component        | ng g component my-new component
-------------------------------------------------------
Directive        | ng g directive my-new-directive
-------------------------------------------------------
Pipe             | ng g pipe my-new-pipe
-------------------------------------------------------
Service          | ng g service my-new-service
-------------------------------------------------------
Class            | ng g class my-new-class
-------------------------------------------------------
Interface        | ng g interface my-new-interface
-------------------------------------------------------
Enum             | ng g enum my-new-enum
-------------------------------------------------------

--------------To destroy--------------------
ng destroy component my-new-component

--------------Using CSS Preprocessors--------------------------------
npm install node-sass
[
	Rename .css files in your project to .scss or .sass. They will be compiled automatically
]

*/