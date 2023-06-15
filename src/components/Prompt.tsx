import React from "react";
import { PromptData } from "../types/PromptData";
import { Card, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  prompt: PromptData;
  onDelete: (id: number) => void;
  onPromptClick: (prompt: PromptData) => void;
}

export const Prompt: React.FC<Props> = ({ prompt, onDelete, onPromptClick }) => {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete(prompt.id);
  };

  return (
    <Card onClick={() => onPromptClick(prompt)} className="mb-4 transition-shadow hover:shadow-lg">
      <CardContent>
        <Typography variant="h5" component="h2" className="font-semibold">
          {prompt.title}
        </Typography>
        <Typography className="mt-2 text-gray-700">{prompt.content}</Typography>
      </CardContent>
      <CardActions className="justify-end">
        <IconButton onClick={handleDelete} aria-label="Delete prompt" className="text-red-500 hover:text-red-600">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
