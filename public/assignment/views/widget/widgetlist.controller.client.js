(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService ,$sce) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;


        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;

        function init() {
            //vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);

            WidgetService.findWidgetsByPageId(vm.pageId)
                .success(function (widget) {
                    vm.widgets = widget;
                })
                .error(function (data) {
                    console.log(data);
                });

            $(".wam-widgets").sortable({axis:'y'});
        }
        init();

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function checkSafeYouTubeUrl(url)
        {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            console.log(id);

            var url = "https://www.youtube.com/embed/" + id;

            return $sce.trustAsResourceUrl(url);
        }
    }


})();