import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Page0 = () => { 
    const { handleAuth } = useContext(UserContext);

    return (
        <BackgroundContainer bgImage="/bg_page_111.png" titleImage="/title_farewell.png">
            <div className="relative flex flex-col items-center justify-center h-full v-full">
                <div>
                    <img className="mx-auto mt-0 hover:opacity-85" src="/Button.png" alt="button" onClick={handleAuth} />
                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 pointer-events-none" src="/hugo_award_2024.png" alt="hugo_award_2024" />
                </div>
            </div>  
        </BackgroundContainer>
    );
}

export default Page0;