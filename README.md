# mv-onload
Angular plugin for easy call callback where dom is compiled

##Usage:

```
  Live demo: https://jsfiddle.net/alphonse92/vhoq07he/
```

###html:
```html
<html ng-app="app">
    <head>
        <title>TODO supply a title</title>
        <link href="assets/stylesheets/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    </head>
    <body ng-controller="mainController">
        <div class="container">
            <div class="row">
                <p  mvonload="callback">{{x}}</p>
            </div>
        </div>
        <!-- inject angular js -->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js" type="text/javascript"></script>
        <!-- inject plugin-->
        <script src="assets/js/mv-onload/mv-onload.js" type="text/javascript"></script>
        <!-- inject bootstrap-->
        <script src="assets/js/boostrap.js" type="text/javascript"></script>
    </body>
</html>
```
###javascript:
```javascript
angular.module('app', ['com.alphonsegs.mvonload'])
        .controller("mainController", function ($scope, $http) {
            $scope.x = "Text wasnt changed, its bored e.e "
            $scope.callback = function () {
                $scope.x = "Text was changed !! Oh gad im so excited"
            }
        })

```
