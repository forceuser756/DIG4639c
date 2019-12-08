import React from "react";
import "./index.css";

class AddContact extends React.Component {

  componentDidMount() {
      let newContactName = "";
      let newContactNumber = "";
  fetch("https://apiexample.website/contacts/add", {
    "method": "POST",
    "headers": {
      "api": "fossum",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify({
        //change the values to make new contacts, delete these entirely to not add more contacts upon reloading.
        "name": "Trevor",
        "number": "1"
    })
  })
  .then(response => response.json() )
  .then((data) => this.setState({contacts: data.contacts}) )
  .catch(err => {
    console.log(err);
  });

  }
    render() {
        return(
            //tried to make an interactable form on the page to add contacts, but it doesn't work. I left this in just in case I came close.
            <form onSubmit={this.props.addcontact}>
                <label>Name: </label>
                <input type="text" name="contactName" id="newContactName" />
                <br />
                <label>Number: </label>
                <input type="text" name="contactNumber" id="newContactNumber" />
                <br />
                <button type="submit">Add Contact</button>
            </form>
        );
    }

}

export default AddContact;
