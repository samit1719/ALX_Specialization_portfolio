// this component is the sidebar of the chat app with conversations and search input

import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
// import { GoPlus } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <h1 className="text-2xl font-bold">SwiftChat</h1>
      <p><small>V.10.3</small></p>
      {/* <GoPlus className='w-6 h-6 pl-10px' /> */}
      <div className="divider px-3"></div>
      <SearchInput />
       <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}
export default Sidebar;