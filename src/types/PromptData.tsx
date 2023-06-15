export interface PromptData {
  id: number;
  localizedDescription: string;
  positive: string;
  negative: string;
  model: string;
  seed: string;
  samplingMethod: string;
  samplingStep: string;
  cfgScale: string;
  lora: string;
  imageSize: string;
  last_modified: string | null;
  image: string | null;
  thumbnail: string;
}
