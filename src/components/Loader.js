import React, { Component } from "react";
import loader from "./assets/loader.svg";

export class Loader extends Component {
  render() {
    return (
      <div>
        <section className="u-clearfix u-section-2" id="sec-0ce1">
          <div className="u-container-style u-expanded-width u-grey-80 u-group u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h1 className="u-align-center u-text u-text-1">
                {" "}
                <img src={loader} alt="" />
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Loader;
