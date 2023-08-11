'use client'
import { useState, useEffect, useRef } from 'react'
import {IoSendSharp} from 'react-icons/io5'

import { response } from '@/server/server'
import WelcomePage from "@/components/WelcomePage"
import Chat from "@/components/Chat"

export default function Home() {


  const [input, setInput] = useState("")
  const [inputOff, setInputOff] = useState(false)
  const [page, setPage] = useState(true)
  const messageEl = useRef(null);
  const [chats, setChats] = useState([
    {
      user : "gpt",
      message : "Haw can I help you today?"
    }
  
  ])

  useEffect(() => {
    if (messageEl) {
      messageEl?.current?.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const sendMessage = async(e)=>{
    e.preventDefault()
    setPage(false)
    setInputOff(true)
    setChats([...chats, {user : "me", message : input}])
    setInput("")
    const res = await response(input)
    setChats([...chats, 
        {user : "me", message : input},
        {user : "gpt", message : res.out}
    ])
    setInputOff(false)
  }

  return (
    <div className="flex-1 relative flex flex-col">
      {
        page ? <WelcomePage /> : <Chat messageEl={messageEl} chats={chats} />
      }
      <div className='w-full relative '>
        {
          inputOff &&
          <div className='max-w-3xl mx-auto'>
          <h3 className=' absolute text-sm text-gray-300 px-3 -top-12 md:-top-8'>Thinking...</h3>
          </div>
        }

        <div className='max-w-3xl mx-3 relative -top-5 md:-top-0 md:mx-auto bg-[#40414F] shadow rounded-xl'>
           <form onSubmit={sendMessage}>
            <div className='flex justify-between items-center gap-2 h-12 md:h-14 '>
                <div className='flex items-center justify-center flex-1 h-12'>
                    <input onChange={e=> setInput(e.target.value)} value={input} required className='w-full bg-transparent text-[#FFFFF4] font-normal text-sm px-2 focus:outline-none md:px-4 h-10 md:h-12' type="text" placeholder='Send a message || Development by Mohiuddin' />
                </div>
                <div className='relative flex items-center justify-center mr-2'>
                    <input className='opacity-0 cursor-pointer h-7 z-10' disabled={inputOff} type="submit" value="send" />
                    <span className={`${input ? "bg-[#19C37D] !text-white  p-1 " : "" } absolute rounded-md text-[#6B6C7B]`}><IoSendSharp size={20} /></span>
                </div>
            </div>
           </form>
        </div>
      </div>
    </div>
  )
}
