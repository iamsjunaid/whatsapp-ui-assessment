import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import SidePanel from "./components/SidePanel";

export default function Home() {
  return (
    <div className="h-screen flex justify-between w-full">
      <Sidebar />
      <Table />
      <SidePanel />
    </div >
  );
}
