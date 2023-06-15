// ParentComponent.tsx
import React, { useState, useEffect } from 'react';
import { PromptDetail } from './PromptDetails';
import { PromptData } from '../types/PromptData';

const ParentComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [promptData, setPromptData] = useState<PromptData[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/prompts'); // Replace with your API URL
    const data: PromptData[] = await response.json();
    setPromptData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showModal = (prompt: PromptData) => {
    setSelectedPrompt(prompt);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h3>All Prompts:</h3>
      <ul>
        {promptData.map((prompt: PromptData) => (
          <li key={prompt.id} onClick={() => showModal(prompt)}>
            {prompt.title}
          </li>
        ))}
      </ul>
      {selectedPrompt && (
        <PromptDetail
          visible={modalVisible}
          prompt={selectedPrompt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ParentComponent;