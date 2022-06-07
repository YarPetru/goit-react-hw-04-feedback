import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.feedbacksList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total} </li>
      <li>Positive Feedback:{positivePercentage}</li>
    </ul>
  );
};

export default Statistics;

/* <ul className="feedbacksList">
  <li>Good: {this.state.good}</li>
  <li>Neutral: {this.state.neutral}</li>
  <li>Bad: {this.state.bad}</li>
  <li>Total: {total} </li>
  <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
</ul>; */
