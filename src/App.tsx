import React, { useState, useEffect } from "react";
import "./App.css";
import { PromptForm } from "./components/PromptForm";
import { PromptData } from "./types/PromptData";
import { PromptDetail } from "./components/PromptDetails";
import PromptItem from './components/PromptItem'; // Update this line
import { RequestData, sendRunpodRequest } from "./api";
// Example prompts
const examplePrompts: PromptData[] = [
  {
    id: -1,
    seed: "Example Seed 1",
    thumbnail: "https://via.placeholder.com/150",
    title: "Example Title 1",
  },
  {
    id: -2,
    seed: "Example Seed 2",
    thumbnail: "https://via.placeholder.com/150",
    title: "Example Title 2",
  },
];

// PromptList component
interface PromptListProps {
  prompts: PromptData[];
  onDelete: (id: number) => void;
  onPromptClick: (prompt: PromptData) => void;
  isExample?: boolean;
}

const PromptList: React.FC<PromptListProps> = ({ prompts, onDelete, onPromptClick, isExample = false }) => {
  return (
    <div>
      {prompts.length === 0
        ? examplePrompts.map((prompt) => (
            <PromptItem
              key={prompt.id}
              prompt={prompt}
              onDelete={onDelete}
              onPromptClick={onPromptClick}
              isExample={isExample}
            />
          ))
        : prompts.map((prompt) => (
            <PromptItem
              key={prompt.id}
              prompt={prompt}
              onDelete={onDelete}
              onPromptClick={onPromptClick}
            />
          ))}
    </div>
  );
};

// App component
const App: React.FC = () => {
  const [prompts, setPrompts] = useState<PromptData[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);

  // Fetch data from API
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/prompts"); // Replace with your API URL
    const data: PromptData[] = await response.json();
    setPrompts(data);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Add a new prompt
  const addPrompt = (prompt: PromptData) => {
    setPrompts([...prompts, prompt]);
    setSelectedPrompt(prompt);
  };

  // Delete a prompt
  const deletePrompt = (id: number) => {
    setPrompts(prompts.filter(prompt => prompt.id !== id));
  };

  // Handle prompt click
  const handlePromptClick = (prompt: PromptData) => {
    setSelectedPrompt(prompt);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedPrompt(null);
  };

  return (
    <div>
      <h1></h1>
      <div className="app-container">
        <div className="prompt-form-container">
          <PromptForm onSubmit={addPrompt} />
        </div>
        <div className="prompt-list-container">
          <PromptList
            prompts={prompts}
            onDelete={deletePrompt}
            onPromptClick={handlePromptClick}
            isExample={true}
          />
        </div>
      </div>
      {selectedPrompt && (
        <PromptDetail
          prompt={selectedPrompt}
          onClose={closeModal}
          visible={selectedPrompt !== null}
        />
      )}
    </div>
  );
};

export default App;