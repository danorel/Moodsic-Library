import React from 'react';

import { Grid } from '@material-ui/core';

import { InputField, ButtonSignUp } from '../styles';

interface FormViewProps {
    value: string;
    isSignIn: boolean;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormView({ value, isSignIn, onClick, onChange }: FormViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <InputField value={value} placeholder={'Pass e-mail...'} onChange={onChange} />
                </Grid>
                <Grid item>
                    <ButtonSignUp onClick={onClick}>{isSignIn ? "Let's go!" : 'Register me!'}</ButtonSignUp>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
