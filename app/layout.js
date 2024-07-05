import { Inter, Nunito,Nunito_Sans,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import ToastProvider from "@/lib/provider/provider";
import Crispprovider from "@/components/crisp/Crisp-provider";

const inter = Inter({ subsets: ["latin"],
//  weight :["100","200","300","400","500","600","700","800","900",]
 });

export const metadata = {
  title: "Convertify",
  description: "images to pdf converter, convert image to base64, convert jpeg to png, compress and resize images, jpg to png converter, image compressor, merge pdf files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Crispprovider/> */}
      <body className ={inter.className} id="bg">
        <Navbar/>
        <ToastProvider/>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
