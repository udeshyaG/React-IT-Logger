import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(tech.id);

    M.toast({ html: "Techie has been deleted" });
  };

  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content" onClick={handleDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

TechItem.prototype = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
