import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme, ColorModeScript, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

import Home from "./screens/Home/Home";
import News from "./screens/News/News";
import UploadImg from "./screens/upload_img/upload_img";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Dashboard from "./screens/Dashboard/Dashboard";
import History from "./screens/History/History";
import Tips from "./screens/Tips/Tips";
import HomeRemedies from "./screens/HomeRemedies/HomeRemedies";
import Cart from "./screens/Cart/Cart";
import Products from "./screens/Products/Products";
import Checkout from "./screens/Checkout/Checkout";
import FertilizerGuide from "./screens/FertilizerGuide/FertilizerGuide";
import Seeds from "./screens/Seeds/Seeds";
import FloatingChat from "./components/FloatingChat/FloatingChat"; // Import the floating chat
import Plants from "./screens/Plants/Plants";
import SoilGuide from "./screens/SoilGuide/SoilGuide";
import SeasonalCalendar from "./screens/SeasonalCalendar/SeasonalCalendar";
import HarvestCalculator from "./screens/HarvestCalculator/HarvestCalculator";
import AdminActivity from "./screens/AdminActivity/AdminActivity";

import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function AppContent() {
  const location = useLocation();
  const { setColorMode } = useColorMode();

  // Force light mode on first load
  useEffect(() => {
    localStorage.removeItem('chakra-ui-color-mode');
    setColorMode('light');
  }, [setColorMode]);

  // Hide footer on these pages
  const hideFooter = [
    "/check", 
    "/chat", 
    "/news", 
    "/dashboard", 
    "/history", 
    "/tips",
    "/home-remedies", 
    "/cart", 
    "/products", 
    "/checkout", 
    "/fertilizer-guide",
    "/seeds",
    "/plants",
    "/soil-guide",
    "/seasonal-calendar",
    "/harvest-calculator",
    "/admin-activity"
  ].includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/check" element={<UploadImg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/home-remedies" element={<HomeRemedies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/fertilizer-guide" element={<FertilizerGuide />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/soil-guide" element={<SoilGuide />} />
        <Route path="/seasonal-calendar" element={<SeasonalCalendar />} />
        <Route path="/harvest-calculator" element={<HarvestCalculator />} />
        <Route path="/admin-activity" element={<AdminActivity />} />
      </Routes>
      {!hideFooter && <Footer />}
      
      {/* Floating Chat appears on all pages */}
      <FloatingChat />
    </>
  );
}

function App() {
  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <UserProvider>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </CartProvider>
        </ChakraProvider>
      </UserProvider>
    </>
  );
}

export default App;