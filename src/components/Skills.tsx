import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { ThemeContext } from '../App';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillBarsVisible, setSkillBarsVisible] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView && !isVisible) {
          setIsVisible(true);
          // Trigger skill bars animation after a delay
          setTimeout(() => setSkillBarsVisible(true), 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Flutter', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🚀',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing (Vitest, RTL, Pytest)', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-100 to-slate-200'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <Typography
          variant="h2"
          component="h2"
          className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          <span className="gradient-text">Skills</span> & Technologies
        </Typography>
        
        <Grid container spacing={6}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={4} key={category.title}>
              <div
                className={`group backdrop-blur-sm rounded-3xl p-8 hover-lift transition-all duration-700 ${
                  isDarkMode 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-white/80'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 0.2}s`,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                }}
              >
                <div className="text-center mb-8">
                  <div className={`text-4xl mb-4 animate-float hover-tada ${categoryIndex === 0 ? 'animate-bounce' : categoryIndex === 1 ? 'animate-pulse' : 'animate-swing'}`}>{category.icon}</div>
                  <Typography
                    variant="h4"
                    component="h3"
                    className="text-2xl font-bold gradient-text hover-rubber-band"
                  >
                    {category.title}
                  </Typography>
                </div>
                
                <Box className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skill.name} className="group/skill">
                      <Box className="flex justify-between items-center mb-3">
                        <Typography
                          variant="body1"
                          className={`font-semibold transition-colors hover-shake ${
                            isDarkMode 
                              ? 'text-gray-200 group-hover/skill:text-blue-400' 
                              : 'text-gray-800 group-hover/skill:text-blue-600'
                          }`}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={`font-mono ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <div className={`relative h-3 rounded-full overflow-hidden ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1500 ease-out"
                          style={{ 
                            width: skillBarsVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        />
                      </div>
                    </Box>
                  ))}
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className={`rounded-3xl p-10 max-w-3xl mx-auto ${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
              : 'glass'
          }`}>
            <Typography
              variant="h5"
              component="h3"
              className="text-2xl font-bold gradient-text mb-6 animate-heart-beat"
            >
              Always Learning & Growing
            </Typography>
            <Typography
              variant="body1"
              className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and best practices in software development.
            </Typography>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Skills; 