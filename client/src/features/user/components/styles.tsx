import styled from 'styled-components';

export const DivBackground = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    text-align: center;
    position: relative;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 20.31%, rgba(255, 255, 255, 0) 100%), #d1f7ff;
`;

export const DivInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
`;

export const DivFrame = styled.div`
    background: #ffd770;
    border-radius: 40px;
    width: 480px;
    padding: 15px;
`;

export const TabContainer = styled.div`
    width: 100%;
`;

export const TabSignUp = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #1a3b70;
`;

export const TabSignIn = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #1a3b70;
`;

export const TabDivider = styled.div`
    border: 3px solid #1a3b70;
`;

export const InputField = styled.input`
    background: #d1f7ff;
    border-radius: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    padding: 12px;

    color: rgba(0, 0, 0, 0.47);
`;

export const DivTitle = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #1a3b70;
`;

export const ButtonSignUp = styled.button`
    background: #f4900c;
    border-radius: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #1a3b70;
`;