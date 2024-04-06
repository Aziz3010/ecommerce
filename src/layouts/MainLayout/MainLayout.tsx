import Header from '../../components/common/Header/Header';
import styles from './styles.module.css';
import { Container } from 'react-bootstrap';

const {container, wrapper} = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
        <Header />

        <div className={wrapper}>
        </div>

        
    </Container>
  )
}

export default MainLayout