import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, Button } from '@mui/material';
import { PromptData } from '../types/PromptData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faCopy } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import { styles } from './PromptGridStyles';
import PromptItem from './PromptItem';

const GridContainer = styled(Grid)(() => styles.container);

interface PromptGridProps {
  prompts: PromptData[];
  onDelete?: (id: number) => void;
  onPromptClick?: (prompt: PromptData) => void;
  isExample: boolean;
}

const PromptGrid: React.FC<PromptGridProps> = ({
  prompts,
  onDelete,
  onPromptClick,
  isExample,
}) => {
  const [imageLoadCount, setImageLoadCount] = useState(3);

  const loadMoreImages = () => {
    setImageLoadCount(imageLoadCount + 3);
  };

  const promptItems = prompts.slice(0, imageLoadCount).map((prompt, index) => (
    <PromptItem
      key={`prompt-${index}`}
      prompt={prompt}
      onDelete={onDelete}
      onPromptClick={onPromptClick}
      isExample={isExample}
    />
  ));

  return (
    <div>
      <GridContainer>
        {promptItems}
      </GridContainer>
      {imageLoadCount < prompts.length && (
        <Button sx={{ mt: 2 }} variant="contained" onClick={loadMoreImages}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default PromptGrid;