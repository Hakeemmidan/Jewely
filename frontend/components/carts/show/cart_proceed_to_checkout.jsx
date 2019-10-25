import React from 'react'

export function CartProceedToCheckout() {
    return (
        <div className="proceed-to-checkout-modal-div checkout">
                <a
                    href="https://github.com/Hakeemmidan"
                    target="_blank">
                    <img
                        className="personal-account-img-link checkout"
                        src="https://image.flaticon.com/icons/svg/733/733609.svg"
                        alt="Github logo" />
                </a>
                &nbsp;
                <a
                    href="https://www.linkedin.com/in/abdulhakeem-almidan/"
                    target="_blank">
                    <img
                        className="personal-account-img-link checkout linkedin"
                        src="https://image.flaticon.com/icons/svg/25/25320.svg"
                        alt="LinkedIn logo" />
                </a>
        </div>
    )
}