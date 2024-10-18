'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #E4EBEF;
        --linear1: #F98E5F;
        --linear2: #6EA4FC;

        --primary: #EE6C4D;

        --text-title:#181E4B;
        --text-body:#5E6282;

    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1000px) {
            font-size: 93.75%; // 16px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input textarea, button{
        font-family: var(--font-roboto), sans-serif;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover{
            filter: brightness(0.7);
        }
    }
`;
