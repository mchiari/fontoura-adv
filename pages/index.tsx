import type { NextPage } from 'next'

import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
