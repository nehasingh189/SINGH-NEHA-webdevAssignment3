(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
    }
})();