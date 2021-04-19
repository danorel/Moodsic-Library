import React from 'react';

import { Grid } from '@material-ui/core';

import styles from '../stylesheets/tab.module.css';

interface TabsViewProps {
    isSignIn: boolean;
    onClick: (newSignIn: boolean) => void;
}

export default function TabsView({ isSignIn, onClick }: TabsViewProps) {
    return (
        <React.Fragment>
            <div className={styles.divTab}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <div className={styles.divTabSignIn} onClick={() => onClick(true)}>
                            Sign In
                        </div>
                        {isSignIn ? <div className={styles.divTabDivider} /> : null}
                    </Grid>
                    <Grid item>
                        <div className={styles.divTabSignUp} onClick={() => onClick(false)}>
                            Sign Up
                        </div>
                        {!isSignIn ? <div className={styles.divTabDivider} /> : null}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
