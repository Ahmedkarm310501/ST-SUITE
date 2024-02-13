import { NavLink } from "react-router-dom";
import { cn } from "../cn";

const Tab = ({
  title,
  commingSoon,
  to,
}: {
  title: string;
  to: string;
  commingSoon: boolean;
}) => {
  return (
    <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 items-center justify-center">
      {commingSoon && (
        <p className="bg-accent order-2 w-fit text-nowrap text-center text-xs sm:text-sm text-[#9089DC] px-2 rounded-full">
          Comming Soon
        </p>
      )}
      <NavLink
        to={to}
        className={cn(
          "text-base sm:text-lg text-center order-1 sm:order-2 md:text-2xl  lg:text-4xl font-bold",
          {
            "text-[#4848484D]": commingSoon,
          }
        )}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default Tab;
