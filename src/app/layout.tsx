import "@/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import MuiThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nishihiro's portfolio",
  description: "This is nishihiro's portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          <Container maxWidth="xl" disableGutters>
            {children}
          </Container>
        </MuiThemeProvider>
      </body>
    </html>
  );
}