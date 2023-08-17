import { Component } from "react";
import EditTask from "./EditTask";

export default class IndividualTask extends Component {
  state = {
    toggled: false,
  };
  handleToggleEdit = () => {
    this.setState(() => {
      return { toggled: !this.state.toggled };
    });
  };
  render() {
    const task = this.props.task;
    const handleToggleComplete = this.props.handleToggleComplete;
    return (
      <div
        className="individual-task"
        style={{
          backgroundColor: !task.isCompleted ? "#F6CD90" : "#A4BE7B",
          transition: "background-color 0.5s",
        }}
      >
        <p
          onClick={() => handleToggleComplete(task.taskId)}
          style={{
            textDecoration: task?.isCompleted ? "line-through" : "none",
            transition: "text-decoration 0.5s",
          }}
        >
          {task.taskName}
        </p>
        <span>
          <button
            onClick={() => {
              this.handleToggleEdit();
            }}
          >
            ✎
          </button>
          <button onClick={() => this.props.handleDeleteTask(task.taskId)}>
            🗑
          </button>
        </span>
        <EditTask
          id={task.taskId}
          toggled={this.state.toggled}
          handleToggleEdit={this.handleToggleEdit}
          handleToggleComplete={this.props.handleToggleComplete}
          handleSaveEdit={this.props.handleSaveEdit}
        />
      </div>
    );
  }
}
