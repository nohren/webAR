import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AR playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to AR playground
        </h1>


        <div className={styles.grid}>
          <div  className={styles.card}>
          <h3>Android compatibility&darr;</h3>
            <p> 
          * Google Play Store<br></br>
          * Android 7.0 or newer</p>
          </div>

          <div className={styles.card}>
          <h3>Apple iOS (iphone/ipad) combatibility &darr;</h3>
            <p>* iPhone 6s Plus and up<br></br>
               * iPad Pro (all models)<br></br>
               * iPad Air (3rd and 4th gen)<br></br>
               * iPad (5th gen or later)<br></br>
               * iPad mini (5th gen)

            </p>
          </div>

        <p className={styles.description}>
        Get started with your mobile phone or tablet by finding an image below and clicking on the button
        </p>
 
        <div className={styles.ar}>
          <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
          <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
          <model-viewer
            style={{width: "300px", height: "180px"}}
            src="/images/EarthClouds.glb"
            ios-src="/images/EarthClouds.usdz"
            alt="You know you want explore me"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            ar-scale
            data-js-focus-visible
            ar-status="not-presenting">
          </model-viewer>

        </div>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
