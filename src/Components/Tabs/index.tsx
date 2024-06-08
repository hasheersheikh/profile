"use client";

import React, { FC, useState } from "react";

import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Link from "next/link";

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: monospace;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${grey[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${grey[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  () => `
    background-color: black;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    `
);

const InfoTabs: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabChange = (v: any) => {
    setSelectedTab(v);
  };
  return (
    <>
      <Tabs onChange={onTabChange} value={selectedTab}>
        <TabsList>
          <Tab value={0}>
            <Link href={"/"} style={{ color: "white" }}>
              About
            </Link>
          </Tab>
          <Tab value={1}>
            <Link href={"/contact"} style={{ color: "white" }}>
              Contact
            </Link>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  );
};

export default InfoTabs;
