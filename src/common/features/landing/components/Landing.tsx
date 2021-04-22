import React from 'react';

const Landing = () => {
    const onClick = () => {
        alert('Clicking the react fragment');
    };

    return (
        <React.Fragment>
            <button onClick={onClick}>Landing</button>
        </React.Fragment>
    );
};

export default Landing;
