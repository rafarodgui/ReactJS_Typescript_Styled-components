import styled from 'styled-components';

import { darken } from 'polished';

export const Header = styled.header`
    max-width: 700px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #666;

        &:hover {
            transform: translateX(-5px);
            transition: 0.2s;
        }

        svg {
            margin-right: 5px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    max-width: 700px;
    margin-top: 40px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height:120px;
            border-radius: 50%;
            margin-right: 15px;
        }

        div {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737378;
            }
        }
    }

    ul {
        list-style: none;
        margin: 30px auto;
        display: flex;
        flex: 1;

        li {
            align-items: center;

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                font-size: 16px;
                color: #777;
            }
        }
    }

`;

export const Issues = styled.div`
    display: flex;
    flex-direction: column;

    a {
        background: #fff;
        padding: 15px;
        margin-top: 10px;
        border-radius: 5px;
        width: 100%;
        text-decoration: none;

        display: flex;
        align-items: center;

        & + a {
            margin-top: 30px;
        }

        &:hover {
            transform: translateX(8px);
            background: ${darken(0.04, '#fff')};
            transition: 0.2s;
        }

        div{
            flex: 1;
            margin-left: 15px;

            strong {
                font-size: 18px;
                color: #333;
            }

            p {
                font-size: 16px;
                color: #a0a0a2;
                margin-top: 4px;
            }
        }
        svg {
                margin-left: auto;
            }
    }
`;
