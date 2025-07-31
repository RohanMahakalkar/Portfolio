import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../App';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <List className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-800'}`}>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={item}
          onClick={() => scrollToSection(item)}
          className={`transition-all duration-300 animate-fade-in-left ${
            isDarkMode ? 'hover:bg-purple-600/20' : 'hover:bg-blue-50'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      className={`transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent shadow-none'
      }`}
      elevation={0}
    >
      <Toolbar className="justify-between">
        <Typography
          variant="h6"
          component="div"
          className={`font-bold transition-all duration-300 ${
            scrolled 
              ? isDarkMode ? 'text-white' : 'text-gray-800'
              : 'text-white'
          }`}
        >
          <span className="gradient-text">Rohan</span>
        </Typography>

        <Box className="flex items-center gap-4">
          {!isMobile && (
            <Box className="flex gap-6">
              {menuItems.map((item, index) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => scrollToSection(item)}
                  className={`transition-all duration-300 hover:scale-110 animate-fade-in-down ${
                    scrolled 
                      ? isDarkMode 
                        ? 'text-white hover:text-purple-400' 
                        : 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-purple-400'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Theme Toggle Button */}
          <IconButton
            onClick={toggleTheme}
            className={`transition-all duration-300 hover:scale-110 ${
              scrolled 
                ? isDarkMode 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-800 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={`${
                scrolled 
                  ? isDarkMode 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="md:hidden"
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 