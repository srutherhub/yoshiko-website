import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Gallery from "./Gallery.tsx";
import GalleryIndex from "./GalleryIndex.tsx";
import SixteenGrids from "./pages/SixteenGrids.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="gallery" element={<Gallery />}>
        <Route index element={<GalleryIndex />} />
        <Route path="16-grids" element={<SixteenGrids />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
