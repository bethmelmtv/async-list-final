const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YXF1aGF3cXl0dHhkcmNiaHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5ODEsImV4cCI6MTk2MzEyNzk4MX0.FnfsYqPR7GPz5COh7itHiDt6as7-F__iU57NyG7IKyE';
const SUPABASE_URL = 'https://zwaquhawqyttxdrcbhxx.supabase.co';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCandies() {
    const response = await client
        .from('Candies')
        //name of supabase table?
        .select('*');
        //select all?
    return response.data;
    //what does this code mean?
}


export async function getOwls() {
    const response = await client
        .from('Owls')
        .select('*');
    return response.data;
}


export async function getArtists() {
    const response = await client
        .from('Artists')
        .select('*');
    return response.data; 
}




export async function getInstruments() {
    const response = await client
        .from('instruments')
        .select('*');
    return response.data;
} 