import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../utils/idb";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LandlordRelationship from "../pages/landlord/LandlordRelationship";



export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/landlord-relationships" element={<LandlordRelationship />} />
          </Route>
        </Route>
        
      </Routes>
    </Router>
  );
}
