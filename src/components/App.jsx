import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVoteCounter = e => {
    const selectedFeedback = e.currentTarget.value;
    console.log(
      'кликнули в кнопку ',
      selectedFeedback,
      typeof selectedFeedback
    );

    // selectedFeedback === 'good' &&
    this.setState(prev => ({
      // ДОДУМАТИ ЯК ЗАДАТИ ЗНАЧЕННЯ КЛЮЧА ЧЕРЕЗ ЗМІННУБ ЩОБ НЕ ПРОПИСУВАТИ СЕТСТЕЙТ ДЛЯ КОЖНОЇ КНОПКИ ОКРЕМО
      [selectedFeedback]: prev[selectedFeedback] + 1, // УРА! ПЕРЕМОГА ;))
    }));

    // selectedFeedback === 'good' &&
    // this.setState(prev => ({
    //   good: prev.good + 1, //УРАА ;))
    // }));

    // selectedFeedback === 'neutral' &&
    //   this.setState(prev => ({
    //     neutral: prev.neutral + 1,
    //   }));

    // selectedFeedback === 'bad' &&
    //   this.setState(prev => ({
    //     bad: prev.bad + 1,
    //   }));
  };

  countTotalFeedback = () => {
    // console.log(this.state);
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;

    return total !== 0 ? `${Math.round((this.state.good / total) * 100)}%` : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <div className="App">
        <h2 className="title">Please leave feedback</h2>
        <ul className="buttonsList">
          <li>
            <button
              type="button"
              value="good"
              className="feedbackBtn"
              onClick={this.handleVoteCounter}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              value="neutral"
              className="feedbackBtn"
              onClick={this.handleVoteCounter}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              value="bad"
              className="feedbackBtn"
              onClick={this.handleVoteCounter}
            >
              Bad
            </button>
          </li>
        </ul>
        {/* <section title="Statistics" className="Statistics"></section> */}
        {total !== 0 && <h2 className="title">Stactistics</h2>}
        <ul className="feedbacksList">
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total} </li>
          <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}
