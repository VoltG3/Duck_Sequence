import styled from "styled-components"
import { GlobalStyles } from "./GlobalStyles"
import { DataLoader } from "./dataloader/dataloader"
import { SectionHeader } from "./sections/section.header"
import SectionContent from "./sections/section.content"
import SectionFooter from "./sections/section.footer"
import { useSelector } from "react-redux"
import config from "./config"

function App() {
    const isDataLoaded = useSelector(state => state.isDataLoaded)

  return (
    <StyledDesktop>
        <div className="styledDesktop_Background">
            <div className="styledDesktop_Mask">
                <div className="styledDesktop_Content">
                    <GlobalStyles />
                    <DataLoader />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            border: "1px solid red"
                    }}> {/* this div preserve from z-index issue */}
                        { isDataLoaded ? <SectionHeader /> : null}
                        { isDataLoaded ? <SectionContent /> : null}
                        <SectionFooter />
                    </div>
                </div>
            </div>
        </div>
    </StyledDesktop>
  )
}

const StyledDesktop = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    .styledDesktop_Background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${config.background.URL_background});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 0; 
        
        .discable_zIndex {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            pointer-events: none;
        }
    }

    .styledDesktop_Mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1;
    }

    .styledDesktop_Content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        z-index: 2; 
    }
`

export default App