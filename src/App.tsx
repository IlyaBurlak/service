import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage/SkillsPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import CommentsPage from "./pages/Comments";


function App() {
   return (
       <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
       </Router>
   );
}


export default App;