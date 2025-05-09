import Header from "../../widgets/Header/Header.tsx";
import PrevInfo from "../../widgets/PrevInfo/PrevInfo.tsx";
import ProjectList from "../../widgets/ProjectList/ProjectList.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";
import {useEffect} from "react";


function HomePage(){
    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;

        fetch(`${apiUrl}/api/test`)
            .then((res) => res.json())
            .then((data) => console.log("Ответ от бэкенда:", data))
            .catch((error) => console.error("Ошибка:", error));
    }, []);
    return(
        <>
            <Header />
            <PrevInfo/>
            <ProjectList/>
            <Footer/>
        </>
    )
}
export default HomePage;

