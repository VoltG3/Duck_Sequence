import styled from "styled-components"
import { GlobalStyles } from "./GlobalStyles"
import config from "./config"
import { DataLoader } from "./dataloader/dataloader"
import { AudioController } from "./components/controller.audio"
import { SectionHeader } from "./sections/section.header"
import SectionContent from "./sections/section.content"
import SectionFooter from "./sections/section.footer"
import { OverlayAbout }  from "./components/overlay/overlay.about"
import { OverlayInfo } from "./components/overlay/overlay.info"

function App() {

  return (
    <AppContainer>
        <div className="background_img">
            <div className="background_mask">
                <div className="appSections">
                    <GlobalStyles />
                    <DataLoader />
                    <AudioController />
                        <SectionHeader />
                        <SectionContent />
                        <OverlayAbout />
                        <OverlayInfo />
                        <SectionFooter />
                </div>
            </div>
        </div>
    </AppContainer>
  )
}

const AppContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    .background_img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${config.background.URL_background_01});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 0;
    }

    .background_mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1;
    }

    .appSections {
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