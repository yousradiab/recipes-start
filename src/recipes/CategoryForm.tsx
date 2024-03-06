import { addCategory } from "../services/apiFacade";
import { useState } from "react";
export default function CategoryForm() {
  
const [formData, setFormData] = useState<string>("");

  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
     e.preventDefault();
     const newCategory = await addCategory(formData);
     alert(`Category added successfully!`);
      setFormData("");
     console.log("newCategory", newCategory);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
      setFormData(value);
      
      
     console.log("name", name);
      console.log("value", value);
      
   };
  
  return (
   //add category form
  <form>
    <label htmlFor="categoryname">Category Name:</label>
    <input onChange={handleChange} type="text" id="categoryname" name="categoryname" />
    <button type="submit" onClick={handleSubmit}>Add Category</button>
  </form>


  )
}
