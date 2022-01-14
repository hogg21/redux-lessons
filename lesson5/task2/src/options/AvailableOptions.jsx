import { connect } from "react-redux";
import { availableOptionsSelect } from "./options.selectors.js";
import Options from './Options.jsx';
import { toggleOption } from './options.actions.js';

const mapState = state => {
    return {
        options: availableOptionsSelect(state)
    }
}
const mapDispatch = {
    moveOption: toggleOption
}
export default connect(mapState, mapDispatch)(Options);