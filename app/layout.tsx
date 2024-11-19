import "@/app/ui/global.css";
import { inter, notoSans } from "./ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    <html
      lang="en"
      className={`${inter.className} ${notoSans.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
