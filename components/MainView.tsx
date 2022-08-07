import { useState } from "react";
import { RegionSetting } from "../lib/types/region";
import CardRegion from "./CardRegion";

/**
 * suppress warning when use fullcalendar on next.js.
 * following code ensures Calendar component will be imported on client-side.
 * detail:
 * https://www.learnfk.com/en/question/typescript/72140065.html
 */
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("./Calendar"), { ssr: false });

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
