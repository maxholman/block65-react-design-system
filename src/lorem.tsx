/* eslint-disable import/no-extraneous-dependencies */
import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2,
  },
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});
