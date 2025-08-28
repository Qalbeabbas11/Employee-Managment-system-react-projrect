import React from "react";
import NewTask from "../Tasklist/NewTask";
import FailedTask from "../Tasklist/FailedTask";
import CompleteTask from "../Tasklist/CompleteTask";
import AcceptTask from "../Tasklist/AcceptTask";

const TaskScroolBar = ({ data }) => {
  // Guard: admin ya invalid data par safely exit
  if (!data || !data.taskcount || !Array.isArray(data.tasks)) {
    return null;
  }

  const tasks = data.tasks;

  // Category wise split
  const newTasksArr = tasks.filter(t => t.newTask);
  const completedArr = tasks.filter(t => t.completed);
  const failedArr = tasks.filter(t => t.failed);
  const acceptedArr = tasks.filter(t => t.active); // accepted == active

  // Helper: jis count ki zaroorat ho, utne items cycle karke banao
  const repeatToCount = (arr, count) => {
    if (!count || count <= 0) return [];
    if (arr.length === 0) return Array.from({ length: count }, () => null);
    return Array.from({ length: count }, (_, i) => arr[i % arr.length]);
  };

  const newCards      = repeatToCount(newTasksArr,  data.taskcount.newTasks || 0);
  const doneCards     = repeatToCount(completedArr,  data.taskcount.completed || 0);
  const failedCards   = repeatToCount(failedArr,     data.taskcount.failed || 0);
  const acceptCards   = repeatToCount(acceptedArr,   data.taskcount.accep || 0);

  // Fallback task jab storage me koi matching item hi na ho
  const fallback = (statusLabel) => ({
    title: `${statusLabel} task`,
    description: "No matching task found in storage.",
    date: "",
    category: ""
  });

  return (
    <div
      id="scrolling"
      className="flex h-[300px] py-5 flex-nowrap px-5 gap-6 mt-[65px] overflow-x-auto"
    >
      {/* NewTask cards */}
      {newCards.map((task, i) => (
        <NewTask key={`new-${i}`} data={task ?? fallback("New")} />
      ))}

      {/* Completed cards */}
      {doneCards.map((task, i) => (
        <CompleteTask key={`complete-${i}`} data={task ?? fallback("Completed")} />
      ))}

      {/* Failed cards */}
      {failedCards.map((task, i) => (
        <FailedTask key={`failed-${i}`} data={task ?? fallback("Failed")} />
      ))}

      {/* Accepted cards */}
      {acceptCards.map((task, i) => (
        <AcceptTask key={`accept-${i}`} data={task ?? fallback("Accepted")} />
      ))}
    </div>
  );
};

export default TaskScroolBar;
