import SectionHeader from "./sections/section.header"
import SectionBody from "./sections/section.body"
import SectionFooter from "./sections/section.footer"
import {GlobalStyles} from "./GlobalStyles";

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
            <SectionHeader />
            <SectionBody />
            <SectionFooter />
    </div>
  )
}

export default App
