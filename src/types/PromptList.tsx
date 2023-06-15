import React, { useState, useCallback } from 'react';
import { PromptData } from '../types/PromptData';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PromptItem } from './PromptItem';

interface Props {
  loadData: (startIndex: number, endIndex: number) => Promise<PromptData[]>;
  onDelete?: (id: number) => void;
  onPromptClick?: (prompt: PromptData) => void;
  isExample?: boolean;
}

export const PromptList: React.FC<Props> = ({ loadData, onDelete, onPromptClick, isExample }) => {
  const [items, setItems] = useState<PromptData[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = useCallback(async () => {
    const newItems = await loadData(items.length, items.length + 9);
    if (newItems.length === 0) {
      setHasMore(false);
      return;
    }
    setItems((prevItems) => prevItems.concat(newItems));
  }, [loadData, items.length]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}>You have reached the end of the list!</p>}
    >
      <Grid container spacing={2}>
        <Stack
          container
          direction="column"
          alignItems="stretch"
          spacing={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fill, minmax(250px, 1fr))' },
            gridAutoRows: 'min-content',
            gridGap: 2,
          }}
        >
          {items.map((item) => (
            <PromptItem
              key={item.id}
              prompt={item}
              onDelete={onDelete}
              onPromptClick={onPromptClick}
              isExample={isExample}
            />
          ))}
        </Stack>
      </Grid>
    </InfiniteScroll>
  );
};