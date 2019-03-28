import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getIdeas, deleteIdea } from "../../actions/ideas";

export class Ideas extends Component {
  static propTypes = {
    ideas: PropTypes.array.isRequired,
    getIdeas: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getIdeas();
  }

  render() {
    return (
      <Fragment>
        <h2>Your Bizzy Ideas</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.ideas.map(idea => (
              <tr key={idea.id}>
                <td>{idea.id}</td>
                <td>{idea.name}</td>
                <td>{idea.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteIdea.bind(this, idea.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
9;

const mapStateToProps = state => ({
  ideas: state.ideas.ideas
});

export default connect(
  mapStateToProps,
  { getIdeas, deleteIdea }
)(Ideas);
