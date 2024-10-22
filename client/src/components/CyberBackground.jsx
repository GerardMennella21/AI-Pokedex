import React from 'react';
import { Box } from '@chakra-ui/react';

const CyberBackground = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="-1"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '200%',
        height: '200%',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1), transparent 25%),
          radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1), transparent 25%),
          radial-gradient(circle at 25% 75%, rgba(0, 255, 255, 0.1), transparent 25%),
          radial-gradient(circle at 75% 25%, rgba(0, 255, 255, 0.1), transparent 25%)
        `,
        backgroundSize: '50px 50px',
        animation: 'moveBackground 20s linear infinite',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '200%',
        height: '200%',
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px',
        animation: 'moveBackground 40s linear infinite',
      }}
    >
      {/* Additional content can go here if needed */}
    </Box>
  );
};

export default CyberBackground;
