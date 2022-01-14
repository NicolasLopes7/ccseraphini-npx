#!/usr/bin/env node
import prompts from 'prompts';
import handlers from './handlers';
import { getArgument } from './utils/getArgument';
import { generateInput } from './utils/generateInput';

const arg = getArgument();

const main = async () => {
  if (!arg) {
    const { handler } = await prompts({
      type: 'select',
      name: 'handler',
      message: 'Selection one of the options below:',
      choices: generateInput(Object.keys(handlers)),
    });

    handlers[handler]();
  } else {
    handlers[arg]();
  }
};

(async () => main())();
