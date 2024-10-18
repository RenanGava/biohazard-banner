import { GlobalStyle } from "@/global/globalStyle";
import { StyledComponentsRegistry } from "@/global/StyledComponentsRegistry";
import { Roboto_Mono, Poppins } from "next/font/google";
import { ReactNode } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700']
})


const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700']
})


interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
