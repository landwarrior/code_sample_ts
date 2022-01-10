var User = /** @class */ (function () {
    function User(userName, userAddress) {
        this.userName = userName;
        this.userAddress = userAddress;
        console.log("constructor");
    }
    User.prototype.getInfo = function () {
        return "name: " + this.userName + "  address: " + this.userAddress;
    };
    return User;
}());
var user = new User("田中", "東京都");
var str = user.getInfo();
console.log(str);
