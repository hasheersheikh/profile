"use client";
import { Box, Chip } from "@mui/material";
import { FC } from "react";

export const Timeline: FC<any> = ({ data }) => {
  return (
    <Box m={2} height={90}>
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
