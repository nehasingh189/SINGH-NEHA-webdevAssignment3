/**
 * Created by Neha Singh on 19/11/2016.
 */
module.exports = function (app, model) {
    var websites = [
        { _id: 123, name: "Facebook", developerId: 456, desc: "Facebook is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
        { _id: 234, name: "Tweeter", developerId: 456, desc: "Tweeter is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
        { _id: 456, name: "Gizmodo", developerId: 456, desc: "Gizmodo is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
        { _id: 567, name: "Tic Tac Toe", developerId: 123, desc: "Tic Tac Toe is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
        { _id: 678, name: "Checkers", developerId: 123, desc: "Checkers is a blog-publishing service that allows multi-user blogs with time-stamped entries." },
        { _id: 789, name: "Chess", developerId: 234, desc: "Chess is a blog-publishing service that allows multi-user blogs with time-stamped entries." }
    ];

    app.get('/api/user/:userId/website', findWebsiteForUser);
    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function deleteWebsite(req,res) {

        /*
        var wid = parseInt(req.params.websiteId);

        for (var w in websites) {
            if (websites[w]._id === wid) {
                websites.splice(w,1);
                res.send(200);
            }
        }
        res.send('0');
        */

        var wid = req.params.websiteId;

        model
            .websiteModel
            .deleteWebsite(wid)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updateWebsite(req,res) {
        var website = req.body;
        var wid = req.params.websiteId;

        model.websiteModel
            .updateWebsite(wid,website)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        /*
        var wid = parseInt(website._id);

        for (var w in websites) {
            if (websites[w]._id === wid) {
                websites[w]= website;
                res.send(200);
            }
        }
        res.send('0');
        */
    }

    function findWebsiteById(req, res) {
        var wid = req.params.websiteId;

        model.websiteModel
            .findWebsiteById(wid)
            .then(
                function (website) {
                    res.json(website);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        /*for (var w in websites) {
            if (websites[w]._id === wid) {
                res.json(websites[w]);
                return;
            }
        }
        res.send('0');*/
    }
    function  createWebsite(req,res) {
        var userId = req.params.userId;
        var website = req.body;
        console.log("User ID from Website Server " + userId + "" + website);
        model
            .websiteModel
            .createWebsite(userId, website)
            .then(
                function (newWebSite) {
                    console.log("Return " + newWebSite)
                    res.send(newWebSite);
                },
                function(error){
                    res.sendStatus(400).send(error + " for user id" + userId);
                });
        //websites.push(website);
        //res.send(website);
    }

    function findWebsiteForUser(req,res) {
        var uid = req.params.userId;
        //console.log("UserID in findWebsiteForUser method of website.service.server : " + uid);
        model
            .websiteModel
            .findWebsiteForUser(uid)
            .then(
                function (websites) {
                    res.json(websites);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        /*
        var uid = parseInt(req.params.userId);
        var result = [];
        for (var w in websites) {
            if (websites[w].developerId === uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
        */
    }
};