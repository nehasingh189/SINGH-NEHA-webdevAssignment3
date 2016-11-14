(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $sce) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
        vm.wgid = parseInt($routeParams.wgid);

        //vm.checkSafeHtml = checkSafeHtml;
        //vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;

        function init() {
            vm.widgets = WidgetService.findWidgetsById(vm.wgid);
        }
        init();

        //function checkSafeHtml(html) {
        //    return $sce.trustAsHtml(html);
        //}

        //function checkSafeYouTubeUrl(url)
        //{
        //    var parts = url.split('/');
        //    var id = parts[parts.length - 1];
        //    console.log(id);

        //    var url = "https://www.youtube.com/embed/" + id;

        //    return $sce.trustAsResourceUrl(url);
        //}
    }


})();