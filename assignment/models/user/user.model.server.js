/**
 * Created by Neha Singh on 10/12/2016.
 */

module.exports = function () {
    var model={};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser:createUser,
        findUserById: findUserById,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        deleteUser:deleteUser,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({
            username:username,
            password: password
        });
    }

    function updateUser(UserID, user) {
        return UserModel
            .update(
                {
                    _id: UserID
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email:user.email,
                    phone: user.phone
                }
            );

    }

    function  findUserById(userID) {
        console.log("In user Model finduserbyUd : " + userID);
        return UserModel.findById(userID);
    }

    function createUser(user) {
        return UserModel.create(user);
    }
};