module.exports = /* eslint-disable */ [
  {
    name: "EyeIcon",
    description: "Eye icon",
    code:
      'import React from "react";\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faEye } from "@fortawesome/free-solid-svg-icons";\n\n/** Eye icon */\nconst EyeIcon = () => {\n  return <FontAwesomeIcon icon={faEye} />;\n};\n\nexport default EyeIcon;\n',
    examples: [
      {
        name: "ExampleEyeIcon",
        description: "",
        code:
          'import React from "react";\nimport EyeIcon from "react-components/EyeIcon/";\n\nconst ExampleEyeIcon = () => {\n  return <EyeIcon />;\n};\n\nexport default ExampleEyeIcon;\n'
      }
    ]
  },
  {
    name: "HelloWorld",
    description:
      "Hello World component that prints out Hello and the message passed.",
    props: {
      message: {
        type: { name: "string" },
        required: false,
        description: "Message to display",
        defaultValue: { value: '"World"', computed: false }
      }
    },
    code:
      'import React from "react";\nimport PropTypes from "prop-types";\n\n/** Hello World component that prints out Hello and the message passed. */\nconst HelloWorld = ({ message }) => {\n  return <div>Hello {message}</div>;\n};\n\nHelloWorld.propTypes = {\n  /** Message to display*/\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: "World"\n};\nexport default HelloWorld;\n',
    examples: [
      {
        name: "ExampleHelloWorld",
        description: "Custom message",
        code:
          'import React from "react";\nimport HelloWorld from "react-components/HelloWorld/";\n\n\n/** Custom message */\nconst ExampleHelloWorld = () => {\n    return <HelloWorld message="Example Component"/>\n}\nexport  default  ExampleHelloWorld;'
      }
    ]
  },
  {
    name: "Label",
    description: "Label with required field display and  html",
    props: {
      label: {
        type: { name: "string" },
        required: true,
        description: "Label text"
      },
      htmlFor: {
        type: { name: "string" },
        required: true,
        description: "HTML id for associated input"
      },
      required: {
        type: { name: "bool" },
        required: false,
        description: "Display red asterisk if required is true"
      }
    },
    code:
      'import React from "react";\nimport PropTypes from "prop-types";\nimport styled from "styled-components";\n\n/** Label with required field display and  html*/\nconst Label = ({ label, htmlFor, required }) => {\n  const LabelWrapper = styled.label`\n    display: block;\n  `;\n  const LabelRequired = styled.span`\n    color: red;\n  `;\n  return (\n    <LabelWrapper htmlFor={htmlFor}>\n      {label}\n      {required && <LabelRequired> * </LabelRequired>}\n    </LabelWrapper>\n  );\n};\n\nLabel.propTypes = {\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** HTML id for associated input*/\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Display red asterisk if required is true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n',
    examples: [
      {
        name: "ExampleLabelOptional",
        description: "Optional label",
        code:
          'import React from "react";\nimport Label from "react-components/Label/";\n\n/** Optional label */\nconst ExampleLabelOptional = () => {\n  return <Label htmlFor="helloInput" label="hello" />;\n};\nexport default ExampleLabelOptional;\n'
      },
      {
        name: "ExampleLabelRequired",
        description: "Required Label",
        code:
          'import React from "react";\nimport Label from "react-components/Label/";\n\n/** Required Label*/\nconst ExampleLabelRequired = () => {\n  return <Label htmlFor="helloRequiredInput" label="hello" required />;\n};\n\nexport default ExampleLabelRequired;\n'
      }
    ]
  },
  {
    name: "PasswordInput",
    description: "Password input with show/hide password icon",
    props: {
      label: {
        type: { name: "string" },
        required: false,
        description: "Label text of the password input box",
        defaultValue: { value: '"Password"', computed: false }
      },
      value: {
        type: { name: "any" },
        required: false,
        description: "Password value"
      },
      minLength: {
        type: { name: "number" },
        required: false,
        description: "Maximum length of password input box",
        defaultValue: { value: "8", computed: false }
      },
      placeholder: {
        type: { name: "string" },
        required: false,
        description: "Default message if Input is empty"
      },
      htmlId: { type: { name: "string" }, required: false, description: "" },
      quality: {
        type: { name: "number" },
        required: false,
        description: "ProgressBar percentage to display quality of the password"
      },
      showTogglePasswordIcon: {
        type: { name: "custom", raw: "false" },
        required: false,
        description:
          "Flag to show or hide eye icon to show/hide visibility of password",
        defaultValue: { value: "false", computed: false }
      },
      name: {
        type: { name: "string" },
        required: false,
        description: "Password Input name"
      },
      error: {
        type: { name: "node" },
        required: false,
        description: "Error string to display"
      },
      onChange: {
        type: { name: "func" },
        required: true,
        description: "Function to call when input value changes"
      }
    },
    code:
      'import React, { useState } from "react";\nimport PropTypes from "prop-types";\nimport TextInput from "../TextInput";\nimport EyeIcon from "../EyeIcon";\nimport ProgressBar from "../ProgressBar";\nimport { Link } from "react-router-dom";\n\n/** Password input with show/hide password icon*/\nconst PasswordInput = ({\n  label = "Password",\n  value,\n  minLength = 8,\n  placeholder,\n  htmlId,\n  quality,\n  showTogglePasswordIcon = false,\n  name,\n  error,\n  onChange\n}) => {\n  const [showPassword, setShowPassword] = useState(false);\n\n  return (\n    <div>\n      <TextInput\n        label={label}\n        type={showPassword ? "text" : "password"}\n        value={value}\n        minLength={minLength}\n        placeholder={placeholder}\n        htmlId={htmlId}\n        name={name}\n        onChange={onChange}\n        error={error}\n        required\n      >\n        {showTogglePasswordIcon && (\n          <Link onClick={() => setShowPassword(!showPassword)}>\n            <EyeIcon />\n          </Link>\n        )}\n        <ProgressBar percent={quality} width={150} height={8} />\n      </TextInput>\n    </div>\n  );\n};\n\nPasswordInput.propTypes = {\n  /** Label text of the password input box*/\n  label: PropTypes.string,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Maximum length of password input box*/\n  minLength: PropTypes.number,\n\n  /** Default message if Input is empty */\n  placeholder: PropTypes.string,\n\n  /**HTML ID for the input */\n  htmlId: PropTypes.string,\n\n  /** ProgressBar percentage to display quality of the password*/\n  quality: PropTypes.number,\n\n  /** Flag to show or hide eye icon to show/hide visibility of password*/\n  showTogglePasswordIcon: false,\n\n  /** Password Input name */\n  name: PropTypes.string,\n\n  /** Error string to display */\n  error: PropTypes.node,\n\n  /** Function to call when input value changes*/\n  onChange: PropTypes.func.isRequired\n};\n\nexport default PasswordInput;\n',
    examples: [
      {
        name: "ExampleWithEyeIcon",
        description: "",
        code:
          'import React, { useState } from "react";\nimport PasswordInput from "../../../components/PasswordInput";\n\nconst ExampleWithEyeIcon = () => {\n  const [password, setPassword] = useState("");\n\n  const calculateQuality = () => {\n    return password.length > 10 ? 100 : password.length * 10;\n  };\n  return (\n    <PasswordInput\n      onChange={e => {\n        setPassword(e.currentTarget.value);\n      }}\n      value={password}\n      htmlId="password-input"\n      name="passwordInput"\n      quality={calculateQuality()}\n      placeholder="Enter your password"\n      showTogglePasswordIcon\n    />\n  );\n};\n\nexport default ExampleWithEyeIcon;\n'
      },
      {
        name: "ExampleWithProgressbar",
        description:
          "PasswordInput Example with ProgressBar to display quality of the password",
        code:
          'import React, { useState } from "react";\nimport PasswordInput from "../../../components/PasswordInput";\n\n/** PasswordInput Example with ProgressBar to display quality of the password */\nconst ExampleWithProgressbar = () => {\n  const [password, setPassword] = useState("");\n\n  const calculateQuality = () => {\n    return password.length > 10 ? 100 : password.length * 10;\n  };\n  return (\n    <PasswordInput\n      htmlId="password-input-id"\n      name="passwordInput"\n      placeholder="Enter your password"\n      onChange={e => {\n        setPassword(e.currentTarget.value);\n      }}\n      quality={calculateQuality()}\n    />\n  );\n};\n\nexport default ExampleWithProgressbar;\n'
      }
    ]
  },
  {
    name: "ProgressBar",
    description: "Progress bar that display progress",
    props: {
      percent: {
        type: { name: "number" },
        required: true,
        description: "Percentage of the progress completed"
      },
      width: {
        type: { name: "number" },
        required: true,
        description: "Width of the progress bar"
      },
      height: {
        type: { name: "number" },
        required: false,
        description: "Height of the progress bar",
        defaultValue: { value: "15", computed: false }
      }
    },
    code:
      'import React from "react";\nimport PropTypes from "prop-types";\nimport styled from "styled-components";\n\n/** Progress bar that display progress*/\nconst ProgressBar = ({ percent, width, height = 15 }) => {\n  const ProgressBarWrapper = styled.div`\n    border: 1px solid #d3d3d3;\n    border-radius: 5em;\n    width: ${width}px;\n    background-color: #898787;\n    overflow: hidden;\n  `;\n\n  const ProgressBarPercent = styled.div`\n    border-radius: 5em 0em 0em 5em;\n    width: ${calculateCompletionWidth(width, percent)}px;\n    height: ${height}px;\n    background-color: ${calculateCompletionColor(percent)};\n  `;\n  return (\n    <ProgressBarWrapper>\n      <ProgressBarPercent />\n    </ProgressBarWrapper>\n  );\n};\n\n/** Calculate completed progress */\nconst calculateCompletionWidth = (width = 0, percent = 0) => {\n  return parseInt(width * (percent / 100), 10);\n};\n\n/** Calculate progress bar color  */\nconst calculateCompletionColor = percent => {\n  if (percent >= 100) return "#36a01d";\n  return percent > 50 ? "#72e356" : "#e02d14";\n};\n\nProgressBar.propTypes = {\n  /** Percentage of the progress completed*/\n  percent: PropTypes.number.isRequired,\n\n  /** Width of the progress bar*/\n  width: PropTypes.number.isRequired,\n\n  /** Height of the progress bar*/\n  height: PropTypes.number\n};\n\nexport default ProgressBar;\n',
    examples: [
      {
        name: "ExampleProgressBar100Percent",
        description: "Progress bar with 100% completion",
        code:
          'import React from "react";\nimport ProgressBar from "../../../components/ProgressBar";\n\n/** Progress bar with 100% completion */\nconst ExampleProgressBar100Percent = () => {\n  return <ProgressBar percent={100} width={100} />;\n};\n\nexport default ExampleProgressBar100Percent;\n'
      },
      {
        name: "ExampleProgressBar10Percent",
        description: "Progress bar with 10% completion",
        code:
          'import React from "react";\nimport ProgressBar from "../../../components/ProgressBar";\n\n/** Progress bar with 10% completion */\nconst ExampleProgressBar10Percent = () => {\n  return <ProgressBar percent={10} width={100} />;\n};\n\nexport default ExampleProgressBar10Percent;\n'
      },
      {
        name: "ExampleProgressBar10PercentWith30Height",
        description: "Progress bar with 10% completion with 30px height",
        code:
          'import React from "react";\nimport ProgressBar from "../../../components/ProgressBar";\n\n/** Progress bar with 10% completion with 30px height*/\nconst ExampleProgressBar10PercentWith30Height = () => {\n  return <ProgressBar percent={10} width={100} height={30} />;\n};\n\nexport default ExampleProgressBar10PercentWith30Height;\n'
      },
      {
        name: "ExampleProgressBar60Percent",
        description: "Progress bar with 60% completion",
        code:
          'import React from "react";\nimport ProgressBar from "../../../components/ProgressBar";\n\n/** Progress bar with 60% completion */\nconst ExampleProgressBar60Percent = () => {\n  return <ProgressBar percent={60} width={100} />;\n};\n\nexport default ExampleProgressBar60Percent;\n'
      }
    ]
  },
  {
    name: "TextInput",
    description: "",
    props: {
      htmlId: {
        type: { name: "string" },
        required: true,
        description:
          "HTML id for tying label and input together. Used for testing purpose"
      },
      label: {
        type: { name: "string" },
        required: true,
        description: "Input label"
      },
      onChange: {
        type: { name: "func" },
        required: true,
        description: "Function to call on change"
      },
      required: {
        type: { name: "custom", raw: "false" },
        required: false,
        description: "Mark input with asterisk if it is required",
        defaultValue: { value: "false", computed: false }
      },
      name: {
        type: { name: "string" },
        required: false,
        description: "Input name"
      },
      type: {
        type: {
          name: "enum",
          value: [
            { value: '"text"', computed: false },
            { value: '"password"', computed: false },
            { value: '"number"', computed: false }
          ]
        },
        required: false,
        description: "Input type",
        defaultValue: { value: '"text"', computed: false }
      },
      placeholder: {
        type: { name: "string" },
        required: false,
        description: "Placeholder to display when empty"
      },
      children: {
        type: { name: "node" },
        required: false,
        description: "Child components to display next to the input"
      },
      value: {
        type: { name: "any" },
        required: false,
        description: "Input value"
      },
      error: {
        type: { name: "string" },
        required: false,
        description: "Error string to display when error occured"
      }
    },
    code:
      'import React from "react";\nimport PropTypes from "prop-types";\nimport Label from "../Label";\nimport styled from "styled-components";\n\nconst TextInputWrapper = styled.div`\n  margin-bottom: 16;\n`;\n\nconst TextInputInner = styled.input(props => ({\n  border: props.error ? "solid 1px red" : ""\n}));\n\nconst Error = styled.div`\n  color: red;\n`;\n\nconst TextInput = ({\n  htmlId,\n  label,\n  required = false,\n  name,\n  type = "text",\n  placeholder,\n  children,\n  onChange,\n  value,\n  error,\n  ...props\n}) => (\n  <TextInputWrapper>\n    <Label htmlFor={htmlId} label={label} required={required} />\n    <TextInputInner\n      id={htmlId}\n      type={type}\n      name={name}\n      onChange={onChange}\n      placeholder={placeholder}\n      error={error}\n      {...props}\n    />\n    {children}\n    {error && <Error>{error}</Error>}\n  </TextInputWrapper>\n);\n\nTextInput.propTypes = {\n  /** HTML id for tying label and input together. Used for testing purpose*/\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Function to call on change */\n  onChange: PropTypes.func.isRequired,\n\n  /** Mark input with asterisk if it is required */\n  required: false,\n\n  /** Input name */\n  name: PropTypes.string,\n\n  /** Input type */\n  type: PropTypes.oneOf(["text", "password", "number"]),\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Child components to display next to the input*/\n  children: PropTypes.node,\n\n  /** Input value*/\n  value: PropTypes.any,\n\n  /** Error string to display when error occured*/\n  error: PropTypes.string\n};\n\nexport default TextInput;\n',
    examples: [
      {
        name: "ExampleError",
        description: "",
        code:
          'import React from "react";\nimport TextInput from "react-components/TextInput/";\n\nconst ExampleError = () => {\n  return (\n    <TextInput\n      label="First Name"\n      onChange={() => {}}\n      htmlId="first-name-id"\n      name="firstName"\n    />\n  );\n};\nexport default ExampleError;\n'
      },
      {
        name: "ExampleOptional",
        description: "Optional Input example",
        code:
          'import React from "react";\nimport TextInput from "react-components/TextInput/";\n\n/** Optional Input example */\n\nconst ExampleOptional = () => {\n  return (\n    <TextInput\n      label="First Name"\n      onChange={() => {}}\n      htmlId="first-name-id"\n      name="firstName"\n    />\n  );\n};\n\nexport default ExampleOptional;\n'
      },
      {
        name: "ExamplePlaceholder",
        description: "",
        code:
          'import React from "react";\nimport TextInput from "../../../components/TextInput";\n\nconst ExamplePlaceholder = () => {\n  return (\n    <TextInput\n      label="First Name"\n      onChange={() => {}}\n      htmlId="first-name-id"\n      name="firstName"\n      placeholder="Enter First Name"\n    />\n  );\n};\nexport default ExamplePlaceholder;\n'
      },
      {
        name: "ExampleRequired",
        description: "",
        code:
          'import React from "react";\nimport TextInput from "react-components/TextInput/";\n\nconst ExampleRequired = () => {\n  return (\n    <TextInput\n      label="First Name"\n      onChange={() => {}}\n      htmlId="first-name-id"\n      name="firstName"\n      required\n      error="First name is required."\n    />\n  );\n};\n\nexport default ExampleRequired;\n'
      }
    ]
  }
];
