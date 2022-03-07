import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("test");
  };
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add user' clickAction={onClick}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Phone book",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
