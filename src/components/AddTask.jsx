import { Component } from "react";

export default class AddTask extends Component {
  handleEnterKey = (event) => {
    if (event.key === "Enter") {
      this.props.handleAddTask();
    }
  };
  render() {
    const handleInputChange = this.props.handleInputChange;
    const handleAddTask = this.props.handleAddTask;
    const textInputRef = this.props.textInputRef;
    return (
      <div className="add-task">
        <h2>
          <label htmlFor="new-task">Add new task</label>
        </h2>
        <div className="input">
          <input
            autoFocus
            ref={textInputRef}
            id="new-task"
            type="text"
            placeholder="Type the task..."
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyPress={(event) => this.handleEnterKey(event)}
          />
          <button onClick={handleAddTask}>add task</button>
        </div>
      </div>
    );
  }
}
