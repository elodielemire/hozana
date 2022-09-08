import React from "react";

import "./styles.css";
import { Comments } from "./Comments";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Priez pour vos ami(e)s !</h1>
        <input type="text" placeholder="Nom de votre ami(e)" />
        &nbsp;
        <button>Prier</button>
        <Comments />
      </div>
    );
  }
}
