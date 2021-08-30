import logo from './logo.svg';
import {Container,Row, Col} from 'react-bootstrap';
import Header from './Header/Header'
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
       <Header></Header>
      </Row>
    </Container>
  );
}

export default App;
