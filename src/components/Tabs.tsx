import { Fragment } from "react";
import { Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { tabs } from "../data/tabs";
import Tab from "./Tab";

const Tabs = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className="bg-blackTertiary w-full flex-col gap-2 sm:flex-row py-4 px-8 md:py-5 md:px-12 flex font-inter justify-around rounded-2xl items-center h-full">
      {/* Tab */}
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <Tab {...tab} />
          {index !== tabs.length - 1 && (
            <Divider
              color="gray"
              orientation={isMobile ? "horizontal" : "vertical"}
              className="w-full sm:w-fit"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Tabs;
