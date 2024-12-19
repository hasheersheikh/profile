"use client";
import { Box, Typography } from "@mui/material";
import { IoMailSharp } from "react-icons/io5";
import { FaRegHandPeace } from "react-icons/fa";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { Timeline } from "./components/Timeline";
import ProjectCard from "./components/projects";
import CertificationCard from "./components/certification";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const experience = [
    { position: "SDE", company: "CorEdge.io", current: true, from: "Dec 2022" },
    {
      position: "Senior Software Engineer",
      company: "Persistent Systems",
      from: "Nov 2020",
      to: "Nov 2022",
    },
    {
      position: "Software Engineer - Intern",
      company: "ZS Associates",
      from: "Jan 2020",
      to: "July 2020",
    },
  ];

  const projects = [
    {
      title: "Emails",
      description:
        "A simple email newsletter for tech heads using react email and resend",
      githubLink: "https://github.com/hasheersheikh/emails",
      previewLink: "https://emails-zol8.vercel.app/",
    },
  ];

  const certifications = [
    {
      name: "Machine Learning",
      source: "Coursera",
      identifier: "VZARQXD386XQ",
      externalLink:
        "https://www.coursera.org/account/accomplishments/verify/VZARQXD386XQ",
    },
  ];

  return (
    <main>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>Experience</Tab>
          <Tab value={1}>Projects</Tab>
          <Tab value={2}>Certifications</Tab>
          <Tab value={3}>Contact</Tab>
        </TabsList>
        <TabPanel value={0}>
          <Box minHeight={"40vh"}>
            {experience.map((data) => (
              <Box key={data.position}>
                <Timeline data={data} />
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={1}>
          <Box minHeight={"40vh"}>
            {projects.map((i) => (
              <Box key={i.title}>
                <ProjectCard {...i} />
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={2}>
          <Box minHeight={"40vh"}>
            {certifications.map((i) => (
              <Box key={i.name}>
                <CertificationCard {...i} />
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={3}>
          <Box minHeight={"40vh"}>
            <Typography variant="h5" fontFamily={"monospace"} sx={{ mt: 2 }}>
              Contact
            </Typography>
            <Box m={2} height={70}>
              <Box display={"flex"} gap={2}>
                <IoMailSharp />
                <Box fontFamily={"monospace"} fontSize={16}>
                  hasheersheikh@gmail.com
                </Box>
              </Box>
              <Box display={"flex"} gap={2} mt={2}>
                <Box fontFamily={"monospace"} fontSize={16}>
                  Let's work on something together, you can book a meeting below
                  or drop a dm on{" "}
                  <a
                    target="_blank"
                    href="https://x.com/direct_messages/create/hasheersheikh"
                  >
                    twitter
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
      </Tabs>

      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
        >
          <FaRegHandPeace size={40} />
          <Typography>© 2025 - Hashir Sheikh</Typography>
        </Box>
      </Box>
    </main>
  );
}

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
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #000000;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #000000;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #000000;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
 
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color:  #000000;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  place-content: space-between center;
  box-shadow: 0 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
