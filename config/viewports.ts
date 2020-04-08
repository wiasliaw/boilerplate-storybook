const customViewports = {
  '1280x720': {
    name: '1280x720',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  '1920x1080': {
    name: '1920x1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  iphone5: {
    name: 'iphone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
};

const defaultViewport = '1280x720';

export default {
  viewports: customViewports,
  defaultViewport,
};
