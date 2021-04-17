import React from 'react';

import { Grid } from '@material-ui/core';

import styles from '../stylesheets/tab.css';

interface TabsViewProps {
    isSignIn: boolean;
    onClick: (newSignIn: boolean) => void;
}

export default function TabsView({ isSignIn, onClick }: TabsViewProps) {
    return (
        <React.Fragment>
            <div className={styles.div__tab}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <div className={styles.div__tab_sign_in} onClick={() => onClick(true)}>
                            Sign In
                        </div>
                        {isSignIn ? <div className={styles.div__tab_divider} /> : null}
                    </Grid>
                    <Grid item>
                        <div className={styles.div__tab_sign_up} onClick={() => onClick(false)}>
                            Sign Up
                        </div>
                        {!isSignIn ? <div className={styles.div__tab_divider} /> : null}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
