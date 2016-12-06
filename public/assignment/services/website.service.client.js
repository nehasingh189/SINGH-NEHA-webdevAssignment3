(function () {
    angular
    .module("WebAppMaker")
    .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
                  { _id: 123, name: "Facebook", developerId: 456, desc: "Facebook is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
                  { _id: 234, name: "Tweeter", developerId: 456, desc: "Tweeter is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
                  { _id: 456, name: "Gizmodo", developerId: 456, desc: "Gizmodo is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
                  { _id: 567, name: "Tic Tac Toe", developerId: 123, desc: "Tic Tac Toe is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
                  { _id: 678, name: "Checkers", developerId: 123, desc: "Checkers is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
                  { _id: 789, name: "Chess", developerId: 234, desc: "Chess is a blog-publishing service that allows multi-user blogs with time-stamped entries." }
        ];

        var api = {
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            deleteWebsite:deleteWebsite,
            findWebsiteForUser: findWebsiteForUser,
            findWebsiteById: findWebsiteById
        };

        return api;

        function createWebsite(website) {
            websites.push(website);
        }

        function updateWebsite(websiteId, website) {
            for (var w in websites) {
                sitearr = websites[w];
                if (sitearr._id === websiteId) {
                    websites[w].name = website.name;
                    websites[w].desc = website.desc;

                    return true;
                }
            }
            return false;
        }

        function deleteWebsite(websiteId) {
            for (var w in websites) {
                sitearr = websites[w];
                if (sitearr._id === websiteId) {
                    delete websites[w];
                    return true;
                }
            }
            return false;
        }

        function findWebsiteById(wid) {
            for (var w in websites) {
                if (websites[w]._id === wid) {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsiteForUser(uid) {
            var result = [];
            for (var w in websites) {
                if (websites[w].developerId === uid) {
                    result.push(websites[w]);
                }
            }
            return result;
        }
    }
})();