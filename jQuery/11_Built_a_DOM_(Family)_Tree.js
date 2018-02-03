/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

$(() => {
  console.log("hello");

var family1 = $("#family1");
console.log(family1);

// Family 2 Start
var family2 = $("<div id='family2'>");
family2.insertAfter(family1);

var h1 = $("<h1>Family2</h1>");
family2.prepend(h1);

// Bruce
var bruce = $("<div id='bruce'>");
family2.append(bruce);

var bruceH2 = $("<h2>Bruce</h2>");
bruce.prepend(bruceH2);

// Madison
var madison = $("<div id='madison'>");
madison.insertAfter(bruceH2);

var h3Madison = $("<h3>Madison</h3>");
madison.prepend(h3Madison);

// Hunter
var hunter = $("<div id='hunter'>");
hunter.insertAfter(bruceH2);

var h3Hunter = $("<h3>Hunter</h3>");
hunter.prepend(h3Hunter)

});
