import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PromptData } from '../types/PromptData';
import { ObjectFitProperty } from 'csstype';

const styles = {
  dialog: {
    borderRadius: '1rem',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '1rem',
  },
};

interface Props {
  visible: boolean;
  prompt: PromptData;
  onClose: () => void;
}

export const PromptDetail: React.FC<Props> = ({ visible, prompt, onClose }) => {
  const lastModified = prompt.last_modified
    ? new Date(prompt.last_modified).toLocaleString()
    : 'N/A';

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ style: styles.dialog }}>
      <DialogTitle disableTypography>
        <Box style={styles.dialogTitle}>
          <button onClick={onClose} aria-label="Close prompt details" style={styles.closeButton}>
            <CloseIcon />
          </button>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box display={{ xs: 'block', sm: 'flex' }} flexDirection="row" alignItems="flex-start" justifyContent="space-between">
          {prompt.image && (
            <Box width={{ xs: '100%', sm: '50%' }} mb={{ xs: 2, sm: 0 }} mr={{ sm: 2 }}>
              <img src={prompt.image} alt={`${prompt.title} illustration`} style={styles.image} />
            </Box>
          )}

          <Box width={{ xs: '100%', sm: 'calc(50% - 16px)' }}>
            {prompt.localizedDescription && (
              <Typography paragraph color="text.secondary" mb={4}>
                {prompt.localizedDescription}
              </Typography>
            )}
            <Box mb={4}>
              <Typography gutterBottom>Positive Prompt: {prompt.positive}</Typography>
              <Typography gutterBottom>Negative Prompt: {prompt.negative}</Typography>
              <Typography gutterBottom>Model: {prompt.model}</Typography>
              <Typography gutterBottom>Seed: {prompt.seed}</Typography>
              <Typography gutterBottom>Steps: {prompt.samplingStep}</Typography>
              <Typography gutterBottom>CFG Scale: {prompt.cfgScale}</Typography>
              <Typography gutterBottom>Image Size: {prompt.imageSize}</Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};