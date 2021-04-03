import React from 'react';
import styled from 'styled-components';

import RegistrationView from '../Registration/RegistrationView';

const DivBackground = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    text-align: center;
    position: relative;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 20.31%, rgba(255, 255, 255, 0) 100%), #d1f7ff;
`;

const DivInner = styled.div`
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

export default function AuthenticationView() {
    return (
        <React.Fragment>
            <DivBackground>
                <DivInner>
                    <RegistrationView />
                </DivInner>
            </DivBackground>
        </React.Fragment>
    );
}
