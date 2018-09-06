import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import injectReducer from 'utils/injectReducer';
import Questions from './Data';

import QuestionComponent from 'components/Question';

import { changeUsername } from './actions';
import reducer from './reducer';

export class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSelectAnswer = this.onSelectAnswer.bind(this);
  }

  onSelectAnswer(key, answer) {
    this.props.setAnswer(key, answer)
  }

  render() {
    return(
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography variant="headline" style={{ margin: 15 }}>*All questions need to be answered</Typography>
          <div>
            {
              Questions.map((o) => (
                <QuestionComponent
                  question={o.question}
                  options={o.options}
                  key={o.key}
                  serial={o.key}
                  onSelectAnswer={this.onSelectAnswer}
                />
              ))
            }
          </div>
          <Grid container style={{ marginTop: 15 }}>
            <Grid item xs={6}>
              <Button variant="contained">
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setAnswer: (key, answer) => dispatch(changeUsername(key, answer))
  }
}

const mapStateToProps = createStructuredSelector({
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'test', reducer });

export default compose(
  withReducer,
  withConnect,
)(Test);
