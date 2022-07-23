import { Spacer } from "../components/Spacer";
import { Footer } from "../sections/Footer/Footer";
import { Navbar } from "../sections/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Spacer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
