import React from 'react';

import { Grid } from '@material-ui/core';

import { DivTitle } from '../styles';

export default function TitleView() {
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <DivTitle>Hello, musiclover :)</DivTitle>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
