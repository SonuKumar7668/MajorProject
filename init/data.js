const sample_listing = [
  {
    "title": "Cozy Apartment in Downtown",
    "description": "A cozy apartment located in the heart of the city, perfect for young professionals.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1200,
    "location": "Downtown",
    "Country": "USA"
  },
  {
    "title": "Modern Loft with City View",
    "description": "Spacious loft with stunning city views, ideal for urban living.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1500,
    "location": "Midtown",
    "Country": "USA"
  },
  {
    "title": "Charming Cottage by the Lake",
    "description": "A charming cottage with a beautiful lake view, perfect for a peaceful retreat.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 900,
    "location": "Lakeside",
    "Country": "Canada"
  },
  {
    "title": "Luxury Penthouse with Panoramic Views",
    "description": "Experience luxury living in this penthouse with breathtaking panoramic views.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 3000,
    "location": "Uptown",
    "Country": "USA"
  },
  {
    "title": "Rustic Cabin in the Woods",
    "description": "A rustic cabin surrounded by nature, perfect for a quiet getaway.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 700,
    "location": "Woodland",
    "Country": "Canada"
  },
  {
    "title": "Elegant Townhouse in Historic District",
    "description": "An elegant townhouse located in a historic district, full of charm and character.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1800,
    "location": "Historic District",
    "Country": "USA"
  },
  {
    "title": "Beachfront Bungalow",
    "description": "A beautiful bungalow right on the beach, perfect for sun and surf lovers.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2000,
    "location": "Beachside",
    "Country": "Mexico"
  },
  {
    "title": "Mountain Retreat",
    "description": "A serene retreat in the mountains, ideal for hiking and nature enthusiasts.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1100,
    "location": "Mountain View",
    "Country": "USA"
  },
  {
    "title": "Urban Studio Apartment",
    "description": "A compact and modern studio apartment, perfect for city living.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1000,
    "location": "City Center",
    "Country": "USA"
  },
  {
    "title": "Country House with Large Garden",
    "description": "A spacious Country house with a large garden, ideal for families.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1600,
    "location": "Countryside",
    "Country": "UK"
  },
  {
    "title": "Modern Apartment in the City",
    "description": "A modern apartment located in the bustling city center, close to all amenities.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1300,
    "location": "City Center",
    "Country": "USA"
  },
  {
    "title": "Seaside Villa",
    "description": "A luxurious villa by the sea, offering stunning ocean views.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2500,
    "location": "Seaside",
    "Country": "Spain"
  },
  {
    "title": "Quaint Studio in the Village",
    "description": "A quaint studio located in a peaceful village, perfect for a quiet life.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 800,
    "location": "Village",
    "Country": "France"
  },
  {
    "title": "Spacious Family Home",
    "description": "A spacious home ideal for families, with a large backyard and modern amenities.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2200,
    "location": "Suburb",
    "Country": "USA"
  },
  {
    "title": "Chic Apartment in the Heart of Paris",
    "description": "A chic apartment located in the heart of Paris, close to iconic landmarks.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1700,
    "location": "Paris",
    "Country": "France"
  },
  {
    "title": "Luxury Condo with Rooftop Pool",
    "description": "A luxury condo featuring a rooftop pool and stunning city views.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2800,
    "location": "Downtown",
    "Country": "USA"
  },
  {
    "title": "Cozy Cabin in the Forest",
    "description": "A cozy cabin nestled in the forest, perfect for nature lovers.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 950,
    "location": "Forest",
    "Country": "Canada"
  },
  {
    "title": "Elegant Apartment in Rome",
    "description": "An elegant apartment located in the historic city of Rome, close to major attractions.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1900,
    "location": "Rome",
    "Country": "Italy"
  },
  {
    "title": "Modern House in the Suburbs",
    "description": "A modern house located in a quiet suburb, perfect for families.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2100,
    "location": "Suburb",
    "Country": "USA"
  },
  {
    "title": "Beach House with Ocean View",
    "description": "A beautiful beach house with stunning ocean views, perfect for a vacation.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 2300,
    "location": "Beachfront",
    "Country": "Mexico"
  },
  {
    "title": "Rustic Farmhouse",
    "description": "A rustic farmhouse with plenty of charm and character, ideal for a peaceful life.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1400,
    "location": "Countryside",
    "Country": "USA"
  },
  {
    "title": "Luxury Apartment in New York",
    "description": "A luxury apartment in the heart of New York City, close to all major attractions.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 3500,
    "location": "New York",
    "Country": "USA"
  },
  {
    "title": "Cozy Cottage in the Hills",
    "description": "A cozy cottage located in the hills, offering stunning views and tranquility.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1100,
    "location": "Hillside",
    "Country": "USA"
  },
  {
    "title": "Modern Loft in the City",
    "description": "A modern loft located in the city, perfect for urban living.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 1600,
    "location": "City Center",
    "Country": "USA"
  },
  {
    "title": "Secluded Cabin in the Woods",
    "description": "A secluded cabin in the woods, perfect for a quiet retreat.",
    "image": "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": 850,
    "location": "Woodland",
    "Country": "Canada"
  }
]
module.exports = { data: sample_listing };