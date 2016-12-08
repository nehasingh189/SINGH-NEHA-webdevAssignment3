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
<<<<<<< HEAD
            //var user = { username: username, password: password };

            var _Guid = (new Date()).getTime();

            var user = { _id: _Guid , username: username, password: password, firstName: (new Date()).getHours(), lastName: (new Date()).getMinutes(), email: "sample@blacksuits.club" };
=======
            var user = { username: username, password: password };
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d

            var result = UserService.createUser(user);

            if (result === null) {
                vm.error = "User cannot be registed.";
                vm.success = null;
            }
            else {
<<<<<<< HEAD
                $location.url("user/" + _Guid);
                //vm.success = "User registered successfully."
=======
                vm.success = "User registered successfully."
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
                vm.error = null;
            }
        }
    }

    //function LoginController($scope)
    //{
    //    $scope.hello = "Hello Neha";
    //}

})();