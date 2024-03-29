import React from "react";
import "./skills.css";

function About() {
  return (
    <>
      <section id="about">
        <span className="aboutTitle">About</span>
        <br />
        <span className="aboutDesc">
          <address>
            I am currently pursuing a Bachelor's in Computer Science and
            Engineering(Artificial Intelligence and Machine Learning)from the
            Chaitanya Bharathi Institute of Technology, also known as
            <a href="https://www.cbit.ac.in/"> CBIT, Hyderabad</a>. I completed
            my Intermediate from&nbsp;
            <a href="https://www.facebook.com/pages/race%20iit%20and%20medical%20academy%20kodada/763037590550696/">
              Race IIT and Medical Academy, Kodad, Suryapet
            </a>
            &nbsp;and I have done my Xth standard from&nbsp;
            <a href="https://www.facebook.com/VijayaVidyaMandirHighSchool/videos/vijaya-vidya-mandir-high-schoolhuzurnagar/1220735424769107/">
              Vijaya Vidya Mandir High School, Huzurnagar,Suryapet
            </a>
            .
          </address>

          <div className="col-lg-6">
            <div className="interactive-icons">
              <ul className="icon">
                <div className="icon" title="Birthday">
                  <strong> Birthday&#127874;:&nbsp;</strong>
                  June 12,2003
                </div>
                <br />
                <div className="icon">
                  <strong>Present College&#x1F3EB;:&nbsp;</strong>CBIT
                </div>
                <br />
                <div className="icon">
                  <strong>Phone Number&#x1F4DE;:&nbsp;</strong>+91 6281427958{" "}
                </div>
                <br />
                <div className="icon" title="Location: City, State">
                  <strong>City&#127758;:&nbsp;</strong>Hyderabad,Telangana
                </div>
                <br />
              </ul>
              <div className="col-lg-6">
                <ul>
                  <div>
                    <strong>Age&#x231B;:&nbsp;</strong>20
                  </div>
                  <br />
                  <div>
                    <strong>Degree&#x1F393;:&nbsp;</strong> Bachelor of
                    Engineering
                  </div>
                  <br />
                  <div>
                    <strong>Email📧:&nbsp;</strong>tulasivullendula@gmail.com
                  </div>
                  <br />
                  <div>
                    <strong>Profession &#x1F4BC;:&nbsp;</strong>Student
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <span className="abtMe">
            I am very enthusiastic about coding and learning new things.I
            prioritise perfection over completing tasks as quickly as possible.
          </span>
        </span>
      </section>
      <section id="about">
        <span className="skillTitle">Skills</span>

        <div className="row col-lg-6">
          <ul>
            <li>C</li>
            <br />
            <li>PYTHON</li>
            <br />
            <li>HTML</li>
            <br />
            <li>CSS</li>
            <br />
            <li>JAVASCRIPT</li>
            <br />
          </ul>

          <div className="col-lg-6">
            <ul>
              <li>BOOTSTRAP</li>
              <br />
              <li>Database Management System</li>
              <br />
              <li>Data Structures and Algorithms</li>
              <br />
              <li>Fundamentals of Data Science</li>
              <br />
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
