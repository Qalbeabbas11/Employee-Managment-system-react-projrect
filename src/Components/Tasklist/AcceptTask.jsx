import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div>
      <div className="h-full w-[300px] flex-shrink-0 bg-blue-500 p-7 rounded-xl">
        <div className="flex justify-between items-center text-sm rounded-xl">
          <h3 className="bg-red-500 p-2 rounded-xl ">High</h3>
          <h3 className="text-sm">{data.date}</h3>
        </div>
        <h1 className="mt-7 text-xl font-semibold">{data.title}</h1>
        <p className="text-sm mt-1">
         {data.description}
        </p>
        <button className="bg-red-500 mt-5 text-md rounded-xl px-3 py-2  ">
          Accepted
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
