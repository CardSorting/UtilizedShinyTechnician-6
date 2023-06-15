import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

interface InvertedColorButtonProps {
  randomizeSeed: () => void;
}

const HoveredButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: 'blue',
  },
  width: '100%',
}));

const InvertedColorButton: React.FC<InvertedColorButtonProps> = ({ randomizeSeed }) => {
  return (
    <HoveredButton variant="contained" onClick={randomizeSeed}>
      <FontAwesomeIcon icon={faDice} className="mr-2" />
      Randomize
    </HoveredButton>
  );
};

export default InvertedColorButton;