import {NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>{<NavLink to="/">Home </NavLink>}</li>
        <li>{<NavLink to="/recipes-start/categories">Categories</NavLink>}</li>
        <li>{<NavLink to="/recipes-start/recipes">Recipes</NavLink>}</li>
        <li>
          {auth.isLoggedIn() && (
            <>
              <li>
                <NavLink to="/recipes-start/add">Add</NavLink>
              </li>
              <li>
                <NavLink to="/recipes-start/addcategory">Add Category</NavLink>
              </li>
            </>
          )}
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
