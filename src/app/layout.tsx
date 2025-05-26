import "@/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import MuiThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K Portfolio Clone",
  description: "Full animated clone of k-portfolio.k-web-production.com",
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