import BillIcon from "../icons/BillIcon";
import SearchIcon from "../icons/SearchIcon";
import HeaderMenu from "./HeaderMenu";

const NavBar = () => {
  return (
    <nav className="flex h-full flex-1">
      {/* logo */}
      <div className="hidden sm:flex justify-center px-6 h-[70px]">
        <img src="/logo.png" alt="logo" className="object-cover" />
      </div>
      {/* nav */}
      <div className="bg-blackTertiary flex-1 flex justify-between h-full rounded-[20px] py-4 pl-6 pr-8">
        {/* Search */}
        <div className="relative hidden lg:block">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F5F6FA] pl-12 text-black focus:outline-none min-w-[350px] py-2 px-4 rounded-full w-full"
          />
        </div>
        {/* menu */}
        <div className="flex gap-6 w-full sm:w-fit ml-auto justify-between sm:justify-end items-center">
          <BillIcon />
          <div className="flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-[#D8D8D8]">
              <img src="/user.png" alt="user" className="object-cover " />
            </div>
            <div className="flex flex-col font-nunito-sans">
              <p className="text-[#404040] font-bold text-sm">Moni Roy</p>
              <p className="text-[#404040] font-semibold text-xs">Admin</p>
            </div>
            {/* <Chevron /> */}
            <HeaderMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
