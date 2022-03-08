import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Haunted Locations</h1>
      <nav
        style={{
          borderBottom: '1px solid'
        }}>
          <Link to='/home'>Home</Link> | {' '}
          <Link to='/locations'>Locations</Link> | {' '}
          <Link to='/locations/new'>New Locations</Link> | {' '}
          <Link to='/about'>About</Link> | {' '}
        </nav>
        <p>Outlet component here</p>
    </div>
  );
}

export default App;
