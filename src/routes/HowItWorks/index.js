import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'howItWorks',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HowItWorks = require('./containers/HowItWorksContainer').default
      const reducer = require('./modules/howItWorks').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'howItWorks', reducer })

      /*  Return getComponent   */
      cb(null, HowItWorks)

    /* Webpack named bundle   */
    }, 'howItWorks')
  }
})
