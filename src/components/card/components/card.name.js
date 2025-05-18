

export const CardName = ({ rank, title, name }) => {

    return (
        <div style={{
            fontSize: "22px",
            flexDirection: "column",
            marginBottom: "10px"
        }}>
            <p style={{
                fontWeight: "bold",
                color:
                    rank === "three_times_first" ? "var(--range--color--0B)" :
                    rank === "1st" ? "var(--range--color--01)" :
                    rank === "2nd" ? "var(--range--color--02)" :
                    rank === "3rd" ? "var(--range--color--03)" :
                                     "var(--range--color--04)"
            }}>{ title }</p>

            <p>{ name }</p>

        </div>
    )
}