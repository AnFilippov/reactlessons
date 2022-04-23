import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import styles from './List.module.scss'


class List extends React.Component {

    render () {
      
        return (
            <ul className={styles.listBody}>
                {this.props.list.map(item => {
                    const {id, value} = item;
            
                    return (
                        <li key={id} className={styles.listItem}>
                        <Check checked={value}/>
                          <button onClick= {() => this.props.onDelete(id)}>
                          <FontAwesomeIcon icon={faTrash}/>
                          </button>
                            
                        </li>
                    )
                })}
            </ul>
        )
    }
}


class Check extends React.Component {
  state = {
    check: '',
  }

  handleCheck(e) {
    this.setState({
      check: e.target.checked
  })
    }

    render() {
      console.log(this.state);
      const ch = !this.state.check ? this.props.checked : <span style={{textDecoration: "line-through"}}>{this.props.checked}</span>
      return ( 
        <span>
          <input type="checkbox" checked = {this.state.check} onChange={this.handleCheck.bind(this)}/>
          {ch}
        </span>
      )
    }
}


export default List;
