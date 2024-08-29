import React from 'react'
import Header from './Header'
import Main from './Main'
import './style.css'
const Dashboard = () => {
  return (
    <div>
      <div><Header /></div>
      <div
        className="w-full h-[10em] bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/poster.jpg')" }}
      >
        <div className="w-full h-[10em] flex flex-col justify-center pl-4 space-y-2 text-gray-50">
          <div className="text-lg font-bold text-[30px]">
            Find Your Dream Job
          </div>
          <div>
            Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!
          </div>
        </div>
      </div>
      <div><Main /></div>
    </div>
  )
}

export default Dashboard