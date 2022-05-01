import React from "react";

class FormStyled extends React.Component {
    state = {
        name: '',
        phone: '',
       
        
    };
    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        });
    } 
    render () {
        console.log(this.state);
        return(
            <div> 
                <form className="form">
                    <p>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                    </p>
                    <p>
                    <input type="text" name="phone" value={this.state.value} onChange={this.handleChange}/>
                    </p>
                    <p>
                    <input type="button" name="button" value="Send" className="button"/>
                    </p>
                </form>

            </div>
        );
    }
}

export default FormStyled;