import { Component } from "react";
import EachTask from "./EachTask";

export default class ShowTask extends Component {
  render() {
    const taskList = this.props.taskList;
    const showTask = this.props.showTask;
    const handleClearAllTasks = this.props.handleClearAllTasks;
    const handleDeleteCompletedTasks = this.props.handleDeleteCompletedTasks;
    const handleChangeShowTask = this.props.handleChangeShowTask;
    return (
      <div className="show-task">
        <div className="select-container">
          <select
            value={showTask}
            onChange={(event) => handleChangeShowTask(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <div className="button-container">
            <p title="removes all tasks" onClick={handleClearAllTasks}>
              Remove all tasks
            </p>
            <p
              title="removes completed tasks"
              onClick={handleDeleteCompletedTasks}
            >
              Remove completed tasks
            </p>
          </div>
        </div>
        <EachTask
          title=""
          taskList={taskList}
          showTask={showTask}
          handleDeleteTask={this.props.handleDeleteTask}
          handleToggleComplete={this.props.handleToggleComplete}
          handleSaveEdit={this.props.handleSaveEdit}
        />
      </div>
    );
  }
}
