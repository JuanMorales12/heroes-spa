import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { useContext } from "react";
import { basePath } from "../../../config";

export const Navbar = () => {
  const navigate = useNavigate();
  const {user, logout} = useContext(AuthContext);


  const handleLogout = () => {
    logout();
    navigate(`${basePath}/login`, {replace: true});
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to={`${basePath}/`}>
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to={`${basePath}/marvel`}>
            Marvel
          </NavLink>

          <NavLink className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`} to={`${basePath}/dc`}>
            DC
          </NavLink>
          <NavLink className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`} to={`${basePath}/search`}>
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
                {user?.name}
            </span>
            <button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
            </button>
        </ul>
      </div>
    </nav>
  );
};
