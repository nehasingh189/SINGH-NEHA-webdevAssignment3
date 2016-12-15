(function() {
    angular
<<<<<<< HEAD
      .module("WebAppMaker")
      .config(Config);
=======
        .module("WebAppMaker")
        .config(Config);
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
<<<<<<< HEAD
                controllerAs: "model",
                resolve:{
                    checkLogin:checkLogin
                }
=======
                controllerAs: "model"
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/page-new.view.client.html",
                controller: "PageNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/page-edit.view.client.html",
                controller: "PageEditController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "views/widget/widget-choose.view.client.html",
                controller: "WidgetNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/widget/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });
<<<<<<< HEAD

        function checkLogin($q, UserService, $location) {

            var deffered = $q.defer();
            UserService.checkLogin()
                .success(
                    function (user) {
                         if(user != '0') {
                             deffered.resolve();
                         }
                         else
                         {
                             deffered.reject();
                             $location.url("/login");
                         }
                    }
                );
            return deffered.promise;
        }
        }
=======
    }
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
})();
