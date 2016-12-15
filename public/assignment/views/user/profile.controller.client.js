(function () {
    angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.logOut =logOut;
        //var userId = parseInt($routeParams.uid);
        var userId = $routeParams.uid;

        function init() {
            UserService
                .findUserById(userId)
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function (data) {
                    console.log(data);
                })
        }
        init();
        
        function logOut() {
            UserService.logOut()
                .success(function () {
                    $location.url("/login");
                })
        }
        function updateUser() {
            UserService
                .updateUser(vm.user)
                .success(function (data) {
                    if(data === 'OK')
                    {
                        vm.error = "Updated successfully.";
                    }
                    else{
                        vm.error = "Error: Profile not updated.";
                    }
                })
                .error(function (data) {
                    vm.error = 'Error: Error occured while updating profile.';
                })
        }
        
        function deleteUser() {
            UserService
                .deleteUser(vm.user._id)
                .success(function (data) {
                    if(data === 'OK')
                    {
                        $location.url("/login");
                    }
                    else{
                        vm.error = "Error: Profile not updated.";
                    }
                })
                .error(function (data) {
                    vm.error = 'Error: Error occured while updating profile.';
                })
        }
    }
    
    
})();