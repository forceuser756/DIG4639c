import React from 'react';
import './App.css';
import AddContact from "./components/addContact/index";
import RemoveContact from "./components/removeContact/index";
import SeeProfile from "./components/seeProfile/index";
import SeeContact from "./components/seeContact/index";


class App extends React.Component {

  render() {
      return (
        <div id="">
          <div id="button">
            <AddContact onPress={this.doSomething}>Add Contact</AddContact>
            <RemoveContact />
            <SeeProfile />
            <SeeContact />

          </div>
        </div>
      );
    }

  }

export default App;
