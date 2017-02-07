angular.module('app', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/confirmation/confirmation.component.html','\r\n <h2 class="bg-success">Application Completed</h3>\t\r\n\r\n\r\n <h3 >{{$ctrl.userName}} Thank you for applying to this useful government service.</h3>\t\r\n\r\n\r\n<button type="button" class="btn btn-default" ng-link="[\'PersonalDetails\']" class="btn btn-default">Start Again</button>\r\n');
$templateCache.put('app/main/main.component.html','<nav class="navbar navbar-inverse navbar-fixed-top">\r\n    <div class="container">\r\n        <div class="navbar-header">\r\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\r\n                <span class="sr-only">Gov</span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n            </button>\r\n            <a class="navbar-brand" href="#">Gov</a>\r\n        </div>\r\n        <div id="navbar" class="collapse navbar-collapse pull-right">\r\n            <ul class="nav navbar-nav">\r\n                <!--<li><a ng-link="[\'Login\']">Log in</a></li>-->\r\n            </ul>\r\n        </div><!--/.nav-collapse -->\r\n    </div>\r\n</nav>\r\n\r\n<div class="container">\r\n    <ng-outlet></ng-outlet>\r\n</div><!-- /.container -->\r\n\r\n<footer class="footer">\r\n\r\n</footer>');
$templateCache.put('app/personal-details/personal-details.component.html','\r\n    <div class="jumbotron">\r\n       <h1>{{$ctrl.title}}</h1>\r\n    </div>\r\n\r\n\r\n    <div class="col-sm-8 ">\r\n        <form name="form" class="form-horizontal" ng-submit="$ctrl.submitForm()" novalidate>\r\n            <div class="form-group" ng-class="{\'has-error\': (form.$submitted && form.name.$untouched && form.name.$invalid)||(form.name.$touched && form.name.$error.required)}">\r\n                <label class="control-label col-sm-2" for="name">Name</label>\r\n                <div class="col-sm-10">\r\n                    <input type="text" class="form-control" placeholder="Name" ng-model="$ctrl.user.name" name="name" id="name" required>\r\n                    <span class="text-danger" ng-show="(form.$submitted && form.name.$untouched && form.name.$invalid) ||(form.name.$touched && form.name.$error.required)">Name is required.</span>\r\n                </div>\r\n            </div>\r\n            <div class="form-group" ng-class="{\'has-error\': form.$submitted && !$ctrl.user.gender}">\r\n                    <label class="control-label col-sm-2"><span class="left">Gender</span></label>  \r\n                    <div class="col-sm-10">\r\n                        <div class="radio col-xs-3 col-sm-2" >\r\n                            <label>\r\n                                <input type="radio" name="male" value="male" ng-model="$ctrl.user.gender">\r\n                                Male\r\n                            </label>\r\n                        </div>\r\n                        <div class="radio col-xs-3 col-sm-2">\r\n                            <label>\r\n                                <input type="radio" name="female" value="female" ng-model="$ctrl.user.gender">\r\n                                Female\r\n                            </label>\r\n                        </div>                       \r\n                    </div>\r\n\r\n\r\n                <span class="text-danger col-sm-offset-2" ng-show="form.$submitted && !$ctrl.user.gender">Gender is required</span> \r\n            </div>\r\n            <div class="form-group" ng-class="{\'has-error\': (form.$submitted && form.age.$untouched)||(form.age.$touched && form.age.$error.min) || (form.age.$touched && form.age.$error.required) ||(form.age.$touched && form.age.$error.max)}">\r\n                <label class="control-label col-sm-2 " for="age">Age</label>\r\n                <div class="col-sm-2">\r\n                    <input type="number" class="form-control" min="18" max="150" placeholder="Age" ng-model="$ctrl.user.age" name="age" id="uName" required>\r\n                    <span class="text-danger" ng-show="(form.$submitted && form.age.$untouched) || (form.age.$touched && form.age.$error.required)">Age is required.</span>\r\n                    <span class="text-danger" ng-show="form.age.$touched && form.age.$error.min">Age must me 18 or older.</span>\r\n                    <span class="text-danger" ng-show="form.age.$touched && form.age.$error.max">Invalid Age. Please insert a valid one.</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="form-group" ng-class="{\'has-error\': form.$submitted && !$ctrl.user.country}">\r\n                    <label class="control-label col-sm-2">Country</label>\r\n                    <div class="col-sm-6">\r\n                        <select class="form-control form-control-sm "  ng-model="$ctrl.user.country" name="country" required>\r\n                            <option value="">Select Country...</option>\r\n                            <option ng-repeat="country in $ctrl.countries">{{country.name}}</option>\r\n                        </select>\r\n                        <span class="text-danger" ng-show="form.$submitted && !$ctrl.user.country">Gender is required</span>                        \r\n                    </div>\r\n            </div>\r\n            <div class="col-sm-offset-2" style="margin-top:40px;">\r\n                <button type="submit" ng-click="$ctrl.submitForm" class="btn btn-primary">Apply</button>           \r\n            </div>\r\n\r\n\r\n        </form>    \r\n    </div>\r\n\r\n\r\n\r\n\r\n');}]);