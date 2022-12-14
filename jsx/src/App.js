import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">

      <h1>My Profile</h1>
      <Card className='infos' style={{ width: '18rem' }}>
       <ProfilePhoto/>
        <Card.Body>
          <Card.Title>{<FullName />}</Card.Title>
          <Card.Text>
            {<Adress />}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
