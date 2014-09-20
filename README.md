Angular With Rails
==================

Before starting we need these things installed.

  - Ruby ~> 1.9.3 
  - Rails 4
  - MySQL or Postgresql

This is the first rails application in which i am going to use angularjs, in this application a user will be able to do these things:


Functionalities
-----------

These are the functionalities that i am going to imlement in this application:

* A home page
* Add product
* Desplay the product list
* User would be able to Register him/her self
* User would be able to Login


Project Setup
--------------

```sh
$ rails new angular_rails -d=mysql -T
$ bundle installX
$ rake db:create
$ rails generate scaffold product name:string price:decimal descriprion:text image:string
$ rake db:migrate
```

Rather than dump everything at once, I'd first like to demonstrate the simplest "Hello, world" version of an AngularJS-Rails application and then build our product CRUD functionality.


There's no reason our "Hello, world" page must or should be tied to any particular Rails resource. For this reason, we'll create a StaticPagesController to serve up our AngularJS home page.


Create the Home controller
-------------------------

```sh
$ rails generate controller home index
```

Our root route right now is just the "Welcome to Rails" page.

##### # config/routes.rb


```sh
# Add the following line in bottom of routes.rb

  root 'home#index'
```

Download Angular
---------------

Download angular.js and angular-mocks.js from code.angularjs.org and move the files into app/assets/javascripts.

```sh
$ wget http://code.angularjs.org/1.1.5/angular.js \
http://code.angularjs.org/1.1.5/angular-mocks.js

$ mv angular* app/assets/javascripts
```

Adding it to the asset pipeline
---------------------------
Now we want to tell our application to require the AngularJS file, and we want to make sure it gets loaded before other files that depend on it. (We could use something like RequireJS to manage these dependencies, and that's probably what I would do on a production product, but for now I want to keep the technology stack as thin as possible.)

Note: Angular and Turbolinks can conflict with one another, so we disable them here
```sh
// app/assets/javascripts/application.js

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

// Add the following two lines
//= require angular
//= require main

//= require_tree .

```
Setting up the layout
----------------------
We'll add ng-app and ng-view, which signal that we have an Angular app in our page. Also notice that mentions of Turbolinks have been removed.

```sh
<!-- app/views/layouts/application.html.erb -->

<!DOCTYPE html>
<html ng-app="angular_rails">
<head>
  <title>RngularRails</title>
  <%= stylesheet_link_tag    "application", media: "all" %>
  <%= javascript_include_tag "application" %>
  <%= csrf_meta_tags %>
</head>
<body>

<div ng-view>
  <%= yield %>
</div>

</body>
</html>
```

Creating an Angular controller
----------------------------
First let's create a directory for our controllers. You can name it whatever you want.
```sh
$ mkdir -p app/assets/javascripts/angular/controllers
```
Now let's create the controller file itself. I'm calling this controller the "home controller," and the convention in Angular is to append your controller filenames with Ctrl. Thus our filename will be app/assets/javascripts/angular/controllers/HomeCtrl.js.coffee:

```sh
# app/assets/javascripts/angular/controllers/HomeCtrl.js.coffee

@angular_rails.controller 'HomeCtrl', ['$scope', ($scope) ->
  # Notice how this controller body is empty
]
```

Add an Angular route
-------------------
Now we'll add a routing directive in order to make our HomeCtrl be our "default page." Here I'm defining my routing in app/assets/javascripts/main.js.coffee, but again I don't think the filename matters.

```sh
# app/assets/javascripts/main.js.coffee

# This line is related to our Angular app, not to our
# HomeCtrl specifically. This is basically how we tell
# Angular about the existence of our application.
@angular_rails = angular.module('angular_rails', [])

# This routing directive tells Angular about the default
# route for our application. The term "otherwise" here
# might seem somewhat awkward, but it will make more
# sense as we add more routes to our application.
@angular_rails.config(['$routeProvider', ($routeProvider) ->
  $routeProvider.
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    }) 
])
```
Add an Angular template
----------------------
We'll also want a place to keep our Angular templates. I decided to put mine in public/templates. Again, you can place them wherever you like. 

```sh
mkdir public/templates

```

If we create a file public/templates/home.html with some arbitrary content, we should be able to see it in the browser.

```sh
<!-- public/templates/home.html -->

This is the home page.

```
Now, if you go to http://localhost:3000/  and you should see the contents of home.html.

License
----

Pending...


**Free Software, Hell Yeah!**

