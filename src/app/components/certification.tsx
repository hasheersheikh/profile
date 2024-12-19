import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  IconButton,
} from "@mui/material";
import { TbExternalLink } from "react-icons/tb";

interface CertificationProps {
  name: string;
  source: string;
  identifier: string;
  externalLink: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  name,
  source,
  identifier,
  externalLink,
}) => {
  return (
    <Card sx={{ margin: "20px auto" }}>
      <CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            component="div"
            fontWeight={600}
            fontFamily={`"Poppins", sans-serif`}
          >
            {name}
          </Typography>
          <Box>
            <IconButton
              size="small"
              color="primary"
              href={externalLink}
              target="_blank"
            >
              <TbExternalLink />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Source: {source}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Identifier: {identifier}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
