import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Navbar  bg="dark" variant="dark" className={styles.footer}>
      <Container fluid style={{justifyContent: 'center'}}>
        <p style={{color: 'whitesmoke', marginBottom: '0px'}}>All Right Reserved</p>
      </Container>
    </Navbar>
  )
}

export default Footer