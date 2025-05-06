import styled from "styled-components";

export const StyledCardInfo = styled.p`

    font-size: 14px;
    padding-top: 12px;
    color: var(--color--info--default);
    transition: color 0.5s ease-in-out;
    
    &:hover {
        color: var(--color--info--hover);
        cursor: pointer;
    }
`