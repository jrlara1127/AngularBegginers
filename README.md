# CustomerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7, to develop step by step the project of the Udemy course [Angular Step by Step for beginners](https://deloittedevelopment.udemy.com/course/angular-tutorial/)

This project contains a basic interface with the ability to navigate between menus and, add and retrieve from a JSON database with the help of the node [json-server](https://www.npmjs.com/package/json-server)  package. 


<img title="a title" alt="Alt text" src="src/assets/img/screenshot.JPG">

____________

## Initializing json-server
Install the json-server dependency with the following command.

    npm install -g json-server

Access the folder where your *db.json* file is located and run the following command.    
    
    json-server --watch db.json 

## Initializing the project
    git clone https://github.com/jrlara1127/AngularBegginers.git
    cd AngularBegginers
    npm install
    npm start 

Access to the following url http://localhost:4200/. The application will automatically reload if you change any of the source files.

____________
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
____________
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
____________
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
____________

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
