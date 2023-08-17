import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p>Todo list app</p>
        <a
          href="https://github.com/vickyvk326"
          target="_blank"
          rel="noreferrer"
          title="follow me on github"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="github logo"
            height={30}
            width={30}
          />
          <span>vickyvk326</span>
        </a>
      </div>
    );
  }
}
