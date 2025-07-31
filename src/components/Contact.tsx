import React, { useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../App';

const Contact: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Get In <span className="gradient-text">Touch</span>
        </Typography>
        
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl p-12 hover-lift transition-all duration-500 animate-fade-in-up ${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
              : 'bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50'
          }`}>
            <Typography
              variant="h4"
              component="h3"
              className={`text-3xl font-bold text-center mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Let's Connect
            </Typography>
            
            <Typography
              variant="body1"
              className={`text-lg text-center mb-12 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </Typography>
            
            <Grid container spacing={6} className="mb-12">
              <Grid item xs={12} md={6}>
                <Box className="space-y-6">
                  <div className={`flex items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/50 border border-gray-200/50'
                  }`}>
                    <EmailIcon className={`text-2xl mr-4 animate-bounce ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <div>
                      <Typography variant="h6" className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        Email
                      </Typography>
                      <Typography variant="body2" className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        rohan8112000@gmail.com
                      </Typography>
                    </div>
                  </div>
                  
                  <div className={`flex items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/50 border border-gray-200/50'
                  }`}>
                    <PhoneIcon className={`text-2xl mr-4 animate-pulse ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <div>
                      <Typography variant="h6" className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        Phone
                      </Typography>
                      <Typography variant="body2" className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        +91 7499921103
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <div className="text-center">
                  <Typography variant="h6" className={`mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Follow me on social media:
                  </Typography>
                  <Box className="flex justify-center gap-6">
                    <IconButton
                      href="https://github.com/RohanMahakalkar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 hover:scale-110 ${
                        isDarkMode 
                          ? 'bg-white/10 hover:bg-white/20 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      <GitHubIcon className="text-2xl animate-float" />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com/in/rohanmahakalkar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 hover:scale-110 ${
                        isDarkMode 
                          ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400' 
                          : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                      }`}
                    >
                      <LinkedInIcon className="text-2xl animate-heart-beat" />
                    </IconButton>
                  </Box>
                </div>
              </Grid>
            </Grid>
            
            <div className="text-center">
              <Typography variant="body1" className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Looking forward to connecting with you! 🚀
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 