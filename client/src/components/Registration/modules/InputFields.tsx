import React from 'react';

import { Grid } from '@material-ui/core';

import { InputField, ButtonSignUp } from '../styles';

export default function InputFieldsView() {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <InputField />
                </Grid>
                <Grid item>
                    <ButtonSignUp>Register me!</ButtonSignUp>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
