'use client';

import { useState } from 'react';
import { Group } from '@/utils/types';
import SidePanel from './SidePanel';
import { formatDistanceToNow } from 'date-fns';
import Search from './Search';

type GroupsTableProps = {
    groups: Group[];
};

const GroupsTable = ({ groups }: GroupsTableProps) => {
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

    const handleClick = (group: Group) => {
        setSelectedGroupId(group.id);
        setSelectedGroup(group);
    };

    return (
        <>
            <div className="flex text-xs ">
                <div className="w-full overflow-y-auto border-b border-r">
                    <div className=''><Search /></div>
                    <table className="w-full text-left text-gray-700 border-collapse">
                        <thead className="border-t-2 border-b-2 text-semibold">
                            <tr className="">
                                <th className="py-2 px-8">
                                    <input type="checkbox" />
                                </th>
                                <th className='text-left'>Group Name</th>
                                <th className='text-center'>Project</th>
                                <th className='text-center'>Labels</th>
                                <th className='text-center'>Members</th>
                                <th>Last Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group) => (
                                <tr
                                    key={group.id}
                                    className="hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleClick(group)}
                                >
                                    <td className="py-4 px-8">
                                        <input
                                            type="checkbox"
                                            checked={group.id === selectedGroupId}
                                            readOnly
                                        />
                                    </td>
                                    <td className='text-left'>{group.name}</td>
                                    <td className='text-center px-2'>
                                        <p className={
                                            group.project === '#Demo' ? 'text-blue-800 bg-blue-100 rounded-full p-1' : 'text-red-800 bg-red-100 rounded-full p-1'
                                        }>{group.project}</p>
                                    </td>
                                    <td className="px-8">
                                        <div className="flex flex-wrap gap-1">
                                            {group.labels.slice(0, 2).map((label, index) => {
                                                const getDotColor = (label: string) => {
                                                    switch (label.toLowerCase()) {
                                                        case 'high value':
                                                        case 'pilot':
                                                            return 'bg-purple-500';
                                                        case 'priority':
                                                            return 'bg-green-500';
                                                        case 'warm':
                                                            return 'bg-red-500';
                                                        default:
                                                            return null;
                                                    }
                                                };

                                                const dotColor = getDotColor(label);

                                                return (
                                                    <p
                                                        key={index}
                                                        className="px-2 py-1 rounded-full border flex items-center gap-2 text-xs"
                                                    >
                                                        {dotColor && (
                                                            <span
                                                                className={`w-2 h-2 rounded-full ${dotColor}`}
                                                            ></span>
                                                        )}
                                                        {label}
                                                    </p>
                                                );
                                            })}

                                            {/* Display "+1 more" if there are additional labels */}
                                            {group.labels.length > 2 && (
                                                <p className="px-2 py-1 rounded-full border flex items-center gap-2 text-xs">
                                                    {group.labels.length - 2}+
                                                </p>
                                            )}
                                        </div>
                                    </td>

                                    <td className='text-center'>{group.members}</td>
                                    <td>
                                        {group.last_active
                                            ? formatDistanceToNow(new Date(group.last_active), {
                                                addSuffix: true,
                                            })
                                            : 'N/A'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="w-1/3">
                    {selectedGroup ? (
                        <SidePanel group={selectedGroup} />
                    ) : (
                        <div className="py-4 px-8 text-gray-500">Select a group to view details</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GroupsTable;
