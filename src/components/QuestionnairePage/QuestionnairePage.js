import React from 'react';
import FormRange from "../FormRange/FormRange";
import {Button} from "react-bootstrap";

const QuestionnairePage = ({questionNumber, onBack, onNext, currentQuestion, rangeValue, answerValue, label, handleSaveAnswerValue}) => {
    return (
        <div className="question__wrapper">
            <header className="text-center">
                <h1> Question {questionNumber} from 7</h1>
            </header>
            <section className="text-center">
                <h3>Use the slider to set how much the following statement applies to you</h3>
                <h4 className="p-3 p-md-5">"{currentQuestion}"</h4>
                <FormRange value={answerValue} label={label} rangeValue={rangeValue} />
                <div className="d-flex justify-content-end me-5">
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onBack}>Back</Button>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onNext} onSubmit={handleSaveAnswerValue}>Next</Button>
                </div>
            </section>
        </div>
    );
};
// {questionNumber === 7 ? "Score" : "Next"}
export default QuestionnairePage;