// $(document).ready(function(){


// Using fat arrow:

$(() => {
  // console.log("hello");

// Start with this variable!
var articleItems, firstItem;

articleItems = $(".article-item");
console.log(articleItems);

firstUl = articleItems.first().find("ul");
console.log(firstItem);

// Remove firstUl
firstUl.remove();

});
