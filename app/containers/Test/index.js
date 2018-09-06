import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import BarChart from 'react-bar-chart';

import injectReducer from 'utils/injectReducer';
import Questions from './Data';

import QuestionComponent from 'components/Question';

import { changeUsername } from './actions';
import reducer from './reducer';
import { getAllState } from './selectors';

export class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSelectAnswer = this.onSelectAnswer.bind(this);
    this.incorrect = 0;
  }

  onSelectAnswer(key, answer) {
    this.props.setAnswer(key, answer);
    this.incorrect = 0;
    this.showGraph = false;
  }

  onSubmit() {
    const { answers, setAnswer } = this.props;
    if (answers['1'] == '' || answers['2'] == '' || answers['3'] == '') {
      alert('All questions need to be answered');
    } else {
      if (answers['1'] != 1996) {
        setAnswer(1, 'wrong');
        this.incorrect += 1;
      }
      if (answers['2'] != 400) {
        setAnswer(2, 'wrong');
        this.incorrect += 1;
      }
      if (answers['3'] != 'Australia') {
        setAnswer(3, 'wrong');
        this.incorrect += 1;
      }
    }
    this.showGraph = true;
  }

  onClear() {
    const { setAnswer } = this.props;
    setAnswer(1, '');
    setAnswer(2, '');
    setAnswer(3, '');
    this.showGraph = false;
  }

  render() {
    const barData = [
      {
        text: 'Correct',
        value: 3 - this.incorrect,
      },
      {
        text: 'Incorrect',
        value: this.incorrect,
      },
    ];
    return (
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography variant="headline" style={{ margin: 15 }}>
            *All questions need to be answered
          </Typography>
          <div>
            {Questions.map(o => (
              <QuestionComponent
                question={o.question}
                options={o.options}
                key={o.key}
                serial={o.key}
                onSelectAnswer={this.onSelectAnswer}
                status={
                  this.props.answers[o.key] == ''
                    ? 'unAnswered'
                    : this.props.answers[o.key] == 'wrong'
                      ? 'wrong'
                      : 'card'
                }
              />
            ))}
          </div>
          <Grid container style={{ marginTop: 15 }}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.onSubmit()}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.onClear()}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} style={{ marginTop: 15 }}>
          {
            this.showGraph && 
              <BarChart
                ylabel="Number"
                width={300}
                height={500}
                margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
                data={barData}
              />
            }
        </Grid>
      </Grid>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setAnswer: (key, answer) => dispatch(changeUsername(key, answer)),
  };
}

const mapStateToProps = createStructuredSelector({
  answers: getAllState(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'test', reducer });

export default compose(
  withReducer,
  withConnect,
)(Test);
