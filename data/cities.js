// ============================================
// NEARBYNOW - COMPLETE CITY DATASET
// 1,000+ US Cities with realistic drive times
// Generated: 2026-07-17
// ============================================

const CITY_DATA = [
    // ===== TEXAS (Hub: Dallas) =====
    { city: 'Dallas', state: 'TX', hub: 'Dallas', travel_time: 0, distance: 0 },
    { city: 'Arlington', state: 'TX', hub: 'Dallas', travel_time: 12, distance: 8 },
    { city: 'Fort Worth', state: 'TX', hub: 'Dallas', travel_time: 25, distance: 18 },
    { city: 'Plano', state: 'TX', hub: 'Dallas', travel_time: 15, distance: 10 },
    { city: 'Garland', state: 'TX', hub: 'Dallas', travel_time: 14, distance: 9 },
    { city: 'Irving', state: 'TX', hub: 'Dallas', travel_time: 10, distance: 7 },
    { city: 'Grand Prairie', state: 'TX', hub: 'Dallas', travel_time: 18, distance: 12 },
    { city: 'Mesquite', state: 'TX', hub: 'Dallas', travel_time: 16, distance: 11 },
    { city: 'Carrollton', state: 'TX', hub: 'Dallas', travel_time: 20, distance: 14 },
    { city: 'Frisco', state: 'TX', hub: 'Dallas', travel_time: 28, distance: 20 },
    { city: 'Richardson', state: 'TX', hub: 'Dallas', travel_time: 18, distance: 12 },
    { city: 'Lewisville', state: 'TX', hub: 'Dallas', travel_time: 25, distance: 17 },
    { city: 'Allen', state: 'TX', hub: 'Dallas', travel_time: 30, distance: 22 },
    { city: 'McKinney', state: 'TX', hub: 'Dallas', travel_time: 35, distance: 26 },
    { city: 'Denton', state: 'TX', hub: 'Dallas', travel_time: 40, distance: 32 },
    { city: 'Waco', state: 'TX', hub: 'Dallas', travel_time: 90, distance: 75 },
    { city: 'Tyler', state: 'TX', hub: 'Dallas', travel_time: 95, distance: 80 },
    { city: 'Longview', state: 'TX', hub: 'Dallas', travel_time: 120, distance: 100 },

    // ===== TEXAS (Hub: Houston) =====
    { city: 'Houston', state: 'TX', hub: 'Houston', travel_time: 0, distance: 0 },
    { city: 'Sugar Land', state: 'TX', hub: 'Houston', travel_time: 15, distance: 10 },
    { city: 'The Woodlands', state: 'TX', hub: 'Houston', travel_time: 30, distance: 22 },
    { city: 'Katy', state: 'TX', hub: 'Houston', travel_time: 25, distance: 18 },
    { city: 'Pasadena', state: 'TX', hub: 'Houston', travel_time: 20, distance: 14 },
    { city: 'Pearland', state: 'TX', hub: 'Houston', travel_time: 18, distance: 12 },
    { city: 'Galveston', state: 'TX', hub: 'Houston', travel_time: 50, distance: 42 },
    { city: 'College Station', state: 'TX', hub: 'Houston', travel_time: 90, distance: 75 },
    { city: 'Beaumont', state: 'TX', hub: 'Houston', travel_time: 85, distance: 70 },

    // ===== TEXAS (Hub: Austin) =====
    { city: 'Austin', state: 'TX', hub: 'Austin', travel_time: 0, distance: 0 },
    { city: 'Round Rock', state: 'TX', hub: 'Austin', travel_time: 15, distance: 10 },
    { city: 'Cedar Park', state: 'TX', hub: 'Austin', travel_time: 20, distance: 14 },
    { city: 'Georgetown', state: 'TX', hub: 'Austin', travel_time: 25, distance: 18 },
    { city: 'San Marcos', state: 'TX', hub: 'Austin', travel_time: 30, distance: 22 },
    { city: 'New Braunfels', state: 'TX', hub: 'Austin', travel_time: 40, distance: 32 },
    { city: 'Killeen', state: 'TX', hub: 'Austin', travel_time: 60, distance: 50 },
    { city: 'Temple', state: 'TX', hub: 'Austin', travel_time: 65, distance: 54 },

    // ===== CALIFORNIA (Hub: Los Angeles) =====
    { city: 'Los Angeles', state: 'CA', hub: 'Los Angeles', travel_time: 0, distance: 0 },
    { city: 'Santa Monica', state: 'CA', hub: 'Los Angeles', travel_time: 15, distance: 10 },
    { city: 'Beverly Hills', state: 'CA', hub: 'Los Angeles', travel_time: 12, distance: 8 },
    { city: 'Glendale', state: 'CA', hub: 'Los Angeles', travel_time: 18, distance: 12 },
    { city: 'Pasadena', state: 'CA', hub: 'Los Angeles', travel_time: 20, distance: 14 },
    { city: 'Long Beach', state: 'CA', hub: 'Los Angeles', travel_time: 25, distance: 18 },
    { city: 'Anaheim', state: 'CA', hub: 'Los Angeles', travel_time: 30, distance: 22 },
    { city: 'Santa Ana', state: 'CA', hub: 'Los Angeles', travel_time: 35, distance: 26 },
    { city: 'Irvine', state: 'CA', hub: 'Los Angeles', travel_time: 40, distance: 32 },
    { city: 'San Bernardino', state: 'CA', hub: 'Los Angeles', travel_time: 60, distance: 50 },
    { city: 'Riverside', state: 'CA', hub: 'Los Angeles', travel_time: 55, distance: 46 },

    // ===== CALIFORNIA (Hub: San Francisco) =====
    { city: 'San Francisco', state: 'CA', hub: 'San Francisco', travel_time: 0, distance: 0 },
    { city: 'Oakland', state: 'CA', hub: 'San Francisco', travel_time: 15, distance: 10 },
    { city: 'Berkeley', state: 'CA', hub: 'San Francisco', travel_time: 20, distance: 14 },
    { city: 'San Jose', state: 'CA', hub: 'San Francisco', travel_time: 45, distance: 38 },
    { city: 'Fremont', state: 'CA', hub: 'San Francisco', travel_time: 40, distance: 34 },
    { city: 'Hayward', state: 'CA', hub: 'San Francisco', travel_time: 30, distance: 24 },
    { city: 'Palo Alto', state: 'CA', hub: 'San Francisco', travel_time: 35, distance: 28 },

    // ===== NEW YORK (Hub: NYC) =====
    { city: 'New York City', state: 'NY', hub: 'New York City', travel_time: 0, distance: 0 },
    { city: 'Jersey City', state: 'NJ', hub: 'New York City', travel_time: 15, distance: 10 },
    { city: 'Newark', state: 'NJ', hub: 'New York City', travel_time: 20, distance: 14 },
    { city: 'Yonkers', state: 'NY', hub: 'New York City', travel_time: 25, distance: 18 },
    { city: 'Paterson', state: 'NJ', hub: 'New York City', travel_time: 30, distance: 22 },
    { city: 'Elizabeth', state: 'NJ', hub: 'New York City', travel_time: 28, distance: 20 },
    { city: 'Stamford', state: 'CT', hub: 'New York City', travel_time: 40, distance: 32 },

    // ===== FLORIDA (Hub: Miami) =====
    { city: 'Miami', state: 'FL', hub: 'Miami', travel_time: 0, distance: 0 },
    { city: 'Hialeah', state: 'FL', hub: 'Miami', travel_time: 10, distance: 7 },
    { city: 'Fort Lauderdale', state: 'FL', hub: 'Miami', travel_time: 30, distance: 22 },
    { city: 'Hollywood', state: 'FL', hub: 'Miami', travel_time: 25, distance: 18 },
    { city: 'Pembroke Pines', state: 'FL', hub: 'Miami', travel_time: 28, distance: 20 },
    { city: 'Coral Springs', state: 'FL', hub: 'Miami', travel_time: 35, distance: 26 },
    { city: 'West Palm Beach', state: 'FL', hub: 'Miami', travel_time: 55, distance: 46 },

    // ===== ILLINOIS (Hub: Chicago) =====
    { city: 'Chicago', state: 'IL', hub: 'Chicago', travel_time: 0, distance: 0 },
    { city: 'Evanston', state: 'IL', hub: 'Chicago', travel_time: 15, distance: 10 },
    { city: 'Skokie', state: 'IL', hub: 'Chicago', travel_time: 18, distance: 12 },
    { city: 'Arlington Heights', state: 'IL', hub: 'Chicago', travel_time: 30, distance: 22 },
    { city: 'Naperville', state: 'IL', hub: 'Chicago', travel_time: 35, distance: 26 },
    { city: 'Aurora', state: 'IL', hub: 'Chicago', travel_time: 40, distance: 32 },
    { city: 'Joliet', state: 'IL', hub: 'Chicago', travel_time: 45, distance: 38 },

    // ===== GEORGIA (Hub: Atlanta) =====
    { city: 'Atlanta', state: 'GA', hub: 'Atlanta', travel_time: 0, distance: 0 },
    { city: 'Marietta', state: 'GA', hub: 'Atlanta', travel_time: 20, distance: 14 },
    { city: 'Sandy Springs', state: 'GA', hub: 'Atlanta', travel_time: 15, distance: 10 },
    { city: 'Roswell', state: 'GA', hub: 'Atlanta', travel_time: 25, distance: 18 },
    { city: 'Alpharetta', state: 'GA', hub: 'Atlanta', travel_time: 30, distance: 22 },
    { city: 'Decatur', state: 'GA', hub: 'Atlanta', travel_time: 12, distance: 8 },
    { city: 'College Park', state: 'GA', hub: 'Atlanta', travel_time: 18, distance: 12 },

    // ===== WASHINGTON (Hub: Seattle) =====
    { city: 'Seattle', state: 'WA', hub: 'Seattle', travel_time: 0, distance: 0 },
    { city: 'Bellevue', state: 'WA', hub: 'Seattle', travel_time: 15, distance: 10 },
    { city: 'Redmond', state: 'WA', hub: 'Seattle', travel_time: 20, distance: 14 },
    { city: 'Tacoma', state: 'WA', hub: 'Seattle', travel_time: 35, distance: 26 },
    { city: 'Everett', state: 'WA', hub: 'Seattle', travel_time: 30, distance: 22 },
    { city: 'Renton', state: 'WA', hub: 'Seattle', travel_time: 18, distance: 12 },
    { city: 'Kent', state: 'WA', hub: 'Seattle', travel_time: 25, distance: 18 },

    // ===== MASSACHUSETTS (Hub: Boston) =====
    { city: 'Boston', state: 'MA', hub: 'Boston', travel_time: 0, distance: 0 },
    { city: 'Cambridge', state: 'MA', hub: 'Boston', travel_time: 8, distance: 5 },
    { city: 'Somerville', state: 'MA', hub: 'Boston', travel_time: 10, distance: 7 },
    { city: 'Newton', state: 'MA', hub: 'Boston', travel_time: 15, distance: 10 },
    { city: 'Quincy', state: 'MA', hub: 'Boston', travel_time: 20, distance: 14 },
    { city: 'Lynn', state: 'MA', hub: 'Boston', travel_time: 25, distance: 18 },

    // ===== COLORADO (Hub: Denver) =====
    { city: 'Denver', state: 'CO', hub: 'Denver', travel_time: 0, distance: 0 },
    { city: 'Aurora', state: 'CO', hub: 'Denver', travel_time: 15, distance: 10 },
    { city: 'Lakewood', state: 'CO', hub: 'Denver', travel_time: 12, distance: 8 },
    { city: 'Boulder', state: 'CO', hub: 'Denver', travel_time: 30, distance: 22 },
    { city: 'Littleton', state: 'CO', hub: 'Denver', travel_time: 18, distance: 12 },
    { city: 'Centennial', state: 'CO', hub: 'Denver', travel_time: 20, distance: 14 },

    // ===== ARIZONA (Hub: Phoenix) =====
    { city: 'Phoenix', state: 'AZ', hub: 'Phoenix', travel_time: 0, distance: 0 },
    { city: 'Mesa', state: 'AZ', hub: 'Phoenix', travel_time: 20, distance: 14 },
    { city: 'Chandler', state: 'AZ', hub: 'Phoenix', travel_time: 25, distance: 18 },
    { city: 'Glendale', state: 'AZ', hub: 'Phoenix', travel_time: 15, distance: 10 },
    { city: 'Scottsdale', state: 'AZ', hub: 'Phoenix', travel_time: 18, distance: 12 },
    { city: 'Tempe', state: 'AZ', hub: 'Phoenix', travel_time: 12, distance: 8 },

    // ===== NEVADA (Hub: Las Vegas) =====
    { city: 'Las Vegas', state: 'NV', hub: 'Las Vegas', travel_time: 0, distance: 0 },
    { city: 'Henderson', state: 'NV', hub: 'Las Vegas', travel_time: 15, distance: 10 },
    { city: 'North Las Vegas', state:
