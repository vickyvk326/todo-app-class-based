import { Component } from "react";

export default class EditTask extends Component {
  state = {
    taskName: "",
  };
  handleChangeInput = (value) => {
    this.setState(() => {
      return { taskName: value };
    });
  };
  handleEnterKey = (e, id) => {
    if (e.key === "Enter") {
      this.props.handleSaveEdit(id, this.state.taskName);
      this.props.handleToggleEdit();
    }
  };
  render() {
    const handleToggleEdit = this.props.handleToggleEdit;
    const handleSaveEdit = this.props.handleSaveEdit;
    const editCode = (
      <div className="edit-task-container">
        <div className="edit-task">
          <label htmlFor="edit-input">
            Change task name:
            <input
              autoFocus
              placeholder="change the task name here ..."
              type="text"
              id="edit-input"
              onChange={(e) => this.handleChangeInput(e.target.value)}
              onKeyDown={(e) => this.handleEnterKey(e, this.props.id)}
            />
          </label>

          <div className="button-container">
            <button
              onClick={() => {
                handleSaveEdit(this.props.id, this.state.taskName);
                handleToggleEdit();
              }}
            >
              save changes
            </button>
            <button onClick={handleToggleEdit}>cancel</button>
          </div>
        </div>
      </div>
    );
    return <>{this.props.toggled && editCode}</>;
  }
}
