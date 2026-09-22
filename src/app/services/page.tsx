'use client';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Droplet, Shield, Cpu, PaintBucket, Wind, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const servicesList = [
    {
      code: "PM-01",
      icon: <Droplet size={24} color="#FF4500" />,
      title: "Entretien & Vidange",
      description: "Optimisation de la longévité de votre moteur avec des huiles haute performance et filtres d'origine constructeur."
    },
    {
      code: "PM-02",
      icon: <Shield size={24} color="#FF4500" />,
      title: "Freinage & Sécurité",
      description: "Contrôle rigoureux et remplacement des plaquettes, disques et liquide de frein pour une sécurité sans compromis."
    },
    {
      code: "PM-03",
      icon: <Cpu size={24} color="#FF4500" />,
      title: "Diagnostic Électronique",
      description: "Analyse avancée des systèmes embarqués avec des outils de diagnostic de pointe pour identifier toute anomalie."
    },
    {
      code: "PM-04",
      icon: <PaintBucket size={24} color="#FF4500" />,
      title: "Carrosserie & Peinture",
      description: "Restauration esthétique complète et peinture haute précision pour redonner à votre véhicule son éclat d'origine."
    },
    {
      code: "PM-05",
      icon: <Wind size={24} color="#FF4500" />,
      title: "Climatisation",
      description: "Recharge de gaz et désinfection du circuit pour un confort thermique optimal et un air sain dans l'habitacle."
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', pb: 15 }}>
      {/* Hero Services */}
      <Box sx={{ 
        position: 'relative',
        py: { xs: 8, md: 15 },
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        mb: 8
      }}>
        <Box sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3,
          '&::after': {
            content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, #111111 0%, rgba(17,17,17,0.8) 50%, #111111 100%)',
          }
        }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography sx={{ color: '#FF4500', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 2, textTransform: 'uppercase' }}>
              EXPERTISE TECHNIQUE
            </Typography>
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, maxWidth: '800px', lineHeight: 1 }}>
              NOS SERVICES <br/>
              <span style={{ color: '#FF4500' }}>AUTOMOBILES</span>
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, maxWidth: '600px', color: '#9CA3AF' }}>
              Performance. Sécurité. Précision. Découvrez notre gamme complète de prestations d'entretien et de réparation réalisées par des experts certifiés.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {servicesList.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ height: '100%' }}>
                <Paper sx={{ p: 5, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                    {service.icon}
                    <Typography sx={{ fontSize: '0.65rem', color: '#6B7280', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                      CODE: {service.code}
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ mb: 2, fontSize: '1.25rem' }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 6, flexGrow: 1 }}>{service.description}</Typography>
                  
                  <Link href="/booking" passHref style={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#FF4500', transition: 'gap 0.2s', '&:hover': { gap: 2 } }}>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>DEMANDER UN DEVIS</Typography>
                      <ArrowRight size={16} />
                    </Box>
                  </Link>
                </Paper>
              </motion.div>
            </Grid>
          ))}

          {/* Call to Action Card */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ height: '100%' }}>
              <Paper sx={{ p: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.2)', bgcolor: 'transparent' }}>
                <Typography variant="h3" sx={{ mb: 2 }}>Besoin d'un Service Spécifique ?</Typography>
                <Typography variant="body2" sx={{ mb: 4 }}>
                  Nos techniciens sont formés pour intervenir sur tous types de véhicules, incluant l'électrique et l'hybride.
                </Typography>
                <Link href="/booking" passHref>
                  <Button variant="outlined" color="primary" fullWidth>
                    CONSULTER NOS EXPERTS
                  </Button>
                </Link>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ mt: { xs: 8, md: 15 }, pt: { xs: 6, md: 10 }, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h2" sx={{ mb: 2 }}>L'EXCELLENCE À CHAQUE<br/>TOUR DE CLÉ</Typography>
            <Typography variant="body1">Nous garantissons toutes nos interventions pièces et main d'œuvre.<br/>Prenez rendez-vous aujourd'hui pour un check-up complet.</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/booking" passHref>
              <Button variant="contained" color="primary" size="large">RÉSERVER MAINTENANT</Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant="outlined" size="large">VOIR LES TARIFS</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
