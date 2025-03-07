import strip from './strip.js';
import { erase, cursor } from 'sisteransi';

const width = str => [...strip(str)].length;

/**
 * @param {string} prompt
 * @param {number} perLine
 */
export default function(prompt, perLine) {
  if (!perLine) return erase.line + cursor.to(0);

  let rows = 0;
  const lines = prompt.split(/\r?\n/);
  for (let line of lines) {
    rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
  }

  return erase.lines(rows);
};
