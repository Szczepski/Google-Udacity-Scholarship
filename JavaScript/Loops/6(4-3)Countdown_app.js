var time = 60;
var output;

while (time >= 0) {


    if (time == 50) {
      output = "Orbiter transfers from ground to internal power";
    }else if(time == 31) {
      output = "Ground launch sequencer is go for auto sequence start";
    }else if(time == 16) {
      output = "Activate launch pad sound suppression system";
    }else if(time == 10) {
      output = "Activate main engine hydrogen burnoff system";
    }else if(time == 6) {
      output = "Main engine start";
    }else if(time === 0) {
      output = "Solid rocket booster ignition and liftoff!";
    } else {
      output = "T-" + time + " seconds";
    }

    console.log(output);
    time --;
}

// while (time >= 0) {
//
//   console.log(
//     time === 50 ? "Orbiter transfers from ground to internal power"
//     : (time === 31 ? "Ground launch sequencer is go for auto sequence start"
//         : (time === 16 ? "Activate launch pad sound suppression system"
//             : (time === 10 ? "Activate main engine hydrogen burnoff system"
//                 : (time === 6 ? "Main engine start"
//                     : (time === 0 ? "Solid rocket booster ignition and liftoff!"
//                         : ("T-" + time + (time === 1 ? " second" : " seconds"))))))));
//     time--;
//
// }
