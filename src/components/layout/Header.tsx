'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { SignInButton, Show, UserButton } from '@clerk/nextjs';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: 'SERVICES', path: '/services' },
    { title: 'PERFORMANCE', path: '/services' },
    { title: 'RACING', path: '/' },
    { title: 'TUNING', path: '/' },
  ];

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(5, 5, 5, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(212,255,0,0.2)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: { xs: 70, md: 80 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 900, fontStyle: 'italic', color: 'white', letterSpacing: { xs: '0.02em', md: '0.05em' }, fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
                PRECISION MOTORS
              </Typography>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            {navLinks.map((item) => (
              <Link key={item.title} href={item.path} passHref style={{ textDecoration: 'none', color: '#A3A3A3', fontSize: '0.85rem', fontWeight: 800, fontStyle: 'italic', letterSpacing: '0.1em', transition: 'color 0.2s' }}>
                <Box sx={{ '&:hover': { color: '#D4FF00' } }}>{item.title}</Box>
              </Link>
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="text" sx={{ color: '#FFFFFF', fontWeight: 800, fontStyle: 'italic' }}>
                  LOGIN
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton appearance={{ elements: { avatarBox: { width: 40, height: 40, borderRadius: 0 } } }} />
            </Show>
            <Button variant="contained" color="primary" href="/booking">
              BOOK SERVICE
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 2 }}>
            <Show when="signed-in">
              <UserButton appearance={{ elements: { avatarBox: { width: 32, height: 32, borderRadius: 0 } } }} />
            </Show>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon color="#D4FF00" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 280, bgcolor: '#050505', borderLeft: '4px solid #D4FF00', pt: 2 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#D4FF00' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((item) => (
            <ListItem key={item.title} onClick={handleDrawerToggle} sx={{ borderBottom: '1px solid rgba(212,255,0,0.2)', py: 2 }}>
              <Link href={item.path} passHref style={{ textDecoration: 'none', width: '100%' }}>
                <Typography sx={{ color: '#FFF', fontWeight: 900, fontStyle: 'italic', fontSize: '1.2rem', textTransform: 'uppercase' }}>{item.title}</Typography>
              </Link>
            </ListItem>
          ))}
          
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="outlined" color="primary" fullWidth onClick={handleDrawerToggle}>
                  LOGIN
                </Button>
              </SignInButton>
            </Show>
            <Button variant="contained" color="primary" fullWidth href="/booking" onClick={handleDrawerToggle}>
              BOOK SERVICE
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}
