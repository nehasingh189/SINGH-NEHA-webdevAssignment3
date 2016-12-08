(function () {
    angular
    .module("WebAppMaker")
    .controller("PageNewController", PageNewController);

<<<<<<< HEAD
    function PageNewController($routeParams, PageService, $location) {
=======
    function PageNewController($routeParams, PageService) {
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
<<<<<<< HEAD
     
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

=======
        
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        //var pg = PageService.findPageById(vm.pageId);

        //if (pg != null) {
        //    vm.pg = pg;
        //}
    }
})();