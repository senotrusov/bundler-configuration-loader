# Bundler configuration loader, a tool to include bundler configuration in the resulting build

Provides a way to include [webpack module bundler](http://webpack.github.io/) configuration
in the resulting bundle build. That makes possible to use certain data from build configuration
later, at the time the build itself gets executed (in browser, in production environment,
then installed as the package).

By default the whole configuration will be included in the bundle build.
That may lead to the leak of sensitive information and such use should be carefully considered.

If the argument string is specified, then it will be used as a property name to include only
the part of the bundler configuration which is stored in that property.
That is a much more safer option.

Note that if that property contains an object or nested objects, they all will be included.
Basically the `JSON.stringify()` is performed.


## Usage

Say you have a variable in bundler configuration and you want that variable
to be available in the resulting build:

```javascript
module.exports = {
  env: "development"
};
```

Somewhere in the javascript about to be packed you may call the loader and then
the variable content (here "development") will be included in bundle:

```javascript
// Include in the bundle build the part of the configuration accessible by the 'env' property
var env = require('bundler-configuration?env!')

// sample use of that data
if (env === 'development')
  window.logger.level = 'info'

// Include the entire configuration in the bundle build.
// That may lead to the leak of sensitive information and such use should be carefully considered.
var config = require('bundler-configuration!')
```


## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```
npm install --save-dev bundler-configuration-loader
```


## Copyright and License

```
Copyright 2015-2016 Stanislav Senotrusov

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


## Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.
