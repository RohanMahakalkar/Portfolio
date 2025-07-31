import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Taccs / Micropersonas - Cisco',
      description: 'Migrated legacy Cisco UI to Magnetic React using TypeScript and React.js, reducing maintenance by 30%. Built service-offer mapping and dynamic table UI for 50+ customer offerings with MongoDB aggregations.',
      technologies: ['React.js', 'TypeScript', 'MongoDB', 'Jenkins', 'SonarQube'],
      githubUrl: 'https://github.com/RohanMahakalkar',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'HWS (Hybrid Work Schedule) - Cisco',
      description: 'Built shift alert system to monitor role-based threshold breaches across 100+ shifts. Designed shift creation UI, reducing manual configuration time by 40% with real-time slot availability indicators.',
      technologies: ['React.js', 'TypeScript', 'REST APIs', 'Jenkins', 'CI/CD'],
      githubUrl: 'https://github.com/RohanMahakalkar',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'CodeAware',
      description: 'Developed Android app that sends notifications for upcoming contests across Codeforces, LeetCode, etc. Enabled real-time filtering based on user preferences and integrated Firebase notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Django', 'Heroku', 'REST APIs'],
      githubUrl: 'https://github.com/RohanMahakalkar',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Student Placement Prediction',
      description: 'Implemented logistic regression model to predict placement eligibility using student academic profiles. Used real-world dataset from Kaggle with data visualization using Pandas and Matplotlib.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/RohanMahakalkar',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <Typography
          variant="h2"
          component="h2"
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in-up"
        >
          Featured <span className="gradient-text">Projects</span>
        </Typography>
        
        <Grid container spacing={8}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <div
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover-lift transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 group-hover:scale-110 transition-transform duration-500" />
                  <Typography variant="h6" className="text-white relative z-10 font-semibold animate-pulse">
                    {project.title}
                  </Typography>
                </div>
                
                <div className="p-8">
                  <Typography
                    variant="h4"
                    component="h3"
                    className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors hover-rubber-band"
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    className="text-gray-300 mb-6 leading-relaxed"
                  >
                    {project.description}
                  </Typography>
                  
                  <Box className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-colors hover-bounce"
                      >
                        {tech}
                      </span>
                    ))}
                  </Box>
                  
                  <Box className="flex gap-4">
                    <Button
                      variant="outlined"
                      size="medium"
                      startIcon={<GitHubIcon className="animate-pulse" />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:scale-105 transition-all hover-wobble"
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<LaunchIcon className="animate-rotate" />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all hover-jello"
                    >
                      Live Demo
                    </Button>
                  </Box>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        
                 <Box className="text-center mt-12">
           <Button
             variant="outlined"
             size="large"
             href="https://github.com/RohanMahakalkar"
             target="_blank"
             rel="noopener noreferrer"
             startIcon={<GitHubIcon />}
             className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
           >
             View More Projects
           </Button>
         </Box>
      </Container>
    </section>
  );
};

export default Projects; 