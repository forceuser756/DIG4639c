import React from "react";
import "./index.css";

class SeeContact extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        contacts: []
      };
    }

    componentDidMount() {

      fetch("https://apiexample.website/contacts", {
      "method": "GET",
      "headers": {
         "api": "fossum",
         "Content-Type": "application/json",
         "Accept": "application/json"
      }})
      .then(response => response.json() )
      .then((data) => {
        console.log(data);
        this.setState({contacts: data.contacts});
      });
  }
  render() {
    return(
        //this only returns the names of the contacts, not the number.
        <div>
        {
          this.state.contacts.map((value, index) => {
            return <p key={index} className="Contacts">Contact: {value.name}</p>;
          })
        }
        </div>



    );
  }


}
export default SeeContact;
