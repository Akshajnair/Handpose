import React, { Component } from "react";
import handimg from "./assets/hand_shake.svg";
import github from "./assets/github.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <section
          className="u-align-center u-clearfix u-palette-5-light-3 u-section-1"
          id="carousel_bf01"
        >
          <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
            <div className="u-preserve-proportions u-shape u-shape-svg u-text-grey-80 u-shape-1"></div>
            <div className="u-expanded-width-sm u-expanded-width-xs u-grey-80 u-shape u-shape-rectangle u-shape-2"></div>
            <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-35 u-white u-layout-cell-1">
                    <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
                      <img
                        src={handimg}
                        alt=""
                        className="u-expanded-width u-image u-image-contain u-image-default u-image-1"
                        data-image-width="1080"
                        data-image-height="1080"
                      />
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-grey-80 u-layout-cell u-size-25 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <h3 className="u-text u-text-1">Hand Recognition</h3>
                      <p className="u-text u-text-2">
                        This is a Tensor flow based hand recognition
                        application.
                        <br />
                        Author:{" "}
                        <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>
                          Akshaj Nair
                        </span>
                      </p>
                      <div className="u-social-icons u-spacing-10 u-social-icons-1">
                        <a
                          className="u-social-url"
                          title="GitHub | Akshaj Nair"
                          target="_blank"
                          href="https://github.com/Akshajnair"
                        >
                          <span className="u-icon u-icon-circle u-social-facebook u-social-icon u-text-white u-icon-1">
                            <img src={github} alt="" />
                          </span>
                        </a>
                      </div>
                      <p className="u-text u-text-3">
                        click "allow camera access" to give permission. Your
                        image and video will NOT be recorded.
                        <br />
                      </p>
                      <a
                        href={window.location.origin+"/camera"}
                        className="u-active-palette-2-light-3 u-border-2 u-border-white u-btn u-btn-round u-button-style u-hover-grey-80 u-radius-50 u-text-black u-text-hover-white u-white u-btn-1"
                      >
                        Allow camera access
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
