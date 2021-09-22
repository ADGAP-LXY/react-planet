import './App.css';
import Button from './Button';
import React from 'react';
import Planets from './components/Planets';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveRightClick = this.moveRightClick.bind(this);
    this.moveLeftClick = this.moveLeftClick.bind(this);
    this.state = {
      planetWidth: 400,
      winWidth: window.innerWidth,
      clickable: true,
      offset: 0,
      pointer: 0,
      moveSpeed: 500,
    };
  }

  moveLeftClick() {
    if (!this.state.clickable) {
      return;
    }

    this.setState(state => ({
      ...state,
      clickable: 'false',
      pointer: state.pointer + 1,
      offset: state.planetWidth,
    }))

    setTimeout(() => {
      this.setState(state => ({
        ...state,
        offset: 0,
      }))
    }, 0);
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        clickable: true,
      }))
    }, this.state.moveSpeed);
  }

  moveRightClick() {
    if (!this.state.clickable) {
      return;
    }

    this.setState(state => ({
      ...state,
      clickable: false,
      pointer: state.pointer - 1,
      offset: -state.planetWidth,
    }))

    setTimeout(() => {
      this.setState(state => ({
        ...state,
        offset: 0,
      }))
    }, 0);
    //"..."是spread语法或者 rest语法，此处是spread语法，将数据结合，
    //即此处是将class本身的state和我们想要改变的：clickable: true结合成一个新的state，
    //对于对象类型，当key相同时会有新value替换旧value的过程。

    setTimeout(() => {
      this.setState(state => ({
        ...state,
        clickable: true,
      }))
    }, this.state.moveSpeed);
  }

  render() {
    return (
      <div style={{ backgroundImage: 'url(/images/bg.jpg)' }} className="app">
        <div className="missions">
          <p className="label">missions</p>
          <h2>Exploring the Universe</h2>
          <p className="text-body-md">
            Spacecraft developed at JPL have flown to <br />
            every planet in the solar system and the Sun, <br />
            and beyond.
          </p>
        </div>
        <Planets />
        <Button className="button" style={{ transform: "rotate(180deg)" }} onClick={this.moveLeftClick} />
        <Button className="button right-button" onClick={this.moveRightClick} />
      </div>
    );
  }

}

export default App;

