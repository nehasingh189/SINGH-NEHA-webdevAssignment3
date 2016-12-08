(function () {
    angular
    .module("WebAppMaker")
    .controller("PageEditController", PageEditController);

<<<<<<< HEAD
    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;


        vm.userId = parseInt($routeParams.uid);
        vm.pageId = parseInt($routeParams.pid);
        vm.websiteId = parseInt($routeParams.wid);

=======
    function PageEditController($routeParams, PageService) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.pageId = parseInt($routeParams.pid);
        
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        var pg = PageService.findPageById(vm.pageId);

        if (pg != null) {
            vm.pg = pg;
        }
<<<<<<< HEAD

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

=======
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
    }
})();