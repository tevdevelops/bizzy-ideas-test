import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addIdea } from "../../actions/ideas";

export class Form extends Component {
  state = {
    name: "",
    description: ""
  };

  static propTypes = {
    addIdea: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newIdea = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.addIdea(newIdea);

    this.setState({
      name: "",
      description: ""
    });
  };

  render() {
    const { name, description } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add an Idea</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addIdea }
)(Form);
