(function () {
    angular
    .module("WebAppMaker")
    .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        
        function init() {
            //vm.pages = PageService.findPageByWebsiteId(vm.websiteId);

            PageService.findPageByWebsiteId(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error(function (data) {
                    console.log(data);
                });

            //console.log(vm.pages);
        }
        init();
    }
})();