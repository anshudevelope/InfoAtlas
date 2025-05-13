import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import footerContact from '../../data/footerapi.json'

const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink to="/" target="_blank">
                  InfoAtlas
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="https://en.wikipedia.org/wiki/World" target='_blank'>About World</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/anshu-maurya-606519283/"
                    target="_blank"
                  >
                    LinkedIn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/anshudevelope"
                    target="_blank"
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
