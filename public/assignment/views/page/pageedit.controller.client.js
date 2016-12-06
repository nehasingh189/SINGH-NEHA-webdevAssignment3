(function () {
    angular
    .module("WebAppMaker")
    .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;


        vm.userId = parseInt($routeParams.uid);
        vm.pageId = parseInt($routeParams.pid);
        vm.websiteId = parseInt($routeParams.wid);

        var pg = PageService.findPageById(vm.pageId);

        if (pg != null) {
            vm.pg = pg;
        }

        function updatePage(pg) {
            var retVal = PageService.updatePage(vm.pageId, pg);

            if(retVal === true)
            {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
            else
            {
                console.log("Error");
            }
        }
        function deletePage() {

            var retVal = PageService.deletePage(vm.pageId);
            if(retVal === true)
            {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
            else
            {
                console.log("Error");
            }     
        }

    }
})();