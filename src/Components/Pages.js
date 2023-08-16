import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MMC from "./MMC";
import MGC from "./MGC";
import GGC from "./GGC";
import ChiSquareTest from "./ChiSquareTest";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="M/M/C" value="2" />
            <Tab label="M/G/C" value="3" />
            <Tab label="G/G/C" value="4" />
            <Tab label="ChiSquareTest" value="5" />
          </TabList>
        </Box>
        <TabPanel value="2">
          <MMC />
        </TabPanel>
        <TabPanel value="3">
          <MGC />
        </TabPanel>
        <TabPanel value="4">
          <GGC />
        </TabPanel>
        <TabPanel value="5">
          <ChiSquareTest />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
