import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'san-anode-utils/package.json';

const ID = 'san-anode-utils';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/ecomfe/san-anode-utils',

  loadParser(callback) {
    require(['san-anode-utils'], callback);
  },

  parse(tplParser, code) {
    return tplParser.parseTemplate(code);
  },

  opensByDefault(node, key) {
    return key === 'children';
  }
};
