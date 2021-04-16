import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import TabsView from './modules/Tabs';
import TitleView from './modules/Title';
import FormView from './modules/Form';

import { RootState } from 'RootTypes';

import * as selectors from '../selectors';

import { DivFrame, DivBackground, DivInner } from './styles';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.user.isLoadingUser,
    user: selectors.selectUser(state),
});

const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const AuthenticationView: React.FC<Props> = ({ user, isLoading }: Props) => {
    const [email, setEmail] = useState<string>('');
    const [isSignIn, setSignIn] = useState<boolean>(true);

    const onClickForm = () => {
        console.log('Submitting form');
    };

    const onClickTab = (newSignIn: boolean) => setSignIn(newSignIn);
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

    if (isLoading) return <p style={{ textAlign: 'center' }}>Loading user...</p>;

    return (
        <React.Fragment>
            <DivBackground>
                <DivInner>
                    <DivFrame>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                            <Grid item>
                                <TabsView isSignIn={isSignIn} onClick={onClickTab} />
                            </Grid>
                            <Grid item>
                                <TitleView isSignIn={isSignIn} />
                            </Grid>
                            <Grid item>
                                <FormView value={email} isSignIn={isSignIn} onClick={onClickForm} onChange={onChangeEmail} />
                            </Grid>
                        </Grid>
                    </DivFrame>
                </DivInner>
            </DivBackground>
        </React.Fragment>
    );
};

export default connect(mapStateToProps, dispatchProps)(AuthenticationView);
