(function () {
    angular
    .module("WebAppMaker")
    .factory("UserService", UserService);

    function UserService($http) {
        /*var users = [
            { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@gmail.com" },
            { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@gmail.com" },
            { _id: 345, username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com" },
            { _id: 456, username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jannunzi@gmail.com" }
        ];*/

        var api = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials, // returns the user whose username and password match the username and password parameters
            findUserById: findUserById, // returns the user in local users array whose _id matches the userId parameter
            findUserByUsername: findUserByUsername, // returns the user in local users array whose username matches the parameter username
            updateUser: updateUser,
            deleteUser: deleteUser,
            login:login,
            checkLogin: checkLogin,
            logOut:logOut
        };

        return api;

        function logOut(){
            return $http.post("/api/logOut");
        }

        function checkLogin() {
            return $http.post("/api/checkLogin");
        }
        function login(username, password) {
            var user = {
                        username:username,
                        password:password
                    };
            return $http.post("/api/login",user);
        }
        function createUser(user) {
            return $http.post('/api/user',user);
            /*
            users.push(user);
            return 567;
            */
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            return $http.put(url,user);

            /*for (var u in users) {
                userarr = users[u];
                if (userarr._id === userid) {
                    users[u].username = user.username;

                    return true;
                }
            }
            return false;*/
        }
        
        function deleteUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
            /*
            for (var u in users) {
                userarr = users[u];
                if (userarr._id === userid) {
                    delete users[u];
                    return true;
                }
            }
            return false;*/
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);

            /*for (var u in users) {
                user = users[u];
                if (user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;*/
        }

        function findUserById(userid) {
            var url = '/api/user/' + userid;
            return $http.get(url);

            /*for (var u in users) {
                user = users[u];
                if (user._id === userid) {
                    return user;
                }
            }
            return null;*/
        }

        function findUserByUsername(username) {

            var url = '/api/user?username=' + username;
            return $http.get(url);

            /*for (var u in users) {
                user = users[u];
                if (user.username === username) {
                    return user;
                }
            }
            return null;*/
        }
    }
})();