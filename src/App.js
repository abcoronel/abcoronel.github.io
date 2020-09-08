import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./assets/img/navbar-logo.jpg";
import tech_tower from "./assets/img/tech-tower.jpg";
import cssi from "./assets/img/google-cssi.png";
import gwc from "./assets/img/gwc.jpg";
import best_buddies from "./assets/img/best_buddies.jpg";
import soh from "./assets/img/soh.jpg";
import harps from "./assets/img/harps.jpg";
import nursingHome from "./assets/img/nursinghome-harp.JPG";
import student from "./assets/img/student-port.jpg";
import fastlane from "./assets/img/fastlane.jpeg";
import doggo from "./assets/img/doggo-logo.jpg";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          {/* <a className="navbar-brand js-scroll-trigger" href="#top">
            ~~~
          </a> */}
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#home">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#designs">
                  Designs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#music">
                  Music
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="masthead">
        <div class="container">
          <div className="intro-text">
            <div className="intro-lead-in">Hello!</div>
            <div className="intro-heading text-uppercase">I'm Ana Belén</div>
          </div>
          {/* <div class="masthead-subheading">Hello, </div>
          <div class="masthead-heading text-uppercase">I'm Ana Belen</div> */}
        </div>
      </header>

      <section class="page-section" id="home">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase"> ~~ Resume ~~ </h2>
            <h3 class="section-subheading text-muted"> My journey. </h3>
          </div>

          <div class="resume-stuff">
            <div class="row">
              <div class="column">
                <img
                  src={tech_tower}
                  style={{
                    // width: 350,
                    // height: 400,
                    // marginRight: 10,
                    // marginLeft: 20,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Georgia Tech"
                />
              </div>
              <div class="column">
                <div class="Title">Georgia Instittute of Technology</div>
                <div class="subtitle">B.S. in Computer Science 2019-22 </div>
                <div class="paragraph">
                  I am a ramblin wreck from georgia tech{" "}
                </div>
              </div>
              <div class="column">
                <img
                  src={cssi}
                  style={{
                    // width: 450,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Google CSSI"
                />
              </div>
              <div class="column">
                {" "}
                <div class="Title">Google CSSI</div>
                <div class="subtitle">
                  Computer Science Summer Institute 2019{" "}
                </div>
                <div class="paragraph">
                  CSSI is an intensive and rigorous educational program that
                  developed my technical skills in JavaScript, Python, HTML,
                  CSS, and AppEngine.{" "}
                </div>
              </div>

              <div class="column">
                <img
                  src={gwc}
                  style={{
                    // width: 350,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Girls Who Code"
                />
              </div>

              <div class="column">
                {" "}
                <div class="Title">Girls Who Code</div>
                <div class="subtitle">Member since Aug 2019 </div>
                <div class="paragraph">I am a part of GWCs.</div>
              </div>

              <div class="column">
                <img
                  src={best_buddies}
                  style={{
                    // width: 350,
                    // height: 340,
                    // marginRight: 20,
                    // marginLeft: 20,
                    // // marginBottom: 200,
                    // // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Best Buddies"
                />
              </div>
              <div class="column">
                <div class="Title">Best Buddies</div>
                <div class="subtitle">Treasurer since May 2020 </div>{" "}
                <div class="paragraph">I am the treasurer.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section bg-light" id="designs">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase"> ~~ Designs ~~ </h2>
            <h3 class="section-subheading text-muted">
              I love to create, build, and design.
            </h3>
          </div>
          <div class="resume-stuff">
            <div class="row">
              <div class="column">
                <img
                  src={fastlane}
                  style={{
                    // width: 350,
                    // height: 400,
                    // marginRight: 10,
                    // marginLeft: 20,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Georgia Tech"
                />
              </div>
              <div class="column">
                <div class="Title">FASTLANE</div>
                <div class="subtitle">Present </div>
                <div class="paragraph">FasLane is a food service app </div>
              </div>

              <div class="column">
                <img
                  src={student}
                  style={{
                    // width: 350,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Girls Who Code"
                />
              </div>

              <div class="column">
                {" "}
                <div class="Title">
                  <a
                    className="title-links"
                    href="https://abcoronel.github.io/Sara/"
                  >
                    Website for Student Portfolio
                  </a>
                </div>
                <div class="subtitle"> Jan 2020 </div>
                <div class="paragraph">I am a part of GWCs.</div>
              </div>
              <div class="column">
                <img
                  src={doggo}
                  style={{
                    // width: 450,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Doggo Logo"
                />
              </div>
              <div class="column">
                {" "}
                <div class="Title">
                  <a className="title-links" href="http://doggo-0.appspot.com">
                    Doggo
                  </a>
                </div>
                <div class="subtitle">Summer 2019</div>
                <div class="paragraph">
                  During CSSI, my team and I developed DogGo, an app that allows
                  pet owners match his/her dog with other dogs for play dates.
                </div>
              </div>

              {/* <div class="column">
                <img
                  src={best_buddies}
                  style={{
                    // width: 350,
                    // height: 340,
                    // marginRight: 20,
                    // marginLeft: 20,
                    // // marginBottom: 200,
                    // // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Best Buddies"
                />
              </div>
              <div class="column">
                <div class="Title">Best Buddies</div>
                <div class="subtitle">Treasurer since May 2020 </div>{" "}
                <div class="paragraph">I am the treasurer.</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" id="music">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase"> ~~ Music ~~ </h2>
            <h3 class="section-subheading text-muted">
              One of my passions is playing the Paraguayan Harp.
            </h3>
          </div>
          <div class="resume-stuff">
            <div class="row">
              <div class="column">
                <img
                  src={harps}
                  style={{
                    // width: 450,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Harps"
                />
              </div>
              <div class="column">
                {" "}
                <div class="Title">Ritmo de la Noche</div>
                <div class="subtitle">May 2019 </div>
                <div class="paragraph">
                  I performed at this concert as the opening act.{" "}
                </div>
              </div>
              <div class="column">
                <img
                  src={soh}
                  style={{
                    // width: 350,
                    // height: 400,
                    // marginRight: 10,
                    // marginLeft: 20,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Sounds of heaven"
                />
                {/* <img src={Logo} alt="logo" /> */}
              </div>
              <div class="column">
                <div class="Title">
                  {" "}
                  <a
                    className="title-links"
                    href="https://youtu.be/wSDrPeCJhds"
                  >
                    Sounds of Heaven
                  </a>
                </div>

                <div class="subtitle">Dec 2018 </div>
                <div class="paragraph">
                  I performed among the 12 only Paraguayan harpists in the U.S.
                  at the Kravis Center in West Palm Beach.{" "}
                </div>
              </div>

              <div class="column">
                <img
                  src={nursingHome}
                  style={{
                    // width: 350,
                    // height: 200,
                    // marginRight: 10,
                    // marginBottom: 200,
                    // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Playing at the Nursing Home"
                />
              </div>

              <div class="column">
                {" "}
                <div class="Title">Nursing Home</div>
                <div class="subtitle">2015-Present </div>
                <div class="paragraph">
                  I play the Paraguayan harp at nursing homes for the elderly.
                </div>
              </div>

              {/* <div class="column">
                <img
                  src={best_buddies}
                  style={{
                    // width: 350,
                    // height: 340,
                    // marginRight: 20,
                    // marginLeft: 20,
                    // // marginBottom: 200,
                    // // marginTop: 100,
                    borderRadius: 10,
                    maxWidth: 300,
                    alignItems: "center",
                  }}
                  alt="Best Buddies"
                />
              </div>
              <div class="column">
                <div class="Title">Best Buddies</div>
                <div class="subtitle">Treasurer since May 2020 </div>{" "}
                <div class="paragraph">I am the treasurer.</div>
              </div> */}
            </div>
          </div>
        </div>
        <h3 class="section-subheading text-muted">
          I perform at concerts and private parties. Inquires are welcome.
        </h3>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">
                Copyright © Ana Belen's Portfolio
              </span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                {/* <footer class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-left">
              Copyright © Ana Belen's Portfolio
            </div>
            <div class="col-lg-4 my-3 my-lg-0"> */}
                {/* <a class="btn btn-dark btn-social mx-2" href="#!">
                <i class="fa fa-twitter"></i>
              </a> */}
                {/* <a class="btn btn-dark btn-social mx-2" href="#!">
                <i class="fa fa-facebook-f"></i>
              </a> */}

                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/anabelencoronel">
                    <i class="fa fa-user"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
