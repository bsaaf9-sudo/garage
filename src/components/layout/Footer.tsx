'use client';
import { Box, Container, Typography, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#050505', borderTop: '1px solid rgba(212,255,0,0.2)', color: 'text.secondary', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 8 }} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#D4FF00', fontWeight: 900, fontStyle: 'italic', mb: 3, fontSize: '1.5rem', letterSpacing: '0.05em', lineHeight: 1 }}>
              PRECISION<br/>MOTORS
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: { md: 'flex-end' } }}>
              <Typography variant="body2" sx={{ fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', color: '#FFF' }}>PRIVACY</Typography>
              <Typography variant="body2" sx={{ fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', color: '#FFF' }}>TERMS</Typography>
              <Typography variant="body2" sx={{ fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', color: '#FFF' }}>WARRANTY</Typography>
              <Typography variant="body2" sx={{ fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', color: '#FFF' }}>CONTACT</Typography>
              <Typography variant="body2" sx={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', ml: { md: 4 } }}>
                © 2024 PRECISION MOTORS. ENGINEERED FOR VELOCITY.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
