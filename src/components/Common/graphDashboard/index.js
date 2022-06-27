import React, { useState } from "react";
import fakeData from "./fakeData";
import Graph from "./Graph";
import SelectPeriod from "./SelectPeriod";
import "./Style.css";
import Tab from "./Tab";

export default function GraphContainer() {
  const [period, setPeriod] = useState("last week");
  const [dataSrc, setDataSrc] = useState(fakeData.dataSrcInit);
  const [selectedTab, setSelectedTab] = useState("Assesments");
  const tabs = [
    {
      name: "Assesments",
      dataArrayName: "assesmentsData",
    },
    {
      name: "Reading",
      dataArrayName: "readingData",
    },
    {
      name: "Focus",
      dataArrayName: "focusData",
    },
    
  ];
  return (
    <div className="DashGraph">
      <div className="Tabs">
        {tabs.map((tab) => {
        return <Tab
            name={tab.name}
            dataArrayName={tab.dataArrayName}
            selectedTab={selectedTab}
            updateSelectedTab={(tabName) => {
              setSelectedTab(tabName);
            }}
            updateDataSource={(data) => {
              setDataSrc(fakeData[data]);
            }}
          />;
        })}
      </div>
      <div className="SelectBtn">
        <SelectPeriod isPeriod={[period, setPeriod]} />
      </div>
      <div className="Graph">
        <Graph d={dataSrc} />
      </div>
    </div>
  );
}
