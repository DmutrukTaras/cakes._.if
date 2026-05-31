import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CakesPage from "./pages/CakesPage";
import CandyBarPage from "./pages/CandyBarPage";
import SetsPage from "./pages/SetsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/candy-bar" element={<CandyBarPage />} />
        <Route path="/sets" element={<SetsPage />} />
      </Route>
    </Routes>
  );
}
