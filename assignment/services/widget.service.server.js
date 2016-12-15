/**
 * Created by Neha Singh on 20/11/2016.
 */
module.exports = function (app, model) {
    var widgets = [
        { _id: 123, widgetType: "HEADER", pageId: 321, size: 2, text: "GIZMODO" } ,
        { _id: 234, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
        { _id: 345, widgetType: "IMAGE", pageId: 321, width: "100%", url: "http://lorempixel.com/400/200/", fileext: "" },
        { _id: 456, widgetType: "HTML", pageId: 321, text: '<p><span style="line-height: 1.5; background-color: transparent;">This UK university league table reveals the 91 best UK universities and colleges,&nbsp;</span><span style="line-height: 1.5; background-color: transparent;">according to the trusted&nbsp;<a href="https://www.timeshighereducation.com/world-university-rankings/2017/world-ranking"><em>Times Higher Education</em> World University Rankings 2016-2017</a>.</span></p>' },
        { _id: 567, widgetType: "HEADER", pageId: 321, size: 4, text: "Lorem ipsum" },
        { _id: 678, widgetType: "YOUTUBE", pageId: 321, width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
        { _id: 789, widgetType: "HTML", pageId: 321, text: "<p>Lorem ipsum</p>" }
    ];

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.get('/api/page/:pageId/widget', findWidgetsByPageId);
    app.get('/api/widget/:widgetId',findWidgetsById);
    app.put('/api/widget/:widgetId',updateWidget);
    app.delete('/api/widget/:widgetId',deleteWidget);
    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post('/api/page/:pageId/widget', createWidget);

    function createWidget(req,res) {

        var widget = req.body;
        var pageId = req.params.pageId;
        console.log("\n In widget service server : "  + pageId + "\n");

        model.widgetModel
            .createWidget(pageId,widget)
            .then(
                function (widget) {
                    res.send(widget);
                },
                function (error) {
                    res.sendStatus(400).send();
                }
            );
        /*var widget = req.body;
        widgets.push(widget);
        res.send(widget);*/
    }

    function uploadImage(req, res) {
        var widgetId      = parseInt(req.body.widgetId);
        var width         = req.body.width;
        var pageId        = req.body.pageid;
        var userId        = req.body.userid;
        var websiteId     = req.body.websiteid;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype

        var extention = originalname.split('.');
        var imageUrl = "../public/upload/"+filename;

        for (var w in widgets) {
            if (widgets[w]._id === widgetId) {
                widgets[w].url = imageUrl;
                widgets[w].fileext = extention[1];
            }
        }
        res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
    }

    function deleteWidget(req,res) {
        var wgid = parseInt(req.params.widgetId);

        for (var w in widgets) {
            if (widgets[w]._id === wgid) {
                widgets.splice(w,1);
                res.send(200);
            }
        }
        res.send('0');
    }

    function updateWidget(req,res) {
        var widget = req.body;
        var wgid = parseInt(req.params.widgetId);

        for (var w in widgets) {
            if (widgets[w]._id === wgid) {
                widgets[w]= widget;
                res.send(200);
            }
        }
        res.send('0');
    }

    function findWidgetsById(req,res) {
        var wgid = parseInt(req.params.widgetId);

        for (var w in widgets) {
            if (widgets[w]._id === wgid) {
                res.send(widgets[w]);
            }
        }
    }
    function findWidgetsByPageId(req,res) {
        var pid = parseInt(req.params.pageId);

        var result = [];
        for (var w in widgets) {
            if (widgets[w].pageId === pid) {
                result.push(widgets[w]);
            }
        }
        res.json(result);
    }
};