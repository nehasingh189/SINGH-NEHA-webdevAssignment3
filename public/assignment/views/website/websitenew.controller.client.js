(function () {
    angular
    .module("WebAppMaker")
    .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.createWebsite = createWebsite;
        
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

        function createWebsite(website)
        {
            //website._id = (new Date()).getTime();
            //website.developerId = vm.userId;
            var userID = vm.userId;

            WebsiteService
                .createWebsite(userID,website)
                .success(function (data) {
                    //vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
                    //init();
                    $location.url("/user/" + vm.userId +"/website");
                })
                .error(function (data) {
                    console.log(data);
                })


        }
    }


})();