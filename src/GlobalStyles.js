import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {

        --color--primary: #282c34;
        --color--info--default: green;
        --color--info--hover: blue;

        --card--color--01: rgba(36, 39, 34, 0.15);

        --range--color--0A: linear-gradient(45deg,  orange, yellow, orange);
            --range--color--0A-p: orange;    
        
        --range--color--0B: #800020;        
        --range--color--01: #FF8000;        
        --range--color--02: #027FC1;        
        --range--color--03: #8080C0;      
        --range--color--04: #7F8000;       
        --range--color--05: #A0A0A0;        
        --range--color--06: #7B3F00;        
        
        --space: 0.625rem ;// 10px;
        --font--size--header: clamp(1.275rem, 3.75vw, 2.188rem);    // 20.4px - 3.75vw - 35px 
        --font--size--footer: clamp(0.75rem, 2vw, 1rem);            // 12px   -     2% - 16px
        --font--size--h2: clamp(1.275rem, 3.75vw, 1.5rem);          // 20.4px -  3.75% - 24px 
        
    }
`