import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {

        --color--primary: #282c34;
        --color--info--default: green;
        --color--info--hover: blue;

        --card--color--01: rgba(36, 39, 34, 0.15);

        --range--color--01: #FF8000;
        --range--color--02: #027FC1;
        --range--color--03: #8080C0;
        --range--color--04: #7F8000;
        
        --space: 0.625rem ;// 10px;
        
        --font--size--header: clamp(1.675rem, 3.75vw, 2.188rem);    // 26.8px - 3.75% - 35px
        --font--size--footer: clamp(0.75rem, 2vw, 1rem);            // 12px   -    2% - 16px

        
    }
`