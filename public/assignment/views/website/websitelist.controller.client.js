(function () {
    angular
    .module("WebAppMaker")
    .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        
        function init() {
            //vm.websites = WebsiteService.findWebsiteForUser(vm.userId);

            WebsiteService.findWebsiteForUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function (data) {
                    console.log(data);
                });
        }
        init();
    }


})();