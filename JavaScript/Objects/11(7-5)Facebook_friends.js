/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
  name: "Szczepan",
  friends: 342,
  messages: ["hello my friend", "thx for all", "be my guest"],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index,1);
  },
  addFriend: function() {
    this.friends += 1;
  },
  removeFriend: function() {
    this.friends -= 1;
  }
};

facebookProfile.postMessage("Hi ");
// console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
// console.log(facebookProfile.messages);
facebookProfile.addFriend();
// console.log(facebookProfile.friends);
facebookProfile.removeFriend();
// console.log(facebookProfile.friends);
