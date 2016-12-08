(function () {
    angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
<<<<<<< HEAD
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
=======
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d

        var userId = parseInt($routeParams.uid);

        var user = UserService.findUserById(userId);

        if (user != null) {
            vm.user = user;
        }
<<<<<<< HEAD

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
=======
    }

    
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
})();