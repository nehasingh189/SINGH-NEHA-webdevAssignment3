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
                vm.error = "Password and verify password doesn't match.";
                return;
            }
            //var user = { _id:  (new Date()).getTime(), username: username, password: password ,firstName: (new Date()).getHours(),lastName: (new Date()).getMinutes(),email : "sample@blacksuits.club" };
            var user = { username: username, password: password ,firstName: (new Date()).getHours(),lastName: (new Date()).getMinutes(),email : "sample@blacksuits.club" };

            UserService
                .createUser(user)
                .success(function (data) {
                    $location.url("user/" + data._id);
                })
                .error(function (data) {
                    console.log(data);
                })

            /*var result = UserService.createUser(user);

            if (result === null) {
                vm.error = "User cannot be registed.";
                vm.success = null;
            }
            else {
                vm.success = "User registered successfully."
                vm.error = null;
            }*/
        }
    }

    //function LoginController($scope)
    //{
    //    $scope.hello = "Hello Neha";
    //}

})();