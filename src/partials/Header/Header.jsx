import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch} from 'react-redux'
import { logout } from '../../lib/store/slices/auth'
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {

  const auth = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();


  return (
    <div className={styles.header}>
      <Navbar expand="lg"  style={{paddingRight: '30px', backgroundColor: '#262446'}}>
        <Navbar.Brand href="#" style={{paddingLeft: '30px', color: '#DDDCF7', fontWeight: 'bold'}}>Notes Saver</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: '#DDDCF7'}}/>
        { auth
          ?<Navbar.Collapse id="navbarScroll" className={styles.collapse}>
                <Link to='/profile' className="mx-3"><Button variant="outline-primary">My Notes</Button></Link>
                <Link to="/"><Button onClick={() => dispatch(logout())} variant="outline-danger">Logout</Button></Link>
        </Navbar.Collapse>
        :<Navbar.Collapse id="navbarScroll" className={styles.collapse}>
              <Link to='/' className="mx-3" style={{color: '#DDDCF7'}}>Home</Link>
              <Link to='/register' className="mx-3" style={{color: '#DDDCF7'}}>Register</Link>
              <Link to='login'><Button variant="outline-primary" style={{color: '#DDDCF7'}} >Login</Button></Link>
        </Navbar.Collapse>
        }
    </Navbar>
    </div>
  );
}

export default Header;