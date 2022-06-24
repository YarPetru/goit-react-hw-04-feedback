import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.feedbacksList}>
      <li className={s.statItem}>
        Good: <span className={s.statValue}>{good}</span>
      </li>
      <li className={s.statItem}>
        Neutral: <span className={s.statValue}>{neutral}</span>
      </li>
      <li className={s.statItem}>
        Bad: <span className={s.statValue}>{bad}</span>
      </li>
      <li className={s.statItem}>
        Total: <span className={s.statValue}>{total}</span>
      </li>
      <li className={s.statItem}>
        Positive Feedback:
        <span className={s.statValue}>{positivePercentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

/* <ul className="feedbacksList">
  <li>Good: {this.state.good}</li>
  <li>Neutral: {this.state.neutral}</li>
  <li>Bad: {this.state.bad}</li>
  <li>Total: {total} </li>
  <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
</ul>; */
