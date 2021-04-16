import React from 'react';

import { Grid } from '@material-ui/core';

import { DivTitle } from '../styles';

type TitleViewProps = {
    isSignIn: boolean;
};

export default function TitleView({ isSignIn }: TitleViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <DivTitle>{isSignIn ? 'Glad to see you again!' : 'Hello, musiclover :)'}</DivTitle>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
