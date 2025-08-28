import React from 'react'
import Header from '../Sections/Header'
import TaskArea from '../Sections/TaskArea'
import TaskScroolBar from '../Sections/TaskScroolBar'

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className='h-full w-full bg-zinc-800 p-10 text-white'>
      <Header data={data} handleLogout={handleLogout} />
      <TaskArea data={data} />
      <TaskScroolBar data={data} />
    </div>
  )
}

export default EmployeeDashboard