import React from "react";
import PropTypes from "prop-types";

const HelloWorld = message => {
    return <div>Hello World</div>
}

HelloWorld.propTypes = {
    message: PropTypes.string
}
export default HelloWorld;