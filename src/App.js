import { GlobalStyles } from "./GlobalStyles"
import { DataProvider } from "./data_context/DataContext"
import { DataLoader } from "./data_loader/dataloader"
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
       <DataProvider>
           <div style={{
               position: "relative",
               display: "flex",
               flexWrap: "wrap",
               flexDirection: "column",
               maxWidth: "100vw",
               minHeight: "100vh",
               width: "100%",
               height: "100%",
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
       </DataProvider>
    )
}

{/*
 const newStatisticsDataComplete = newStatisticsData.map((item, index) => {
                        return {
                            date: item,
                            totalSessions: newStatisticsData[1],
                            totalRounds: newStatisticsData[2],
                            playerData: newFieldsPlayerData,
                            scoresData: newFieldScoresData,
                            rankAssigmentTitle: newAssigmentTitleScoresData,
                            rankAssigmentPlace: newAssigmentRankScoresData,
                        }
                    })
*/}

export default App