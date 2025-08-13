import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./components/Home/crudAction";
import './App.css'
export default function App() {
  const emptyUser = {
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: [],
  };

  const [todo, setTodo] = useState(emptyUser);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.counter.list.todos);

  // ✅ Form Validation
  const validate = () => {
    let newErrors = {};
    if (!todo.firstName.trim()) newErrors.firstName = "First name is required";
    if (!todo.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!todo.email.includes("@")) newErrors.email = "Valid email required";
    if (!todo.gender) newErrors.gender = "Gender is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Add or Update Todo
  const handleSubmit = () => {
    if (!validate()) return;

    if (editId) {
      dispatch(updateTodo({ ...todo, id: editId }));
      setEditId(null);
    } else {
      dispatch(addTodo({ ...todo, id: Date.now() }));
    }
    setTodo(emptyUser);
  };

  // ✅ Edit Todo
  const handleEdit = (data) => {
    setTodo(data);
    setEditId(data.id);
  };

  // ✅ Delete Todo
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  // ✅ Handle Language Checkbox
  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      const current = todo.language || [];
      let updated = [];

      if (checked) {
        updated = [...current, value]; // Add new language
      } else {
        updated = current.filter((lang) => lang !== value); // Remove unchecked language
      }

      setTodo({ ...todo, [name]: updated });
    }
  };

  return (
    <div className="p-5">
      <h2>Redux CRUD Form</h2>

      {/* First Name */}
      <input
        placeholder="First Name"
        value={todo.firstName}
        onChange={(e) => setTodo({ ...todo, firstName: e.target.value })}
      />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

      {/* Last Name */}
      <input
        placeholder="Last Name"
        value={todo.lastName}
        onChange={(e) => setTodo({ ...todo, lastName: e.target.value })}
      />
      {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

      {/* Email */}
      <input
        placeholder="Email"
        value={todo.email}
        onChange={(e) => setTodo({ ...todo, email: e.target.value })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      {/* Gender */}
      <select
        value={todo.gender}
        onChange={(e) => setTodo({ ...todo, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

      {/* Language */}
      <div className="text-[20px]">
        <label>Select Language :</label>

        <input
          type="checkbox"
          name="language"
          value="Hindi"
          checked={todo.language.includes("Hindi")}
          onChange={inputHandleLanguage}
          className="h-4 w-4 m-2"
        />
        <label>Hindi</label>

        <input
          type="checkbox"
          name="language"
          value="English"
          checked={todo.language.includes("English")}
          onChange={inputHandleLanguage}
          className="h-4 w-4 m-2"
        />
        <label>English</label>

        <input
          type="checkbox"
          name="language"
          value="Gujarati"
          checked={todo.language.includes("Gujarati")}
          onChange={inputHandleLanguage}
          className="h-4 w-4 m-2"
        />
        <label>Gujarati</label>
      </div>


      <button onClick={handleSubmit}>
        {editId ? "Update" : "Submit"}
      </button>

      {/* Table */}
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.firstName}</td>
              <td>{t.lastName}</td>
              <td>{t.email}</td>
              <td>{t.gender}</td>
              <td>{t.language.join(", ")}</td>
              <td>
                <button onClick={() => handleEdit(t)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./components/Home/crudAction";
import "./App.css";

export default function App() {
  const emptyUser = {
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: [],
  };

  const [todo, setTodo] = useState(emptyUser);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.counter.list.todos);

  const validate = () => {
    let newErrors = {};
    if (!todo.firstName.trim()) newErrors.firstName = "First name is required";
    if (!todo.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!todo.email.includes("@")) newErrors.email = "Valid email required";
    if (!todo.gender) newErrors.gender = "Gender is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Add Todo
  const handleAdd = () => {
    if (!validate()) return;
    dispatch(addTodo({ ...todo, id: Date.now() }));
    setTodo(emptyUser);
  };

  // ✅ Update Todo
  const handleUpdate = () => {
    if (!validate()) return;
    dispatch(updateTodo({ ...todo, id: editId }));
    setTodo(emptyUser);
    setEditId(null);
  };

  const handleEdit = (data) => {
    setTodo(data);
    setEditId(data.id);
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    if (name === "language") {
      const current = todo.language || [];
      let updated = checked
        ? [...current, value]
        : current.filter((lang) => lang !== value);
      setTodo({ ...todo, [name]: updated });
    }
  };

  return (
    <div>
      {/* Example form */}
      <input
        type="text"
        placeholder="First Name"
        value={todo.firstName}
        onChange={(e) => setTodo({ ...todo, firstName: e.target.value })}
      />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input
        type="text"
        placeholder="Last Name"
        value={todo.lastName}
        onChange={(e) => setTodo({ ...todo, lastName: e.target.value })}
      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input
        type="email"
        placeholder="Email"
        value={todo.email}
        onChange={(e) => setTodo({ ...todo, email: e.target.value })}
      />
      {errors.email && <p>{errors.email}</p>}

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={todo.gender === "Male"}
            onChange={(e) => setTodo({ ...todo, gender: e.target.value })}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={todo.gender === "Female"}
            onChange={(e) => setTodo({ ...todo, gender: e.target.value })}
          />{" "}
          Female
        </label>
      </div>
      {errors.gender && <p>{errors.gender}</p>}

      {/* Languages */}
      <label>
        <input
          type="checkbox"
          name="language"
          value="English"
          checked={todo.language.includes("English")}
          onChange={inputHandleLanguage}
        />{" "}
        English
      </label>
      <label>
        <input
          type="checkbox"
          name="language"
          value="Hindi"
          checked={todo.language.includes("Hindi")}
          onChange={inputHandleLanguage}
        />{" "}
        Hindi
      </label>

      {/* Buttons */}
      {!editId ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      {/* List */}
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName} - {item.email}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
