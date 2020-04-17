import React, { useEffect } from "react";

import { connect } from "react-redux";
//import form
import Form from "./Sform";

// import action.
import { getItem, addNewGuy } from "./actions/actions";

const AddPeople = (props) => {
  // set up useEffect!
  const initSmurfs = props.getItem;

  useEffect(() => {
    initSmurfs();
  }, [initSmurfs]);
  console.log(AddPeople);

  // return what you want shown in the list.
  // map over the array so it send us a new one whcih enables us to add the new one.

  return (
    <div className="holder">
      <div>
        {props.smurf.map((smurf) => (
          <div className="card" key={smurf.id}>
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

// update your state. with you smurf. ( i actully really hate that movie )

const mapStatetoProps = (state) => {
  return {
    smurf: state.smurf,
  };
};
// connect function - dont forget your actions!!

export default connect(mapStatetoProps, { getItem, addNewGuy })(AddPeople);
