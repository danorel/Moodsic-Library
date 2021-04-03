import React from 'react';

import { Grid } from '@material-ui/core';

import TabsView from './modules/Tabs';
import TitleView from './modules/Title';
import InputFieldsView from './modules/InputFields';

import { DivFrame } from './styles';

export default function RegistrationView() {
    return (
        <React.Fragment>
            <DivFrame>
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <TabsView />
                    </Grid>
                    <Grid item>
                        <TitleView />
                    </Grid>
                    <Grid item>
                        <InputFieldsView />
                    </Grid>
                </Grid>
            </DivFrame>
        </React.Fragment>
    );
}
