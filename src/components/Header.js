import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add User"}
        clickAction={onAdd}
      ></Button>
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
