import React from "react";
import "./intro.css";
import bg from "./tulasi.jpg";
import { Link } from "react-scroll";
import "./typing.css";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Tulasi</span> <br />
          <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
              <li>
                <span>Student</span>
              </li>
              <li>
                <span>Coder</span>
              </li>
              <li>
                <span>Web Developer</span>
              </li>

              <li>
                <span>AIML Enthusiast</span>
              </li>
            </ul>
          </div>
        </span>
        <div className="buttons">
          <Link>
            <button className="btnResume">&ensp;&nbsp;View Resume </button>
          </Link>
          <Link>
            <button className="btnHire">&ensp;&nbsp;Hire Me </button>
          </Link>
        </div>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
