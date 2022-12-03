import { Link } from 'react-router-dom';

const Navbar = () => { 
  return (
    <div className="navbar" style={{backgroundColor:`none`}}>
      <Link to="/">
        <div className="home">
          <i class="bi bi-house-door-fill" style={{float:'left'}}></i>
          <p>Home</p>
        </div>
      </Link>
      <Link to="/signup">
        <div className="singUp">
          <i class="bi bi-person-plus-fill" style={{float:'left'}}></i>
          <p>Create account</p>
        </div>
      </Link>
      <Link to="/signin">
        <div className="signIn">
          <i class="bi bi-box-arrow-in-right" style={{float:'left'}}></i>
          <p>Sign in</p>
        </div>
      </Link>
      <Link to="/">
        <div className="settings">
          <i class="bi bi-gear-fill" style={{float:'left'}}></i>
          <p>Settings</p>
        </div>
      </Link>
    </div>
  );
}
 
export default Navbar;