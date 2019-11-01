import React from 'react'
import { LinkedInIcon } from '../SVGs/linkedIn_icon'
import { GithubIcon } from '../SVGs/github_icon'

export function Footer() {
    return (
        <div className="footer-container">
            <img
                className="footer-top-edges"
                src={window.footer}
                alt="footer-top-edges" />
            <div className="personal-links-container">
                <a
                    href="https://github.com/Hakeemmidan"
                    target="_blank">
                    <GithubIcon />
                </a>
                &nbsp;
                <a
                    href="https://www.linkedin.com/in/abdulhakeem-almidan/"
                    target="_blank">
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    )
}