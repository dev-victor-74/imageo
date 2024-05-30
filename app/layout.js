import { Inter, Nunito,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import ToastProvider from "@/lib/provider/provider";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Simpletools",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className ={inter.className} id="bg">
        {/* <main className=""> */}
           <Navbar/>
           <ToastProvider/>
           {children} 
        {/* </main> */}
        <Footer/>
      </body>
    </html>
  );
}
