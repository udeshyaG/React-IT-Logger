import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const handleSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please Enter Message and Technician" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      //Clear Fields
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tect"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>

              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention && "checked"}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect waves-blue btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.proptTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);