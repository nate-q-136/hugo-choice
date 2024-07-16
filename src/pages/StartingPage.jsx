import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";



const StartingPage = () => { 
    const { handleAuth } = useContext(UserContext);

    return (
        <BackgroundContainer bgImage="/bg_page_111.png" titleImage="/title_farewell.png">
            <div className="flex items-center justify-center h-full v-full">
            <img className="mx-auto mt-0 hover:opacity-85" src="/Button.png" alt="button" onClick={handleAuth}/>
        </div>  
        </BackgroundContainer>
    );
}

export default StartingPage;