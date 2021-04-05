import React from 'react';

import { Grid } from '@material-ui/core';

import { TabContainer, TabSignIn, TabSignUp, TabDivider } from '../styles';

export default function TabsView() {
    return (
        <React.Fragment>
            <TabContainer>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <TabSignIn>Sign In</TabSignIn>
                        <TabDivider />
                    </Grid>
                    <Grid item>
                        <TabSignUp>Sign Up</TabSignUp>
                    </Grid>
                </Grid>
            </TabContainer>
        </React.Fragment>
    );
}
