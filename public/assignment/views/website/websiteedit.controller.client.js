(function () {
    angular
    .module("WebAppMaker")
    .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            //vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            WebsiteService.findWebsiteForUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function (data) {
                    console.log(data);
                });

            //vm.websiteedit = WebsiteService.findWebsiteById(vm.websiteId);
            WebsiteService.findWebsiteById(vm.websiteId)
                .success(function (websites) {
                    vm.websiteedit = websites;
                })
                .error(function (data) {
                    console.log(data);
                });
        }
        init();

        function updateWebsite(website){

            WebsiteService.updateWebsite(vm.websiteId,website)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function (data) {
                    console.log(data);
                });

            /*WebsiteService.updateWebsite(vm.websiteId,website);
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website");*/
        }

        function deleteWebsite() {

            WebsiteService.deleteWebsite(vm.websiteId)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function (data) {
                    console.log(data);
                });
            /*WebsiteService.deleteWebsite(vm.websiteId);
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website");*/
        }
    }
})();