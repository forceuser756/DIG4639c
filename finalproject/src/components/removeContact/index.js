import React from "react";

class RemoveContact extends React.Component {

  componentDidMount() {

  fetch("https://apiexample.website/contacts/remove", {
    "method": "POST",
    "headers": {
      "api": "fossum",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify({
        //e is a placeholder. remove it to delete the first contact in the array of contacts.
        "position": ""
    })
  })
  .then(response => response.json())
  .then((data) => this.setState({removed: data.removed}))

  .catch(err => {
    console.log(err);

  });



  }
    render() {
        return(
            <form method="POST" onSubmit={this.props.removecontact} >
                <button type="submit">Remove Contact</button>
            </form>
        );
    }

}

export default RemoveContact;
