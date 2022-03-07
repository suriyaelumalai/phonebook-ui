import { useState } from "react";

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
    }

    if (!phone) {
      alert("Please add a phone");
      return;
    }

    onAdd({ name, phone });

    setName("");
    setPhone("");
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>User name</label>
        <input
          type='text'
          placeholder='Add User name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Phone number</label>
        <input
          type='text'
          placeholder='Phone number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <input type='submit' value='Save User' className='btn btn-block' />
    </form>
  );
};

export default AddUser;
