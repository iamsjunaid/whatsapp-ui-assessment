'use client';

import { useState } from 'react';
import { Group } from '@/utils/types';
import SidePanel from './SidePanel';
import { formatDistanceToNow } from 'date-fns';

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
        <div className="flex h-screen text-xs">
            <div className="w-3/4 overflow-y-auto border-r">
                <table className="w-full text-left text-gray-700 border-collapse">
                    <thead className="border-t-2 border-b-2 text-semibold">
                        <tr className="shadow-lg">
                            <th className="py-4 px-8">
                                <input type="checkbox" />
                            </th>
                            <th>Group Name</th>
                            <th>Project</th>
                            <th>Labels</th>
                            <th>Members</th>
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
                                <td>{group.name}</td>
                                <td
                                    className={
                                        group.project === '#Demo' ? 'text-blue-500' : 'text-red-500'
                                    }
                                >
                                    {group.project}
                                </td>
                                <td>
                                    <div className="flex flex-wrap gap-1">
                                        {group.labels.map((label, index) => (
                                            <p
                                                key={index}
                                                className="px-2 py-1 rounded-full border"
                                            >
                                                {label}
                                            </p>
                                        ))}
                                    </div>
                                </td>
                                <td>{group.members}</td>
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

            <div className="w-1/4">
                {selectedGroup ? (
                    <SidePanel group={selectedGroup} />
                ) : (
                    <div className="p-4 text-gray-500">Select a group to view details</div>
                )}
            </div>
        </div>
    );
};

export default GroupsTable;
