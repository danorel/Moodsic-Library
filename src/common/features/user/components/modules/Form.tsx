import React from 'react';

import { Grid } from '@material-ui/core';

import styles from '../stylesheets/content.module.css';

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
                    <input className={styles.inputField} value={value} placeholder={'Pass e-mail...'} onChange={onChange} />
                </Grid>
                <Grid item>
                    <button className={styles.buttonSignUp} onClick={onClick}>
                        {isSignIn ? "Let's go!" : 'Register me!'}
                    </button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
