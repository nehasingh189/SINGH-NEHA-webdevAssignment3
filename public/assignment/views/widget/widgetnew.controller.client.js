(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetNewController", WidgetNewController);

<<<<<<< HEAD
    function WidgetNewController($routeParams, WidgetService,$location) {
=======
    function WidgetNewController($routeParams, WidgetService) {
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
<<<<<<< HEAD

        vm.getWidgetType = getWidgetType;
        vm.createWidget = createWidget;

        function getWidgetType(str) {
            vm.widgetType = str;
        }

        function createWidget(widget) {
            widget._id = (new Date()).getTime();
            widget.pageId = vm.pageId;

            var retVal = WidgetService.createWidget(widget);

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
    }
})();