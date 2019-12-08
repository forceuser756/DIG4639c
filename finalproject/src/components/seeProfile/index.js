import React from 'react';
import "./index.css";

class SeeProfile extends React.Component{
  constructor(props) {
        super(props);

        this.state = { profile: {}};
    }

    componentDidMount() {
      fetch("https://apiexample.website/profile", {
        "method": "GET",
        "headers": {
          "api": "fossum"
        }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({ profile: data}
            )
        })
        .catch(() => console.log("Errors!"))




    }
    render() {
        return(
            <div className="seeProfile">
              <h1>Welcome {this.state.profile.name}</h1>
              <p>There are {this.state.profile.count} profiles.</p>
            </div>
        );
    }
}
export default SeeProfile;
