
import { BrowserRouter,
  Routes,
  Route,
  Link,

  } from 'react-router-dom';
import './App.css';

const Main = () => {
  return(
<ul>
  <li><Link to="/" >Home</Link></li>
  <li><Link to="/users">Users</Link></li>
  <li><Link to="/contacts">Contacts</Link></li>
</ul>
  )
  
}


const Contacts = () => {
  return(
    <h2>
      Contacts
    </h2>
  )
}

const Home = () => {
  return (
    <h2>Home Page</h2>
  )
}

function UserProfile () {
  return(
    <h2>UserProfile</h2>
  )
}

function OwnUserProfile () {
  return (
    <h2>
      OwnUserProfile
    </h2>
  )
}

const Users = () => {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
