import React, { Component } from "react";
import { Consumer } from "../../context";
//import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    this.setState({
      name: data.name,
      email: data.email,
      phone: data.phone
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editContact = async (dispatch, e) => {
    e.preventDefault();
    //console.log(this.state);

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };
    // Make request
    const { id } = this.props.match.params;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(newContact),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );

    const data = await res.json();

    dispatch({
      type: "UPDATE_CONTACT",
      payload: data
    });

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: ""
    });

    //Redirect
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header"> Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.editContact.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <button className="btn btn-secondary btn-block">
                    Update Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
