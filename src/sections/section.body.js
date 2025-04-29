import styled from "styled-components"

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-width: 70%;
    width: auto;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid var(--border--color);

    .sectionUpp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: auto;
        border: 1px solid var(--border--color);
    }
    
    .sectionDown {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: auto;
        border: 1px solid var(--border--color);
    }
`

export default function SectionBody() {

    return (
        <StyledBody>
            <div className="sectionUpp">
                <p>section up</p>
            </div>

            <div className="sectionDown">
                <p>section down</p>
            </div>
        </StyledBody>
    )
}