import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Options from '../Options';

const styles = {
  card: {
    minWidth: 275,
  },
  unAnswered: {
    border: 'solid 1px yellow',
  },
  wrong: {
    border: 'solid 1px red',
  },
};
const Question = ({
  question,
  options,
  status,
  classes,
  serial,
  onSelectAnswer,
}) => (
  <Card className={classes[status || 'card']}>
    <CardContent>
      <Typography variant="headline">{question}</Typography>
      <Options
        options={options}
        onSelectAnswer={onSelectAnswer}
        serial={serial}
      />
    </CardContent>
  </Card>
);

export default withStyles(styles)(Question);
