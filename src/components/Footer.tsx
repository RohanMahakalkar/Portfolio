import React from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container maxWidth="lg">
        <Box className="text-center">
          <Typography
            variant="h6"
            component="h3"
            className="text-xl font-bold mb-4"
          >
            Rohan
          </Typography>
          
          <Typography
            variant="body2"
            className="text-gray-300 mb-6 max-w-md mx-auto"
          >
            Full Stack Developer passionate about creating innovative web solutions 
            and contributing to the tech community.
          </Typography>
          
          <Box className="flex justify-center gap-4 mb-6">
                         <IconButton
               href="https://github.com/RohanMahakalkar"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-blue-400"
             >
               <GitHubIcon />
             </IconButton>
             <IconButton
               href="https://linkedin.com/in/rohanmahakalkar"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-blue-400"
             >
               <LinkedInIcon />
             </IconButton>
             <IconButton
               href="mailto:perohan8112000@gmail.com"
               className="text-white hover:text-blue-400"
             >
               <EmailIcon />
             </IconButton>
          </Box>
          
                     <Typography
             variant="body2"
             className="text-gray-400 border-t border-gray-700 pt-6"
           >
             © {new Date().getFullYear()} Rohan Mahakalkar. All rights reserved.
           </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer; 