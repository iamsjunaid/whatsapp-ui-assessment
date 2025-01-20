import Image from 'next/image';
import periskope from '@/public/periskope.png';
import {
    HiHome,
    HiMiniChatBubbleOvalLeftEllipsis,
    HiMiniUserGroup,
    HiMiniIdentification,
    HiBellAlert,
    HiFolderOpen,
    HiCog6Tooth,
    HiChevronUpDown
} from 'react-icons/hi2';

import { IoLogoWhatsapp } from "react-icons/io";

const menuItems = [
    { icon: HiHome, title: 'Dashboard' },
    { icon: HiMiniChatBubbleOvalLeftEllipsis, title: 'Chats', badge: '99+' },
    { icon: HiMiniUserGroup, title: 'Groups' },
    { icon: HiMiniIdentification, title: 'Contacts' },
    { icon: HiBellAlert, title: 'Logs' },
    { icon: HiFolderOpen, title: 'Files' },
    { icon: HiCog6Tooth, title: 'Settings' },
];

const Sidebar = () => {
    return (
        <div className="p-2 border-r-2 w-64 h-screen">
            {/* Header Section */}
            <div className="flex justify-around items-center gap-2 mx-auto text-xs">
                <Image src={periskope} alt="periskope" className="size-8" />
                <div>
                    <p className='font-semibold'>Periskope</p>
                    <p className="text-gray-500">bharat@hashlabs.dev</p>
                </div>
                <button>
                    <HiChevronUpDown className="size-4 text-gray-500" />
                </button>
            </div>

            {/* Menu Section */}
            <div className="mt-8">
                <ul className="space-y-2 text-gray-700 text-sm">
                    {menuItems.map(({ icon: Icon, title, badge }, index) => (
                        <li
                            key={index}
                            className="hover:text-green-800 hover:bg-gray-100 p-2 rounded-md flex justify-between items-center cursor-pointer"
                        >
                            <button className="flex items-center gap-2">
                                <Icon className='size-4' />
                                <span className='text-xs font-semibold'>{title}</span>
                            </button>
                            {badge && (
                                <span className="bg-green-500 text-white rounded-xl text-[0.50rem] px-1">
                                    {badge}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Whatsapp Section */}
            <div className="absolute bottom-0 p-2 rounded-md flex justify-between items-center cursor-pointer">
                <button className="flex items-center gap-2">
                    <IoLogoWhatsapp className='size-4 text-green-700' />
                    <span className='text-xs'>Help & Support</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
