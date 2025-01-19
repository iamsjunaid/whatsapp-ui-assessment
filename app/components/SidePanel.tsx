import { HiMiniArrowPath } from "react-icons/hi2";

import { Group } from '@/utils/types';

import { formatDistanceToNow } from 'date-fns';

type SidePanelProps = {
  group: Group;
};

const SidePanel = ({ group }: SidePanelProps) => {
  if (!group) return null;
  return (
    <div className="text-xs">
      <div className='flex justify-between items-center mb-4 p-2'>
        <p className=" font-semibold mb-2">{group.name}</p>
        <button className="flex justify-between items-center text-gray-500">< HiMiniArrowPath />refresh</button>
      </div>

      <div className='flex gap-4 mb-4 text-gray-500 border-b-2 border-gray-200 px-2'>
        <p className='border-b-2 border-green-700 text-green-700'>Overview</p>
        <p className=''>Members</p>
        <p className=''>Logs</p>
      </div>

      <div className=" border-b-2 border-gray-200 px-2">
        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Last Active</h2>
          <p className="mt-2">{formatDistanceToNow(new Date(group.last_active))} ago</p>
        </div>

        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Projects</h2>
          <p className="mt-2">{group.project}</p>
        </div>

        <div className="mb-4 flex justify-between items-start gap-4">
          <h2 className="font-semibold text-gray-500">Labels</h2>
          <div className="mt-0">
            {group.labels.map((label, index) => (
              <p key={index} className="px-2 py-1 rounded-full border text-xs mb-1">
                {label}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Members</h2>
          <p className="mt-2">{group.members}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
