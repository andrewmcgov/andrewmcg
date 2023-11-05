const shiki = require('shiki');
const {
  importUnistUtilVisit,
  importHastUtilToString,
  importHastUtilFromHtml,
} = require('../esm-modules.js');

const languages = [
  'javascript',
  'js',
  'jsx',
  'typescript',
  'ts',
  'tsx',
  'css',
  'html',
  'json',
];

module.exports = async function loadRehypeShiki() {
  const {visit} = await importUnistUtilVisit();
  const {toString: hastToString} = await importHastUtilToString();
  const {fromHtml} = await importHastUtilFromHtml();

  function attacher(options) {
    var settings = options || {};
    var theme = settings.theme || 'nord';
    var highlighter;

    return transformer;

    async function transformer(tree) {
      highlighter = await shiki.getHighlighter({
        theme: theme,
        langs: languages,
      });
      visit(tree, 'element', visitor);
    }

    function visitor(node, index, parent) {
      if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
        return;
      }

      const lang = codeLanguage(node);
      const codeString = hastToString(node);
      const highlights = highlightedLines(node);

      const html = highlighter.codeToHtml(codeString, {
        lang,
        lineOptions: highlights.map((line) => ({
          line: Number(line),
          classes: ['highlighted-code-line'],
        })),
      });

      const tree = fromHtml(html, {fragment: true}).children[0].children;

      node.children = tree;
    }
  }

  function codeLanguage(node) {
    const className = node.properties.className || [];
    var value;

    for (const element of className) {
      value = element;

      if (value.slice(0, 9) === 'language-') {
        return value.slice(9);
      }
    }

    return null;
  }

  function highlightedLines(node) {
    const meta = node.data?.meta;

    if (!meta) return [];

    const highlightedLines = meta.split('=')[1];

    if (!highlightedLines) return [];

    return highlightedLines.split(',');
  }

  return attacher;
};
