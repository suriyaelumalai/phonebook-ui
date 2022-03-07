const User = ({ user }) => {
  return (
    <div className='user'>
      <h3>{user.name}</h3>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
