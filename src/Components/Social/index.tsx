"use client";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons: FC = () => {
  const router = useRouter();

  return (
    <Box display={"flex"} alignItems={"center"} gap={2} my={2}>
      <a
        href="https://github.com/hasheersheikh"
        target="_blank"
        style={{ color: "black" }}
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/hashirsheikh/"
        target="_blank"
        style={{ color: "black" }}
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://x.com/hasheersheikh"
        target="_blank"
        style={{ color: "black" }}
      >
        <FaXTwitter size={30} />
      </a>
    </Box>
  );
};

export default SocialIcons;
