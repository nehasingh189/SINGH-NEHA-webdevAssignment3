(function () {
    angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;

        var userId = parseInt($routeParams.uid);

        var user = UserService.findUserById(userId);

        if (user != null) {
            vm.user = user;
        }

        function updateUser() {
            UserService
                .updateUser(vm.user)
                .success(function (data) {
                    if (data === 'OK') {
                        vm.error = "Updated successfully.";
                    }
                    else {
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
                    if (data === 'OK') {
                        $location.url("/login");
                    }
                    else {
                        vm.error = "Error: Profile not updated.";
                    }
                })
                .error(function (data) {
                    vm.error = 'Error: Error occured while updating profile.';
                })
        }
    }
})();