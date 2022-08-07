import { useState } from "react";
import { RegionSetting } from "../lib/types/region";
import ButtonOK from "./ButtonOK";
import Calendar from "./Calendar";
import CardRegion from "./CardRegion";
import DialogRegion from "./DialogRegion";

const MainView = () => {
  const [regions, setRegions] = useState<RegionSetting[]>([]);
  return (
    <>
      <CardRegion
        selectedRegions={regions}
        setSelectedRegions={setRegions}
      ></CardRegion>
      <Calendar regions={regions}></Calendar>
    </>
  );
};

export default MainView;
