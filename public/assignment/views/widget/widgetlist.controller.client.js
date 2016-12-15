(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService ,$sce) {
        var vm = this;
        
<<<<<<< HEAD
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
=======
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8


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