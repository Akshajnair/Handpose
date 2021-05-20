import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import Loader from "./Loader";
import { drawHand } from "./utilities";

export class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      error: "please wait while System is loading",
    };
    this.webcamRef = React.createRef();
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.runHandpose();
  }
  async runHandpose() {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    this.setState({ loader: false });
    //  Loop and detect hands
    setInterval(() => {
      this.detect(net);
    }, 10);
  }
  async detect(net) {
    // Check data is available
    if (
      typeof this.webcamRef.current !== "undefined" &&
      this.webcamRef.current !== null &&
      this.webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = this.webcamRef.current.video;
      const videoWidth = this.webcamRef.current.video.videoWidth;
      const videoHeight = this.webcamRef.current.video.videoHeight;

      // Set video width
      this.webcamRef.current.video.width = videoWidth;
      this.webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      this.canvasRef.current.width = videoWidth;
      this.canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video, true);

      if (hand.length === 0) this.setState({ error: "NO Hand Detected" });
      else this.setState({ error: "" });
      //   console.log(hand);

      // Draw mesh
      const ctx = this.canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  }
  render() {
    if (this.state.loader) return <Loader />;
    else
      return (
        <div>
          <section
            class="u-clearfix u-grey-80 u-section-3"
            id="sec-dc91"
            style={{ height: "100vh" }}
          >
            <Webcam
              class="embed-responsive-item"
              ref={this.webcamRef}
              audio={false}
              mirrored={true}
              videoConstraints={{ facingMode: "user" }}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                top: 0,
                width: "auto",
                height: "100%",
              }}
            />
            <canvas
              ref={this.canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                top: 0,
                width: "auto",
                height: "100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                top: 0,
                width: "auto",
                height: "100%",
              }}
            >
              {this.state.error}
            </div>
          </section>
        </div>
      );
  }
}

export default Camera;
