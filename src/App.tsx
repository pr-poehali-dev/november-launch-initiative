import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QRPage from "./pages/QRPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/qr" element={<QRPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;