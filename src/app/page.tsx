'use client';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Zap, Target, Timer, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const hazardStripes = {
    background: 'repeating-linear-gradient(45deg, #000000, #000000 10px, #D4FF00 10px, #D4FF00 20px)',
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '4px solid #D4FF00',
        overflow: 'hidden',
        mt: -10
      }}>
        {/* Background Image (Racing/Tuning) */}
        <Box sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: 'skewY(-5deg) scale(1.1)', // Aggressive slant
          transformOrigin: 'top left',
          '&::after': {
            content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.2) 100%)',
          }
        }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '6.5rem' }, lineHeight: 0.9, mb: 1, textShadow: '4px 4px 0px rgba(212, 255, 0, 0.2)' }}>
              DOMINEZ
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '6.5rem' }, lineHeight: 0.9, color: 'primary.main', mb: 3 }}>
              LA ROUTE
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', maxWidth: '500px', fontStyle: 'italic', fontWeight: 500 }}>
              Performances pures et réglages de pointe pour passionnés de vitesse. L'ingénierie brute rencontre l'esthétique de la rue.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Link href="/booking" passHref>
                <Button variant="contained" color="primary" size="large">
                  COMMENCER
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button variant="outlined" size="large">
                  VOIR CATALOGUE
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Container>

        {/* Hazard Stripes Decor */}
        <Box sx={{ position: 'absolute', bottom: 0, right: -50, width: '300px', height: '40px', ...hazardStripes, opacity: 0.8, transform: 'skewX(-45deg)' }} />
      </Box>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ mt: -8, position: 'relative', zIndex: 2, mb: 15 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Zap size={32} color="#D4FF00" style={{ marginBottom: '16px' }} />
                <Typography variant="h3" sx={{ mb: 1, fontSize: '1.3rem' }}>VITESSE PURE</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>Optimisation de la courbe de puissance pour des sorties foudroyantes.</Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Target size={32} color="#D4FF00" style={{ marginBottom: '16px' }} />
                <Typography variant="h3" sx={{ mb: 1, fontSize: '1.3rem' }}>PRÉCISION</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>Réglages châssis et suspension avec une exactitude chirurgicale.</Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Timer size={32} color="#D4FF00" style={{ marginBottom: '16px' }} />
                <Typography variant="h3" sx={{ mb: 1, fontSize: '1.3rem' }}>CHRONO</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>Chaque milliseconde compte. Gagnez en efficacité sur circuit.</Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Services Highlight 01 */}
      <Container maxWidth="xl" sx={{ mb: 15 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ border: '4px solid #D4FF00', position: 'absolute', top: -20, left: -20, width: '100%', height: '100%', zIndex: 0 }} />
              <Box sx={{ 
                position: 'relative', zIndex: 1, paddingBottom: '70%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center'
              }} />
              <Box sx={{ position: 'absolute', bottom: -20, right: -20, width: 100, height: 40, ...hazardStripes, zIndex: 2 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: 'primary.main', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', mb: -1 }}>01.</Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>OPTIMISATION MOTEUR</Typography>
            <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic' }}>
              Repoussez les limites de votre bloc moteur. Nos ingénieurs calibrent chaque paramètre pour extraire le maximum de chevaux sans compromettre la fiabilité.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              {['Cartographie sur-mesure', 'Admission fibre de carbone', 'Échappement titane'].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircle size={20} color="#D4FF00" />
                  <Typography sx={{ fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
            <Button variant="contained" color="primary">DÉCOUVRIR LE STAGE 1-3</Button>
          </Grid>
        </Grid>
      </Container>

      {/* Services Highlight 02 */}
      <Container maxWidth="xl" sx={{ mb: 15 }}>
        <Grid container spacing={8} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: 'primary.main', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', mb: -1 }}>02.</Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>PRÉPARATION CIRCUIT</Typography>
            <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic' }}>
              Transformez votre véhicule de route en une machine de guerre pour la piste. Arceaux de sécurité, freinage carbone céramique et suspensions filetées.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Paper sx={{ p: 2, borderLeft: 'none', borderTop: '2px solid #D4FF00', width: '50%' }}>
                <Typography sx={{ color: 'primary.main', fontWeight: 800, fontStyle: 'italic' }}>STAGE II</Typography>
                <Typography sx={{ fontSize: '0.7rem' }}>AÉRO PISTE & SETUP</Typography>
              </Paper>
              <Paper sx={{ p: 2, borderLeft: 'none', borderTop: '2px solid #D4FF00', width: '50%' }}>
                <Typography sx={{ color: 'primary.main', fontWeight: 800, fontStyle: 'italic' }}>G-FORCE</Typography>
                <Typography sx={{ fontSize: '0.7rem' }}>PIÈCES CARBONE</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
             <Box sx={{ position: 'relative' }}>
              <Box sx={{ border: '4px solid #D4FF00', position: 'absolute', top: 20, right: -20, width: '100%', height: '100%', zIndex: 0 }} />
              <Box sx={{ 
                position: 'relative', zIndex: 1, paddingBottom: '70%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1000&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center'
              }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Grid Showcase */}
      <Box sx={{ bgcolor: '#000', py: 10, borderTop: '1px solid rgba(212, 255, 0, 0.2)' }}>
        <Container maxWidth="xl">
          <Typography sx={{ color: 'primary.main', fontWeight: 900, fontStyle: 'italic', letterSpacing: '0.1em' }}>_PERFORMANCE</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: 400, backgroundImage: 'url("https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}><Box sx={{ height: 192, backgroundImage: 'url("https://images.unsplash.com/photo-1620882727198-444497e20d65?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }} /></Grid>
                <Grid item xs={6}><Box sx={{ height: 192, backgroundImage: 'url("https://images.unsplash.com/photo-1629897038166-7e44a42533c3?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }} /></Grid>
                <Grid item xs={12}><Box sx={{ height: 192, backgroundImage: 'url("https://images.unsplash.com/photo-1579736829775-6f685957d383?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }} /></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Bottom */}
      <Box sx={{ py: 15, textAlign: 'center' }}>
        <Typography variant="h1" sx={{ mb: 2 }}>PRÊT À <span style={{ color: '#D4FF00' }}>DOMINER</span> ?</Typography>
        <Typography sx={{ fontStyle: 'italic', color: '#A3A3A3', mb: 6 }}>Ne vous contentez pas de conduire. Pilotez. Prenez rendez-vous avec nos experts.</Typography>
        <Link href="/booking" passHref>
          <Button variant="contained" color="primary" size="large" sx={{ px: 8, py: 2, fontSize: '1.2rem' }}>
            CONTACTEZ L'ÉQUIPE
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
