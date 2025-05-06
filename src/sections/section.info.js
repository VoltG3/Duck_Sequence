import styled from "styled-components";

function info() {
    return (
        <StyledInfo>
            <p>info</p>
        </StyledInfo>
    )
}

const StyledInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    z-index: 3;
    border: solid 1px green;
    backdrop-filter: blur(18px);
    background-color: rgba(220, 37, 37, 0.1);
`

export default info