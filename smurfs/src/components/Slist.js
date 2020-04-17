import React, { useEffect } from "react";
import { connect } from "react-redux";
import Form from "./Sform";

// import action.
import { getItem, addNewGuy } from "./actions/actions";

const AddPeople = (props) => {
  const initSmurfs = props.getItem;

  useEffect(() => {
    initSmurfs();
  }, [initSmurfs]);
  console.log(AddPeople);
  return (
    <div>
      <div>
        {props.smurf.map((smurf) => (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
      <Form addNewGuy={props.addNewGuy} />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    smurf: state.smurf,
  };
};

export default connect(mapStatetoProps, { getItem, addNewGuy })(AddPeople);
