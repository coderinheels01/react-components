module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"Hello World component that prints out Hello and the message passed.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\n/** Hello World component that prints out Hello and the message passed. */\nconst HelloWorld = ({ message }) => {\n  return <div>Hello {message}</div>;\n};\n\nHelloWorld.propTypes = {\n  /** Message to display*/\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: \"World\"\n};\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from \"react\";\nimport HelloWorld from \"react-components/HelloWorld/\";\n\n\n/** Custom message */\nconst ExampleHelloWorld = () => {\n    return <HelloWorld message=\"Example Component\"/>\n}\nexport  default  ExampleHelloWorld;"}]},{"name":"Label","description":"Label with required field display and  html","props":{"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML id for associated input"},"required":{"type":{"name":"bool"},"required":false,"description":"Display red asterisk if required is true"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\n/** Label with required field display and  html*/\nconst Label = ({ label, htmlFor, required }) => {\n  return (\n    <label style={{ display: \"block\" }} htmlFor={htmlFor}>\n      {label} {required && <span style={{ color: \"red\" }}> * </span>}\n    </label>\n  );\n};\n\nLabel.propTypes = {\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** HTML id for associated input*/\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Display red asterisk if required is true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleLabelOptional","description":"Optional label","code":"import React from \"react\";\nimport Label from \"react-components/Label/\";\n\n/** Optional label */\nconst ExampleLabelOptional = () => {\n  return <Label htmlFor=\"helloInput\" label=\"hello\" />;\n};\nexport default ExampleLabelOptional;\n"},{"name":"ExampleLabelRequired","description":"Required Label","code":"import React from \"react\";\nimport Label from \"react-components/Label/\";\n\n/** Required Label*/\nconst ExampleLabelRequired = () => {\n  return <Label htmlFor=\"helloRequiredInput\" label=\"hello\" required />;\n};\n\nexport default ExampleLabelRequired;\n"}]},{"name":"ProgressBar","description":"Progress bar that display progress","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percentage of the progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Width of the progress bar"},"height":{"type":{"name":"number"},"required":false,"description":"Height of the progress bar","defaultValue":{"value":"15","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\n/** Progress bar that display progress*/\nconst ProgressBar = ({ percent, width, height = 15 }) => (\n  <div\n    style={{\n      border: \"1px solid #d3d3d3\",\n      borderRadius: \"5em\",\n      width: width,\n      backgroundColor: \"#898787\",\n      overflow: \"hidden\"\n    }}\n  >\n    <div\n      style={{\n        borderRadius: \"5em 0em 0em 5em\",\n        width: ProgressBar.calculateCompletionWidth(width, percent),\n        height,\n        backgroundColor: ProgressBar.calculateCompletionColor(percent)\n      }}\n    />\n    <div />\n  </div>\n);\n\n/** Calculate completed progress */\nProgressBar.calculateCompletionWidth = (width = 0, percent = 0) => {\n  return parseInt(width * (percent / 100), 10);\n};\n\n/** Calculate progress bar color  */\nProgressBar.calculateCompletionColor = percent => {\n  debugger;\n  if (percent === 100) return \"#36a01d\";\n  return percent > 50 ? \"#72e356\" : \"#e02d14\";\n};\n\nProgressBar.propTypes = {\n  /** Percentage of the progress completed*/\n  percent: PropTypes.number.isRequired,\n\n  /** Width of the progress bar*/\n  width: PropTypes.number.isRequired,\n\n  /** Height of the progress bar*/\n  height: PropTypes.number\n};\n\nexport default ProgressBar;\n","examples":[{"name":"ExampleProgressBar100Percent","description":"Progress bar with 100% completion","code":"import React from \"react\";\nimport ProgressBar from \"../../../components/ProgressBar\";\n\n/** Progress bar with 100% completion */\nconst ExampleProgressBar100Percent = () => {\n  return <ProgressBar percent={100} width={100} />;\n};\n\nexport default ExampleProgressBar100Percent;\n"},{"name":"ExampleProgressBar10Percent","description":"Progress bar with 10% completion","code":"import React from \"react\";\nimport ProgressBar from \"../../../components/ProgressBar\";\n\n/** Progress bar with 10% completion */\nconst ExampleProgressBar10Percent = () => {\n  return <ProgressBar percent={10} width={100} />;\n};\n\nexport default ExampleProgressBar10Percent;\n"},{"name":"ExampleProgressBar10PercentWith30Height","description":"Progress bar with 10% completion with 30px height","code":"import React from \"react\";\nimport ProgressBar from \"../../../components/ProgressBar\";\n\n/** Progress bar with 10% completion with 30px height*/\nconst ExampleProgressBar10PercentWith30Height = () => {\n  return <ProgressBar percent={10} width={100} height={30} />;\n};\n\nexport default ExampleProgressBar10PercentWith30Height;\n"},{"name":"ExampleProgressBar60Percent","description":"Progress bar with 60% completion","code":"import React from \"react\";\nimport ProgressBar from \"../../../components/ProgressBar\";\n\n/** Progress bar with 60% completion */\nconst ExampleProgressBar60Percent = () => {\n  return <ProgressBar percent={60} width={100} />;\n};\n\nexport default ExampleProgressBar60Percent;\n"}]},{"name":"TextInput","description":"","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"HTML id for tying label and input together. Used for testing purpose"},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call on change"},"required":{"type":{"name":"custom","raw":"false"},"required":false,"description":"Mark input with asterisk if it is required","defaultValue":{"value":"false","computed":false}},"name":{"type":{"name":"string"},"required":false,"description":"Input name"},"type":{"type":{"name":"enum","value":[{"value":"\"text\"","computed":false},{"value":"\"password\"","computed":false},{"value":"\"number\"","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"placehoder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"children":{"type":{"name":"node"},"required":false,"description":"Child components to display next to the input"},"value":{"type":{"name":"any"},"required":false,"description":"Input value"},"error":{"type":{"name":"string"},"required":false,"description":"Error string to display when error occured"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport Label from \"../Label\";\n\nconst TextInput = ({\n  htmlId,\n  label,\n  required = false,\n  name,\n  type = \"text\",\n  placehoder,\n  children,\n  onChange,\n  value,\n  error,\n  ...props\n}) => {\n  return (\n    <div style={{ marginBottom: 16 }}>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        onChange={onChange}\n        placeholder={placehoder}\n        style={error && { border: \"solid 1px red\" }}\n        {...props}\n      />\n      {children}\n      {error && (\n        <div className=\"error\" style={{ color: \"red\" }}>\n          {error}\n        </div>\n      )}\n    </div>\n  );\n};\n\nTextInput.propTypes = {\n  /** HTML id for tying label and input together. Used for testing purpose*/\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Function to call on change */\n  onChange: PropTypes.func.isRequired,\n\n  /** Mark input with asterisk if it is required */\n  required: false,\n\n  /** Input name */\n  name: PropTypes.string,\n\n  /** Input type */\n  type: PropTypes.oneOf([\"text\", \"password\", \"number\"]),\n\n  /** Placeholder to display when empty */\n  placehoder: PropTypes.string,\n\n  /** Child components to display next to the input*/\n  children: PropTypes.node,\n\n  /** Input value*/\n  value: PropTypes.any,\n\n  /** Error string to display when error occured*/\n  error: PropTypes.string\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"","code":"import React from \"react\";\nimport TextInput from \"react-components/TextInput/\";\n\nconst ExampleError = () => {\n  return (\n    <TextInput\n      label=\"First Name\"\n      onChange={() => {}}\n      htmlId=\"first-name-id\"\n      name=\"firstName\"\n    />\n  );\n};\nexport default ExampleError;\n"},{"name":"ExampleOptional","description":"Optional Input example","code":"import React from \"react\";\nimport TextInput from \"react-components/TextInput/\";\n\n/** Optional Input example */\n\nconst ExampleOptional = () => {\n  return (\n    <TextInput\n      label=\"First Name\"\n      onChange={() => {}}\n      htmlId=\"first-name-id\"\n      name=\"firstName\"\n    />\n  );\n};\n\nexport default ExampleOptional;\n"},{"name":"ExamplePlaceholder","description":"","code":"import React from \"react\";\nimport TextInput from \"../../../components/TextInput\";\n\nconst ExamplePlaceholder = () => {\n  return (\n    <TextInput\n      label=\"First Name\"\n      onChange={() => {}}\n      htmlId=\"first-name-id\"\n      name=\"firstName\"\n      placehoder=\"Enter First Name\"\n    />\n  );\n};\nexport default ExamplePlaceholder;\n"},{"name":"ExampleRequired","description":"","code":"import React from \"react\";\nimport TextInput from \"react-components/TextInput/\";\n\nconst ExampleRequired = () => {\n  return (\n    <TextInput\n      label=\"First Name\"\n      onChange={() => {}}\n      htmlId=\"first-name-id\"\n      name=\"firstName\"\n      required\n      error=\"First name is required.\"\n    />\n  );\n};\n\nexport default ExampleRequired;\n"}]}]