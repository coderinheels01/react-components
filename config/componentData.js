module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"","props":{"message":{"type":{"name":"string"},"required":false,"description":""}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\nconst HelloWorld = message => {\n    return <div>Hello World</div>\n}\n\nHelloWorld.propTypes = {\n    message: PropTypes.string\n}\nexport default HelloWorld;","examples":[]}]