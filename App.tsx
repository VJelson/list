import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { TodoTask } from "./Component/TodoTask";
import { Task } from "./Types";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodolist] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const changeDeadline = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask: Task = { taskName: task, deadLine: deadline };
    setTodolist([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (tasknametoDelete: string) => {
    const remainingTask = todoList.filter((task) => {
      return task.taskName !== tasknametoDelete;
    });
    setTodolist(remainingTask);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <input
            type="text"
            placeholder="task..."
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            placeholder="deadline (in Days)..."
            onChange={changeDeadline}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
