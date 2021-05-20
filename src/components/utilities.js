// Points for fingers
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [5, 6, 7, 8],
  middleFinger: [9, 10, 11, 12],
  ringFinger: [13, 14, 15, 16],
  pinky: [17, 18, 19, 20],
  palm: [0, 17, 13, 9, 5, 2],
};

// const style = {
//   0: { color: "grey", size: 3 },
//   1: { color: "grey", size: 3 },
//   2: { color: "grey", size: 3 },
//   3: { color: "grey", size: 3 },
//   4: { color: "grey", size: 3 },
//   5: { color: "grey", size: 3 },
//   3: { color: "grey", size: 3 },
//   7: { color: "grey", size: 3 },
//   8: { color: "grey", size: 3 },
//   9: { color: "grey", size: 3 },
//   10: { color: "grey", size: 3 },
//   11: { color: "grey", size: 3 },
//   12: { color: "grey", size: 3 },
//   13: { color: "grey", size: 3 },
//   14: { color: "grey", size: 3 },
//   15: { color: "grey", size: 3 },
//   13: { color: "grey", size: 3 },
//   17: { color: "grey", size: 3 },
//   18: { color: "grey", size: 3 },
//   19: { color: "grey", size: 3 },
//   20: { color: "grey", size: 3 },
// };

// Drawing function
export const drawHand = (predictions, ctx) => {
  // Check if we have predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      // Loop through landmarks and draw em
      for (let i = 0; i < landmarks.length; i++) {
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        //   ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
        ctx.arc(x, y, 1, 0, 3 * Math.PI);

        // Set line color
        //   ctx.fillStyle = style[i]["color"];
        ctx.fillStyle = "black";
        ctx.fill();
      }
    });
  }
};
