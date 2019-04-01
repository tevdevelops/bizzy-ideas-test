import axios from "axios";
import { createMessage } from "./messages";
import { GET_IDEAS, DELETE_IDEA, ADD_IDEA, GET_ERRORS } from "./types";

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
    .catch(err => console.log(err));
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
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
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
    .catch(err => console.log(err.response.data));
};
