import React from 'react';
import '../styles/Team.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const Team = () => {
  return (
    <section className="team-section" id='team'>
      <div className="inner-width">
        <h1 style={{ fontSize: '48px', color: '#01bf71', textAlign: 'center' }}>Our Team</h1>      
        <div className="pers">
          <article className="pe">
            <img
              src="https://irrecordings.com/WitJab/assets/img/team/manas.png"
              alt="Manas Nikte"
            />
            <div className="p-name">Manas Nikte</div>
            <div className="p-des">Founder & CEO</div>
            <div className="p-sm">
            <a href="https://www.instagram.com/manas.nikte/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/ManasNikte">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/manasnikte">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://manasnikte.netlify.app">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            </div>
          </article>

          <article className="pe">
            <img
              src="https://irrecordings.com/WitJab/assets/img/team/leena.jpeg"
              alt="Leena Katkar"
            />
            <div className="p-name">Leena Katkar</div>
            <div className="p-des">PHP Developer</div>
            <div className="p-sm">
            <a href="https://github.com/fhisheruser">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            </div>
          </article>

          {/* <article className="pe">
            <img
              src="https://pbs.twimg.com/profile_images/969390093411774465/uJ5LaoyJ_400x400.jpg"
              alt="Darrel Wilson"
            />
            <div className="p-name">Darrel Wilson</div>
            <div className="p-des">Director</div>
            <div className="p-sm">
              <a href="#">
                <i className="fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-github"></i>
              </a>
              <a href="#">
                <i className="fa-external-link-alt"></i>
              </a>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
