import React, { useState, useEffect } from 'react';
import { PromptData } from '../types/PromptData';
import InvertedColorButton from './InvertedColorButton';
import ImageSizeSelect from './ImageSizeSelect';
import {
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  InputLabel,
  Slider,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  onSubmit: (prompt: PromptData) => void;
}

function ValueLabelComponent(props: any) {
  const { children, open, value } = props;

  return (
    <Box
      sx={{
        borderRadius: 2,
        position: 'relative',
        zIndex: 1,
        padding: '4px 8px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      }}
      {...props}
    >
      <Typography color="white" variant="caption">
        {value}
      </Typography>
      {children}
    </Box>
  );
}

export const PromptForm: React.FC<Props> = ({ onSubmit }) => {
  const [positive, setPositive] = useState('');
  const [negative, setNegative] = useState('');
  const [model, setModel] = useState('');
  const [seed, setSeed] = useState('');
  const [samplingMethod, setSamplingMethod] = useState('');
  const [samplingStep, setSamplingStep] = useState(1);
  const [cfgScale, setCfgScale] = useState(1);
  const [imagesize, setImagesize] = useState('512x512');
  const [thumbnail, setThumbnail] = useState('');
  const [imageSizeOption, setImageSizeOption] = useState('512x512');
  const [image, setImage] = useState(null);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      positive,
      negative,
      model,
      seed,
      samplingMethod,
      samplingStep,
      cfgScale,
      imagesize,
      lora,
      thumbnail,
      imageSizeOption,
      image,
    });
    setPositive('');
    setNegative('');
    setModel('');
    setSeed('');
    setSamplingMethod('');
    setSamplingStep(1);
    setCfgScale(1);
    setLora('');
    setImagesize('512x512');
    setImage(null);
    setImageSizeOption('512x512');
    setShowOptionalFields(false);
  };

  const handleImageSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setImageSizeOption(event.target.value as string);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOptionalFields(event.target.checked);
  };

  const randomizeSeed = () => {
    const newSeed = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
    setSeed(newSeed);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="positive"
            label="Imagine A Grand World"
            multiline
            rows={4}
            placeholder="Describe what you want to see, e.g., a monkey eating a banana"
            value={positive}
            onChange={(event) => setPositive(event.target.value)}
            fullWidth
            required
            helperText="Example: a monkey eating a banana, masterpiece, best quality, intricate details"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="negative"
            label=""
            multiline
            rows={2}
            placeholder="Enforce image quality by adding low quality, blurry, incomplete"
            value={negative}
            onChange={(event) => setNegative(event.target.value)}
            fullWidth
            required
            helperText="Example: lowres, blurry, worst quality"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="model"
            label="Model Name"
            placeholder="Enter model name"
            value={model}
            onChange={(event) => setModel(event.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="seed" className="font-bold">Seed</InputLabel>
          <TextField
            id="seed"
            type="text"
            name="seed"
            value={seed}
            onChange={(event) => setSeed(event.target.value)}
            placeholder="Seed (4-6 digits)"
            minLength={4}
            maxLength={6}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
        <InvertedColorButton randomizeSeed={randomizeSeed} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>RENDER SETTINGS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {/* Sampling Step */}
              <Grid item xs={12}>
                <Typography id="sampling-step-slider" gutterBottom>
                  Steps: {samplingStep}
                </Typography>
                <Slider
                  value={samplingStep}
                  onChange={(event, newValue) => setSamplingStep(newValue as number)}
                  aria-labelledby="sampling-step-slider"
                  step={10}
                  min={10}
                  max={80}
                />
              </Grid>

              {/* CFG Scale */}
              <Grid item xs={12}>
                <Typography id="cfg-scale-slider" gutterBottom>
                  CFG Scale: {cfgScale.toFixed(1)}
                </Typography>
                <Slider
                  value={cfgScale}
                  onChange={(event, newValue) => setCfgScale(newValue as number)}
                  aria-labelledby="cfg-scale-slider"
                  step={0.1}
                  min={1}
                  max={18}
                />
              </Grid>

              {/* Image Size */}
              <React.Fragment>
                <Grid item xs={12}>
                  <Typography id="image-width-slider" gutterBottom>
                    Image Width: {imagesize.split('x')[0]}
                  </Typography>
                  <Slider
                    value={parseInt(imagesize.split('x')[0])}
                    onChange={(event, newValue) => setImagesize((newValue as number) + 'x' + imagesize.split('x')[1])}
                    aria-labelledby="image-width-slider"
                    step={1}
                    min={512}
                    max={1024}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography id="image-height-slider" gutterBottom>
                    Image Height: {imagesize.split('x')[1]}
                  </Typography>
                  <Slider
                    value={parseInt(imagesize.split('x')[1])}
                    onChange={(event, newValue) => setImagesize(imagesize.split('x')[0] + 'x' + (newValue as number))}
                    aria-labelledby="image-height-slider"
                    step={1}
                    min={512}
                    max={1024}
                  />
                </Grid>
              </React.Fragment>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Render 1 Image
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  </form>
);
};