
import { Header, Menu } from "@/components/header/Header";
import "./globals.css";
import MenuProvider from "@/context/UiProvider.context";
import FooterSect from "@/components/footer/footerSect";
import { SuccessPopup } from "@/components/PopUps/PopUps";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuProvider >
          <SuccessPopup />
          <Header />
          <Menu />
        <main>
          {children}
        </main>
        </MenuProvider>
        <FooterSect />
      </body>
    </html>
  );
}
