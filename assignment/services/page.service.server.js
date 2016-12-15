/**
 * Created by Neha Singh on 20/11/2016.
 */

module.exports = function (app , model) {
    var pages = [
        { _id: 321, name: "Post 1", websiteId: 456 , title: "Post 1 title" },
        { _id: 432, name: "Post 2", websiteId: 456, title: "Post 2 title" },
        { _id: 543, name: "Post 3", websiteId: 456, title: "Post 3 title" },
        { _id: 3211, name: "Post 1", websiteId: 789, title: "Post 4 title" },
        { _id: 4321, name: "Post 2", websiteId: 789, title: "Post 5 title" },
        { _id: 5431, name: "Post 3", websiteId: 789, title: "Post 6 title" },
        { _id: 5431, name: "Post 4", websiteId: 789, title: "Post 7 title" }
    ];

    app.get('/api/website/:websiteId/page', findPageByWebsiteId);
    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/page/:pageId',findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function deletePage(req,res) {

        var pid = req.params.pageId;

        model
            .pageModel
            .deletePage(pid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        /*
        var pid = parseInt(req.params.pageId);

        for (var p in pages) {
            if (pages[p]._id === pid) {
                pages.splice(p,1);
                res.send(200);
            }
        }
        res.send('0');
        */
    }

    function updatePage(req,res) {
        var page = req.body;
        var pageId = req.params.pageId;

        model.pageModel
            .updatePage(pageId, page)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        /*
        var page = req.body;
        var pid = page._id;

        for (var p in pages) {
            if (pages[p]._id === pid) {
                pages[p]= page;
                res.send(200);
            }
        }
        res.send('0');
        */
    }

    function findPageById(req,res) {

        var pageId = req.params.pageId;

        model.pageModel
            .findPageById(pageId)
            .then(
                function (page) {
                    res.json(page);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        /*
        for (var p in pages) {
            if (pages[p]._id === pageId) {
                res.json(pages[p]);
                return;
            }
        }
        res.send('0');*/
    }
    function createPage(req,res) {
        var page = req.body;
        var websiteId = req.params.websiteId;

        model.pageModel
            .createPage(websiteId, page)
            .then(
                function (newPage) {
                    res.send(newPage);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        //pages.push(page);
        //res.send(page);
    }

    function findPageByWebsiteId(req, res) {
        var wid = req.params.websiteId;
        model.pageModel
            .findPageByWebsiteId(wid)
            .then(
                function (pages) {
                    res.json(pages);
                },
                function (error) {
                    res.sendStatus(400).send();
                }
            );

        /*
        var wid = parseInt(req.params.websiteId);
        var result = [];
        for (var p in pages) {
            if (pages[p].websiteId === wid) {
                result.push(pages[p]);
            }
        }
        res.json(result);
        */
    }
};