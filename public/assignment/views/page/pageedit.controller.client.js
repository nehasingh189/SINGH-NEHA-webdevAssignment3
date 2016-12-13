(function () {
    angular
    .module("WebAppMaker")
    .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.pageId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;


        function init() {

            PageService.findPageById(vm.pageId)
                .success(function (page) {
                    vm.pg= page;
                })
                .error(function (data) {
                    console.log(data);
                });
        }
        init();

        function updatePage(pg) {
            PageService.updatePage(vm.pageId,pg)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website/"+ vm.websiteId +"/page");
                })
                .error(function (data) {
                    console.log(data);
                });
        }
        function deletePage() {

            PageService.deletePage(vm.pageId)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website/"+ vm.websiteId +"/page");
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        /*
        var pg = PageService.findPageById(vm.pageId);

        if (pg != null) {
            vm.pg = pg;
        }
        */
    }
})();