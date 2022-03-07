import { FaTimes } from "react-icons/fa";

const User = ({ user }) => {
  return (
    <div className='user'>
      <h3>
        {user.name} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
