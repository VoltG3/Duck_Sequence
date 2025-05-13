import { GlobalStyles } from "./GlobalStyles"

import { DataLoader } from "./dataloader/dataloader"
import { AudioController } from "./components/controller.audio"
import { SectionHeader } from "./sections/section.header"
import SectionContent from "./sections/section.content"
import SectionFooter from "./sections/section.footer"
import { OverlayAbout }  from "./components/overlay/overlay.about"
import { OverlayInfo } from "./components/overlay/overlay.info"

function App() {

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
            <SectionContent />
            <SectionFooter />

                    {/*


                        <OverlayAbout />
                        <OverlayInfo />

                    */}
        <DataLoader />
        <AudioController />
    </div>
  )
}

export default App