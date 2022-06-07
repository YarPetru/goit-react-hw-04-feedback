import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="buttonsList">
      {options.map(option => (
        <li key={shortid.generate()}>
          <button
            type="button"
            value={option}
            className="feedbackBtn"
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
