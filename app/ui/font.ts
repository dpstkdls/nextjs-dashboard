import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local";

export const notoSans = localFont({
  src: [
    {
      path: "./font/NotoSans/NotoSansCJKkr-Medium.otf",
    },
    {
      path: "./font/NotoSans/NotoSansCJKkr-Regular.otf",
    },
    {
      path: "./font/NotoSans/NotoSansCJKkr-Regular.woff2",
    },
  ],
});

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
