(function () {
    angular
    .module("WebAppMaker")
    .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, $location, $http) {
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
<<<<<<< HEAD
            //widget._id = (new Date()).getTime();
            //widget.pageId = vm.pageId;

            WidgetService
                .createWidget(vm.pageId,widget)
=======
            widget._id = (new Date()).getTime();
            widget.pageId = vm.pageId;

            WidgetService
                .createWidget(widget)
>>>>>>> b4f3e40382553237058b388dc6a4f0d813592dd8
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