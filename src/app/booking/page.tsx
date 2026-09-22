'use client';
import { useState, useTransition } from 'react';
import { Box, Typography, Container, Paper, TextField, MenuItem, Button, Alert, Grid } from '@mui/material';
import { useUser } from '@clerk/nextjs';
import { createBooking } from '../actions/booking';
import { Car, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

export default function Booking() {
  const { isLoaded, isSignedIn } = useUser();
  const [isPending, startTransition] = useTransition();
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) {
      setStatus({ type: 'error', message: 'Veuillez vous connecter pour prendre rendez-vous.' });
      return;
    }

    setStatus(null);
    startTransition(async () => {
      const result = await createBooking({ service, date, vehicle });
      
      if (result.success) {
        setStatus({ type: 'success', message: result.message! });
        setService('');
        setDate('');
        setVehicle('');
      } else {
        setStatus({ type: 'error', message: result.error! });
      }
    });
  };

  if (!isLoaded) return null;

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          
          {/* Left Column - Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>SCHEDULE SERVICE</Typography>
            <Typography variant="body1" sx={{ color: '#9CA3AF', mb: 8 }}>
              Precision care for your high-performance vehicle. Complete the steps below to secure your slot.
            </Typography>

            {/* Stepper Mockup */}
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 6 }, mb: 8, borderBottom: '1px solid rgba(255,255,255,0.05)', pb: 2 }}>
              {[
                { num: '01', label: 'DETAILS', active: true },
                { num: '02', label: 'SERVICE', active: false },
                { num: '03', label: 'SCHEDULE', active: false },
                { num: '04', label: 'CONTACT', active: false }
              ].map((step, i) => (
                <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ bgcolor: step.active ? '#FF4500' : 'transparent', color: step.active ? '#FFF' : '#6B7280', px: 2, py: 1, mb: 1, border: step.active ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>{step.num}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: step.active ? '#FFF' : '#6B7280' }}>{step.label}</Typography>
                </Box>
              ))}
            </Box>

            <Paper sx={{ p: { xs: 3, md: 5 }, bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box sx={{ width: 4, height: 24, bgcolor: '#FF4500' }} />
                <Typography variant="h3" sx={{ m: 0 }}>APPOINTMENT DETAILS</Typography>
              </Box>

              {status && (
                <Alert severity={status.type} sx={{ mb: 4, bgcolor: status.type === 'error' ? 'rgba(211, 47, 47, 0.1)' : 'rgba(46, 125, 50, 0.1)', color: '#FFF' }}>
                  {status.message}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Vehicle Details (Make, Model, Year, VIN)"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      required
                      disabled={isPending}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      fullWidth
                      label="Service Required"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      disabled={isPending}
                    >
                      <MenuItem value="Maintenance">Routine Maintenance</MenuItem>
                      <MenuItem value="Diagnostics">Advanced Diagnostics</MenuItem>
                      <MenuItem value="Repair">Mechanical Repair</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="datetime-local"
                      label="Preferred Schedule"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      required
                      disabled={isPending}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 6, borderTop: '1px solid rgba(255,255,255,0.05)', pt: 4 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    disabled={isPending || !isSignedIn}
                    endIcon={<ArrowRight size={18} />}
                  >
                    {isPending ? "PROCESSING..." : (isSignedIn ? "CONFIRM APPOINTMENT" : "LOGIN TO BOOK")}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>

          {/* Right Column - Sidebar */}
          <Grid item xs={12} md={5}>
            {/* Image Box */}
            <Box sx={{ position: 'relative', width: '100%', height: '300px', mb: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
              <Box sx={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1632823465306-edeb34eb3c04?q=80&w=1000&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6
              }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 4, zIndex: 1 }}>
                <Box sx={{ bgcolor: '#FF4500', color: 'white', px: 2, py: 0.5, display: 'inline-block', mb: 2, fontSize: '0.65rem', letterSpacing: '0.1em', fontWeight: 700 }}>
                  CERTIFIED FACILITY
                </Box>
                <Typography variant="h3" sx={{ lineHeight: 1.2 }}>THE PRECISION<br/>STANDARD</Typography>
              </Box>
            </Box>

            {/* Why Choose Us */}
            <Paper sx={{ p: 4, bgcolor: '#161616' }}>
              <Typography sx={{ color: '#FF4500', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em', mb: 4 }}>WHY CHOOSE US</Typography>
              
              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <Car size={24} color="#F0F0F0" style={{ flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: '#FFF', fontWeight: 600, fontSize: '0.9rem', mb: 0.5 }}>PREMIUM LOANER FLEET</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>Complimentary luxury loaner vehicles available for services exceeding 4 hours.</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <ShieldCheck size={24} color="#F0F0F0" style={{ flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: '#FFF', fontWeight: 600, fontSize: '0.9rem', mb: 0.5 }}>LIFETIME WARRANTY</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>We stand by our craftsmanship with a nationwide limited lifetime warranty on all repairs.</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3 }}>
                <Wrench size={24} color="#F0F0F0" style={{ flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: '#FFF', fontWeight: 600, fontSize: '0.9rem', mb: 0.5 }}>TRANSPARENT DIAGNOSTICS</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>Receive a detailed digital report with photos and videos of every inspection point.</Typography>
                </Box>
              </Box>
            </Paper>

            <Box sx={{ border: '1px dashed rgba(255,255,255,0.1)', mt: 4, p: 3, textAlign: 'center' }}>
              <Typography sx={{ fontSize: '0.65rem', color: '#9CA3AF', letterSpacing: '0.1em', mb: 2 }}>FACTORY AUTHORIZED SERVICE CENTER</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, color: '#4B5563' }}>
                <ShieldCheck size={20} />
                <Settings size={20} />
                <Car size={20} />
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
