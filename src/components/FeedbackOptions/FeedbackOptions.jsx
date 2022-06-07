import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      {options.map(option => (
        <li className={s.feedbackItem} key={shortid.generate()}>
          <button
            type="button"
            value={option}
            className={s.feedbackBtn}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

/* <ul className="buttonsList">
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
        </ul> */
