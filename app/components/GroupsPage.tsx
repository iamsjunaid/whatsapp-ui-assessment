import {HiMiniUserGroup, HiOutlineQuestionMarkCircle, HiOutlineBell} from 'react-icons/hi2';
import { RxDotFilled } from "react-icons/rx";
import { createClient } from '@/utils/supabase/server';
import GroupsTable from './GroupsTable';
import Button from './Button';

const GroupsPage = async () => {
  const supabase = await createClient();
  const { data: groups, error } = await supabase.from('groups').select();

  if (error) {
    console.error('Error fetching groups:', error);
    return <div>Error loading groups</div>;
  }

  if (!groups) {
    return <div>No groups found</div>;
  }  
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-between items-center p-2 border-b-2'>
          <button className='flex items-center justify-around gap-1 text-xs text-gray-500'><HiMiniUserGroup/><span className=''>groups</span></button>
        <div className='flex justify-around items-center gap-2'>
          <Button style='p-1'><HiOutlineQuestionMarkCircle/>Docs</Button>
          <Button style='px-4 py-1'><RxDotFilled className='text-green-800 size-4'/>+91 90043 89372</Button>
          <Button style='p-1'><HiOutlineBell /></Button>
        </div>
      </div>
      <GroupsTable groups={groups} />
    </div>
  );
};

export default GroupsPage;
