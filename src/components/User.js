const User = ({ user }) => {
  const toneAction = async (e) => {
    const res = await fetch("http://localhost:3000/tone");
    const data = await res.json();

    let toneContent = "How're you doing today?";
    switch (data["tone"]) {
      case "humorous":
        toneContent = "Humor is one of the best ingredients of survival.";
        break;
      case "cynical":
        toneContent =
          "You know what they say - '“Scratch any cynic and you will find a disappointed idealist.”'";
        break;
      case "ironic":
        toneContent =
          "Irony is the gaiety of reflection and the joy of wisdom.";
        break;
    }
    alert(toneContent);
  };
  return (
    <div className='user' onClick={toneAction}>
      <h3>{user.name}</h3>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
