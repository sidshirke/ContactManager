import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  // Use arrow function to access this property
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteClickHandler = async (id, dispatch) => {
    const myInit = { method: "DELETE" };
    let myRequest = new Request(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    try {
      await fetch(myRequest, myInit);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      //Since the id is always one we cannot delete contact. Hence we catch the exception
      // and call delete again.
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.onShowClick} className="fa fa-sort-down" />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.deleteClickHandler.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fa fa-edit"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
