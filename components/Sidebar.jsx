'use client'
import {BsPlus} from 'react-icons/bs'

function Sidebar() {


function send (){
  alert('Features coming soon')
}

  return (
    <div className='w-[280px] h-screen bg-[#202123]'>
        <div className='px-2 py-4 flex felx-col gap-2'>
            <div onClick={send} className='flex items-center gap-4 w-full border border-zinc-600 h-10 px-4 rounded-md cursor-pointer'>
                <span className='text-gray-100'><BsPlus size={25} /></span>
                <p className='text-sm text-gray-100 font-normal'>New chat</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar