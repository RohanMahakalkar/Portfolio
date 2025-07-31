import React, { useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../App';

const About: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="about" className={`py-20 relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
        : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' 
          : 'bg-gradient-to-br from-blue-200 to-purple-200'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-tr from-purple-500/30 to-blue-500/30' 
          : 'bg-gradient-to-tr from-purple-200 to-blue-200'
      }`} />

      <Container maxWidth="lg" className="relative z-10">
        <Typography
          variant="h2"
          component="h2"
          className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          About <span className="gradient-text">Me</span>
        </Typography>
        
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className={`rounded-3xl p-10 hover-lift transition-all duration-500 animate-fade-in-left ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                : 'bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50'
            }`}>
              <Typography
                variant="h4"
                component="h3"
                className="text-3xl font-bold gradient-text mb-8"
              >
                Who I Am
              </Typography>
              
              <Typography
                variant="body1"
                className={`text-lg mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm a passionate Full Stack Developer with 2+ years of experience in designing, developing, and deploying 
                scalable web applications. I specialize in front-end frameworks like React.js and Angular, 
                backend development with Python and FastAPI, and cloud technologies.
              </Typography>
              
              <Typography
                variant="body1"
                className={`text-lg mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Currently working as a Frontend Engineer at Persistent Systems for Cisco, where I've successfully 
                migrated legacy systems, built dynamic UIs, and improved data filtering with MongoDB aggregations.
              </Typography>
              
              <Typography
                variant="body1"
                className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm passionate about clean code, modern technologies, and solving complex problems. 
                When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
              </Typography>
            </div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <div className="space-y-6 animate-fade-in-right">
              <div className={`rounded-2xl p-8 hover-lift transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50'
              }`} style={{ animationDelay: '0.2s' }}>
                <Box className="flex items-center mb-4">
                  <CodeIcon className="text-blue-600 text-3xl mr-4" />
                  <Typography variant="h6" className={`font-bold text-xl ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Development Focus
                  </Typography>
                </Box>
                <Typography variant="body1" className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Stack Web Development, Mobile Apps, Cloud Architecture, 
                  API Design, Database Design, DevOps
                </Typography>
              </div>
              
              <div className={`rounded-2xl p-8 hover-lift transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50'
              }`} style={{ animationDelay: '0.4s' }}>
                <Box className="flex items-center mb-4">
                  <SchoolIcon className="text-green-600 text-3xl mr-4" />
                  <Typography variant="h6" className={`font-bold text-xl ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Education
                  </Typography>
                </Box>
                <Typography variant="body1" className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Bachelor of Engineering in Computer Science Engineering<br />
                  <span className="font-semibold text-green-600">CGPA: 9.16/10</span> - Government College of Engineering, Nagpur
                </Typography>
              </div>
              
              <div className={`rounded-2xl p-8 hover-lift transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50'
              }`} style={{ animationDelay: '0.6s' }}>
                <Box className="flex items-center mb-4">
                  <WorkIcon className="text-purple-600 text-3xl mr-4" />
                  <Typography variant="h6" className={`font-bold text-xl ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Experience
                  </Typography>
                </Box>
                <Typography variant="body1" className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-semibold text-purple-600">2+ years</span> of professional development experience<br />
                  Frontend Engineer at Persistent Systems (Cisco), Flutter Developer Intern at Well Played Sports
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About; 