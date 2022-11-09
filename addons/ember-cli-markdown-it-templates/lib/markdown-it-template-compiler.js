'use strict';

// eslint-disable-next-line node/no-extraneous-require, no-undef
const stew = require('broccoli-stew');
// eslint-disable-next-line node/no-extraneous-require, no-undef
const MarkdownItCompiler = require('markdown-it-compiler');

module.exports = class MarkdownTemplateCompiler {
  constructor(options = {}) {
    this.name = 'markdown-template-compiler';
    this.ext = ['md', 'markdown'];
    this.options = Object.assign(
      {
        options: {
          linkify: true,
          html: true,
          typographer: true,
        },
        plugins: [
          'markdown-it-ember',
          // 'markdown-it-attrs',
          [
            'markdown-it-attrs',
            {
              leftDelimiter: '{',
              rightDelimiter: '}',
              // allowedAttributes: ['id', 'class', /^regex.*$/],
              allowedAttributes: ['id', 'class', /^data-.*$/],
            },
          ],
        ],
        format(content) {
          return `${content.html}`;
        },
      },
      options
    );
    // this.configure = (md) => {
    //   md.use(require('markdown-it-container'));
    // };
    this.compiler = new MarkdownItCompiler(this.options);
  }

  toTree(tree) {
    const compiler = this.compiler;

    let compiled = stew.map(
      tree,
      `**/*.{${this.ext}}`,
      (string) => compiler.compile(string, this.options).html
    );

    return stew.rename(compiled, '.md', '.hbs');
  }
};
