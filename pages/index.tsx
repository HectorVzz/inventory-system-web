import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" component="h2">
        Hola mundo
      </Typography>
    </div>
  )
}

export default Home
