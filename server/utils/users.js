[{
  id: '',
  name: 'ds',
  room: 'd'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;

  }

  getUser (id) {

    var user = this.users.filter((user) => user.id === id);
    return user[0];

  }

  getUserList (room) {
    var users = this.users.filter((user) =>  user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}


module.exports = {Users};



// class Person {
//   constructor (name, room) {
//     this.name = name;
//     this.room = room;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.room} year(s) old`;
//   }
// }
//
// var me = new Person('Ingo', 25);
// console.log('this.name', me.name);
// console.log(me.getUserDescription());
