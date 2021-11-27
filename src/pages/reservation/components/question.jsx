import React from 'react';
import styles from './reservation.components.module.css';

const Question = (props) => (
    <>
    <div className={styles.question}>
        <span
            style={{whiteSpace: "pre-wrap"}}
            >{props.question}</span>
    </div>
    </>
);

export default Question;