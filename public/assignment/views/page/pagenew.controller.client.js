(function () {
    angular
    .module("WebAppMaker")
    .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        
        //var pg = PageService.findPageById(vm.pageId);

        //if (pg != null) {
        //    vm.pg = pg;
        //}
    }
})();