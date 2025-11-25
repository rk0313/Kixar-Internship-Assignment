export const TURF_DATA = {
  id: '1',
  name: 'Xciteplay Club',
  rating: 4.5,
  ratingCount: 15,
  address: '516/A, Katol Rd, KT Nagar, Nagpur, Maharashtra 440013',
  description: "Xciteplay Club is the perfect spot for football and cricket lovers to bring their game on. Well maintained turf with amenities.",
  amenities: [
    { name: 'Parking', icon: 'car' }, 
    { name: 'Water', icon: 'droplet' }, 
    { name: 'Ball', icon: 'circle' }, 
    { name: 'Night Light', icon: 'sun' }
  ],
  sports: ['Football', 'Cricket', 'Pickle Ball'],
  price: 1200,
  timings: {
    day: 'Monday',
    time: '06:00 PM - 07:00 PM'
  },
  images: [
    'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop', // Football turf
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop', // Cricket
    'https://images.unsplash.com/photo-1626248982352-25e227092925?q=80&w=2070&auto=format&fit=crop'
  ],
  offer: {
    code: 'FIRSTBOOK',
    discount: '20% Offer on your first turf booking'
  },
  reviews: [
    { 
      id: 1, 
      user: 'Siva', 
      rating: 5.0, 
      date: '2 days ago', 
      text: 'Hand On The Best And The Easiest Way Of Booking Turfs Just In Seconds And Within Your Hand!' 
    },
    { 
      id: 2, 
      user: 'Kumar', 
      rating: 5.0, 
      date: '2 days ago', 
      text: 'Great experience, well maintained.' 
    }
  ]
};