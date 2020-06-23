const fs = require('fs');
const path = require('path');
const { transform } = require('@babel/core');
const { parseQuery } = require('loader-utils');

const transpile = (code) => transform(code).code;

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

module.exports = function() {

  this.cacheable && this.cacheable();

  const query = parseQuery(this.resourceQuery);
  const fileDir = this.resourcePath.replace(path.basename(this.resourcePath), '');
  const filePath = path.resolve(fileDir, query['path']);
  const fileName = camelCaseToDash(path.basename(filePath).replace('.vue', ''));
  const source = fs.readFileSync(filePath, 'utf8');

  const code = `
		import Vue from 'vue'
    import CodeLoading from 'docs/app/components/CodeLoading'

		export default function (Component) {
			const AsyncComponent = () => ({
				component: import('${filePath}'),
				loading: CodeLoading,
				delay: 0,
			})

			Vue.component('${fileName}', AsyncComponent)

			Component.options.examples = Component.options.examples || {};
			Component.options.examples['${fileName}'] = {
				name: '${fileName}',
				source: ${JSON.stringify(source)},
			}
		}
	`;

  this.callback(null, transpile(code));
};
