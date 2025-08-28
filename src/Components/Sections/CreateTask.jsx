import React, { useState } from "react";

const CreateTask = () => {
  const [tasktitle, setTasktitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [Assignto, setAssignto] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // new task object
    const newTask = {
      id: Date.now(),
      tasktitle,
      taskDescription,
      taskDate,
      Assignto,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // get employees from localStorage
    const data = JSON.parse(localStorage.getItem("employees")) || [];

    // find employee jisko task assign hua hai
    const updatedData = data.map((emp) => {
      if (emp.name.toLowerCase() === Assignto.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskcount: {
            ...emp.taskcount,
            newTasks: emp.taskcount.newTasks + 1,
          },
        };
      }
      return emp;
    });

    // save updated employees data in localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // reset form
    setTasktitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignto("");
    setCategory("");

    alert("✅ Task Created & Assigned Successfully!");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="items-center flex justify-center mt-[70px] mb-10">
          <div className="main flex flex-col lg:flex-row gap-8 bg-emerald-700 min-h-screen w-[90%] sm:w-[85%] lg:w-[80%] rounded-xl justify-start items-center p-5 sm:p-10">
            {/* Left Section */}
            <div className="part-1 gap-y-10 p-5 sm:p-10 rounded-xl w-full lg:w-[50%]">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-2">
                Task Title
              </h3>
              <input
                value={tasktitle}
                onChange={(e) => setTasktitle(e.target.value)}
                required
                className="w-full h-[50px] rounded-lg p-5 mb-3 text-black"
                type="text"
                placeholder="Enter Task Title"
              />

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-2">
                Assign To
              </h3>
              <input
                value={Assignto}
                onChange={(e) => setAssignto(e.target.value)}
                required
                className="w-full h-[50px] rounded-lg p-5 mb-3 text-black"
                type="text"
                placeholder="Assign Task to Employee"
              />

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-2">
                Category
              </h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full h-[50px] rounded-lg p-5 mb-3 text-black"
                type="text"
                placeholder="design, development, testing, etc"
              />

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-2">
                Date
              </h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                required
                className="w-full h-[50px] rounded-lg p-5 mb-3 text-black"
                type="date"
              />
            </div>

            {/* Right Section */}
            <div className="part-2 flex flex-col w-full lg:w-[50%]">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2.5 mt-2">
                Task Description
              </h3>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
                className="w-full rounded-lg p-5 mb-3 text-black"
                cols={40}
                rows={12}
                placeholder="Enter Task Description"
              />
              <button className="bg-red-600 rounded-xl text-xl sm:text-2xl p-2 sm:p-3 text-white mt-3">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
