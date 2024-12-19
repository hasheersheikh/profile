import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FaGithub } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { TbExternalLink } from "react-icons/tb";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  previewLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  previewLink,
}) => {
  return (
    <Card
      className="project-card"
      sx={{
        border: "1px solid #ebebeb",
        boxShadow: "none",
        borderRadius: 3,
        mb: 2,
      }}
    >
      <CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Typography
            variant="h4"
            component="div"
            fontWeight={600}
            fontFamily={`"Poppins", sans-serif`}
          >
            {title}
          </Typography>
          <Box>
            <IconButton
              size="small"
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbExternalLink />
            </IconButton>
            <IconButton
              size="small"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
