import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme.config.css";
//create theme.config.css file in app directory and add custom radix css inside that

//create font config file for custom font

//create metadata for app

// export const metadata: Metadata = {
//   title: "رده‌بندی",
//   description: "پنل مدیریت رده‌بندی",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme scaling={"100%"} radius={"large"}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
