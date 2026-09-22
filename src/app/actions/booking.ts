'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Create a Supabase client with the Service Role Key to bypass RLS
// This is secure because this code only runs on the server
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function createBooking(formData: {
  service: string;
  date: string;
  vehicle: string;
}) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return { success: false, error: "Non autorisé. Veuillez vous connecter." };
  }

  const { service, date, vehicle } = formData;

  if (!service || !date || !vehicle) {
    return { success: false, error: "Tous les champs sont requis." };
  }

  try {
    const { error } = await supabaseAdmin
      .from('appointments')
      .insert([
        {
          user_id: userId,
          customer_name: user.fullName || user.primaryEmailAddress?.emailAddress || 'Client sans nom',
          service_type: service,
          appointment_date: date,
          vehicle_details: vehicle,
          status: 'pending'
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: "Erreur lors de l'enregistrement en base de données." };
    }

    return { success: true, message: "Votre rendez-vous a été enregistré avec succès !" };
  } catch (err: any) {
    console.error("Action Error:", err);
    return { success: false, error: err.message || "Une erreur inattendue est survenue." };
  }
}
