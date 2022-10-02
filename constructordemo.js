var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
    }
    return User;
}());
var user = new User(101, "John");
console.log(user.userId);
console.log(user.userName);
