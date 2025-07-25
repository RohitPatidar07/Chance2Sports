import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import AboutUs from "./Component/AboutUs/AboutUs";
import ChampionsClubElitePass from "./Component/ChampionsClubElitePass/ChampionsClubElitePass";
import GrassrootsTalentProgram from "./Component/GrassrootsTalentProgram/GrassrootsTalentProgram";
import NewsletterEvents from "./Component/NewsletterEvents/NewsletterEvents";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import DonateJoinUs from "./Component/DonateJoinUs/DonateJoinUs";
import VisitorFrom from "./Component/VisitorFrom/VisitorFrom";


function App() {
  return (
    <Routes>
      {/* Public routes with Header/Footer */}
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/championsclub" element={<ChampionsClubElitePass />} />
        <Route path="/grassrootstalent" element={<GrassrootsTalentProgram />} />
        <Route path="/newsletter" element={<NewsletterEvents />} />
        <Route path="/donatejoinus" element={<DonateJoinUs />} />
        <Route path="/visitorfrom" element={<VisitorFrom />} />
      </Route>

      {/* Auth pages without Header/Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
