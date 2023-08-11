'use client'

import {BsSun,BsLightningCharge} from 'react-icons/bs'
import {AiOutlineWarning} from 'react-icons/ai'

function WelcomePage() {
  return (
    <div className='w-full py-4 h-full'>
        <h1 className='text-center text-gray-100 text-xl font-semibold'>Chat GPT</h1>
        <div className='max-w-3xl mx-auto overflow-y-auto px-3 flex flex-col md:flex-row gap-5 justify-center items-center h-[calc(100vh-120px)] md:h-[450px] '>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <span className='text-gray-100'><BsSun size={25} /></span>
                    <h1 className='text-base font-normal text-gray-100 '>Examples</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='welcome'>"Explain quantum computing in simple terms"</p>
                    <p className='welcome'>"Got any creative ideas for a 10 year old's birthday?"</p>
                    <p className='welcome'>"How do I make an HTTP request in Javascript?"</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <span className='text-gray-100'><BsLightningCharge size={25} /></span>
                    <h1 className='text-base font-normal text-gray-100 '>Capabilities</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='welcome'>"Explain quantum computing in simple terms"</p>
                    <p className='welcome'>"Explain quantum computing in simple terms "</p>
                    <p className='welcome'>" Explain quantum computing in simple terms"</p>
                </div>
            </div>
            <div className=' flex-col hidden md:flex gap-3'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <span className='text-gray-100'><AiOutlineWarning size={25} /></span>
                    <h1 className='text-base font-normal text-gray-100 '>Limitations</h1>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='welcome'>"Explain  quantum computing in simple terms"</p>
                    <p className='welcome'>"Explain quantum  computing in simple terms"</p>
                    <p className='welcome'>"Explain quantum computing  in simple terms"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage