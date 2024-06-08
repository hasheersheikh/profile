import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaRegHandPeace } from "react-icons/fa";

const Timeline: FC<any> = ({ data }) => {
  return (
    <Box m={2} height={70}>
      <Box
        display={"flex"}
        fontFamily={"monospace"}
        gap={3}
        fontSize={16}
        position={"relative"}
      >
        <Box
          sx={{
            borderLeft: data.current ? "2px solid black" : "2px solid #ebebeb",
            height: 55,
            position: "absolute",
            top: 22,
            left: 6,
          }}
        />
        <Box
          sx={{
            height: "15px",
            width: "15px",
            backgroundColor: data.current ? "black" : "#ebebeb",
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
        <Box display={"flex"} gap={1} flexDirection={"column"}>
          <Box fontWeight={600} display={"flex"} gap={2} alignItems={"center"}>
            <Box>{data.position} </Box>
            {data.current && (
              <Chip label="Current" variant="outlined" size="small" />
            )}
          </Box>
          <Box>{data.company}</Box>
          {data.current ? (
            <Box>{data.from}</Box>
          ) : (
            <Box>
              {data.from} - {data?.to}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default function Home() {
  const experience = [
    {
      position: "SDE I",
      company: "CorEdge.io",
      current: true,
      from: "Dec 2022",
    },
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

  return (
    <main>
      <Typography variant="h5" fontFamily={"monospace"}>
        Experience
      </Typography>
      {experience.map((data) => (
        <Timeline data={data} />
      ))}

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
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
        >
          <FaRegHandPeace size={40} />
          <Typography>© 2024 - Hashir Sheikh</Typography>
        </Box>
      </Box>
    </main>
  );
}
