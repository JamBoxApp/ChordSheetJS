import HtmlFormatter, { Template, CSS } from './html_formatter';
import template from './templates/html_table_formatter';
import { scopeCss } from '../utilities';

/**
 * Basic CSS, in object style à la useStyles, to use with output generated by {@link }HtmlTableFormatter}
 * For a CSS string see {@link scopedCss}
 * @type {Object.<string, Object.<string, string>>}
 */
export const defaultCss: CSS = {
  'h1': {
    fontSize: '1.5em',
  },
  'h2': {
    fontSize: '1.1em',
  },
  'table': {
    borderSpacing: '0',
    color: 'inherit',
  },
  'td': {
    padding: '3px 0',
  },
  '.chord:not(:last-child)': {
    paddingRight: '10px',
  },
  '.paragraph': {
    marginBottom: '1em',
  },
};

/**
 * Generates basic CSS, scoped within the provided selector, to use with output generated by {@link HtmlTableFormatter}
 * @param scope the CSS scope to use, for example `.chordSheetViewer`
 * @returns {string} the CSS string
 */
export function scopedCss(scope: string): string {
  return scopeCss(defaultCss, scope);
}

/**
 * Formats a song into HTML. It uses TABLEs to align lyrics with chords, which makes the HTML for things like
 * PDF conversion.
 */
class HtmlTableFormatter extends HtmlFormatter {
  get template(): Template {
    return template;
  }

  get defaultCss(): CSS {
    return defaultCss;
  }
}

export default HtmlTableFormatter;
