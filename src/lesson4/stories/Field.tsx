import React, { Component } from "react";
import CellStories from "./Cell.stories";

import { Row } from "./Row";

export interface FieldState {
  cells: string[][];
}

export const onClickHandler = (value: string) => {
  // eslint-disable-next-line no-console
  console.log("string", value);
};

export class Field extends Component<{}, FieldState> {
  timerId?: number;
  constructor(props: {}) {
    super(props);
    this.state = {
      cells: [['']],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  onClickHandler(value: string) {
    // eslint-disable-next-line no-console
    console.log("string", value);
  }

  changeValue() {
    this.setState((state: FieldState) => ({
      cells: this.state.cells.concat([['']]),
    }));
  }

  shouldComponentUpdate(prevProps: {}, prevState: FieldState) {
    return prevState.cells.length !== this.state.cells.length;
  }

  componentDidUpdate(prevProps: {}, prevState: FieldState) {
    if (prevState.cells.length === 3) {
      this.setState({
        cells: this.state.cells.concat([['', '', '']]),
      });
    }
  }

  componentDidMount() {
    this.setState({
      cells: [[""]],
    });
    this.timerId = window.setInterval(this.changeValue, 3000);
    this.changeValue();
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { cells } = this.state;
    return (
      <div>
        {cells.map((cell, index) => {
          return <Row key={index} row={cell} onClickHandler={this.onClickHandler} />;
        })}
      </div>
    );
  }
}
