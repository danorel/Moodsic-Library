import React from 'react';

import { Grid } from '@material-ui/core';

import { TabContainer, TabSignIn, TabSignUp, TabDivider } from '../styles';

interface TabsViewProps {
    isSignIn: boolean;
    onClick: (newSignIn: boolean) => void;
}

export default function TabsView({ isSignIn, onClick }: TabsViewProps) {
    return (
        <React.Fragment>
            <TabContainer>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <TabSignIn onClick={() => onClick(true)}>Sign In</TabSignIn>
                        {isSignIn ? <TabDivider /> : null}
                    </Grid>
                    <Grid item>
                        <TabSignUp onClick={() => onClick(false)}>Sign Up</TabSignUp>
                        {!isSignIn ? <TabDivider /> : null}
                    </Grid>
                </Grid>
            </TabContainer>
        </React.Fragment>
    );
}
