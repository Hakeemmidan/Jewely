import React from 'react';
import {LinkedInIcon} from '../SVGs/linkedIn_icon';
import {GithubIcon} from '../SVGs/github_icon';

export function Footer() {
  return (
    <div className="footer-container">
      <img
        className="footer-top-edges"
        src={window.footer}
        alt="footer-top-edges"
      />
      <a
        className="footer-documentation-button"
        target="_blank"
        href="https://github.com/Hakeemmidan/Jewely"
      >
        documentation
      </a>
      <div className="personal-links-container">
        <a href="https://github.com/Hakeemmidan" target="_blank">
          <GithubIcon />
        </a>
        &nbsp;
        <a
          href="https://www.linkedin.com/in/abdulhakeem-almidan/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="footer-second-layer">
        <p className="footer-second-layer-created-by">
          Etsy inspired site created by Abdulhakeem Almidan, 2019
        </p>
      </div>
    </div>
  );
}
