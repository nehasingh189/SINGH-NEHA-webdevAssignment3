(function () {
    angular
    .module("WebAppMaker")
    .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.pageId = parseInt($routeParams.pid);
        
        var pg = PageService.findPageById(vm.pageId);

        if (pg != null) {
            vm.pg = pg;
        }
    }
})();