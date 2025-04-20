import Header from "../../widgets/Header/Header.tsx";
import PrevInfo from "../../widgets/PrevInfo/PrevInfo.tsx";
import ProjectList from "../../widgets/ProjectList/ProjectList.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";


function HomePage(){
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

