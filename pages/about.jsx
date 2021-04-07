import Head from 'next/head'
import styles from '../styles/About.module.css'
import FootNav from '../components/footnav'

export default function About() {
	return(
		<>
		<Head>
			<title>About || Live@Space</title>
		</Head>
			<div className={styles.container}>
				<h1>About.</h1>
				<div>
					<p style={{lineHeight:"1.45rem"}}><bold>Live@Space</bold> was and is developed to serve as a hub for all rocket future launches and other space activity. It all launches from SpaceX, NASA, Rocket Lab and all other areospace companies and orginisations. </p>
					<p><bold>Live@Space</bold> is open source and proudly made in Australia with all of its code hosted on a github repository <a href="https://github.com/widelachie/LiveAtSpace-V2" target="_blank" style={{color:"#ae601c"}}>here</a>. <bold>Live@Space</bold> is supported by the community, <a href="https://github.com/widelachie/LiveAtSpace-V2" target="_blank"><bold >please consider contributing</bold></a>. <br /><br /> Now because we have no more text, enjoy this gif of Starship SN8 crashing. <a href="mailto:me@lachlankemp.com" style={{color:"#ae601c"}}>- Lachie</a></p>
					<img src="/static/images/sn8.gif" alt="Starship SN8 Crash" />
				</div>
			</div>
			<FootNav />
		</>
	)
}
