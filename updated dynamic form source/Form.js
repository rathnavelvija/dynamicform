
import React from 'react';
import Input from './Input';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {inputList: []};
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<Input key={inputList.length} />)
        });
    }

    render() {
        return (
         
            <div>
                <li>
                <button onClick={this.onAddBtnClick}>Add input</button>
                {this.state.inputList.map(function(input, index) {
                    return input;
                  })}
                  </li>
            </div>
        );
    }
}


export default Form;

