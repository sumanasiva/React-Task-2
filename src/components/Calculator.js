import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
    };
  }

  handleClick = (value) => {
    if (this.state.display === "0" || this.state.display === "Error") {
      this.setState({ display: value });
    } else {
      this.setState({ display: this.state.display + value });
    }
  };

  clearDisplay = () => {
    this.setState({ display: "0" });
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.display);
      this.setState({ display: result.toString() });
    } catch (error) {
      this.setState({ display: "Error" });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="upper-section">
          <div className="display">{this.state.display}</div>
          <div className="white-circle"></div>
          <div class="moon-and-circle">
            <div className="moon">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="lower-section">
          <div className="buttons">
            <div className="button-grid">
              <div className="button-row">
                <div className="button-column">
                  <button onClick={() => this.handleClick("7")}>7</button>
                  <button onClick={() => this.handleClick("4")}>4</button>
                  <button onClick={() => this.handleClick("1")}>1</button>
                  <button onClick={() => this.handleClick("0")}>0</button>
                </div>
                <div className="button-column">
                  <button onClick={() => this.handleClick("8")}>8</button>
                  <button onClick={() => this.handleClick("5")}>5</button>
                  <button onClick={() => this.handleClick("2")}>2</button>
                  <button onClick={() => this.handleClick(".")}>.</button>
                </div>
                <div className="button-column">
                  <button onClick={() => this.handleClick("9")}>9</button>
                  <button onClick={() => this.handleClick("6")}>6</button>
                  <button onClick={() => this.handleClick("3")}>3</button>
                  <button onClick={this.calculateResult}>=</button>
                </div>
                <div className="button-column">
                  <button onClick={this.clearDisplay}>C</button>
                  <button onClick={() => this.handleClick("/")}>÷</button>
                  <button onClick={() => this.handleClick("*")}>×</button>
                  <button onClick={() => this.handleClick("-")}>-</button>
                  <button onClick={() => this.handleClick("+")}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
