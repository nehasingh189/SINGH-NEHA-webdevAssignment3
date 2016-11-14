(function () {
    angular
    .module("WebAppMaker")
    .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.createWebsite = createWebsite;
        
        function init() {
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            
        }
        init();

        function createWebsite(website)
        {
            website._id = (new Date()).getTime();
            website.developerId = vm.userId;
            console.log(website);
            WebsiteService.createWebsite(website);
            vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
            $location.url("/user/" + vm.userId +"/website");
        }
    }


})();