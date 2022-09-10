import type { NextPage } from 'next'
// components
import { Header } from '../components/Header'

// styles
import styles from './home.module.scss'


const Home: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <Header/>
    </div>
  )
}

export default Home
