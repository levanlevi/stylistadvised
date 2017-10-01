import React from 'react';
import { Link } from 'react-router';

import transparentImage from '../assets/transparent.png';
import rightImage from '../assets/first.jpg';
import leftImage from '../assets/second.jpg';

import auth from '../../auth/modules/auth';

class HomeView extends React.Component {
  
  constructor(props) {
    super(props);

    this.launchCustomer = this.launchCustomer.bind(this);
    this.launchStylist = this.launchStylist.bind(this);

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //$.HSCore.components.HSCarousel.init('.js-carousel');
  }

  launchCustomer() {
    this.props.router.push('/search');
  }

  launchStylist() {
    this.props.router.push('/signin');
  }

  logout() {
    auth.deauthenticateUser();
  }

  render () {
    return (
      <div>
        <header id="js-header" className="u-header u-header--static">
          <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
            <nav className="js-mega-menu navbar navbar-toggleable-md">
              <div className="container">
                <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="navBar"
                        data-toggle="collapse"
                        data-target="#navBar">
                  <span className="hamburger hamburger--slider">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </span>
                </button>

                <a href="/" className="navbar-brand">
                  Stylist advised me <span className="sr-only">(current)</span>
                </a>

                <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg" id="navBar">
                  <ul className="navbar-nav text-uppercase g-font-weight-600 ml-auto">
                    <li className="nav-item g-mx-40--lg"></li>

                    <li className="nav-item g-mx-20--lg">
                      <a href="#howitworks">How It Works</a>
                    </li>                

                    <li className="nav-item g-ml-20--lg g-mr-0--lg">
                      <a href="#about">About</a>
                    </li>

                    {auth.isUserAuthenticated() && <Link className="nav-item g-mx-20--lg" to='/account/5997eff53fa90651583b83ba'>Account</Link>}
                    {auth.isUserAuthenticated() && <li onClick={this.logout} className="nav-item g-ml-20--lg g-mr-0--lg"><a href="/">Logout</a></li>}
                    {!auth.isUserAuthenticated() && <Link className="nav-item g-mx-20--lg" to='/signin'>Login</Link>}
                    {!auth.isUserAuthenticated() && <Link className="nav-item g-mx-20--lg" to='/signup'>Sign Up</Link>}                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="g-overflow-hidden">
          <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="mask-showcase" data-source="gallery">
            <div id="rev_slider_26_1" className="rev_slider fullscreenbanner tiny_bullet_slider" data-version="5.4.1">
              <ul>
                <li data-index="rs-73" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                  <img id="rev_slidebg_1" src='../../../assets/transparent.png' data-bgcolor='linear-gradient(90deg, rgba(0, 0, 153, 0.5) 0%, rgba(0, 190, 214, 0.6) 100%)' alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                  <div onClick={this.launchCustomer} className="tp-caption rev-btn tp-resizeme"
                      id="slide-73-layer-4"
                      data-x="['left','left','left','left']" data-hoffset="['170','120','70','40']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['150','150','150','110']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="button"
                      data-responsive_offset="on"

                      data-frames='[{"delay":500,"speed":1000,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[30,30,30,30]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[30,30,30,30]">Launch                  
                  </div>

                  <div className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                      id="slide-73-layer-1"
                      data-x="['center','center','center','center']" data-hoffset="['500','500','390','220']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"

                      data-type="image"
                      data-responsive_offset="on"

                      data-frames='[{"delay":400,"speed":750,"sfxcolor":"#2f3b4a","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]">
                    <img src={rightImage} alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['563px','563px','450','281']" width="1200" height="675" data-no-retina />
                  </div>

                  <div className="tp-caption tp-resizeme"
                      id="slide-73-layer-3"
                      data-x="['left','left','left','left']" data-hoffset="['150','100','50','20']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['-177','-177','-177','-157']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="text"
                      data-responsive_offset="on"

                      data-frames='[{"delay":300,"speed":750,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['left','left','left','left']"
                      data-paddingtop="[10,10,10,10]"
                      data-paddingright="[20,20,20,20]"
                      data-paddingbottom="[10,10,10,10]"
                      data-paddingleft="[20,20,20,20]">
                  </div>

                  <div className="tp-caption tp-resizeme"
                      id="slide-73-layer-2"
                      data-x="['left','left','left','left']" data-hoffset="['150','100','50','20']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['-30','-30','-30','-30']"
                      data-fontsize="['70','70','70','50']"
                      data-lineheight="['70','70','70','50']"
                      data-width="['650','650','620','380']"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="text"
                      data-responsive_offset="on"

                      data-frames='[{"delay":200,"speed":750,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['left','left','left','left']"
                      data-paddingtop="[20,20,20,20]"
                      data-paddingright="[20,20,20,20]"
                      data-paddingbottom="[30,30,30,30]"
                      data-paddingleft="[20,20,20,20]">Do you want to find a personal stylist?
                  </div>
                </li>
                <li data-index="rs-74" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                  <img id="rev_slidebg_2" src='../../../assets/transparent.png' data-bgcolor='linear-gradient(120deg, #b7ebf6 0%, rgba(228, 97, 210, 0.7) 100%)' alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                  <div className="tp-caption tp-resizeme rs-parallaxlevel-2"
                      id="slide-74-layer-1"
                      data-x="['center','center','center','center']" data-hoffset="['-500','-500','-390','-220']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"

                      data-type="image"
                      data-responsive_offset="on"

                      data-frames='[{"delay":200,"speed":750,"sfxcolor":"#243949","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]">
                    <img src={leftImage} alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['563px','563px','450px','281px']" width="1200" height="675" data-no-retina />
                  </div>

                  <div onClick={this.launchStylist} className="tp-caption rev-btn tp-resizeme"
                      id="slide-74-layer-4"
                      data-x="['left','left','left','left']" data-hoffset="['880','760','600','330']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['150','150','150','110']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="button"
                      data-responsive_offset="on"

                      data-frames='[{"delay":500,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[30,30,30,30]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[30,30,30,30]">Launch
                  </div>

                  <div className="tp-caption tp-resizeme"
                      id="slide-74-layer-3"
                      data-x="['left','left','left','left']" data-hoffset="['820','700','540','270']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['-177','-177','-177','-157']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="text"
                      data-responsive_offset="on"

                      data-frames='[{"delay":400,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['left','left','left','left']"
                      data-paddingtop="[10,10,10,10]"
                      data-paddingright="[20,20,20,20]"
                      data-paddingbottom="[10,10,10,10]"
                      data-paddingleft="[20,20,20,20]">
                  </div>

                  <div className="tp-caption tp-resizeme"
                      id="slide-74-layer-2"
                      data-x="['left','left','left','left']" data-hoffset="['360','240','110','80']"
                      data-y="['middle','middle','middle','middle']" data-voffset="['-30','-30','-30','-30']"
                      data-fontsize="['70','70','70','50']"
                      data-lineheight="['70','70','70','50']"
                      data-width="['650','650','620','380']"
                      data-height="none"
                      data-whitespace="normal"

                      data-type="text"
                      data-responsive_offset="on"

                      data-frames='[{"delay":300,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                      data-textAlign="['right','right','right','right']"
                      data-paddingtop="[20,20,20,20]"
                      data-paddingright="[20,20,20,20]"
                      data-paddingbottom="[30,30,30,30]"
                      data-paddingleft="[20,20,20,20]">Do you want to help people look better?
                  </div>
                </li>
              </ul>
              <div className="tp-bannertimer"></div>
            </div>
          </div>
        </div>

        <section id="howitworks" className="g-bg-secondary">
          <div className="container g-pt-100 g-pb-40">
            <div className="row justify-content-center g-mb-60">
              <div className="col-lg-7">
                <div className="text-center">
                  <h2 className="h3 g-color-black text-uppercase mb-2">How It Works</h2>
                  <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                </div>
              </div>
            </div>

            <div className="row g-pl-160">
              <div className="col-sm-6 col-lg-2 g-mb-60">
                <div className="text-center">
                  <i className="u-dot-line-v1-2 g-brd-transparent--before g-brd-gray-light-v2--after g-mb-20">
                    <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
                  </i>
                  <h3 className="h5 g-color-black mb-20">Find</h3>
                  <p className="mb-0">Use your job title to search for professionals. Find the right candidate.</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2 g-mb-60">
                <div className="text-center">
                  <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                    <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
                  </i>
                  <h3 className="h5 g-color-black mb-20">Hire</h3>
                  <p className="mb-0">Send them your proposal.</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2 g-mb-60">
                <div className="text-center">
                  <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                    <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
                  </i>
                  <h3 className="h5 g-color-black mb-20">Schedule</h3>
                  <p className="mb-0">Select the right date and time.</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2 g-mb-60">
                <div className="text-center">
                  <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                    <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
                  </i>
                  <h3 className="h5 g-color-black mb-20">Interview</h3>
                  <p className="mb-0">Get in touch and have an interview.</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2 g-mb-60">
                <div className="text-center">
                  <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-transparent--after g-mb-20">
                    <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
                  </i>
                  <h3 className="h5 g-color-black mb-20">Pay</h3>
                  <p className="mb-0">Was it helpful? - Payments happen through paypal! Provide feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeView
