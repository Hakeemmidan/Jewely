import React from 'react'

export class Footer extends React.Component {
    render() {
        return (
            <div class="personal-accounts-links">
                <a
                    href="https://github.com/Hakeemmidan"
                    target="_blank">
                    <img
                        class="personal-account-img-link"
                        src="https://image.flaticon.com/icons/svg/733/733609.svg"
                        alt="Github logo"/>
                </a>

                <a
                    href="https://www.linkedin.com/in/abdulhakeem-almidan/"
                    target="_blank">
                    <img
                        class="personal-account-img-link"
                        src="https://image.flaticon.com/icons/svg/25/25320.svg"
                        alt="LinkedIn logo"/>
                </a>
            </div>
        )
    }
}