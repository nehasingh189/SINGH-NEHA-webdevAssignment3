(function () {
    angular
    .module("WebAppMaker")
    .controller("LoginController", LoginController);

    function LoginController($location, UserService)
    {
        var vm = this;
        vm.login = login;

            function login(username, password) {
<<<<<<< HEAD

                //UserService.findUserByCredentials(username, password)
                UserService.login(username,password)
=======
                UserService
                    .findUserByCredentials(username, password)
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
                    .success(function (user) {
                        if (user === '0') {
                            vm.error = "Username or password is incorrect.";
                        }
                        else {
                            $location.url("/user/" + user._id);
                        }
                    })
                    .error(function (data) {
                        console.log(data);
                    })
            }
    }

    //function LoginController($scope)
    //{
    //    $scope.hello = "Hello Neha";
    //}

})();