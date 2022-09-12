import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.scss'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const token = useSelector((state) => state.auth.token)

  return (
      <div className={styles.homeContent}>
        <div className={styles.homeContent1}>
          <h1>Save your thoughts, wherever you are</h1>
          <NavLink to='/register'><button>Start Now</button></NavLink>
        </div>
        <div sm={12} lg={6} className={styles.homeContent2}>
          <img src={require('../../image/note-taking.png')} alt="" />
        </div>
      </div>
  )
}

export default Home
