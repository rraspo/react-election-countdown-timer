import React from "react";
import PropTypes from "prop-types";
import "./card.css";

// const propTypes = {
//   color: PropTypes.string,
//   block: deprecated(PropTypes.bool, 'Please use the props "body"'),
//   body: PropTypes.bool,
//   outline: PropTypes.bool,
//   className: PropTypes.string,
//   cssModule: PropTypes.object
// };

const Card = props => {
  const { title, body } = props;
  console.log(props);
  return (
    <div className="card">
      <h1 className="title">{title}</h1>

      <p className="body">{body}</p>
    </div>
  );
};

// Card.propTypes = propTypes;
// Card.defaultProps = defaultProps;

export default Card;
