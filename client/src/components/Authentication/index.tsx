import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import TabsView from './modules/Tabs';
import TitleView from './modules/Title';
import FormView from './modules/Form';

import { DivFrame, DivBackground, DivInner } from './styles';

export default function AuthenticationView() {
    const [email, setEmail] = useState<string>('');
    const [isSignIn, setSignIn] = useState<boolean>(true);

    const onClickForm = () => {};

    const onClickTab = (newSignIn: boolean) => setSignIn(newSignIn);
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

    return (
        <React.Fragment>
            <DivBackground>
                <DivInner>
                    <DivFrame>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                            <Grid item>
                                <TabsView isSignIn={isSignIn} onClick={onClickTab} />
                            </Grid>
                            <Grid item>
                                <TitleView isSignIn={isSignIn} />
                            </Grid>
                            <Grid item>
                                <FormView value={email} isSignIn={isSignIn} onClick={onClickForm} onChange={onChangeEmail} />
                            </Grid>
                        </Grid>
                    </DivFrame>
                </DivInner>
            </DivBackground>
        </React.Fragment>
    );
}
