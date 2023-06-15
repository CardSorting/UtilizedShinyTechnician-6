const styleConstants = {
  gap: '1rem',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  imgWidth: '270px',
};

export const styles = {
  promptItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    boxSizing: 'border-box',
    p: 2,
    bgcolor: 'white',
    border: `${styleConstants.border}`,
    borderRadius: `${styleConstants.borderRadius}`,
    marginBottom: `${styleConstants.gap}`,
  },
  promptThumbnail: {
    flexGrow: 0,
    width: `${styleConstants.imgWidth}`,
    height: `${styleConstants.imgWidth}`,
    objectFit: 'cover',
    borderRadius: `${styleConstants.borderRadius}`,
  },
  promptTitle: {},
  promptSeed: {},
  actions: {},
  iconButton: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: styleConstants.gap,
    width: '100%',
  },
};