(function () {
    angular
    .module("WebAppMaker")
    .factory("PageService", PageService);

    function PageService() {
        var pages = [
                  { _id: 321, name: "Post 1", websiteId: 456 , title: "Post 1 title" },
                  { _id: 432, name: "Post 2", websiteId: 456, title: "Post 2 title" },
                  { _id: 543, name: "Post 3", websiteId: 456, title: "Post 3 title" },
                  { _id: 3211, name: "Post 1", websiteId: 789, title: "Post 4 title" },
                  { _id: 4321, name: "Post 2", websiteId: 789, title: "Post 5 title" },
                  { _id: 5431, name: "Post 3", websiteId: 789, title: "Post 6 title" },
                  { _id: 5431, name: "Post 4", websiteId: 789, title: "Post 7 title" }
        ];

        var api = {
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById
        };

        return api;

        function findPageByWebsiteId(wid) {
            var result = [];
            for (var p in pages) {
                if (pages[p].websiteId === wid) {
                    result.push(pages[p]);
                }
            }
            return result;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    return pages[p];
                }
            }
            return null;
        }
    }
})();