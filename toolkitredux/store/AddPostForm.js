import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "./usersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  // const [title,setTitle=useState('')

  const onAutherChanged = (e) => setUserId(e.target.value);
  const users = useSelector(selectAllUsers);
  const onSubmit = () => {
    dispatch(postAdded(title, userId));
    setTitle("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(userId);

  return (
    <div >
      <h2>Add new post</h2>
      <label htmlFor="title" className="text-xl text-red-900">
        Post tilte
      </label>
      <input
        className="border-2 border-red-500 rounded-lg mx-4 p-2"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="user">UserName: </label>
      <select
        type="text"
        name="user"
        id="user"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border-2 border-red-500 rounded-lg mx-4 p-2"
      >
        <option value="" ></option>
        {usersOptions}
      </select>
      <button
        onClick={onSubmit}
        className={`border-2 border-red-500 rounded-lg px-4 py-2 ${
          !canSave ? "bg-red-100" : "bg-red-300"
        }`}
        disabled={!canSave}
      >
        post
      </button>
    </div>
  );
};

export default AddPostForm;
