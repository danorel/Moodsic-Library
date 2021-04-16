/// <reference path="../types.d.ts" />
import React from 'react';
declare const _default: import('react-redux').ConnectedComponent<
    React.FC<{
        isLoading: boolean;
        user: import('UserModels').User;
    }>,
    import('react-redux').Omit<
        {
            isLoading: boolean;
            user: import('UserModels').User;
        },
        'user' | 'isLoading'
    >
>;
export default _default;
