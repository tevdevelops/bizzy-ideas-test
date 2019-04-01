import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_IDEAS, DELETE_IDEA, ADD_IDEA } from "./types";

// Get Idea
export const getIdeas = () => dispatch => {
  axios
    .get("/api/ideas/")
    .then(res => {
      dispatch({
        type: GET_IDEAS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Add an Idea
export const addIdea = idea => dispatch => {
  axios
    .post("/api/ideas/", idea)
    .then(res => {
      dispatch(createMessage({ addIdea: "Idea Added" }));
      dispatch({
        type: ADD_IDEA,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete a Idea
export const deleteIdea = id => dispatch => {
  axios
    .delete(`/api/ideas/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteIdea: "Idea Deleted" }));
      dispatch({
        type: DELETE_IDEA,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
