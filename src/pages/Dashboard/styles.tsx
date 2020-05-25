import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface FormProps {
    error: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    margin-top: 60px;
    max-width: 450px;
    line-height: 50px;
`;

export const Form = styled.form<FormProps>`
    max-width: 700px;
    margin-top: 30px;

    display: flex;

    input {
        flex: 1;
        padding: 10px;
        width: 350px;
        border: none;
        color: #666;
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => ((props.error && css` border-color: #e00 `))};

        &::placeholder {
            color: #666;
        }
    }

    button {
        border: none;
        padding: 10px;
        width: 150px;
        color: #fff;
        background: #3c0;
        border-radius: 0 5px 5px 0;
        transition: background-color 0.2s;

        &:hover {
            background: ${darken(0.08, '#3c0')}
        }
    }
`;

export const Repositories = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    border-top: 1px solid #bbb;

    a {
        background: #fff;
        padding: 15px;
        margin-top: 30px;
        border-radius: 5px;
        width: 100%;
        text-decoration: none;

        display: flex;
        align-items: center;

        & + a {
            margin-top: 15px;
        }

        &:hover {
            background: ${darken(0.04, '#fff')};
            transform: translateX(8px);
            transition: 0.2s;
        }

        img {
            width: 74;
            height: 74px;
            border-radius: 50%;
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

export const Error = styled.span`
    display: block;
    margin-top:10px;
    color: #e00;
`;
