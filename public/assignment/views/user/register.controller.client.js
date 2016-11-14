(function () {
    angular
    .module("WebAppMaker")
    .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService)
    {
        var vm = this;
        vm.register = register;

        function register(username, password,verifypassword) {

            if(password != verifypassword)
            {
                vm.error = "Password and verify password doesnt match."
                return;
            }
            var user = { username: username, password: password };

            var result = UserService.createUser(user);

            if (result === null) {
                vm.error = "User cannot be registed.";
                vm.success = null;
            }
            else {
                vm.success = "User registered successfully."
                vm.error = null;
            }
        }
    }

    //function LoginController($scope)
    //{
    //    $scope.hello = "Hello Neha";
    //}

})();