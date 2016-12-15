/**
 * Created by Neha Singh on 19/11/2016.
 */
module.exports = function (app, model) {

    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var cookieParser = require('cookie-parser');
    var session = require('express-session');

    app.use(session({
        secret: "My first Angularjs app",
        resave: true,
        saveUninitialized: true
    }));

    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    var users = [
        { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@gmail.com" },
        { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@gmail.com" },
        { _id: 345, username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com" },
        { _id: 456, username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jannunzi@gmail.com" }
    ];

    app.post('/api/login',passport.authenticate('local'),login);
    app.post('/api/user', createUser);
    app.post('/api/checkLogin', checkLogin);
    app.post('/api/logOut', logOut);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function logOut(req,res) {
        req.logout();
        res.send(200);
    }
    
    function checkLogin(req,res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }
    function localStrategy(username,password,done) {

        model
            .userModel
            .findUserByCredentials(username,password)
            .then(
                function (user) {
                    if(!user){
                        return   done(null,false);
                    }
                    else {
                        return done(null,user);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

    }

    function login(req,res)
    {
        var user = req.user;
        res.json(user);

    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model.userModel
            .findUserById(user._id)
            .then(function (user) {
                done(null, user);
            },
            function (error) {
                done(error,null);
            });
    }

    function deleteUser(req,res) {

        var userid = req.params.uid;

        model
            .userModel
            .deleteUser(userid)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        /*
        for (var u in users) {
            if (users[u]._id === userid) {
                //delete users[u];
                users.splice(u,1);
                res.send(200);
            }
        }
        res.send('0');
        */
    }

    function updateUser(req,res) {
        var user = req.body;
        var userid = user._id;

        model
            .userModel
            .updateUser(userid,user)
            .then(
                function (status) {
                    res.send(200);    
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        /*
        var userid = parseInt(user._id);

        for (var u in users) {
            if (users[u]._id === userid) {
                users[u]= user;
                res.send(200);
            }
        }
        res.send('0');
        */
    }
    
    function createUser(req,res) {
        var user = req.body;
        //users.push(user);
        model
            .userModel
            .createUser(user)
            .then(
                function (newUser) {
                    res.send(newUser);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        //res.send(user);
    }
    function findUser(req,res) {
        var query = req.query;

        if(query.password && query.username){
            findUserByCredentials(req,res);
        }
        else if(query.username){
            findUserByUsername(req,res);
        }
    }
    function findUserByCredentials(req,res) {
        var username = req.query.username;
        var password = req.query.password;

        model
            .userModel
            .findUserByCredentials(username,password)
            .then(
                function (user) {
                    if(user){
                        res.json(user);
                    }
                    else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

        /*
        for (var u in users) {
            user = users[u];
            if (user.username === username && user.password === password) {
                res.send(user);
                return;
            }
        }
        res.send('0');
        */
    }

    function findUserByUsername(req,res) {
        var username = req.query.username;

        for (var u in users) {
            user = users[u];
            if (user.username === username) {
                res.send(user);
                return;
            }
        }
        res.send('0');
    }

    function findUserById(req,res) {
        /*
        var userid = parseInt(req.params.uid);

        for (var u in users) {
            user = users[u];
            if (user._id === userid) {
                res.send(user);
                return;
            }
        }
        res.send('0');
        */
        var userID = req.params.uid;

        model
            .userModel
            .findUserById(userID)
            .then(
                function (user) {
                    if(user){
                        res.send(user);
                    }
                    else{
                        res.send(0);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
};