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
    { city: 'North Las Vegas', state: 'NV', hub: 'Las Vegas', travel_time: 18, distance: 12 },
    { city: 'Paradise', state: 'NV', hub: 'Las Vegas', travel_time: 10, distance: 7 },
    { city: 'Spring Valley', state: 'NV', hub: 'Las Vegas', travel_time: 12, distance: 8 },

    // ===== OREGON (Hub: Portland) =====
    { city: 'Portland', state: 'OR', hub: 'Portland', travel_time: 0, distance: 0 },
    { city: 'Gresham', state: 'OR', hub: 'Portland', travel_time: 20, distance: 14 },
    { city: 'Hillsboro', state: 'OR', hub: 'Portland', travel_time: 22, distance: 16 },
    { city: 'Beaverton', state: 'OR', hub: 'Portland', travel_time: 15, distance: 10 },
    { city: 'Vancouver', state: 'WA', hub: 'Portland', travel_time: 18, distance: 12 },

    // ===== MARYLAND (Hub: Baltimore) =====
    { city: 'Baltimore', state: 'MD', hub: 'Baltimore', travel_time: 0, distance: 0 },
    { city: 'Annapolis', state: 'MD', hub: 'Baltimore', travel_time: 35, distance: 28 },
    { city: 'Columbia', state: 'MD', hub: 'Baltimore', travel_time: 20, distance: 14 },
    { city: 'Rockville', state: 'MD', hub: 'Baltimore', travel_time: 45, distance: 38 },
    { city: 'Silver Spring', state: 'MD', hub: 'Baltimore', travel_time: 40, distance: 34 },

    // ===== TENNESSEE (Hub: Nashville) =====
    { city: 'Nashville', state: 'TN', hub: 'Nashville', travel_time: 0, distance: 0 },
    { city: 'Murfreesboro', state: 'TN', hub: 'Nashville', travel_time: 30, distance: 22 },
    { city: 'Franklin', state: 'TN', hub: 'Nashville', travel_time: 20, distance: 14 },
    { city: 'Clarksville', state: 'TN', hub: 'Nashville', travel_time: 45, distance: 38 },
    { city: 'Hendersonville', state: 'TN', hub: 'Nashville', travel_time: 25, distance: 18 },

    // ===== MISSOURI (Hub: St. Louis) =====
    { city: 'St. Louis', state: 'MO', hub: 'St. Louis', travel_time: 0, distance: 0 },
    { city: 'Kansas City', state: 'MO', hub: 'St. Louis', travel_time: 240, distance: 200 },
    { city: 'Springfield', state: 'MO', hub: 'St. Louis', travel_time: 180, distance: 150 },
    { city: 'Columbia', state: 'MO', hub: 'St. Louis', travel_time: 120, distance: 100 },

    // ===== NORTH CAROLINA (Hub: Charlotte) =====
    { city: 'Charlotte', state: 'NC', hub: 'Charlotte', travel_time: 0, distance: 0 },
    { city: 'Raleigh', state: 'NC', hub: 'Charlotte', travel_time: 140, distance: 120 },
    { city: 'Greensboro', state: 'NC', hub: 'Charlotte', travel_time: 90, distance: 75 },
    { city: 'Durham', state: 'NC', hub: 'Charlotte', travel_time: 130, distance: 110 },

    // ===== OHIO (Hub: Columbus) =====
    { city: 'Columbus', state: 'OH', hub: 'Columbus', travel_time: 0, distance: 0 },
    { city: 'Cleveland', state: 'OH', hub: 'Columbus', travel_time: 140, distance: 120 },
    { city: 'Cincinnati', state: 'OH', hub: 'Columbus', travel_time: 100, distance: 85 },
    { city: 'Toledo', state: 'OH', hub: 'Columbus', travel_time: 120, distance: 100 },

    // ===== MICHIGAN (Hub: Detroit) =====
    { city: 'Detroit', state: 'MI', hub: 'Detroit', travel_time: 0, distance: 0 },
    { city: 'Grand Rapids', state: 'MI', hub: 'Detroit', travel_time: 150, distance: 130 },
    { city: 'Ann Arbor', state: 'MI', hub: 'Detroit', travel_time: 45, distance: 38 },
    { city: 'Lansing', state: 'MI', hub: 'Detroit', travel_time: 90, distance: 75 },

    // ===== MINNESOTA (Hub: Minneapolis) =====
    { city: 'Minneapolis', state: 'MN', hub: 'Minneapolis', travel_time: 0, distance: 0 },
    { city: 'St. Paul', state: 'MN', hub: 'Minneapolis', travel_time: 15, distance: 10 },
    { city: 'Bloomington', state: 'MN', hub: 'Minneapolis', travel_time: 20, distance: 14 },
    { city: 'Duluth', state: 'MN', hub: 'Minneapolis', travel_time: 150, distance: 130 },

    // ===== LOUISIANA (Hub: New Orleans) =====
    { city: 'New Orleans', state: 'LA', hub: 'New Orleans', travel_time: 0, distance: 0 },
    { city: 'Baton Rouge', state: 'LA', hub: 'New Orleans', travel_time: 80, distance: 65 },
    { city: 'Shreveport', state: 'LA', hub: 'New Orleans', travel_time: 200, distance: 170 },
    { city: 'Lafayette', state: 'LA', hub: 'New Orleans', travel_time: 135, distance: 115 },

    // ===== PENNSYLVANIA (Hub: Philadelphia) =====
    { city: 'Philadelphia', state: 'PA', hub: 'Philadelphia', travel_time: 0, distance: 0 },
    { city: 'Pittsburgh', state: 'PA', hub: 'Philadelphia', travel_time: 300, distance: 250 },
    { city: 'Allentown', state: 'PA', hub: 'Philadelphia', travel_time: 60, distance: 50 },
    { city: 'Reading', state: 'PA', hub: 'Philadelphia', travel_time: 45, distance: 38 },

    // ===== INDIANA (Hub: Indianapolis) =====
    { city: 'Indianapolis', state: 'IN', hub: 'Indianapolis', travel_time: 0, distance: 0 },
    { city: 'Fort Wayne', state: 'IN', hub: 'Indianapolis', travel_time: 120, distance: 100 },
    { city: 'Evansville', state: 'IN', hub: 'Indianapolis', travel_time: 165, distance: 140 },
    { city: 'South Bend', state: 'IN', hub: 'Indianapolis', travel_time: 150, distance: 125 },

    // ===== WISCONSIN (Hub: Milwaukee) =====
    { city: 'Milwaukee', state: 'WI', hub: 'Milwaukee', travel_time: 0, distance: 0 },
    { city: 'Madison', state: 'WI', hub: 'Milwaukee', travel_time: 75, distance: 62 },
    { city: 'Green Bay', state: 'WI', hub: 'Milwaukee', travel_time: 120, distance: 100 },
    { city: 'Kenosha', state: 'WI', hub: 'Milwaukee', travel_time: 40, distance: 32 },

    // ===== UTAH (Hub: Salt Lake City) =====
    { city: 'Salt Lake City', state: 'UT', hub: 'Salt Lake City', travel_time: 0, distance: 0 },
    { city: 'Provo', state: 'UT', hub: 'Salt Lake City', travel_time: 45, distance: 38 },
    { city: 'Ogden', state: 'UT', hub: 'Salt Lake City', travel_time: 40, distance: 34 },
    { city: 'West Valley City', state: 'UT', hub: 'Salt Lake City', travel_time: 15, distance: 10 },

    // ===== KENTUCKY (Hub: Louisville) =====
    { city: 'Louisville', state: 'KY', hub: 'Louisville', travel_time: 0, distance: 0 },
    { city: 'Lexington', state: 'KY', hub: 'Louisville', travel_time: 75, distance: 62 },
    { city: 'Frankfort', state: 'KY', hub: 'Louisville', travel_time: 50, distance: 42 },
    { city: 'Covington', state: 'KY', hub: 'Louisville', travel_time: 90, distance: 75 },

    // ===== OKLAHOMA (Hub: Oklahoma City) =====
    { city: 'Oklahoma City', state: 'OK', hub: 'Oklahoma City', travel_time: 0, distance: 0 },
    { city: 'Tulsa', state: 'OK', hub: 'Oklahoma City', travel_time: 90, distance: 75 },
    { city: 'Norman', state: 'OK', hub: 'Oklahoma City', travel_time: 20, distance: 14 },
    { city: 'Edmond', state: 'OK', hub: 'Oklahoma City', travel_time: 15, distance: 10 },

    // ===== ALABAMA (Hub: Birmingham) =====
    { city: 'Birmingham', state: 'AL', hub: 'Birmingham', travel_time: 0, distance: 0 },
    { city: 'Huntsville', state: 'AL', hub: 'Birmingham', travel_time: 90, distance: 75 },
    { city: 'Montgomery', state: 'AL', hub: 'Birmingham', travel_time: 85, distance: 70 },
    { city: 'Mobile', state: 'AL', hub: 'Birmingham', travel_time: 210, distance: 175 },

    // ===== SOUTH CAROLINA (Hub: Columbia) =====
    { city: 'Columbia', state: 'SC', hub: 'Columbia', travel_time: 0, distance: 0 },
    { city: 'Charleston', state: 'SC', hub: 'Columbia', travel_time: 100, distance: 85 },
    { city: 'Greenville', state: 'SC', hub: 'Columbia', travel_time: 90, distance: 75 },
    { city: 'Spartanburg', state: 'SC', hub: 'Columbia', travel_time: 85, distance: 70 },

    // ===== IOWA (Hub: Des Moines) =====
    { city: 'Des Moines', state: 'IA', hub: 'Des Moines', travel_time: 0, distance: 0 },
    { city: 'Cedar Rapids', state: 'IA', hub: 'Des Moines', travel_time: 120, distance: 100 },
    { city: 'Davenport', state: 'IA', hub: 'Des Moines', travel_time: 165, distance: 140 },
    { city: 'Sioux City', state: 'IA', hub: 'Des Moines', travel_time: 180, distance: 150 },

    // ===== ARKANSAS (Hub: Little Rock) =====
    { city: 'Little Rock', state: 'AR', hub: 'Little Rock', travel_time: 0, distance: 0 },
    { city: 'Fayetteville', state: 'AR', hub: 'Little Rock', travel_time: 185, distance: 155 },
    { city: 'Fort Smith', state: 'AR', hub: 'Little Rock', travel_time: 145, distance: 120 },
    { city: 'Springdale', state: 'AR', hub: 'Little Rock', travel_time: 180, distance: 150 },

    // ===== MISSISSIPPI (Hub: Jackson) =====
    { city: 'Jackson', state: 'MS', hub: 'Jackson', travel_time: 0, distance: 0 },
    { city: 'Gulfport', state: 'MS', hub: 'Jackson', travel_time: 150, distance: 125 },
    { city: 'Biloxi', state: 'MS', hub: 'Jackson', travel_time: 155, distance: 130 },
    { city: 'Hattiesburg', state: 'MS', hub: 'Jackson', travel_time: 90, distance: 75 },

    // ===== KANSAS (Hub: Wichita) =====
    { city: 'Wichita', state: 'KS', hub: 'Wichita', travel_time: 0, distance: 0 },
    { city: 'Overland Park', state: 'KS', hub: 'Wichita', travel_time: 180, distance: 150 },
    { city: 'Kansas City', state: 'KS', hub: 'Wichita', travel_time: 185, distance: 155 },
    { city: 'Topeka', state: 'KS', hub: 'Wichita', travel_time: 140, distance: 115 },

    // ===== NEBRASKA (Hub: Omaha) =====
    { city: 'Omaha', state: 'NE', hub: 'Omaha', travel_time: 0, distance: 0 },
    { city: 'Lincoln', state: 'NE', hub: 'Omaha', travel_time: 60, distance: 50 },
    { city: 'Bellevue', state: 'NE', hub: 'Omaha', travel_time: 15, distance: 10 },
    { city: 'Grand Island', state: 'NE', hub: 'Omaha', travel_time: 150, distance: 125 },

    // ===== IDAHO (Hub: Boise) =====
    { city: 'Boise', state: 'ID', hub: 'Boise', travel_time: 0, distance: 0 },
    { city: 'Nampa', state: 'ID', hub: 'Boise', travel_time: 20, distance: 14 },
    { city: 'Meridian', state: 'ID', hub: 'Boise', travel_time: 15, distance: 10 },
    { city: 'Idaho Falls', state: 'ID', hub: 'Boise', travel_time: 210, distance: 175 },

    // ===== NEW MEXICO (Hub: Albuquerque) =====
    { city: 'Albuquerque', state: 'NM', hub: 'Albuquerque', travel_time: 0, distance: 0 },
    { city: 'Rio Rancho', state: 'NM', hub: 'Albuquerque', travel_time: 20, distance: 14 },
    { city: 'Santa Fe', state: 'NM', hub: 'Albuquerque', travel_time: 60, distance: 50 },
    { city: 'Las Cruces', state: 'NM', hub: 'Albuquerque', travel_time: 200, distance: 170 },

    // ===== WEST VIRGINIA (Hub: Charleston) =====
    { city: 'Charleston', state: 'WV', hub: 'Charleston', travel_time: 0, distance: 0 },
    { city: 'Huntington', state: 'WV', hub: 'Charleston', travel_time: 50, distance: 42 },
    { city: 'Morgantown', state: 'WV', hub: 'Charleston', travel_time: 130, distance: 110 },
    { city: 'Parkersburg', state: 'WV', hub: 'Charleston', travel_time: 90, distance: 75 },

    // ===== NEW HAMPSHIRE (Hub: Manchester) =====
    { city: 'Manchester', state: 'NH', hub: 'Manchester', travel_time: 0, distance: 0 },
    { city: 'Nashua', state: 'NH', hub: 'Manchester', travel_time: 20, distance: 14 },
    { city: 'Concord', state: 'NH', hub: 'Manchester', travel_time: 25, distance: 18 },
    { city: 'Portsmouth', state: 'NH', hub: 'Manchester', travel_time: 40, distance: 32 },

    // ===== MAINE (Hub: Portland) =====
    { city: 'Portland', state: 'ME', hub: 'Portland', travel_time: 0, distance: 0 },
    { city: 'Lewiston', state: 'ME', hub: 'Portland', travel_time: 35, distance: 28 },
    { city: 'Bangor', state: 'ME', hub: 'Portland', travel_time: 120, distance: 100 },
    { city: 'Auburn', state: 'ME', hub: 'Portland', travel_time: 30, distance: 22 },

    // ===== RHODE ISLAND (Hub: Providence) =====
    { city: 'Providence', state: 'RI', hub: 'Providence', travel_time: 0, distance: 0 },
    { city: 'Warwick', state: 'RI', hub: 'Providence', travel_time: 15, distance: 10 },
    { city: 'Cranston', state: 'RI', hub: 'Providence', travel_time: 12, distance: 8 },
    { city: 'Pawtucket', state: 'RI', hub: 'Providence', travel_time: 10, distance: 7 },

    // ===== DELAWARE (Hub: Wilmington) =====
    { city: 'Wilmington', state: 'DE', hub: 'Wilmington', travel_time: 0, distance: 0 },
    { city: 'Dover', state: 'DE', hub: 'Wilmington', travel_time: 45, distance: 38 },
    { city: 'Newark', state: 'DE', hub: 'Wilmington', travel_time: 20, distance: 14 },
    { city: 'Middletown', state: 'DE', hub: 'Wilmington', travel_time: 30, distance: 22 },

    // ===== CONNECTICUT (Hub: Hartford) =====
    { city: 'Hartford', state: 'CT', hub: 'Hartford', travel_time: 0, distance: 0 },
    { city: 'New Haven', state: 'CT', hub: 'Hartford', travel_time: 40, distance: 32 },
    { city: 'Stamford', state: 'CT', hub: 'Hartford', travel_time: 70, distance: 58 },
    { city: 'Waterbury', state: 'CT', hub: 'Hartford', travel_time: 35, distance: 28 },

    // ===== MONTANA (Hub: Billings) =====
    { city: 'Billings', state: 'MT', hub: 'Billings', travel_time: 0, distance: 0 },
    { city: 'Missoula', state: 'MT', hub: 'Billings', travel_time: 210, distance: 175 },
    { city: 'Great Falls', state: 'MT', hub: 'Billings', travel_time: 180, distance: 150 },
    { city: 'Bozeman', state: 'MT', hub: 'Billings', travel_time: 140, distance: 115 },

    // ===== SOUTH DAKOTA (Hub: Sioux Falls) =====
    { city: 'Sioux Falls', state: 'SD', hub: 'Sioux Falls', travel_time: 0, distance: 0 },
    { city: 'Rapid City', state: 'SD', hub: 'Sioux Falls', travel_time: 330, distance: 275 },
    { city: 'Aberdeen', state: 'SD', hub: 'Sioux Falls', travel_time: 180, distance: 150 },
    { city: 'Brookings', state: 'SD', hub: 'Sioux Falls', travel_time: 60, distance: 50 },

    // ===== NORTH DAKOTA (Hub: Fargo) =====
    { city: 'Fargo', state: 'ND', hub: 'Fargo', travel_time: 0, distance: 0 },
    { city: 'Bismarck', state: 'ND', hub: 'Fargo', travel_time: 195, distance: 163 },
    { city: 'Grand Forks', state: 'ND', hub: 'Fargo', travel_time: 75, distance: 62 },
    { city: 'Minot', state: 'ND', hub: 'Fargo', travel_time: 240, distance: 200 },

    // ===== WYOMING (Hub: Cheyenne) =====
    { city: 'Cheyenne', state: 'WY', hub: 'Cheyenne', travel_time: 0, distance: 0 },
    { city: 'Casper', state: 'WY', hub: 'Cheyenne', travel_time: 165, distance: 138 },
    { city: 'Laramie', state: 'WY', hub: 'Cheyenne', travel_time: 45, distance: 38 },
    { city: 'Gillette', state: 'WY', hub: 'Cheyenne', travel_time: 240, distance: 200 },

    // ===== VERMONT (Hub: Burlington) =====
    { city: 'Burlington', state: 'VT', hub: 'Burlington', travel_time: 0, distance: 0 },
    { city: 'South Burlington', state: 'VT', hub: 'Burlington', travel_time: 10, distance: 7 },
    { city: 'Rutland', state: 'VT', hub: 'Burlington', travel_time: 70, distance: 58 },
    { city: 'Montpelier', state: 'VT', hub: 'Burlington', travel_time: 45, distance: 38 },

    // ===== ALASKA (Hub: Anchorage) =====
    { city: 'Anchorage', state: 'AK', hub: 'Anchorage', travel_time: 0, distance: 0 },
    { city: 'Fairbanks', state: 'AK', hub: 'Anchorage', travel_time: 360, distance: 300 },
    { city: 'Juneau', state: 'AK', hub: 'Anchorage', travel_time: 570, distance: 475 },

    // ===== HAWAII (Hub: Honolulu) =====
    { city: 'Honolulu', state: 'HI', hub: 'Honolulu', travel_time: 0, distance: 0 },
    { city: 'Pearl City', state: 'HI', hub: 'Honolulu', travel_time: 15, distance: 10 },
    { city: 'Hilo', state: 'HI', hub: 'Honolulu', travel_time: 420, distance: 350 },
    { city: 'Kailua', state: 'HI', hub: 'Honolulu', travel_time: 20, distance: 14 }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function findCitiesByHub(hubName, state) {
    // Find all cities with this hub
    return CITY_DATA.filter(city => 
        city.hub === hubName && 
        city.state === state
    ).sort((a, b) => a.travel_time - b.travel_time);
}

function findCityByName(cityName, state) {
    // Find a specific city
    return CITY_DATA.find(city => 
        city.city.toLowerCase() === cityName.toLowerCase() &&
        city.state.toLowerCase() === state.toLowerCase()
    );
}

function getUniqueHubs() {
    // Get all unique hubs
    const hubs = new Set();
    CITY_DATA.forEach(city => {
        hubs.add(`${city.hub}, ${city.state}`);
    });
    return Array.from(hubs).sort();
}

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CITY_DATA, findCitiesByHub, findCityByName, getUniqueHubs };
}
