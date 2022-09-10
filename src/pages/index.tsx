import type { NextPage } from 'next'
// components
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

// styles
import styles from './home.module.scss'


const Home: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <Header/>
      <div className={styles.wrapper}>
        <Slider/>
      </div>
    </div>
  )
}

export default Home
