import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface ImageSizeSelectProps {
  imageSizeOption: string;
  handleImageSizeChange: (event: SelectChangeEvent) => void;
}

const ImageSizeSelect: React.FC<ImageSizeSelectProps> = ({
  imageSizeOption,
  handleImageSizeChange,
}) => {
  return (
    <Select
      labelId="image-size-select-label"
      id="image-size-select"
      value={imageSizeOption}
      onChange={handleImageSizeChange}
      fullWidth
    >
      <MenuItem value="512x512">512x512</MenuItem>
      <MenuItem value="1024x1024">1024x1024</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};

export default ImageSizeSelect;
