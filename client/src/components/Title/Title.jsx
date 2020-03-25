import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    title: {
        textAlign: 'center',
        margin: 0,
        fontWeight: 300,
        fontSize: '20px',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        padding: '15px 0',
        borderRadius: '5px'
    },
});

export const Title = props => {
    const classes = useStyles();
    return (
        <h1 className={classes.title}>
            Корпоротивный чат
        </h1>
    );
}

export default Title;