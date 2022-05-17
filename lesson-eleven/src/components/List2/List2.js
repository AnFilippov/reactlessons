import React from "react";
import Item from "../Item/Item";
//import { memo } from "react";

class List2 extends React.PureComponent {
  render() {
    console.log('render List2');
    return (
      <ol>
        {this.props.items.map(element => {
          return <Item key={element.id} value={element.item} />
        })}
      </ol>
    )
  }
}

export default List2;
//export default memo(List2); 