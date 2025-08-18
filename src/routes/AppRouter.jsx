import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../utils/idb";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LandlordRelationship from "../pages/landlord/LandlordRelationship";
import Center from "../pages/center/Center";
import NotFound from "../components/NotFound";
import WorkspacePage from "../pages/workspace/WorkspacePage";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:city/:branch" element={<Center />} />
            <Route path="/:city" element={<Center />} />

            <Route
              path="/landlord-relationships"
              element={<LandlordRelationship />}
            />

            <Route path="/workspaces/:slug" element={<WorkspacePage />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
