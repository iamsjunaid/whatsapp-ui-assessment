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
        <div className="p-4 border-r-2 w-1/4">
            {/* Header Section */}
            <div className="flex justify-around items-center gap-2 mx-auto text-xs">
                <Image src={periskope} alt="periskope" className="size-8" />
                <div>
                    <p>Periskope</p>
                    <p className="text-gray-500">bharat@hashlabs.dev</p>
                </div>
                <button>
                    <HiChevronUpDown className="size-8" />
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
                            <button className="flex items-center gap-4">
                                <Icon className='size-5' />
                                <span>{title}</span>
                            </button>
                            {badge && (
                                <span className="bg-green-500 text-white rounded-xl text-xs p-1">
                                    {badge}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
