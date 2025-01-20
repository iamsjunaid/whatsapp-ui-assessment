import dateFormat from 'dateformat';

import { HiMiniArrowPath, HiChevronUpDown } from "react-icons/hi2";
import { PiExport } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

import { Group } from '@/utils/types';

import { formatDistanceToNow } from 'date-fns';
import Button from "./Button";

type SidePanelProps = {
  group: Group;
};

const SidePanel = ({ group }: SidePanelProps) => {
  console.log(group);
  
  if (!group) return null;
  return (
    <div className="text-xs">
      <div className='flex justify-between items-start p-4'>
        <p className=" font-semibold mb-2">{group.name}</p>
        <button className="flex justify-between items-center text-gray-500">< HiMiniArrowPath />refresh</button>
      </div>

      <div className='flex gap-4 mb-4 text-gray-500 border-b-2 border-gray-200 px-4'>
        <p className='border-b-2 border-green-700 text-green-700 p-2'>Overview</p>
        <p className='p-2'>Members</p>
        <p className='p-2'>Logs</p>
      </div>

      <div className=" border-b-2 border-gray-200 px-2">
        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Last Active</h2>
          <p className="mt-2">{formatDistanceToNow(new Date(group.last_active))} ago</p>
        </div>

        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Disappearing Messages</h2>
          <p className=" flex justify-around gap-1 items-center mt-2">OFF<HiChevronUpDown /></p>
        </div>

        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Send Message Permission</h2>
          <p className=" flex justify-around gap-1 items-center mt-2">All<HiChevronUpDown /></p>
        </div>

        <div className="mb-4 flex justify-between items-center gap-4">
          <h2 className="font-semibold text-gray-500">Projects</h2>
          <p className={
            group.project === '#Demo' ? 'text-blue-800 bg-blue-100 rounded-full py-1 px-2' : 'text-red-800 bg-red-100 rounded-full py-1 px-2'
          }>{group.project}</p>
        </div>

        <div className="mb-4 flex justify-between items-start gap-4">
          <h2 className="font-semibold text-gray-500">Labels</h2>
          <div className="mt-0 flex flex-col gap-2">
            {group.labels.map((label, index) => {
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

            <p
              className="px-2 py-1 rounded-full border flex items-center gap-2 text-xs text-gray-500"
            >
              + Add label
            </p>

          </div>
        </div>

      </div>

      <div className="w-1/2 px-4 py-2 flex flex-col gap-2">
        <div className="flex items-center gap-2 ">
          <PiExport />
          <p>Export Chat</p>
        </div>
        <div className="flex items-center gap-2 text-red-600">
          <IoExitOutline />
          <p>Exit Group</p>
        </div>
      </div>

      <div className="shadow-lg rounded-md p-4 w-5/4 self-center mx-4 text-xs flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">PER-011 | {group.name}</p>
                <p className="rounded-full p-1 bg-blue-800 text-white text-xs flex items-center justify-center size-4"><span>H</span></p>
            </div>
            <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded-full border-2 border-red-600"></span>
                <p className="font-semibold">Issues with mentions on groups</p>
            </div>
            <div className="flex items-center gap-1">
              <Button style="p-1"><GiNetworkBars /></Button>
              <Button style="px-2 py-1"><SlCalender className="text-pink-600"/>{dateFormat(group.last_active, "mmm, dd")}</Button>
              <Button style="px-2 py-1"><p className="w-2 h-2 rounded-full bg-gray-500"></p>{group.project.slice(1)}</Button>
            </div>
      </div>
    </div>
  );
};

export default SidePanel;
