import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Logout from "./security/Logout";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout";
import RequireAuth from "./security/RequireAuth";
import CategoryForm from "./recipes/CategoryForm";

export default function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-start" element={<Home />} />
          <Route path="/recipes-start/info" element={<Home />} />
          <Route path="/recipes-start/categories/" element={<Categories />} />
          <Route path="/recipes-start/recipes" element={<RecipesLayout />}>
            <Route path="/recipes-start/:id" element={<Recipe />} />
          </Route>

          <Route
            path="/recipes-start/addcategory"
            element={
              <RequireAuth roles={["ADMIN"]}>
                <CategoryForm />
              </RequireAuth>
            }
          />

          <Route
            path="/recipes-start/add"
            element={
              <RequireAuth roles={["USER"]}>
                <RecipeForm />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>Not Found</h2>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
  
  );
}
