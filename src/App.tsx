import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage/SkillsPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import MaintenancePage from "./pages/Maintenance/MaintenancePage.tsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                    <Route path="/comments" element={<MaintenancePage />} />
                    <Route path="/projects/:id" element={<ProjectPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;