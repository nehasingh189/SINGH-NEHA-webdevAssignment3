(function () {
    angular
    .module("WebAppMaker")
    .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;

        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        function init() {
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            vm.websiteedit = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function updateWebsite(website){
            WebsiteService.updateWebsite(vm.websiteId,website);
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website");
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website");
        }
    }


})();