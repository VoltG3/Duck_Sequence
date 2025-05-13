import { GlobalStyles } from "./GlobalStyles"
import { DataLoader } from "./dataloader/dataloader"
import { AudioController } from "./components/controller.audio"
import { SectionHeader } from "./sections/section.header"
import FakeSectionContent from "./sections/section.content.fake"
import SectionContent from "./sections/section.content"
import SectionFooter from "./sections/section.footer"
import { OverlayAbout }  from "./components/overlay/overlay.about"
import { OverlayInfo } from "./components/overlay/overlay.info"
import { useSelector } from "react-redux"

function App() {
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    return (
        <div style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
                maxWidth: "100vw",
                minHeight: "100vh",
                width: "100%",
                height: "auto",
            zIndex: "1" }}>
            <GlobalStyles />
                <SectionHeader />
                {!isDataLoaded ? <FakeSectionContent /> : <SectionContent /> }
                <SectionFooter />
            <DataLoader />
            <OverlayAbout />
            <OverlayInfo />
            <AudioController />
        </div>
    )
}

export default App