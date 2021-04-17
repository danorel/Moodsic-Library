import React from 'react';

import { Grid } from '@material-ui/core';

import styles from '../stylesheets/content.module.css';

type TitleViewProps = {
    isSignIn: boolean;
};

export default function TitleView({ isSignIn }: TitleViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <div className={styles.div__title}>{isSignIn ? 'Glad to see you again!' : 'Hello, musiclover :)'}</div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
