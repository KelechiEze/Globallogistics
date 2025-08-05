import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TrackShipment from "./pages/TrackShipment";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/track" element={<><Header /><TrackShipment /><Footer /></>} />
          <Route path="/track/:trackingNumber" element={<><Header /><TrackShipment /><Footer /></>} />
          <Route path="/services" element={<><Header /><Services /><Footer /></>} />
          <Route path="/quote" element={<><Header /><Quote /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
