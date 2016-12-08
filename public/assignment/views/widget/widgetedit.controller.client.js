(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetEditController", WidgetEditController);

<<<<<<< HEAD
    function WidgetEditController($routeParams, WidgetService, $sce, $location) {
=======
    function WidgetEditController($routeParams, WidgetService, $sce) {
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
        vm.wgid = parseInt($routeParams.wgid);

<<<<<<< HEAD
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;


=======
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        //vm.checkSafeHtml = checkSafeHtml;
        //vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;

        function init() {
            vm.widgets = WidgetService.findWidgetsById(vm.wgid);
        }
        init();

<<<<<<< HEAD
        function deleteWidget() {

            var retVal = WidgetService.deleteWidget(vm.wgid);
            if(retVal === true)
            {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            }
            else
            {
                console.log("Error");
            }
        }

        function updateWidget(widget) {
            var retVal = WidgetService.updateWidget(vm.wgid, widget);
            
            if(retVal === true)
            {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            }
            else
            {
                console.log("Error");
            }
        }

=======
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
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