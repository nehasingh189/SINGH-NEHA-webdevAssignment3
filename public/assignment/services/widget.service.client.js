(function () {
    angular
    .module("WebAppMaker")
    .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        /*
        var widgets = [
                      { _id: 123, widgetType: "HEADER", pageId: 321, size: 2, text: "GIZMODO" } ,
                      { _id: 234, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
                      { _id: 345, widgetType: "IMAGE", pageId: 321, width: "100%", url: "http://lorempixel.com/400/200/" },
                      { _id: 456, widgetType: "HTML", pageId: 321, text: '<p><span style="line-height: 1.5; background-color: transparent;">This UK university league table reveals the 91 best UK universities and colleges,&nbsp;</span><span style="line-height: 1.5; background-color: transparent;">according to the trusted&nbsp;<a href="https://www.timeshighereducation.com/world-university-rankings/2017/world-ranking"><em>Times Higher Education</em> World University Rankings 2016-2017</a>.</span></p>' },
                      { _id: 567, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
                      { _id: 678, widgetType: "YOUTUBE", pageId: 321, width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
                      { _id: 789, widgetType: "HTML", pageId: 321, text: "<p>Lorem ipsum</p>" }
                    ];
        */
        var api = {
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetsById: findWidgetsById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            createWidget:createWidget
            //uploadImage:uploadImage,
        };

        return api;


        function uploadImage() {
            var url = "/api/upload";
            return $http.post(url,myFile);
        }
        function createWidget(widget) {
            var url = "/api/page/"+widget.pageId+"/widget";
            return $http.post(url,widget);
        }

        function deleteWidget(wgid) {
            var url = "/api/widget/" + wgid;
            return $http.delete(url);
        }
        function updateWidget(wgid,widget) {
            var url = "/api/widget/" + wgid;
            return $http.put(url,widget);
        }

        function findWidgetsById(wgid)
        {
            var url = "/api/widget/" +wgid;
            return $http.get(url);
            /*
            for (var w in widgets) {
                if (widgets[w]._id === wgid) {
                    return widgets[w];
                }
            }
            return null;*/
        }

        function findWidgetsByPageId(pid) {
            var url = "/api/page/"+ pid +"/widget";
            return $http.get(url);
            /*
            var result = [];
            for (var w in widgets) {
                if (widgets[w].pageId === pid) {
                    result.push(widgets[w]);
                }
            }
            return result;*/
            //return widgets;
        }
    }
})();