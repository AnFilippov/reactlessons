import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './List.module.scss'

class List extends React.Component {

  render() {
    return (
      <ul className={styles.listBody}>
        {this.props.list.map(item => {
          const { id, value } = item;

          return (
            <li key={id} className={styles.listItem}>
              <Check text={value} />
              <button onClick={() => this.props.onDelete(id)}>
                <FontAwesomeIcon icon={faTrash} />
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
    const text = !this.state.check ? this.props.text : <span style={{ textDecoration: "line-through" }}>{this.props.text}</span>
    return (
      <React.Fragment>
        <input type="checkbox" checked={this.state.check} onChange={this.handleCheck.bind(this)} />
        {text}
      </React.Fragment>
    )
  }
}

export default List;
