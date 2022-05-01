import React from "react";
import clsx from 'clsx';

class FormStyledtwo extends React.Component {
    state = {
        isChangedEmail: true,
        isChangedPhone: true,
        email: '',
        phone: '',
       
       
        
    };
    constructor () {
        super();
        this.handleMail = this.handleMail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    handleMail(e) {       
        this.setState({
            email: e.target.value,
        });
        if(e.target.value === "1") {
           
            this.setState({isChangedEmail: true});
        } else {
            this.setState({isChangedEmail: false});
        }
       
    } 

    handlePhone(e) {
        this.setState({
            phone: e.target.value,
        });
       
        if(e.target.value === "8") {
            this.setState({isChangedPhone: true});
                        
        } else {
            this.setState({isChangedPhone: false}); 
        }
        
    }

    handleSub(e) {
        
        
        if(this.state.isChangedEmail && this.state.isChangedPhone && this.state.email !== '' && this.state.phone !== '')  {
            console.log("submit success");
        }
        
        e.preventDefault();
        
    }
    

    render () {
        console.log(this.state);
        return(
            <div> 
                <form >
                    <p>
                    <input  className={clsx('class1', !this.state.isChangedEmail && 'redBorder')} type="email" name="email" value={this.state.email} onChange={this.handleMail}/>
                    </p>
                    <p>
                    <input className={clsx('class1', !this.state.isChangedPhone && 'redBorder')} type="phone" name="phone" value={this.state.phone} onChange={this.handlePhone}/>
                    </p>
                    <p>
                    <button onClick={this.handleSub}>Submit</button>
                    </p>
                    
                </form>
                

            </div>
        );
    }

}

export default FormStyledtwo;