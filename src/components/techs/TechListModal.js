import React, { useEffect } from "react";

import TechItem from "./TechItem";

import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ tech, getTechs }) => {
  const { techs, loading } = tech;

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>

        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => {
              return <TechItem tech={tech} key={tech.id} />;
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
