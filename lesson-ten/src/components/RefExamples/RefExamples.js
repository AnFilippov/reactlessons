import React from 'react';

class RefExamples extends React.Component {
  constructor(props) {
    super(props);
    this.h3Ref = React.createRef();
    this.inputRef = React.createRef();
    this.divRef = React.createRef();
    this.scrollRef = React.createRef();

    this.handlechange = this.handlechange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log(this.h3Ref.current.textContent);
  }

  handlechange(e) {
    //console.log(this.inputRef.current.value);

    console.log(this.divRef.current.contains(e.target));
  }

  handleFocus() {
    this.inputRef.current.focus();

    const blockData = this.h3Ref.current.getBoundingClientRect();
    console.log(blockData);
  }

  handleScroll() {
    this.scrollRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div ref={this.divRef}>
        Ref Example

        <h3 ref={this.h3Ref}> Hello i`m h3 block</h3>
        <input ref={this.inputRef} onChange={this.handlechange} />

        <button type='button' onClick={this.handleFocus}>
          Focus on button
        </button>

        <p><button onClick={this.handleScroll}>Scroll</button></p>
        <h2 ref={this.scrollRef} style={{ marginTop: 1200 }}>
          Scroll to me
        </h2>
      </div >
    )
  }
}

export default RefExamples;