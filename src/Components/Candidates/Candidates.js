import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../store/votes';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material'

const Candidates = (props) => {

  const { totalVotes, candidates, incrementCount, decrementCount } = props;
  return (
    <>
      <h1>Total Candidate Votes: {totalVotes}</h1>
      {candidates.map((candidate, idx) => (
        <div key={`candidate-${idx}`}>
          <p>Name: {candidate.name}</p>
          <p>Votes: {candidate.votes}</p>
          <button onClick={() => incrementCount(candidate)}>Vote for {candidate.name}</button>
          <button onClick={() => decrementCount(candidate)}>Un-vote for {candidate.name}</button>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates,
  };
}

const mapDispatchToProps = {
  incrementCount,
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);