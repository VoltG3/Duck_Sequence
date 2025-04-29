import { GlobalStyles } from "./GlobalStyles"
import SectionHeader from "./sections/section.header"
import SectionBody from "./sections/section.body"
import SectionFooter from "./sections/section.footer"
import {DataProvider} from "./context/DataProvider"

function App() {

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        border: "1px solid red"
    }}>
        <GlobalStyles />
        <DataProvider>
            <SectionHeader />
            <SectionBody />
            <SectionFooter />
        </DataProvider>
    </div>
  )
}

export default App
