import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";

const Page0 = () => {
    return (
        <BackgroundContainer bgImage="/bg_page_111.png" titleImage="/title_farewell.png">
        </BackgroundContainer>
    )
}

export default Page0;