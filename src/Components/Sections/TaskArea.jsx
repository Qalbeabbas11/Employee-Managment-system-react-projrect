import React from 'react'

const TaskArea = ({ data }) => {
  const taskcount = data?.taskcount || {};
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[60px] px-5 sm:px-[40px] lg:px-[70px]">
        
        <div className='h-40 bg-red-700 rounded-xl px-6 flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-white'>{taskcount.newTasks || 0}</h1>
          <h2 className='text-xl sm:text-2xl mt-2 text-white'>New Task</h2>
        </div>

        <div className='h-40 bg-emerald-700 rounded-xl px-6 flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-white'>{taskcount.completed || 0}</h1>
          <h2 className='text-xl sm:text-2xl mt-2 text-white'>Completed Task</h2>
        </div>

        <div className='h-40 bg-blue-500 rounded-xl px-6 flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-white'>{taskcount.accep || 0}</h1>
          <h2 className='text-xl sm:text-2xl mt-2 text-white'>Accept Task</h2>
        </div>

        <div className='h-40 bg-yellow-600 rounded-xl px-6 flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-white'>{taskcount.failed || 0}</h1>
          <h2 className='text-xl sm:text-2xl mt-2 text-white'>Failed Task</h2>
        </div>

      </div>
    </>
  )
}

export default TaskArea
