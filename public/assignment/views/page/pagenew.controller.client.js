(function () {
    angular
    .module("WebAppMaker")
    .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService,$location) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        vm.createPage = createPage;

        function createPage(page)
        {
            //page._id = (new Date()).getTime();
            //page.websiteId = vm.websiteId;

            PageService
                .createPage(vm.websiteId, page)
                .success(function (data) {
                    $location.url("/user/" + vm.userId +"/website/" + vm.websiteId + "/page");
                })
                .error(function (data) {
                    console.log(data);
                })


        }
    }
})();