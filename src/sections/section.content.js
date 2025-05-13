import { CardController } from "../components/controller.cards"

function SectionContent() {

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flex: "1"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "auto",
            }}>
                <CardController />
            </div>
        </div>
    )
}

export default SectionContent