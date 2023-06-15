// SliderField.tsx
import React from 'react';
import { Typography, Slider } from '@mui/material';

interface Props {
  id: string;
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
}

const SliderField: React.FC<Props> = ({ id, label, value, setValue, min, max }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      <Typography id={`${id}-label`} gutterBottom>
        {label}
      </Typography>
      <Slider
        id={id}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SliderField;