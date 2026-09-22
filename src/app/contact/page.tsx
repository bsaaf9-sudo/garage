'use client';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom fontWeight="800">
          Nous <span style={{ color: '#3B82F6' }}>Trouver</span>
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, fontWeight: 400 }}>
          GueruaMec — Votre garage de confiance à El Jadida
        </Typography>

        <Grid container spacing={4}>
          {/* Google Maps */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ borderRadius: 4, overflow: 'hidden', height: '100%', minHeight: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53889.95637566146!2d-8.5371!3d33.2549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda9225c1f185af7%3A0x6b5d5ebf3f927b3c!2sEl%20Jadida!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation GueruaMec El Jadida"
              />
            </Paper>
          </Grid>

          {/* Infos Contact */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ 
                  width: 56, height: 56, borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                }}>
                  <LocationOnIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Adresse</Typography>
                  <Typography fontWeight="600">El Jadida, Maroc</Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ 
                  width: 56, height: 56, borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #10B981, #059669)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                }}>
                  <PhoneIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Téléphone</Typography>
                  <Typography fontWeight="600">+212 667 584 378</Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ 
                  width: 56, height: 56, borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                }}>
                  <EmailIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                  <Typography fontWeight="600">choaib81@gmail.com</Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ 
                  width: 56, height: 56, borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                }}>
                  <AccessTimeIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Horaires</Typography>
                  <Typography fontWeight="600">Lun - Sam : 8h00 - 18h00</Typography>
                  <Typography variant="body2" color="text.secondary">Dimanche : Fermé</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
