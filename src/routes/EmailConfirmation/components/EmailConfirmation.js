import React from 'react';

import Header from '../../Parts/Header';

const svgStyle = {
  enableBackground: 'new 0 0 497.5 497.5',
};

class EmailConfirmation extends React.Component {

  render () {
    return (
      <div>
        <Header isTransparent={false}></Header>

        <div className="container g-py-100">
          <div className="u-shadow-v19 g-max-width-645 g-brd-around g-brd-gray-light-v4 text-center rounded mx-auto g-pa-30 g-pa-50--md">
            <span className="u-icon-v3 u-icon-size--lg g-color-white g-bg-primary rounded-circle g-pa-15 mb-5">
              <svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 497.5 497.5" style={svgStyle} xmlSpace="preserve">
                <g>
                  <path d="M487.75,78.125c-13-13-33-13-46,0l-272,272l-114-113c-13-13-33-13-46,0s-13,33,0,46l137,136c6,6,15,10,23,10s17-4,23-10l295-294C500.75,112.125,500.75,91.125,487.75,78.125z" fill="#fff" />
                </g>
              </svg>
            </span>

            <div className="mb-5">
              <h2 className="mb-4">Your email address is confirmed!</h2>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default EmailConfirmation;
