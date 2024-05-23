import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from '@/app/ui/main/fonts'
import ScrollToTopButton from "./ui/main/scrollToTop";
import { FlexCenter } from "./ui/main/style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Rismawati\'s Portfolio',
    default: 'Rismawati\'s Portfolio',
  },
  description: 'My name is Rismawati, S.T. I graduated from Lampung University in 2019 with a major in Geophysical Engineering. Currently, I am focusing my career in the field of administration and purchasing.',
  keywords: 'admin, administrator, purchasing, project, purchase, project admin, project administrator, purchasing administrator, document, documents, note, notes, report, reports'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} tw-antialiased tw-text-dark`}>
        <ScrollToTopButton />
        {children}
        <footer className={`${FlexCenter} !tw-justify-start md:!tw-justify-center tw-bg-dark tw-flex-wrap tw-text-white tw-text-sm gap-2 tw-p-3`}>
          <div>&copy; {new Date().getFullYear()} Rismawati.</div>
        </footer>
      </body>
    </html>
  )
}
