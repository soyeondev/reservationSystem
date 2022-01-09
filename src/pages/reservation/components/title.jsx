import React from 'react';
import styles from './reservation.components.module.css';

const Title = (props) => (
        <span className={styles.title}>{props.name}</span>
);

export default Title;