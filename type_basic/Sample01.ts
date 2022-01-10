class User {
  constructor(private userName: string, private userAddress: string) {
    console.log("constructor");
  }

  getInfo(): string {
    return "name: " + this.userName + "  address: " + this.userAddress;
  }
}
var user = new User("田中", "東京都");
var str = user.getInfo();
console.log(str);
