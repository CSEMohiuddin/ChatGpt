import {BiUser} from 'react-icons/bi'
import Image from 'next/image'
import gpt from '../public/gpt.png'

import MobileHeader from '@/components/MobileHeader'

function Chat({chats, messageEl}) {
  return (
    <div className='w-full' >
        <MobileHeader />
        <div ref={messageEl}  className='overflow-y-auto h-[calc(100vh-88px)] md:h-[calc(100vh-128px)]'>
            {
                chats?.map((c, val)=>(
                <div key={val} className='flex flex-col'>
                    {
                    c.user === "gpt" && 
                    <div className='w-full bg-[#444654] py-2 md:py-5'>
                        <div className='max-w-3xl mx-auto flex gap-2 md:gap-4 items-start px-3 '>
                            <Image src={gpt} width={30} height={30} alt="gpt"/>
                            <p className='text-sm font-light tracking-wide text-gray-300'>{c.user === "gpt" && c.message}</p>
                        </div>
                    </div>
                    }
                    {
                    c.user === "me" &&
                    <div className='w-full py-2 md:py-5'>
                        <div className='max-w-3xl mx-auto flex gap-2 md:gap-4 items-start px-3'>
                            <span className='text-gray-100 text-2xl md:text-3xl '><BiUser /></span>
                            <p className='text-sm font-light tracking-wide text-gray-200'>{c.user === "me" && c.message}</p>
                        </div>
                    </div>
                    }
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Chat