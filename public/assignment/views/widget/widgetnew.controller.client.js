(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService,$location) {
        var vm = this;
        
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);

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
    }
})();