import axios from "axios";
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
    .catch(err => console.log(err));
};

// Add an Idea
export const addIdea = idea => dispatch => {
  axios
    .post("/api/ideas/", idea)
    .then(res => {
      dispatch({
        type: ADD_IDEA,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete a Idea
export const deleteIdea = id => dispatch => {
  axios
    .delete(`/api/ideas/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_IDEA,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
