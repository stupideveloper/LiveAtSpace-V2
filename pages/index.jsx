import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import youtubePlayerStyles from '../styles/YoutubePlayer.module.css'
import {GetLaunchDate,GetLaunchCountdown} from "../components/timecalculations"


function Home({ launches }) {
  const [youtubeIsVisible, setYoutubeIsVisible] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  return (
    <>  
      {youtubeIsVisible &&
        <div className={youtubePlayerStyles.center_youtube_player}>
          <div className={youtubePlayerStyles.iframe_wrapper}>
            <iframe width="560" height="315" src={youtubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <span className={youtubePlayerStyles.close} onClick={function(){setYoutubeIsVisible(false); setYoutubeUrl("")}}>✕</span>
        </div>
      }
      <div className={styles.launches}>
        {launches.map((launch) => (
          <div key={launch.id} className={styles.griditem} style={{background:`linear-gradient(rgba(4, 4, 26, 0.7), rgba(4, 4, 26, 0.3)), url(${launch.backgroundImage})`, backgroundPositionY:`${launch.backgroundImagePlacement}%`, backgroundSize:"cover"}}>
            <div className={styles.countdown}>
                <span><GetLaunchCountdown time={launch.launchdate}/></span>
                <div className={styles.launchtimewrapper}>
                  <p><span>Launch on/at:</span> <span><GetLaunchDate time={launch.launchdate}/></span></p>
                </div>
            </div>
            <h3>{launch.title}</h3>
            <h4>{launch.description}</h4>
            {launch.youtubeWatchcode &&
              <button onClick={function(){ setYoutubeIsVisible(true); setYoutubeUrl(`https://www.youtube-nocookie.com/embed/${launch.youtubeWatchcode}`)}} className={styles.white, styles.white} href={`${launch.youtubeWatchcode}`} >{launch.buttonText}</button>
            }
          </div>
        ))}
      </div>
    </>
  )
}
export async function getStaticProps() {
  //const res = await fetch('http://localhost:3000/api/launches')
  //const launches = await res.json()
  const launches = {}

  return {
    props: {
      launches,
    },
    revalidate: 1,
  }
}



export default Home
