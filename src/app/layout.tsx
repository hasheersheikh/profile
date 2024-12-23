import SocialIcons from "@/Components/Social";
import profile from "../../public/profile.png";
import { Box, Container, Divider } from "@mui/material";
import Image from "next/image";

export const metadata = {
  title: "Hashir Sheikh",
  description: "Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container sx={{ mx: 4 }}>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Box width={{ xs: "100vw", lg: "50vw", md: "80vw" }}>
              <Box width={80} position={"relative"} height={80} mt={4}>
                <Image
                  src={profile}
                  unoptimized
                  alt=""
                  fill
                  style={{ borderRadius: 50 }}
                />
              </Box>
              <Box
                fontSize={30}
                mt={2}
                fontWeight={"600"}
                fontFamily={"monospace"}
              >
                Hashir Sheikh
              </Box>
              <Box
                fontSize={20}
                mt={0.5}
                color={"#5d5d5d"}
                fontFamily={"monospace"}
              >
                Engineer & Designer
              </Box>

              <SocialIcons />
            </Box>

            <Box width={{ xs: "100vw", lg: "50vw", md: "80vw" }}>
              <Divider sx={{ my: 1 }} />
              {/* <Tabs /> */}
              {children}
            </Box>
          </Box>
        </Container>
      </body>
    </html>
  );
}
