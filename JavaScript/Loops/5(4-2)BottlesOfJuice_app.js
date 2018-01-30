var num = 99;
var glass = "bottles";

while (num >= 1) {
        var output1 = num + " " + glass + " of juice on the wall! " + num + " " + glass + " of juice! Take one down, pass it around... ";
        num--;
        num == 1 ? glass = "bottle" : glass = "bottles";
        var output2 = num + " " + glass + " of juice on the wall!";

        console.log(output1 + output2);
}
