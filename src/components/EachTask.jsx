import { Component } from "react";
import IndividualTask from "./IndividualTask";

export default class EachTask extends Component {
  render() {
    const showTask = this.props.showTask;
    const taskList = this.props.taskList;
    const activeTaskList = taskList.filter((task) => !task.isCompleted);
    const completedTaskList = taskList.filter((task) => task.isCompleted);
    return (
      <div className="each-task-container">
        {showTask === "all" &&
          taskList.map((task) => {
            return (
              <IndividualTask
                key={task.taskId}
                task={task}
                handleDeleteTask={this.props.handleDeleteTask}
                handleToggleComplete={this.props.handleToggleComplete}
                handleSaveEdit={this.props.handleSaveEdit}
              />
            );
          })}

        {showTask === "active" &&
          activeTaskList.map((task) => {
            return (
              <IndividualTask
                key={task.taskId}
                task={task}
                handleDeleteTask={this.props.handleDeleteTask}
                handleToggleComplete={this.props.handleToggleComplete}
              />
            );
          })}
        {showTask === "completed" &&
          completedTaskList.map((task) => {
            return (
              <IndividualTask
                key={task.taskId}
                task={task}
                handleDeleteTask={this.props.handleDeleteTask}
                handleToggleComplete={this.props.handleToggleComplete}
              />
            );
          })}
      </div>
    );
  }
}
