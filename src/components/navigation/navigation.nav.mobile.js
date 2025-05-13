import styled from "styled-components";
import {useState} from "react";
import { motion } from "framer-motion";
import Logo from "./navigation.logo";

const MobNav = styled.div`

    /* Stils burger ikonai */
    .burger-icon {
        font-size: 30px;
        background: none;
        border: none;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10;
    }

    /* Izvēlnes stils */
    .menu {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 250px;
        background-color: #333;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        z-index: 5;
    }

    /* Saites stils izvēlnē */
    .menu a {
        color: white;
        text-decoration: none;
        margin: 1rem 0;
        font-size: 20px;
    }

    /* Saites hover efekts */
    .menu a:hover {
        background-color: #444;
    }

`

export const NavigationNavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Funkcija, kas maina izvēlnes stāvokli
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MobNav>
            <div className="content">
                <Logo />
            </div>
            {/* Izvēlne ar animāciju */}
            <motion.div
                className="menu"
                initial={{ x: "100%" }} // Izvēlne sākas ārpus ekrāna (pa kreisi)
                animate={{ x: isOpen ? 0 : "100%" }} // Ja izvēlne ir atvērta, tā būs ekrānā
                transition={{ type: "spring", stiffness: 300, damping: 30 }} // Lēna animācija
            >
                <a href="/public">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </motion.div>

            <button onClick={toggleMenu} className="burger-icon">
                ☰
            </button>

        </MobNav>
    );
}