(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, $location, $http) {
        var vm = this;
        
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.getWidgetType = getWidgetType;
        vm.createWidget = createWidget;
        //vm.UploadImage = UploadImage;

        /*function  UploadImage(){
            alert(vm.myFile);

            var url = "/api/upload";
            $http.post(url,function (response) { alert(response); }, function (failure) { alert(failure);});
        }*/

        function getWidgetType(str)
        {
            vm.widgetType = str;
        }

        function createWidget(widget) {
            //widget._id = (new Date()).getTime();
            //widget.pageId = vm.pageId;

            WidgetService
                .createWidget(vm.pageId,widget)
                .success(function (data) {
                    //vm.websites = WebsiteService.findWebsiteForUser(vm.userId);
                    //init();
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
                })
                .error(function (data) {
                    console.log(data);
                })
        }
    }
})();