"use client";
import { Box, IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const SocialIcons: FC = () => {
  const onButtonClick = () => {
    const pdfUrl = "../../../public/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box display={"flex"} alignItems={"center"} gap={2} my={2}>
      <Tooltip title="Github">
        <a
          href="https://github.com/hasheersheikh"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaGithub size={30} />
        </a>
      </Tooltip>
      <Tooltip title="Linkedin">
        <a
          href="https://www.linkedin.com/in/hashirsheikh/"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaLinkedin size={30} />
        </a>
      </Tooltip>
      <Tooltip title="Twitter / X">
        <a
          href="https://x.com/hasheersheikh"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaXTwitter size={30} />
        </a>
      </Tooltip>
      {/* <Tooltip title="Resume">
        <IconButton onClick={onButtonClick}>
          <IoMdDownload size={30} />
        </IconButton>
      </Tooltip> */}
    </Box>
  );
};

export default SocialIcons;
