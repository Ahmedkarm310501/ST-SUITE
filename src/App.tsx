import Alerts from "./components/Alerts";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <div className="w-full flex text-white flex-col gap-3 min-h-screen p-4 bg-primary">
      {/* NAVBAR */}
      <div className="h-[70px]">
        <NavBar />
      </div>
      {/* TABS */}
      <div className="flex gap-2">
        <Tabs />
      </div>
      {/* MAIN */}
      <div className="flex flex-col lg:flex-row gap-8 h-full rounded-2xl py-6 md:py-[40px] px-6 md:px-[40px] bg-blackTertiary flex-1">
        {/* SIDE */}
        <div className="flex flex-col shrink-0 h-fit md:h-auto w-full lg:w-[300px] rounded-2xl bg-primary">
          <SideBar />
        </div>
        {/* Content */}
        <div className="flex flex-col">
          <Alerts />
        </div>
      </div>
    </div>
  );
}
