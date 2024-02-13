import { Fragment } from "react";
import { cn } from "../cn";
import { labels } from "../data/alert-labels";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-0.5 h-5 bg-white self-stretch", className)}></div>
  );
};

const Labels = () => {
  return (
    <div className="flex flex-wrap gap-y-8 h-full items-center justify-between w-full gap-x-4">
      {labels.map((label, i) => (
        <Fragment key={i}>
          <div key={i} className="flex gap-1 h-full items-center">
            <img
              src={label.src}
              alt={label.alt}
              className="w-[40px] h-[30px]"
            />
            <p>{label.title}</p>
          </div>
          {i !== labels.length - 1 && <Divider className="hidden lg:block" />}
        </Fragment>
      ))}
    </div>
  );
};

const Alert = ({ isOpen, alert }: { isOpen?: boolean; alert: string }) => {
  return (
    <div
      className={cn(
        "flex font-nunito-sans px-6 rounded-lg flex-col border-[0.6px] border-solid border-[#D5D5D5] gap-6 items-center",
        {
          "bg-blackTertiary  py-4": !isOpen,
          "gradiant py-8 ": isOpen,
        }
      )}
    >
      {isOpen && <Labels />}
      <p className="font-semibold w-full text-sm sm:text-base md:text-lg lg:text-xl">
        {alert}
      </p>
    </div>
  );
};

export default Alert;
