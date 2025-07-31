import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';
import {
  Download as DownloadIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../App';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = 'Full Stack Developer & Frontend Engineer';
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setIsVisible(true);
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/My_Resume.pdf';
    link.download = 'Rohan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <Container maxWidth="lg">
        <Box className="text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Typography
              variant="h1"
              component="h1"
              className="text-5xl md:text-7xl font-bold mb-6 animate-zoom-in"
            >
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'} animate-bounce`}>Hi, I'm </span>
              <span className="gradient-text animate-pulse hover-rubber-band">Rohan</span>
            </Typography>
            
            <Typography
              variant="h2"
              component="h2"
              className={`text-2xl md:text-4xl mb-8 typing-animation animate-flip-in-x ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              {typingText}
            </Typography>
            
            <Typography
              variant="body1"
              className={`text-lg mb-12 max-w-3xl mx-auto animate-slide-in-bottom ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              style={{ animationDelay: '1s' }}
            >
              Crafting exceptional digital experiences with modern web technologies. 
              Passionate about clean code, innovative solutions, and pushing the boundaries of what's possible.
            </Typography>
            
            <Box className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-zoom-in" style={{ animationDelay: '1.5s' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon className="animate-rotate" />}
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold hover-lift hover-tada"
                style={{ animationDelay: '2s' }}
              >
                Download Resume
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon className="animate-pulse" />}
                href="https://github.com/RohanMahakalkar"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 text-lg font-semibold hover-lift hover-wobble ${
                  isDarkMode 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                View GitHub
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon className="animate-heart-beat" />}
                href="https://linkedin.com/in/rohanmahakalkar"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 text-lg font-semibold hover-lift hover-jello ${
                  isDarkMode 
                    ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                LinkedIn
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero; 