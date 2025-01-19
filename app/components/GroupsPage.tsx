import { createClient } from '@/utils/supabase/server';
import GroupsTable from './GroupsTable';

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
    <div className='w-full'>
      <GroupsTable groups={groups} />
    </div>
  );
};

export default GroupsPage;
