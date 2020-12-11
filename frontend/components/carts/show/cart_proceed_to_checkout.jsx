import React from 'react';
import {GithubIcon} from '../../SVGs/github_icon';
import {LinkedInIcon} from '../../SVGs/linkedIn_icon';

export function CartProceedToCheckout() {
  return (
    <div className="proceed-to-checkout-modal-div checkout">
      <a href="https://github.com/Hakeemmidan">
        <GithubIcon className={'personal-account-img-link checkout'} />
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/abdulhakeem-almidan/">
        <LinkedInIcon className={'personal-account-img-link checkout'} />
      </a>
    </div>
  );
}
