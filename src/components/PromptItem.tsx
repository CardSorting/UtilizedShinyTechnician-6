import React from 'react';
import { Box, IconButton, Typography, Grid } from '@mui/material';
import { PromptData } from '../types/PromptData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faCopy } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import { styles } from './PromptGridStyles';

const PromptItemBox = styled(Box)(styles.promptItem);
const ThumbnailImage = styled('img')(styles.promptThumbnail);
const Title = styled(Typography)(styles.promptTitle);
const Seed = styled(Typography)(styles.promptSeed);
const ActionsGrid = styled(Grid)(styles.actions);
const ButtonIcon = styled(IconButton)(styles.iconButton);

interface PromptItemProps {
  prompt: PromptData;
  onDelete?: (id: number) => void;
  onPromptClick?: (prompt: PromptData) => void;
  isExample: boolean;
}

const PromptItem: React.FC<PromptItemProps> = ({
  prompt: {
    id = 0,
    title = 'Example title',
    thumbnail = 'https://via.placeholder.com/150',
    seed = 'example-seed',
  },
  onDelete,
  onPromptClick,
  isExample = false,
}) => {
  return (
    <PromptItemBox>
      <ThumbnailImage src={thumbnail} alt={`Thumbnail for prompt "`} />
      <Title variant="h6" component="h3">
      </Title>
      <Seed variant="body2"></Seed>
      <ActionsGrid item>
        <ButtonIcon onClick={() => onPromptClick && onPromptClick({ id, title, thumbnail, seed })}>
          <FontAwesomeIcon icon={faEye} />
        </ButtonIcon>
        {isExample && (
          <ButtonIcon>
            <FontAwesomeIcon icon={faHeart} />
          </ButtonIcon>
        )}
        {onDelete && (
          <ButtonIcon onClick={() => onDelete(id)}>
            <FontAwesomeIcon icon={faCopy} />
          </ButtonIcon>
        )}
      </ActionsGrid>
    </PromptItemBox>
  );
};

export default PromptItem;