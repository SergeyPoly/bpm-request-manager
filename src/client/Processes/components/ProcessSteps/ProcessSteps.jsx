import React from 'react';
import { Steps } from 'antd';
import { useSelector } from 'react-redux';

export const ProcessSteps = () => {
    const { Step } = Steps;
    const processStepsData = useSelector(({processes}) => processes.processStepsData);
    const { processSteps, currentStepIndex } = processStepsData;
    const stepsItems = processSteps.map(element => <Step title={element} description="step description, no data" />);

    return (
        <Steps direction="vertical" size="small" current={currentStepIndex}>
            {stepsItems}
        </Steps>
    );
};
