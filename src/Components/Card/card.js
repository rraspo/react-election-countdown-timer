import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = props => {
  const { title, body } = props;
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="body">{body}</p>
    </div>
  );
};

export default Card;
