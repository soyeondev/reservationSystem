import React from 'react';
/**
 * custom component
 */
import Question from './components/question';

const question = "관련된 사진을 첨부해 주세요 \n(최대 10개, 개당 100MB)";
const Symptom = (props) => {
    
    return (
        <>
            <h1>Symptom</h1>
            <Question question={question}/>
        </> 
    );
}

export default Symptom;