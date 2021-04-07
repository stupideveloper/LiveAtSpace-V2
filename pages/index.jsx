import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import youtubePlayerStyles from '../styles/YoutubePlayer.module.css'
import {GetLaunchDate,GetLaunchCountdown} from "../components/timecalculations"
import Head from 'next/head'
import FootNav from '../components/footnav'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeIsVisible: false,
      youtubeUrl: "",
    };
  }
  componentDidMount(){
    gsap.registerPlugin(ScrollTrigger);

    // use the node ref to create the animation
    gsap.fromTo("#lives", {translateY: '10%', opacity: '0'}, {translateY: '0', opacity: '1', scrollTrigger: ".livetitle", duration: 1, delay: 0.3});
    gsap.fromTo("#launches", {translateY: '10%', opacity: '0'}, {translateY: '0', opacity: '1', duration: 1, delay: 0.1});

  }

  render() {
    return (
      <>  
        <Head>
          <title>Live@Space</title>
          <script data-ad-client="ca-pub-5373807673490757" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script type="text/javascript" src="https://s.skimresources.com/js/188318X1659053.skimlinks.js"></script>
          <link rel="icon" type="image/svg" href="/static/logos/logo.svg" />
          <meta property="og:title" content="Live@Space" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://liveatspace.com/" />
          <meta property="og:image" content="https://liveatspace.com/screenshot.png" />
          <meta property="og:site_name" content="Live@Space" />
          <meta property="og:description" content="Live@Space was and is developed to serve as a hub for all rocket future launches and other space activity. It all launches from SpaceX, NASA, Rocket Lab and all other areospace companies and orginisations. " />
          <meta name="description" content="Live@Space was and is developed to serve as a hub for all rocket future launches and other space activity. It all launches from SpaceX, NASA, Rocket Lab and all other areospace companies and orginisations. "/>
        </Head>

        {this.state.youtubeIsVisible &&
          <div className={youtubePlayerStyles.center_youtube_player}>
            <div className={youtubePlayerStyles.iframe_wrapper}>
              <iframe width="100%" height="100%" src={this.state.youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
            </div>
            <span className={youtubePlayerStyles.close} onClick={() => {this.setState({youtubeIsVisible: false, youtubeUrl:"" })}}>✕</span>
          </div>
        }
        <div>
          <h2 style={{textAlign:"center", margin:"1rem 0", fontSize:"30px"}}>LAUNCHES</h2>
          <hr className={styles.seperator}/>
        </div>
        <div className={styles.launches} id="launches">
          
          {this.props.launches.map((launch) => (

            <div key={launch.id} className={styles.griditem} style={{background:`linear-gradient(rgba(4, 4, 26, 0.7), rgba(4, 4, 26, 0.45)), url(${launch.backgroundImage})`, backgroundPositionY:`${launch.backgroundImagePlacement}%`, backgroundSize:"cover"}}>
              
              <div className={styles.countdown}>
                  <span><GetLaunchCountdown time={launch.launchdate}/></span>
                  <div className={styles.launchtimewrapper}>
                    <p><span>Launch on:</span> <span><GetLaunchDate time={launch.launchdate}/></span></p>
                  </div>
              </div>

              <h3>{launch.title}</h3>
              <h4>{launch.description}</h4>

              {launch.youtubeWatchcode &&
                <button onClick={() =>{ this.setState({youtubeIsVisible: true, youtubeUrl:`https://www.youtube-nocookie.com/embed/${launch.youtubeWatchcode}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`})}} className={styles.white, styles.white} href={`${launch.youtubeWatchcode}`} >{launch.buttonText}</button>
              }

              {!launch.youtubeWatchcode &&
                <div style={{margin:0, paddingBottom:"1rem", fontSize:"0.8rem", color:"var(--gru)"}}>
                  <span style={{ backgroundColor:"var(--darkblue-transparent)", padding:"3px", border:"var(--border)", cursor:"default", userSelect:"none"}}>A live video will appear here when avaliable</span>
                </div>
              }
            </div>
          ))}

        </div>
        <div>
          <h2 className={`${styles.livetitle} livetitle`} style={{textAlign:"center", margin:"1rem 0", fontSize:"30px"}}>LIVE</h2>
          <hr className={styles.seperator}/>
        </div>

        <div className={`${styles.lives}`} id="lives">
            {this.props.lives.map((live) => (
              <div key={live.id} className={`${styles.griditem} griditem`} style={{background:`linear-gradient(rgba(4, 4, 26, 0.9), rgba(4, 4, 26, 0.7)), url(https://img.youtube.com/vi/${live.youtubeWatchcode}/maxresdefault.jpg)`, backgroundPositionY:`50%`, backgroundSize:"contain"}}>
                <h3>{live.title}</h3>
                <span className={styles.channel}>{live.channel}</span>
                <h4>{live.description}</h4>

          
                <button onClick={() => { this.setState({ youtubeIsVisible: true }); this.setState({ youtubeUrl: `https://www.youtube-nocookie.com/embed/${live.youtubeWatchcode}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`});}} className={styles.white, styles.white} href={`${live.youtubeWatchcode}`} >Watch</button>
                

              </div>
            ))}
        </div>
        <FootNav />
      </>
    )
  }
}


export async function getStaticProps() {
  // Development
  //const launchRes = await fetch('http://localhost:3000/launches.test.json'); var launches = await launchRes.json();
  //const liveRes = await fetch('http://localhost:3000/lives.test.json'); var lives = await liveRes.json();
  // Prod
  const launchRes = await fetch('https://liveatspace.com/launches.json'); var launches = await launchRes.json()
  const liveRes = await fetch('https://liveatspace.com/lives.json'); var lives = await liveRes.json()
  // Sort from earliest to latest
  launches = launches.sort((a, b) => {
		var amili = new Date(a.launchdate)
		var bmili = new Date(b.launchdate)
		bmili = bmili.getTime()
		amili = amili.getTime()
		if (amili < bmili) return -1
		return amili > bmili ? 1 : 0
	})
  return {
    props: {
      launches,
      lives,
    },
    revalidate: 1,
  }
}



export default Home
