import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" component="h2" color={'purple'}>
        Hola amorsito te amo mucho 
      </Typography>
      <video width="480" height="480" controls>
        <source src="../resource/videoChido.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Home
