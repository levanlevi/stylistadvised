import React from 'react';

class PageNotFound extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <main className="g-min-height-100vh g-flex-centered g-pa-15">
          <div className="text-center g-flex-centered-item g-position-rel g-pb-15">
            <div className="g-font-size-180 g-font-size-240--sm g-line-height-1 g-font-weight-600er g-color-gray-light-v4">404</div>
      
            <div className="g-absolute-centered">
              <h1 className="g-color-black g-mt-minus-8 mb-0">404&nbsp;Not&nbsp;Found</h1>
      
              <hr className="g-brd-gray-light-v3 g-my-15"/>
      
              <p className="g-font-size-18 mb-0"><a href="/" className="g-color-black g-color-primary--hover g-text-no-underline--hover">← Home Page</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default PageNotFound;
