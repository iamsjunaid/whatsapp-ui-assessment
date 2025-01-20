import Sidebar from "./components/Sidebar";
import GroupsPage from "./components/GroupsPage";

export default function Home() {
  return (
    <div className="h-screen flex justify-between w-full">
      <Sidebar />
      <GroupsPage />
    </div >
  );
}
