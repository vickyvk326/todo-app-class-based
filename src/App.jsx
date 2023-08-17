import { Component, createRef } from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import ShowTask from "./components/showTask";
export default class App extends Component {
  state = { currentInput: "", taskList: [], showTask: "all" };
  textInputRef = createRef();
  handleInputChange = (value) => {
    this.setState(() => {
      return { currentInput: value };
    });
  };

  handleAddTask = () => {
    this.setState(() => {
      if (
        this.state.taskList[this.state.taskList.length - 1]?.taskName ===
          this.state.currentInput ||
        this.state.currentInput === ""
      )
        return 0;
      return {
        taskList: [
          ...this.state.taskList,
          {
            taskName: this.state.currentInput,
            isCompleted: false,
            taskId:
              this.state.taskList.length === 0
                ? 1
                : this.state.taskList[this.state.taskList.length - 1].taskId +
                  1,
          },
        ],
      };
    });
    this.setState(() => {
      return { currentInput: "" };
    });
    this.textInputRef.current.value = "";
    console.log(this.state.taskList);
  };
  handleChangeShowTask = (value) => {
    this.setState(() => {
      return { showTask: value };
    });
  };
  handleClearAllTasks = () => {
    this.setState(() => {
      return { taskList: [] };
    });
  };
  handleDeleteTask = (id) => {
    this.setState(() => {
      return {
        taskList: this.state.taskList.filter((task) => task.taskId !== id),
      };
    });
  };
  handleToggleComplete = (id) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map((task) =>
        task.taskId === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      ),
    }));
  };
  handleDeleteCompletedTasks = () => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((task) => !task.isCompleted),
    }));
  };
  handleSaveEdit = (id, taskName) => {
    if (taskName === "") return 0;
    this.setState((prevState) => ({
      taskList: prevState.taskList.map((task) =>
        task.taskId === id ? { ...task, taskName: taskName } : task
      ),
    }));
  };
  render() {
    const handleInputChange = this.handleInputChange;
    const handleAddTask = this.handleAddTask;
    const textInputRef = this.textInputRef;
    return (
      <div className="app">
        <Navbar />
        <AddTask
          handleInputChange={handleInputChange}
          handleAddTask={handleAddTask}
          showTask={this.state.showTask}
          textInputRef={textInputRef}
        />
        <ShowTask
          taskList={this.state.taskList}
          showTask={this.state.showTask}
          handleClearAllTasks={this.handleClearAllTasks}
          handleChangeShowTask={this.handleChangeShowTask}
          handleDeleteTask={this.handleDeleteTask}
          handleToggleComplete={this.handleToggleComplete}
          handleDeleteCompletedTasks={this.handleDeleteCompletedTasks}
          handleSaveEdit={this.handleSaveEdit}
        />
      </div>
    );
  }
}
