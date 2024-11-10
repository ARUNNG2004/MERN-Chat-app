import React, { useState } from 'react'

import SideBar from '../../components/SideBar/SideBar'
import Conversations from '../../components/SideBar/Conversations'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='flex sm:h-[450px] p-2 md:h-[550px] h-screen w-full rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    {/* Mobile Toggle Button */}
    <button
      onClick={() => setShowSidebar(!showSidebar)}
      className="absolute left-4 top-4 z-50 rounded-lg bg-gray-700 p-2 text-white sm:hidden"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={showSidebar ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {/* Sidebar */}
    <div className={`
      fixed sm:relative
      w-[380px]
      h-full
      z-40
      transition-transform duration-300
      ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
      sm:translate-x-0
    `}>
      <SideBar />
    </div>

    {/* Mobile Overlay */}
    {showSidebar && (
      <div
        className="fixed  h-auto inset-0 z-30 bg-black/50 sm:hidden"
        onClick={() => setShowSidebar(false)}
      />
    )}

    {/* Messages */}
    <div className="flex-1 relative">
      <MessageContainer />
    </div>
  </div>
  )}
export default Home
