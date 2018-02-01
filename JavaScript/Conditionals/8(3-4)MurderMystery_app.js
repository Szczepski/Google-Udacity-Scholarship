/*
"MR. Parkers" - "dining room";
"Ms. Van Cleve" - "gallery";
"Mrs. Sparr" - "billiards room";
"Mr. Kalehoff" - "ballromm"

*/
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "dining room") {
  weapon = "knife";
  suspect = "Mr. Parkes";
  solved = true;

} else if (room == "gallery") {
  weapon = "trophy";
  suspect = "Ms. Van Cleve";

} else if (room == "billiards room") {
  weapon = "pool stick";
  suspect = "Mrs. Sparr";

} else {
    weapon = "poison"
    suspect = "Mr. Kalehoff";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
