'use strict';
const Base64CSS = require('@yapplabs/broccoli-base64-css');

module.exports = {
  name: '@yapplabs/ember-cli-base64-css',
  postprocessTree(type, tree) {
    if (this.options.enabled) {
      if (type === 'all' || type === 'styles') {
        tree = new Base64CSS(tree, this.options);
      }
    }
    return tree;
  },
  included(app) {
    this.app = app;
    this.options = this.app.options.base64CSS || {};
    if (this.options.enabled === undefined) {
      this.options.enabled = true;
    }
  }
};
