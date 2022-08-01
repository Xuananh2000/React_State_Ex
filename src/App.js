import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: 0, value: 0};
    }

    Test(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value});
        }
    }

    render() {
        return (
            <div>
                <p>Giá trị {this.state.index}</p>
                <button onClick={() => {
                    this.setState({index: this.state.index + 1,  value: this.state.index})
                }}>
                    Tăng
                </button>
                <button onClick={() => {
                    this.setState({index: this.state.index - 1, value: this.state.index})
                }}>
                    Giảm
                </button>
                <div>The value is: {this.state.value}</div>
            </div>
        );
    }
}

export default App;