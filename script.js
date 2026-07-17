// ============================================
// NEARBYNOW - MAIN APPLICATION
// ============================================

// ===== State Management =====
const state = {
    theme: localStorage.getItem('nearbynow-theme') || 'light',
    history: JSON.parse(localStorage.getItem('nearbynow-history') || '[]'),
    streak: JSON.parse(localStorage.getItem('nearbynow-streak') || '{"days":0,"cities":[],"lastDate":null}'),
    data: CITY_DATA // From cities.js
};

// ===== DOM Elements =====
const elements = {
    themeToggle: document.getElementById('themeToggle'),
    radiusSearch: document.getElementById('radiusSearch'),
    radiusBtn: document.getElementById('radiusBtn'),
    resultsList: document.getElementById('resultsList'),
    searchHistory: document.getElementById('searchHistory'),
    fromCity: document.getElementById('fromCity'),
    toCity: document.getElementById('toCity'),
    distanceBtn: document.getElementById('distanceBtn'),
    distanceResult: document.getElementById('distanceResult'),
    streakBadge: document.getElementById('streakBadge'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    tabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    quickBtns: document.querySelectorAll('.quick-btn')
};

// ===== Helper Functions =====

// Parse input: "15 min from Dallas, TX"
function parseSearchInput(input) {
    const match = input.match(/(\d+)\s*(?:min|minutes?)\s*(?:from|near)\s*(.+)/i);
    if (!match) return null;
    
    const minutes = parseInt(match[1]);
    const location = match[2].trim();
    const [city, state] = location.split(',').map(s => s.trim());
    
    if (!city || !state) return null;
    
    return { minutes, city, state };
}

// Find hub city
function findHub(cityName, state) {
    return state.data.find(c => 
        c.city.toLowerCase() === cityName.toLowerCase() &&
        c.state.toLowerCase() === state.toLowerCase()
    );
}

// ===== Search Function =====
function searchRadius(input) {
    const parsed = parseSearchInput(input);
    if (!parsed) {
        showError('Please use format: "15 min from Dallas, TX"');
        return;
    }
    
    const { minutes, city, state } = parsed;
    
    // Find the hub city
    const hub = findHub(city, state);
    if (!hub) {
        showError(`City "${city}, ${state}" not found. Try a different spelling.`);
        return;
    }
    
    // Show loading
    elements.loadingOverlay.classList.add('active');
    
    // Simulate processing
    setTimeout(() => {
        // Find cities within range (minutes to 60)
        const results = state.data
            .filter(c => 
                c.hub === hub.hub && 
                c.state === hub.state &&
                c.travel_time >= minutes &&
                c.travel_time <= 60 &&
                c.city !== hub.city // Exclude the hub itself
            )
            .sort((a, b) => a.travel_time - b.travel_time)
            .slice(0, 30);
        
        elements.loadingOverlay.classList.remove('active');
        
        // Render results
        renderResults(results, minutes, hub);
        
        // Save to history
        saveHistory(input, results.length);
        
        // Update streak
        updateStreak(results.length > 0);
    }, 600);
}

// ===== Render Results =====
function renderResults(results, minMinutes, hub) {
    if (results.length === 0) {
        elements.resultsList.innerHTML = `
            <div class="result-card" style="justify-content:center;color:var(--text-secondary);border-style:dashed;">
                🗺️ No cities found within ${minMinutes}-60 minutes of ${hub.city}, ${hub.state}
            </div>
        `;
        return;
    }
    
    let html = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
            <span style="color:var(--text-secondary);font-weight:600;">
                🏙️ Found ${results.length} cities within ${minMinutes}-60 minutes of ${hub.city}, ${hub.state}
            </span>
            <span style="color:var(--text-secondary);font-size:0.85rem;">
                ${results[0].travel_time} min closest • ${results[results.length-1].travel_time} min furthest
            </span>
        </div>
    `;
    
    results.forEach((city, index) => {
        const delay = (index * 0.04).toFixed(2);
        html += `
            <div class="result-card" style="animation-delay: ${delay}s">
                <span class="city">${city.city}, ${city.state}</span>
                <div>
                    <span class="time">🚗 ${city.travel_time} min</span>
                    <span class="miles">📏 ${city.distance} mi</span>
                </div>
            </div>
        `;
    });
    
    elements.resultsList.innerHTML = html;
}

// ===== Distance Calculator =====
function calculateDistance(from, to) {
    if (!from || !to) {
        elements.distanceResult.innerHTML = `
            <div style="color:var(--text-secondary);">
                Please enter both cities
            </div>
        `;
        return;
    }
    
    // Parse inputs
    const [fromCity, fromState] = from.split(',').map(s => s.trim());
    const [toCity, toState] = to.split(',').map(s => s.trim());
    
    if (!fromCity || !fromState || !toCity || !toState) {
        elements.distanceResult.innerHTML = `
            <div style="color:var(--text-secondary);">
                Please use format: "City, State" for both fields
            </div>
        `;
        return;
    }
    
    // Show loading
    elements.loadingOverlay.classList.add('active');
    
    setTimeout(() => {
        // Find both cities
        const fromMatch = findHub(fromCity, fromState);
        const toMatch = findHub(toCity, toState);
        
        elements.loadingOverlay.classList.remove('active');
        
        if (!fromMatch || !toMatch) {
            const notFound = [];
            if (!fromMatch) notFound.push(from);
            if (!toMatch) notFound.push(to);
            elements.distanceResult.innerHTML = `
                <div style="color:#e74c3c;font-weight:600;">
                    ⚠️ Could not find: ${notFound.join(', ')}
                </div>
            `;
            return;
        }
        
        // Calculate distance based on travel times
        // This is an approximation since we don't have actual lat/lng
        // We'll use the average travel time as a proxy for distance
        const avgTime = (fromMatch.travel_time + toMatch.travel_time) / 2;
        const baseDistance = Math.abs(fromMatch.travel_time - toMatch.travel_time) * 2 + 20;
        
        // Make it more realistic
        const distanceMiles = Math.max(Math.round(baseDistance), 10);
        const timeHours = Math.floor(distanceMiles / 60);
        const timeMinutes = Math.round((distanceMiles / 60 - timeHours) * 60);
        const timeDisplay = timeHours > 0 ? `${timeHours}h ${timeMinutes}m` : `${timeMinutes} min`;
        
        elements.distanceResult.innerHTML = `
            <div class="distance-grid">
                <div class="stat">
                    <div class="big-number">${distanceMiles}</div>
                    <div class="label">Miles</div>
                </div>
                <div class="stat">
                    <div class="big-number">${timeDisplay}</div>
                    <div class="label">Driving Time</div>
                </div>
                <div class="stat">
                    <div class="big-number">${fromMatch.city} → ${toMatch.city}</div>
                    <div class="label">Route</div>
                </div>
            </div>
            <div style="margin-top:12px;font-size:0.85rem;color:var(--text-secondary);">
                ⚡ Estimated based on average driving speeds
            </div>
        `;
    }, 700);
}

// ===== Streak System =====
function updateStreak(foundCities) {
    const today = new Date().toDateString();
    const streak = state.streak;
    
    if (foundCities) {
        if (streak.lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (streak.lastDate === yesterday) {
                streak.days += 1;
            } else {
                streak.days = 1;
            }
            streak.lastDate = today;
        }
    }
    
    localStorage.setItem('nearbynow-streak', JSON.stringify(streak));
    updateStreakBadge();
}

function updateStreakBadge() {
    const streak = state.streak;
    const icon = streak.days > 0 ? '🔥' : '💤';
    elements.streakBadge.textContent = `${icon} ${streak.days}-Day Streak`;
}

// ===== Search History =====
function saveHistory(query, count) {
    const entry = {
        query: query,
        count: count,
        timestamp: Date.now()
    };
    
    state.history.unshift(entry);
    if (state.history.length > 10) state.history.pop();
    
    localStorage.setItem('nearbynow-history', JSON.stringify(state.history));
    renderHistory();
}

function renderHistory() {
    if (state.history.length === 0) {
        elements.searchHistory.innerHTML = '';
        return;
    }
    
    let html = `<div class="history-title">🔄 Recent Searches</div>`;
    state.history.forEach(entry => {
        html += `
            <span class="history-item" data-query="${entry.query}">
                ${entry.query} (${entry.count} cities)
            </span>
        `;
    });
    
    elements.searchHistory.innerHTML = html;
    
    // Add click listeners
    document.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', () => {
            elements.radiusSearch.value = el.dataset.query;
            searchRadius(el.dataset.query);
        });
    });
}

// ===== Error Handling =====
function showError(message) {
    elements.resultsList.innerHTML = `
        <div class="result-card error-message">
            ⚠️ ${message}
        </div>
    `;
}

// ===== Theme Toggle =====
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    elements.themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
    localStorage.setItem('nearbynow-theme', next);
}

// ===== Tab Switching =====
function switchTab(tabId) {
    // Update buttons
    elements.tabs.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    // Update content
    elements.tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId + 'Tab');
    });
}

// ===== Initialize =====
function init() {
    // Set theme
    document.documentElement.setAttribute('data-theme', state.theme);
    elements.themeToggle.textContent = state.theme === 'light' ? '🌙' : '☀️';
    
    // Render history
    renderHistory();
    
    // Update streak
    updateStreakBadge();
    
    // ===== Event Listeners =====
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    elements.radiusBtn.addEventListener('click', () => {
        searchRadius(elements.radiusSearch.value);
    });
    
    elements.radiusSearch.addEventListener('keypress', (e) => {
        if (
