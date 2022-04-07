
import { useEffect, useState } from 'react';
// import Slider from '@mui/material/Slider';
// import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
// import Web3 from 'web3';
import { makeStyles } from '@mui/styles';
import Gallery from "./components/SwiperCarousel";
import SingleGallery from './components/SingleGallery';
import FAQList from './components/FaqAccrodian';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';
import Snowing from "./components/Snowing";
import HomeTeam from "./HomeTeam";

const useStyles = makeStyles({
  aa: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(0deg, #7409A8 0%, #C810BC 100%)',
    color: 'white',
  },
  bb: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #541113 0%, #4729F2 100%)',
    color: 'white',
  },
  cc: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #900EB6 0%, #29D3F2 100%)',
    color: 'white'
  },
  dd: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #65019C 0%, #F27829 100%)',
    color: 'white'
  },
  ee: {
    width: "100% !important",
    height: "70px",
    borderRadius: "10px !important",
    background: 'linear-gradient(180deg, #3729F2 0%, #CB00FD 100%)',
    color: 'white !important',
    fontFamily: " 'Aldrich' , 'Sans-serif' ",
    fontWeight: "600",
    fontSize: "25px !important"
  },
  ff: {
    width: "100% !important",
    height: "70px",
    background: 'linear-gradient(180deg, #7C00FF 0%, #F229F0 100%)',
    textDecoration: "none",
    color: 'white',
    borderRadius: "20px"
  }
});

const StaticMenus = () => 
{
  const homeSection = useScrollSection('home');
  const RoadmapSection = useScrollSection('Roadmap');
  const stakeSection = useScrollSection('stake');
  const mintSection = useScrollSection('mint');
  const faqsSection = useScrollSection('faqs');
  const teamSection = useScrollSection('team');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onClickShowMobileMenu = () => {
    if (showMobileMenu) {
      document.getElementById("qodef-mobile-header-navigation").style.display = "block";
    }
    else {
      document.getElementById("qodef-mobile-header-navigation").style.display = "none";
    }
    setShowMobileMenu(!showMobileMenu);
  }

  const onMOverIcon = (buttonId) => {
    document.getElementById(buttonId).classList.add("animated", "spinner", "duration1", "infinite");
  }

  const onMLeaveIcon = (buttonId) => {
    document.getElementById(buttonId).classList.remove("animated", "spinner", "duration1", "infinite");
  }

  return (
    <>
       <div className="header" id="qodef-page-header">
        <div id="qodef-page-header-inner" className=" qodef-skin--light">
          <span className="qodef-header-logo-link " >
            <img width="1000" height="150" src="./logo.png" className="qodef-header-logo-image qodef--main" alt="logo main"  />
          </span>
          <nav className="qodef-header-navigation" >
            <ul id="menu-primary-menu-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={homeSection.onClick} selected={homeSection.selected}
              >
                <span className="qodef-menu-item-text">Home</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={RoadmapSection.onClick} selected={RoadmapSection.selected}
              >
                <span className="qodef-menu-item-text">Roadmap</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={stakeSection.onClick} selected={stakeSection.selected}
              >
                <span className="qodef-menu-item-text">Stake(Coming Soon)</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={mintSection.onClick} selected={mintSection.selected}
              >
                <span className="qodef-menu-item-text">Mint</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={teamSection.onClick} selected={teamSection.selected}
              >
                <span className="qodef-menu-item-text">Team</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={faqsSection.onClick} selected={faqsSection.selected}
              >
                <span className="qodef-menu-item-text">FAQ’s</span>
              </li>
            </ul>
          </nav>
          <nav className="qodef-header-navigation" >
            <ul id="menu-primary-menu-2" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "                
              >
                <span>Connect Wallet</span>
              </li>
            </ul>
          </nav>              
        </div>
      </div>
      <div className="header" id="qodef_page_header_for_sticky">
        <div id="qodef-page-header-inner_for_sticky" className=" qodef-skin--light">
          <span className="qodef-header-logo-link " >
            <img width="1000" height="150" src="./logo.png" className="qodef-header-logo-image qodef--main" alt="logo main" 
              onClick={homeSection.onClick} selected={homeSection.selected}
            />
          </span>
          <nav className="qodef-header-navigation" >
            <ul id="menu-primary-menu-1_for_sticky" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={homeSection.onClick} selected={homeSection.selected}
              >
                <span className="qodef-menu-item-text">Home</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={RoadmapSection.onClick} selected={RoadmapSection.selected}
              >
                <span className="qodef-menu-item-text">Roadmap</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={stakeSection.onClick} selected={stakeSection.selected}
              >
                <span className="qodef-menu-item-text">Stake(Coming Soon)</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={mintSection.onClick} selected={mintSection.selected}
              >
                <span className="qodef-menu-item-text">Mint</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={teamSection.onClick} selected={teamSection.selected}
              >
                <span className="qodef-menu-item-text">Team</span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item "
                onClick={faqsSection.onClick} selected={faqsSection.selected}
              >
                <span className="qodef-menu-item-text">FAQ’s</span>
              </li>
            </ul>
          </nav>          
        </div>
      </div>

      <div className='header' id="qodef-page-mobile-header">
        <div id="qodef-page-mobile-header-inner" className="">
          <a className="qodef-mobile-header-logo-link qodef-height--not-set qodef-source--image" href="#" rel="home">
            <img width="1000" height="150" src="./logo.png" className="qodef-header-logo-image qodef--main" alt="logo main" sizes="(max-width: 1000px) 100vw, 1000px" data-xblocker="passed" style={{ visibility: "visible" }} />
          </a>
          <a href="javascript:void(0)" onClick={() => onClickShowMobileMenu()} className="qodef-opener-icon qodef-m qodef-source--predefined qodef-mobile-header-opener">

          {/* <a href="javascript:void(0)" className="qodef-opener-icon qodef-m qodef-source--predefined qodef-mobile-header-opener"> */}
            <span className="qodef-m-icon qodef--open">
              <span className="qodef-m-lines">
                <span className="qodef-m-line qodef--1"></span>
                <span className="qodef-m-line qodef--2"></span>
              </span>
            </span>
            <span className="qodef-m-icon qodef--close">
              <span className="qodef-m-lines">
                <span className="qodef-m-line qodef--1"></span>
                <span className="qodef-m-line qodef--2"></span>
              </span>
            </span>
          </a>
          <nav className="qodef-mobile-header-navigation" id="qodef-mobile-header-navigation" role="navigation" aria-label="Mobile Menu">
            <ul id="menu-primary-menu-4" className="qodef-content-grid">
              <li className="menu-item menu-item-type-custom "
                onClick={homeSection.onClick} selected={homeSection.selected}
              >
                <span className="qodef-menu-item-text">Home</span>
              </li>
              <li className="menu-item menu-item-type-custom "
                onClick={RoadmapSection.onClick} selected={RoadmapSection.selected}
              >
                <span className="qodef-menu-item-text">Roadmap</span>
              </li>
              <li className="menu-item menu-item-type-custom "
                onClick={stakeSection.onClick} selected={stakeSection.selected}
              >
                <span className="qodef-menu-item-text">Stake(Coming Soon)</span>
              </li>
              <li className="menu-item menu-item-type-custom "
                onClick={mintSection.onClick} selected={mintSection.selected}
              >
                <span className="qodef-menu-item-text">Mint</span>
              </li>
              <li className="menu-item menu-item-type-custom "
                onClick={teamSection.onClick} selected={teamSection.selected}
              >
                <span className="qodef-menu-item-text">Team</span>
              </li>
              <li className="menu-item menu-item-type-custom "
                onClick={faqsSection.onClick} selected={faqsSection.selected}
              >
                <span className="qodef-menu-item-text">FAQ’s</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

const StaticBackToTop = () =>
{  
  const topSection = useScrollSection('home');
  
  return (
    
    <div id="qodef-back-to-top" className="qodef--stamp-btt qodef--light qodef--on"
      onClick={topSection.onClick} selected={topSection.selected}
    >
          <span className="qodef-back-to-top-icon">
            <span className="qodef-shortcode qodef-m qodef-stamp qodef--appear qodef--init" data-appearing-delay="0">
              <span className="qodef-m-text rotating" data-count="24">
                <span className="qodef-m-character" style={{ transform: "rotate(-90deg) translateZ(0px)", transitionDelay: "0ms" }}>B</span>
                <span className="qodef-m-character" style={{ transform: "rotate(-75deg) translateZ(0px)", transitionDelay: "0ms" }}>a</span>
                <span className="qodef-m-character" style={{ transform: "rotate(-60deg) translateZ(0px)", transitionDelay: "0ms" }}>c</span>
                <span className="qodef-m-character" style={{ transform: "rotate(-45deg) translateZ(0px)", transitionDelay: "0ms" }}>k</span>
                <span className="qodef-m-character" style={{ transform: "rotate(-30deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
                <span className="qodef-m-character" style={{ transform: "rotate(-15deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
                <span className="qodef-m-character" style={{ transform: "rotate(0deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
                <span className="qodef-m-character" style={{ transform: "rotate(15deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
                <span className="qodef-m-character" style={{ transform: "rotate(30deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
                <span className="qodef-m-character" style={{ transform: "rotate(45deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
                <span className="qodef-m-character" style={{ transform: "rotate(60deg) translateZ(0px)", transitionDelay: "0ms" }}>p</span>
                <span className="qodef-m-character" style={{ transform: "rotate(75deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
                <span className="qodef-m-character" style={{ transform: "rotate(90deg) translateZ(0px)", transitionDelay: "0ms" }}>B</span>
                <span className="qodef-m-character" style={{ transform: "rotate(105deg) translateZ(0px)", transitionDelay: "0ms" }}>a</span>
                <span className="qodef-m-character" style={{ transform: "rotate(120deg) translateZ(0px)", transitionDelay: "0ms" }}>c</span>
                <span className="qodef-m-character" style={{ transform: "rotate(135deg) translateZ(0px)", transitionDelay: "0ms" }}>k</span>
                <span className="qodef-m-character" style={{ transform: "rotate(150deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
                <span className="qodef-m-character" style={{ transform: "rotate(165deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
                <span className="qodef-m-character" style={{ transform: "rotate(180deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
                <span className="qodef-m-character" style={{ transform: "rotate(195deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
                <span className="qodef-m-character" style={{ transform: "rotate(210deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
                <span className="qodef-m-character" style={{ transform: "rotate(225deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
                <span className="qodef-m-character" style={{ transform: "rotate(240deg) translateZ(0px)", transitionDelay: "0ms" }}>p</span>
                <span className="qodef-m-character" style={{ transform: "rotate(255deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
              </span>
              <span className="qodef-m-centred-icon qodef-icon-arrow-up">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="18" viewBox="0 0 28 18" >
                  <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
                  <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
                </svg>
              </span>
            </span>
          </span>
        </div>
  )
}

function App() {

  const classes = useStyles();
  const mintingStartTime = (new Date("2022/04/26 00:00:00")).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [show2TopButton, setShow2TopButton] = useState(false);
  const [heightOfSnowing, setHeightOfSnowing] = useState(300);

  const getLeftDuration = () => {

    // var currentTime = Date.now();
    var diff = mintingStartTime - currentTime;
    diff = diff / 1000;

    var day = 0;
    var hr = 0;
    var min = 0;
    var sec = 0;

    if (diff > 0) {
      day = Math.floor(diff / 3600 / 24);
      hr = Math.floor((diff / 3600) - day * 24);
      min = Math.floor((diff / 60) - day * 24 * 60 - hr * 60);
      sec = Math.floor(diff - 24 * 3600 * day - 3600 * hr - 60 * min);
    } else if (!isNaN(diff) && diff <= 0) {
      // update banner list when this item's auction time is ended
      // getNftBannerList(5)(dispatch);
    }

    const days = () => {
      return day;
    }
    const hours = () => {
      return hr;
    }
    const minutes = () => {
      return min;
    }
    const seconds = () => {
      return sec;
    }
    return { hours, minutes, seconds, days }
  }

  useEffect(() => {

    setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    window.onscroll = function () { myFunction() };
    window.onresize = function () { resizeSnowing() }

    // Get the header
    var header = document.getElementById("qodef_page_header_for_sticky");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
      if (window.pageYOffset > 450) {
        setShow2TopButton(true);
      } else {
        setShow2TopButton(false);
      }
      var heightOfVideo = document.getElementById("video_element").clientHeight;
      var heightOfParticle = document.getElementById("tsparticles").clientHeight;
      console.log("heightOfVideo = ", heightOfVideo, 
        "heightOfParticle = ", heightOfParticle,
        "heightOfSnowing = ", heightOfSnowing
      );
    }
    function resizeSnowing() {
      var heightOfVideo = document.getElementById("video_element").clientHeight;
      if(heightOfVideo>0) setHeightOfSnowing(heightOfVideo);
    }    
    var heightOfVideo = document.getElementById("video_element").clientHeight;
    if(heightOfVideo>0) setHeightOfSnowing(heightOfVideo);
  }, [])

  const onMOverButton = (buttonId) => {
    document.getElementById(buttonId).classList.add("animated", "pulse", "duration2", "infinite");
  }

  const onMLeaveButton = (buttonId) => {
    document.getElementById(buttonId).classList.remove("animated", "pulse", "duration2", "infinite");
  }

  const onMOverMintButton = (buttonId) => {
    document.getElementById(buttonId).classList.add( "animated", "buzzOut", "duration1", "infinite");
  }

  const onMLeaveMintButton = (buttonId) => {
    document.getElementById(buttonId).classList.remove( "animated", "buzzOut", "duration1", "infinite");
  }

  return (
    <>
      <ScrollingProvider  offset={-200} >

        <StaticMenus />

        <Section id="home" style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <div className="elementor-background-video-container elementor-hidden-phone" >
            <video className="elementor-background-video-hosted elementor-html5-video" 
              id="video_element"
              autoPlay={true} muted playsInline="" loop={true} src="./response.mp4" style={{ width: "100%" }} 
            ></video>
          </div>
          <Snowing height={heightOfSnowing} />
          <div className="elementor-column-gap-default">

            <div className="elementor-element elementor-widget-heading" >

              <h3 className="elementor-heading-title ">A Collection Of 10,000 Phoenix Knights</h3>
            </div>
            <div className="elementor-element elementor-widget-eael-creative-button" >
              <a href='https://discord.gg/bwk8NqE6'>
              <div className="eael-creative-button-wrapper" id="hh" onMouseOver={() => onMOverButton("hh")} onMouseLeave={() => onMLeaveButton("hh")}>
                <div className="creative-button-inner">
                    <span className="eael-creative-button-icon-left"><i className="fab fa-discord"></i>&nbsp;&nbsp;</span>
                    <span className="cretive-button-text" style={{ textDecoration: "none" }}>Get Whitelisted</span>                  
                </div>
              </div>
              </a>
            </div>
          </div>

          <div style={{ padding: "20px", background: "#7002da", zIndex:"20" }} >
            <Gallery />
          </div>

          <div className='gradient_buttons'  >
            <div className='gradient_button' id="aa" onMouseOver={() => onMOverButton("aa")} onMouseLeave={() => onMLeaveButton("aa")} >
              <Button className={classes.aa}  >WL MINT 3 AVAX</Button>
            </div>
            <div className='gradient_button' id="bb" onMouseOver={() => onMOverButton("bb")} onMouseLeave={() => onMLeaveButton("bb")} >
              <Button className={classes.bb}  >PUBLIC MINT 5 AVAX</Button>
            </div>
            <div className='gradient_button' id="dd" onMouseOver={() => onMOverButton("dd")} onMouseLeave={() => onMLeaveButton("dd")} >
              <Button className={classes.dd}  >MINT DATE TBA</Button>
            </div>
          </div>

          <div className="elementor-divider" style={{ width: "100%" }} >
            <span className="elementor-divider-separator">
            </span>
          </div>

          <div className="join_discord_explain"   >
            <span style={{ color: "#ffffff" }} >
            Backed by the Phoenix community capital, the Phoenix knights is a collection of 10,000 unique immortal explorers. Our community-driven NFT project is aimed at further developing a brand that aims to represent the values of our community with unique artworks. Phoenix knights will come in a joyful range of colors, attributes and sizes. 
            </span>
          </div>

          <div className='join_discord_button_wrapper' >
            <div className='join_discord_button' id="ii" onMouseOver={() => onMOverButton("ii")} onMouseLeave={() => onMLeaveButton("ii")} style={{ paddingTop: "0px", marginBottom: "60px" }} >
            <a href='https://discord.gg/bwk8NqE6'>
              <Button className={classes.ff}>
                  <span className="eael-creative-button-icon-left"><i className="fab fa-discord"></i>&nbsp;&nbsp;</span>
                  <span className="cretive-button-text" style={{ textDecoration: "none" }}>Join Discord</span>
              </Button>
                </a>
            </div>
          </div>
        </Section>

        <Section id="Roadmap">
          <div className='timeline_title' >OUR ROADMAP</div>

          <div className="twae-vertical twae-wrapper twae-one-sided-wrapper">
            <div className="twae-timeline-centered twae-timeline-sm twae-line twae-one-sided-timeline">
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">Phase 1</span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="fas fa-brain"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">NFT Art Design</span>

                    <div className="twae-description">
                      <p>Art Generation and Branding with emphasis on Art.
                        <br></br>
                        Launch Website, Twitter, Discord, Community Development.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">Phase 2 </span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="far fa-object-group"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">Mint Launch</span>

                    <div className="twae-description">
                      <p>Successful First Mint ( @ 3 AVAX For Whitelisted &amp;&nbsp; 5 AVAX Public Sale).
                        <br></br>Secondary Market Listing – Spectrum, Rarity Sniper.
                      </p></div>
                  </div>
                </div>
              </article>
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">Perks &amp; Benefits</span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="fa fa-rocket"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">After Successful Mint</span>

                    <div className="twae-description">
                      <p>
                      Launch Staking feature<br></br>
                      Launch Native token and Airdrop to NFT stakers<br></br>
                      Verified NFT Stakers will get access to the Following Benefits:<br></br>
                      Get auto whitelisted on all upcoming Project<br></br>
                      Exclusive Contests and Giveaways to our community.<br></br>
                      Whitelist access to further growth opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">Phase 3</span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="fa fa-brush"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">Whitelist Presale and Public sale for Native token </span>

                    <div className="twae-description">
                      <p>
                      Native Token Whitelist Presale<br></br>
                      Native token Public Presale <br></br>
                      List Native token List in CMC, CG, swapsicle.io &amp; CEX, and DEX
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">Phase 4</span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="fa fa-cube"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">NFT community determines future projects</span>

                    <div className="twae-description">
                      <p>
                      native tokens or any other ideas that benefit the community in long term.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="twae-timeline-entry twae-right-aligned">
                <div className="twae-timeline-entry-inner">
                  <div className="twae-label-extra-label">
                    <span className="twae-label">What's next?</span>
                    <span className="twae-extra-label"></span>
                  </div>
                  <div className="twae-icon"><i aria-hidden="true" className="fa fa-infinity"></i></div>
                  <div className="twae-data-container ">
                    <span className="twae-title">We have something amazing coming up Soon. Timeline 2.0 Will be here</span>

                    <div className="twae-description">
                      <p>
                      Everything will be done with voting from the community. We are here and we are here for the long-term with our ever growing community.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="elementor-divider" >
            <span className="elementor-divider-separator">
            </span>
          </div>

        </Section>

        <Section id="stake" style={{ marginTop: "100px", marginBottom: "30px" }}>
          <div className='sneek_title' >STAKE</div>

          <div className='sneek_content ' style={{ marginLeft: "100px", marginRight: "100px" }} >
            <div className='colMD7' >
              <div className='sneek_subtitle'>
                <h4>COMING SOON</h4>
              </div>             
            </div>
            <div className='colMD5' >
              <SingleGallery />
            </div>
          </div>

          <div className="elementor-divider" >
            <span className="elementor-divider-separator">
            </span>
          </div>
        </Section>

        <Section id="team" style={{ marginTop: "100px", marginBottom: "-30px" }}>
          <div className='mintingStarttime_title'>OUR TEAM</div>

          <HomeTeam />

          <div className="elementor-divider" >
            <span className="elementor-divider-separator">
            </span>
          </div>
        </Section>

        <Section id="faqs" >
          <div className='mintingStarttime_title' style={{ marginTop: "50px", marginBottom: "30px" }}>FAQ'S</div>
          <FAQList />
        </Section>

        {
        show2TopButton &&
        <StaticBackToTop />
        }

      </ScrollingProvider>

      <div id="qodef-page-footer-top-area">
        <div className="footer-innner ">
          <div className="footer-grid-item">
            <div id="text-3" className="  widget widget_text" data-area="qodef-footer-top-area-column-1">
              <img className="wp-image-7723" style={{ marginTop: "10px" }} src="./logo.png" alt="" width="200px" />
            </div>
          </div>
          <div className="footer-grid-item">
            <div id="text-10" className="  widget widget_text" data-area="qodef-footer-top-area-column-2">
              <p>Support : team (@ ) phoenixknight.com</p>
            </div>
            <div id="block-16" className="widget widget_block" data-area="qodef-footer-top-area-column-2"><a href="https://raritysniper.com/nft-drops-calendar" style={{ textDecoration: "none" }}>NFT Drops</a></div>
          </div>
          <div className="footer-grid-item">
            <div id="text-4" className="  widget widget_text" data-area="qodef-footer-top-area-column-3">
              <p >© 2022 Phoenix Knight.</p>
            </div>
          </div>
          <div className="footer-grid-item">
            <div id="block-15" className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-4">
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;