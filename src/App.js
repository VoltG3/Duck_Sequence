import { useEffect } from "react"
import { GlobalStyles } from "./GlobalStyles"
import SectionHeader from "./sections/section.header"
import SectionBody from "./sections/section.body"
import SectionFooter from "./sections/section.footer"

function App() {
    useEffect(() => {
        fetch('/assets/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                } //console.log(response)
                return response.json()
            })
            .then((data) => {
               console.log("Fetched JSON data: ", data)
            })
            .catch((error) => {
                console.log("Error fetching JSON: ",error)
            })
    }, [])

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
