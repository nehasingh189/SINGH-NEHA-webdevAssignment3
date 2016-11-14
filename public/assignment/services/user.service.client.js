(function () {
    angular
    .module("WebAppMaker")
    .factory("UserService", UserService);

    function UserService() {
        var users = [
                    { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@gmail.com" },
                    { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@gmail.com" },
                    { _id: 345, username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com" },
                    { _id: 456, username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jannunzi@gmail.com" }
        ];

        var api = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials, // returns the user whose username and password match the username and password parameters
            findUserById: findUserById, // returns the user in local users array whose _id matches the userId parameter
            findUserByUsername: findUserByUsername, // returns the user in local users array whose username matches the parameter username
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        function createUser(user) {
            users.push(user);
            return 567;
        }

        function updateUser(userid, user) {
            for (var u in users) {
                userarr = users[u];
                if (userarr._id === userid) {
                    users[u].username = user.username;

                    return true;
                }
            }
            return false;
        }
        
        function deleteUser(userid) {
            for (var u in users) {
                userarr = users[u];
                if (userarr._id === userid) {
                    delete users[u];
                    return true;
                }
            }
            return false;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                user = users[u];
                if (user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function findUserById(userid) {
            for (var u in users) {
                user = users[u];
                if (user._id === userid) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                user = users[u];
                if (user.username === username) {
                    return user;
                }
            }
            return null;
        }
    }
})();