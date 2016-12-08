(function () {
    angular
    .module("WebAppMaker")
    .factory("WidgetService", WidgetService);

    function WidgetService() {
        var widgets = [
                      { _id: 123, widgetType: "HEADER", pageId: 321, size: 2, text: "GIZMODO" } ,
                      { _id: 234, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
                      { _id: 345, widgetType: "IMAGE", pageId: 321, width: "100%", url: "http://lorempixel.com/400/200/" },
                      { _id: 456, widgetType: "HTML", pageId: 321, text: '<p><span style="line-height: 1.5; background-color: transparent;">This UK university league table reveals the 91 best UK universities and colleges,&nbsp;</span><span style="line-height: 1.5; background-color: transparent;">according to the trusted&nbsp;<a href="https://www.timeshighereducation.com/world-university-rankings/2017/world-ranking"><em>Times Higher Education</em> World University Rankings 2016-2017</a>.</span></p>' },
                      { _id: 567, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
                      { _id: 678, widgetType: "YOUTUBE", pageId: 321, width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
                      { _id: 789, widgetType: "HTML", pageId: 321, text: "<p>Lorem ipsum</p>" }
                    ];

        var api = {
            findWidgetsByPageId: findWidgetsByPageId,
<<<<<<< HEAD
            findWidgetsById: findWidgetsById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            createWidget: createWidget
=======
            findWidgetsById: findWidgetsById
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        };

        return api;

<<<<<<< HEAD
        function createWidget(widget) {
            widgets.push(widget);
            return true;
        }

        function deleteWidget(wgid) {
            var wgid = parseInt(wgid);

            for (var w in widgets) {
                if (widgets[w]._id === wgid) {
                    widgets.splice(w, 1);
                    return true;
                }
            }
            return false;
        }

        function updateWidget(wgid, widget) {
            var wgid = parseInt(wgid);

            for (var w in widgets) {
                if (widgets[w]._id === wgid) {
                    widgets[w] = widget;
                    return true;
                }
            }
            return false;
        }

=======
>>>>>>> 018c92c374362dfeaa86352bc5acf10b9b02d85d
        function findWidgetsById(wgid)
        {
            for (var w in widgets) {
                if (widgets[w]._id === wgid) {
                    return widgets[w];
                }
            }
            return null;
        }

        function findWidgetsByPageId(pid) {
            var result = [];
            for (var w in widgets) {
                if (widgets[w].pageId === pid) {
                    result.push(widgets[w]);
                }
            }
            return result;
            //return widgets;
        }
    }
})();