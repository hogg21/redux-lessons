import React from "react";
import ThemedButton from "./ThemedButton.jsx";
import {themes, themeContent} from './themes-context.js'

class App extends React.Component {
    state = {
        theme: themes.light
    }
    toggleTheme = () => {
        const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
        this.setState({
            theme: newTheme
        })
    }
    render() {
        return (
            <div>
                <themeContent.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
                    <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
                </themeContent.Provider>
            </div>
        );
    }
}
export default App;