const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Franz',
      room: 'Berlin'
    },
    {
      id: '2',
      name: 'Hans',
      room: 'Berlin'
    },
    {
      id: '3',
      name: 'Lanz',
      room: 'Hamburg'
    }]

  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Ingo',
      room: 'the Office haters'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Berlin', () => {
    var userList = users.getUserList('Berlin');
    expect(userList).toEqual(['Franz', 'Hans']);
  });

  it('should remove a user', () => {

    var user = users.removeUser('1');
    expect(users.users).toExclude(user);

  });

  it('should not remove a user', () => {

    var user = users.removeUser('4');
    expect(users.users.length).toBe(3);

  });

  it('should find user', () => {

    var user = users.getUser('1');
    expect(user).toEqual(users.users[0]);

  });

  it('should not find user', () => {

    var user = users.getUser('4');
    expect(user).toNotExist();

  });

});
