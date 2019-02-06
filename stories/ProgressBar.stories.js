import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ProgressBar } from '../src/components/ProgressBar';

const answersDefault = Array.from(
  Array(23).fill({
    patternId: null,
    answerId: null,
    answered: false,
    correct: false
  })
);
const progressDefault = { answers: answersDefault };

const answersSuccess = Array.from(
  Array(23).fill({
    patternId: null,
    answerId: null,
    answered: true,
    correct: true
  })
);
const progressSuccess = { answers: answersSuccess };

const answersError = Array.from(
  Array(23).fill({
    patternId: null,
    answerId: null,
    answered: true,
    correct: false
  })
);
const progressError = { answers: answersError };

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)

  .add('with unanswered questions', () => <ProgressBar progress={progressDefault} />)
  .add('with all questions answered correctly', () => <ProgressBar progress={progressSuccess} />)
  .add('with all questions answered wrong', () => <ProgressBar progress={progressError} />);