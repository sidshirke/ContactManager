import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: "John Doe",
    email: "jdeo@gmail.com",
    phone: "111111111"
  };

  addContact = e => {
    const contact = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      email: this.emailInput.current.value
    };
    console.log(contact);
    e.preventDefault();
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header"> Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <button
              className="btn btn-secondary btn-block"
              onClick={this.addContact}
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
