import Image from 'next/image'

import periskope from '@/public/periskope.png'

import { HiHome, HiMiniChatBubbleOvalLeftEllipsis, HiMiniUserGroup, HiMiniIdentification, HiBellAlert, HiFolderOpen, HiCog6Tooth, HiChevronUpDown } from 'react-icons/hi2'

const Sidebar = () => {
    return (
        <div className="p-4 border-r-2 w-1/4">
            <div className="flex justify-around items-center gap-2 mx-auto text-xs">
                <Image src={periskope} alt="periskope" className='size-8' />
                <div >
                    <p>Periskope</p>
                    <p className="text-gray-500">bharat@hashlabs.dev</p>
                </div>
                <button><HiChevronUpDown className='size-8' /></button>
            </div>
            <div className="mt-8">
                <ul className='space-y-2 text-gray-700 text-sm'>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiHome size={14} />
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md flex justify-between items-center'>
                        <button className="flex items-center gap-4">
                            <HiMiniChatBubbleOvalLeftEllipsis size={14} />
                            <span>Chats</span>
                        </button>
                        <span className='bg-green-400 text-white rounded-xl text-xs p-1'>99+</span>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiMiniUserGroup size={14} />
                            <span>Groups</span>
                        </button>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiMiniIdentification size={14} />
                            <span>Contacts</span>
                        </button>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiBellAlert size={14} />
                            <span>Logs</span>
                        </button>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiFolderOpen size={14} />
                            <span>Files</span>
                        </button>
                    </li>
                    <li className='hover:text-green-800 hover:bg-gray-100 p-2 rounded-md'>
                        <button className="flex items-center gap-4">
                            <HiCog6Tooth size={14} />
                            <span>Settings</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
