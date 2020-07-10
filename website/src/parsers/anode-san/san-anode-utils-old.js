import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'san-for-swan/package.json';

const ID = 'san-anode-utils-old';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/baidu/san',

  loadParser(callback) {
    require(['san-for-swan'], callback);
  },

  parse(tplParser, code) {
    return tplParser.parseTemplate(code);
  },

  opensByDefault(node, key) {
    return key === 'children';
  }
};
