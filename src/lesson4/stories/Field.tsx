import React, { Component } from "react";
import CellStories from "./Cell.stories";

import { Row } from "./Row";

export interface FieldProps {
  x: number;
  y: number;
}

export interface FieldState {
  cells: string[][];
}

export const onClickHandler = (value: string) => {
  // eslint-disable-next-line no-console
  console.log("string", value);
};

export class Field extends Component<FieldProps, FieldState> {
  timerId?: number;
  constructor(props: FieldProps) {
    super(props);
    this.state = {
      cells: [[]],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.convertToField = this.convertToField.bind(this);
  }

  onClickHandler(value: string) {
    // eslint-disable-next-line no-console
    console.log("string", value);
  }

  changeValue() {
    // eslint-disable-next-line no-console
    console.log("Подписка активирована");
  }

  convertToField(x: number, y: number): string[][] {
    const field: string[][] = [];
    for (let i = 0; i < y; i++) {
      field.push(Array(x).fill(""));
    }
    return field;
  }

  shouldComponentUpdate(prevProps: FieldProps, prevState: FieldState) {
    return prevProps.x === this.props.x || prevProps.y === this.props.y;
  }

  componentDidUpdate(prevProps: FieldProps, prevState: FieldState) {
    if (prevProps.x !== this.props.x || prevProps.y !== this.props.y) {
      this.setState({
        cells: this.convertToField(this.props.x, this.props.y),
      });
    }
  }

  componentDidMount() {
    this.setState((state: FieldState) => ({
      cells: this.convertToField(this.props.x, this.props.y),
    }));

    this.timerId = window.setInterval(this.changeValue, 3000);
    this.changeValue();
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      // eslint-disable-next-line no-console
      console.log("Подписка деактивирована");
    }
  }

  render() {
    const { cells } = this.state;

    return (
      <>
        {cells.map((cell, index) => {
          return (
            <Row key={index} row={cell} onClickHandler={this.onClickHandler} />
          );
        })}
      </>
    );
  }
}
