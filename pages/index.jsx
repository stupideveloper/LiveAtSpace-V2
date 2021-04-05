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
  const launches = [
    {
      "id": 1,
      "title": "Falcon 9 - Starlink Launch 23",
      "description": "A SpaceX Falcon 9 Rocket will depart from Canaveral Space Force Station, Florida and deploy approximately 60 satellites.",
      "launchdate": "2021-04-07T07:04:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": "mainhead",
      "backgroundImagePlacement": 100,
      "launchid": null,
      "backgroundImage":"/static/images/Falcon9.jpg"
    },
    {
      "id": 3,
      "title": "Soyuz - ISS 64S",
      "description": "A Russian government Soyuz rocket will launch the crewed Soyuz MS-18 spacecraft to the International Space Station with members of the next Expedition crew.",
      "launchdate": "2021-04-08T22:12:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": "secondary_head",
      "backgroundImagePlacement": 10,
      "launchid": null,
      "backgroundImage":"/static/images/Soyuz.jpg"
    },
    {
      "id": 8,
      "title": "GSLV Mk.2 - GISAT 1",
      "description": "India’s Geosynchronous Satellite Launch Vehicle Mk. 2 (GSLV Mk.2), designated GSLV-F10, will launch India’s first GEO Imaging Satellite, or GISAT 1. ",
      "launchdate": "2021-04-18T02:30:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": null,
      "backgroundImagePlacement": 30,
      "launchid": null,
      "backgroundImage": "/static/images/GLSV.jpg"
    },
    {
      "id": 9,
      "title": "Vega - Pléiades Neo 1",
      "description": "An Arianespace Vega rocket, designated VV18, will launch the Pléiades Neo 1 Earth observation satellite for Airbus.",
      "launchdate": "2021-04-19T16:20:00.000Z",
      "tag": null,
      "youtubeWatchcode": "peepee",
      "buttonText": "Watch Live",
      "gridposition": " nill",
      "backgroundImagePlacement": 10,
      "launchid": null,
      "backgroundImage":"/static/images/Vega.jpg"
    },
    {
      "id": 10,
      "title": "Falcon 9 - Crew 2",
      "description": " SpaceX Falcon 9 rocket will launch a Crew Dragon spacecraft on its second operational flight with astronauts on-board to the International Space Station. \n\nNASA astronauts Shane Kimbrough, Megan McArthur, Japanese astronaut Akihiko Hoshide, and European Space Agency astronaut Thomas Pesquet will launch on the Crew Dragon spacecraft.",
      "launchdate": "2021-04-22T00:41:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": "none",
      "backgroundImagePlacement": 10,
      "launchid": null,
      "backgroundImage": "/static/images/Falcon9.jpg"
    },
    {
      "id": 11,
      "title": "Soyuz - OneWeb 6",
      "description": "A Russian Soyuz rocket will launch 36 satellites into orbit for OneWeb, which is developing a constellation of hundreds of satellites in low Earth orbit for low-latency broadband communications. The Soyuz-2.1b rocket will use a Fregat upper stage.",
      "launchdate": "2021-04-26T02:30:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": "none",
      "backgroundImagePlacement": 10,
      "launchid": null,
      "backgroundImage":"/static/images/Soyuz.jpg"
    },
    {
      "id": 12,
      "title": "Delta 4-Heavy - NROL-82",
      "description": "A United Launch Alliance Delta 4-Heavy rocket will launch a classified spy satellite cargo for the U.S. National Reconnaissance Office. \n\nThe largest of the Delta 4 family, the Heavy version features three Common Booster Cores mounted together to form a triple-body rocket.",
      "launchdate": "2021-04-26T02:30:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Video Unavailable",
      "gridposition": "none",
      "backgroundImagePlacement": 20,
      "launchid": null,
      "backgroundImage": "/static/images/Delta4.jpg"
    },
    {
      "id": 13,
      "title": "Atlas 5 - SBIRS GEO Flight 5",
      "description": "A United Launch Alliance Atlas 5 rocket will launch the U.S. Space Force’s fifth Space Based Infrared System Geosynchronous satellite, or SBIRS GEO 5, for missile early-warning detection. \n\nThe rocket will fly in the 421 vehicle configuration with a four-meter fairing, two solid rocket boosters, and a single-engine Centaur upper stage.",
      "launchdate": "2021-05-17T02:30:00.000Z",
      "tag": null,
      "youtubeWatchcode": "",
      "buttonText": "Watch Live",
      "gridposition": "none",
      "backgroundImagePlacement": 80,
      "launchid": null,
      "backgroundImage": "/static/images/Atlas5.jpg"
    }
  ]

  return {
    props: {
      launches,
    },
    revalidate: 1,
  }
}



export default Home
