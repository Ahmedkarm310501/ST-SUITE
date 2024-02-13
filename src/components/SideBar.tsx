import { useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { Button } from "@mantine/core";

const SideBar = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedMarketCap, setSelectedMarketCap] = useState<string | null>(
    null
  );
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-3 md:gap-6 py-6 h-full px-4">
      <p className="font-inter font-bold text-2xl md:text-3xl">Filters</p>
      <CustomSelect
        label="Industry"
        placeholder="Industry"
        items={["Health care", "Technology", "Finance", "Automotive"]}
        name="select"
        onChange={(val) => setSelectedIndustry(val)}
        selectedItem={selectedIndustry}
      />
      <CustomSelect
        label="Market Cap"
        placeholder="Market Cap"
        items={["Health care", "Technology", "Finance", "Automotive"]}
        name="select"
        onChange={(val) => setSelectedMarketCap(val)}
        selectedItem={selectedMarketCap}
      />
      <CustomSelect
        label="Risk"
        placeholder="Risk"
        items={["Health care", "Technology", "Finance", "Automotive"]}
        name="select"
        onChange={(val) => setSelectedRisk(val)}
        selectedItem={selectedRisk}
      />
      <Button className="w-full p-3 h-fit  bg-accent mt-auto text-white hover:bg-[#3d3783] text-xl md:text-2xl font-semibold rounded-xl">
        Apply Filters
      </Button>
    </div>
  );
};

export default SideBar;
