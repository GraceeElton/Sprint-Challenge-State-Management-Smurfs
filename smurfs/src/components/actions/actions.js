import axios from "axios";

// get item from api!!
// need 3 for each action: start, getting data, error
export const getItem = () => {
  return (dispatch) => {
    dispatch({ type: "START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log(response);
        dispatch({ type: "GOT_DATA_YES", payload: response.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// add new guy to the list!

export const addNewGuy = (newForm) => {
  return (dispatch) => {
    dispatch({ type: "GOT_IT_START" });
    axios
      .post("http://localhost:3333/smurfs", newForm)
      .then((response) => {
        console.log("Post request", response);
        dispatch({ type: "GOT_POST_YES", payload: response.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: "POST_ERROR", payload: error });
      });
  };
};
