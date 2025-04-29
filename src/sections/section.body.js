import styled from "styled-components"

const StyledBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    min-width: 70%;
    width: auto;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid red;
`

export default function SectionBody() {

    return (
        <StyledBody>
            Body
        </StyledBody>
    )
}