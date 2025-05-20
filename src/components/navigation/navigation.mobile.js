import styled from "styled-components"
import { useState } from "react"
import { motion } from "framer-motion"


const StyledNavigationMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
        width: 100%;
        height: 100%;
    padding: var(--space);
    
    .burger-icon {
        font-size: 30px;
        background: none;
        border: none;
        position: absolute;
        top: 3px;
        right: 20px;
        color: white;
        z-index: 10;
    }
    
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
    
    .menu a {
        color: white;
        text-decoration: none;
        margin: 1rem 0;
        font-size: 20px;
    }
    
    .menu a:hover {
        background-color: #444;
    }
`

export const NavigationMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledNavigationMobile>
            <p style={{ fontSize:"var(--font--size--header)" }}>Duck Sequence</p>

            <motion.div
                className="menu"
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <p>Missing button About</p>
                <a href="/public">01.04.2025</a>
                <a href="/public">02.04.2025</a>
                <a href="/public">03.04.2025</a>
                <a href="/public">04.04.2025</a>
            </motion.div>

            <button onClick={ toggleMenu } className="burger-icon"><p>☰</p></button>
        </StyledNavigationMobile>
    )
}