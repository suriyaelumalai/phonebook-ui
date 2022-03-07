import PropTypes from "prop-types";
const Button = ({ color, text, clickAction }) => {
  return (
    <button
      onClick={clickAction}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steeleblue",
  text: "Add user",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
