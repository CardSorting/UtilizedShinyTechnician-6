import { styled } from '@mui/system';

const colors = {
  primary: {
    light: '#4299e1',
    dark: '#3182ce',
  },
  danger: {
    light: '#f56565',
    dark: '#e53e3e',
  },
};

// Use kebab-case for CSS class names
const promptDetailsOverlay = styled('div')({
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  overflow: 'auto',
});

const promptDetails = styled('div')({
  backgroundColor: 'white',
  width: '100%',
  maxWidth: '54rem',
  maxHeight: '95%',
  padding: '2rem',
  boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: '0.5rem',
  margin: 'auto',
  transform: 'translate3d(0, 0, 0)',
  transition: 'transform 500ms ease-in-out',
});

const body = styled('body')({
  background: 'linear-gradient(to bottom right, #F7FAFC, #E2E8F0)',
});

const promptList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const promptItem = styled('li')({
  backgroundColor: 'white',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const promptItemHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const promptThumbnailWrapper = styled('div')({
  position: 'relative',
});

const promptThumbnail = styled('img')({
  width: '8rem',
  height: '8rem',
  objectFit: 'cover',
  borderRadius: '0.5rem',
});

const deleteIcon = styled('button')({
  position: 'absolute',
  top: 0,
  right: 0,
  marginTop: '0.5rem',
  marginRight: '0.5rem',
  padding: '0.25rem',
  backgroundColor: colors.danger.light,
  color: 'white',
  borderRadius: '9999px',
  cursor: 'pointer',
});

// Use camelCase for CSS property names
const promptItemTitle = styled('h3')({
  marginLeft: '1rem',
  fontSize: '1.125rem',
  fontWeight: 500,
});

const promptActions = styled('div')({
  marginTop: '1rem',
});

const promptActionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const promptActionButton = styled('button')({
  padding: '0.5rem 1rem',
  backgroundColor: colors.primary.light,
  '&:hover': {
    backgroundColor: colors.primary.dark,
  },
  color: 'white',
  borderRadius: '0.375rem',
});

export {
  promptDetailsOverlay,
  promptDetails,
  body,
  promptList,
  promptItem,
  promptItemHeader,
  promptThumbnailWrapper,
  promptThumbnail,
  deleteIcon,
  promptItemTitle,
  promptActions,
  promptActionContainer,
  promptActionButton,
};