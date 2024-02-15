import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

// Defining PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired, // `node` covers anything that can be rendered: numbers, strings, elements or an array containing these types
  onClick: PropTypes.func, // `func` since onClick should be a function, but it's not marked as required in case you want buttons without an onClick handler
  type: PropTypes.string, // `string` to match the CSS class name keys, not marked as required assuming you have default styling without a type
};

export default Button;
