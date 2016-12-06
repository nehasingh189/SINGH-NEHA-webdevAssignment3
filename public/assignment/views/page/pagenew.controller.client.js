(function () {
    angular
    .module("WebAppMaker")
    .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
     
        vm.createPage = createPage;

        function createPage(page) {
            page._id = (new Date()).getTime();
            page.websiteId = vm.websiteId;

            var retVal = PageService.createPage(page);

            if(retVal === true)
            {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
            else
            {
                console.log("Error");
            }
        }

        //var pg = PageService.findPageById(vm.pageId);

        //if (pg != null) {
        //    vm.pg = pg;
        //}
    }
})();