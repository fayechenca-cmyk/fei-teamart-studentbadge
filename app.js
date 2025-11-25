// ==========================================
// 1. THE MAP CONFIGURATION (ISLANDS)
// ==========================================
const PAGES = [
  // --- FOUNDATIONS ---
  { id:'basic_sketch',          title:'Basic Sketch',          imgUrl:'', emoji:'✏️', color:'#f59e0b' },
  { id:'still_life',            title:'Still Life',            imgUrl:'', emoji:'🍎', color:'#ef4444' },
  { id:'landscape',             title:'Landscape',             imgUrl:'', emoji:'⛰️', color:'#10b981' },
  { id:'material_explore',      title:'Material Explore',      imgUrl:'', emoji:'🧱', color:'#78716c' },
  { id:'observation_detective', title:'Observation Detective', imgUrl:'', emoji:'👀', color:'#06b6d4' },
  { id:'figure_sketch',         title:'Figure Sketch',         imgUrl:'', emoji:'🧍', color:'#f43f5e' },

  // --- DESIGN & CRAFT ---
  { id:'interior_design',       title:'Interior Design Basic', imgUrl:'', emoji:'🛋️', color:'#d97706' },
  { id:'costume_design',        title:'Costume Design Basic',  imgUrl:'', emoji:'👗', color:'#db2777' },
  { 
    id:'hand_crafter',          
    title:'Hand Crafter',          
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617da2dc31c5379bbe21a_feiteamart%20handcrafter.PNG', 
    emoji:'🧵', 
    color:'#ec4899' 
  },
  { 
    id:'little_architect',      
    title:'Little Architect',      
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617dac227fa894b1b16cd_feiteamart%20achitect.PNG', 
    emoji:'🏛️', 
    color:'#0ea5e9' 
  },

  // --- CREATIVE EXPRESSION ---
  { id:'student_led',           title:'Student-led',           imgUrl:'', emoji:'🚀', color:'#8b5cf6' },
  { id:'storyteller',           title:'Storyteller',           imgUrl:'', emoji:'📖', color:'#f97316' },
  { id:'art_painting',          title:'Art Painting Explore',  imgUrl:'', emoji:'🎨', color:'#3b82f6' },
  { id:'scene_designer',        title:'Scene Designer',        imgUrl:'', emoji:'🎬', color:'#6366f1' },

  // --- DIGITAL & FUTURE ---
  { id:'digital_creator',       title:'Digital Creator',       imgUrl:'', emoji:'💻', color:'#0ea5e9' },
  { id:'animation_beginner',    title:'Animation Beginner',    imgUrl:'', emoji:'🎞️', color:'#8b5cf6' },
  { id:'gaming_creator',        title:'Digital Gaming Creator',imgUrl:'', emoji:'🎮', color:'#a855f7' },
  { id:'sustainable_creator',   title:'Sustainable Creator',   imgUrl:'', emoji:'🌿', color:'#22c55e' },

  // --- THINKING & COMMUNITY ---
  { id:'critical_thinker',      title:'Contemporary Art Critical Thinker', imgUrl:'', emoji:'🧠', color:'#ef4444' },
  { id:'art_history',           title:'Art History Explorer',  imgUrl:'', emoji:'🏺', color:'#eab308' },
  { id:'fei_volunteer',         title:'FEI Volunteer Practitioner', imgUrl:'', emoji:'🤝', color:'#14b8a6' },
  { id:'community_builder',     title:'Community Builder',     imgUrl:'', emoji:'🏙️', color:'#f59e0b' },
  { id:'focus_sprinter',        title:'Focus Sprinter',        imgUrl:'', emoji:'⏱️', color:'#64748b' }
];

let allStudents = [];

// ==========================================
// 2. FETCH DATA & HANDLE LOGIN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Load the database
  fetch('students.json')
    .then(response => response.json())
    .then(data => {
      allStudents = data;
    })
    .catch(error => {
      console.error('Error loading student data:', error);
    });

  // Handle the Login Gate
  const form = document.getElementById('codeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const codeInput = document.getElementById('codeInput');
      const code = codeInput.value.trim();
      
      if (!code) return;

      // Find student (checks both 'id' and 'code' fields)
      const student = allStudents.find(s => 
        (s.id && s.id.toUpperCase() === code.toUpperCase()) || 
        (s.code && s.code.toUpperCase() === code.toUpperCase())
      );

      if (student) {
        // Success: Unlock the Gate
        document.getElementById('gate').style.display = 'none';
        document.getElementById('gameUI').style.display = 'block';
        document.getElementById('welcomeText').innerText = `Welcome, ${student.display_name}!`;
        renderBadges(student);
      } else {
        alert("Code not found! Please check your sticker.");
      }
    });
  }
});

// ==========================================
// 3. RENDER THE GAME MAP
// ==========================================
function renderBadges(student) {
    const badgeContainer = document.getElementById('badgeGrid');
    if (!badgeContainer) return;
    badgeContainer.innerHTML = ''; 

    // Get Earned & Recommended IDs
    // We check both 'achievements' list AND 'badges.earned' list to be safe
    let earnedIds = [];
    if (student.achievements) {
        earnedIds = student.achievements.map(a => a.badge_id);
    } else if (student.badges && student.badges.earned) {
        earnedIds = student.badges.earned.map(b => b.id);
    }
    
    // Get Recommendations
    const recommendedIds = (student.badges && student.badges.should_target) 
        ? student.badges.should_target.map(t => t.id) 
        : [];

    // Update Stats (Math)
    const total = PAGES.length;
    const count = earnedIds.length;
    const pct = Math.round((count / total) * 100);

    const countEl = document.getElementById('progressCount');
    const barEl = document.getElementById('progressBar');
    const pctEl = document.getElementById('progressPct');

    if(countEl) countEl.textContent = `${count} / ${total} Artifacts Found`;
    if(barEl) barEl.style.width = `${pct}%`;
    if(pctEl) pctEl.textContent = `${pct}%`;

    // Draw the Islands
    PAGES.forEach((page, index) => {
        const isUnlocked = earnedIds.includes(page.id);
        const isRecommended = !isUnlocked && recommendedIds.includes(page.id);
        
        const node = document.createElement('div');
        
        // Set Class: Locked, Unlocked, or Recommended
        let statusClass = 'locked';
        if (isUnlocked) statusClass = 'unlocked';
        else if (isRecommended) statusClass = 'recommended';

        node.className = `map-node ${statusClass}`;
        node.style.animationDelay = `${index * 0.05}s`;

        // LOGIC: Use Image if it exists, otherwise use Emoji
        const hasImage = page.imgUrl && page.imgUrl.length > 5; // Simple check if URL exists
        
        const imageHTML = hasImage 
            ? `<img src="${page.imgUrl}" alt="${page.title}" class="node-img">` 
            : `<div class="node-icon-fallback">${page.emoji}</div>`;
        
        // Build the HTML
        node.innerHTML = `
            <div class="node-visual" style="border-color:${page.color}">
                ${imageHTML}
                ${isUnlocked ? '<div class="check-mark">⭐</div>' : ''}
                ${isRecommended ? '<div class="quest-mark">❗️</div>' : ''} 
                ${!isUnlocked && !isRecommended ? '<div class="lock-icon">🔒</div>' : ''}
            </div>
            <div class="node-label">${page.title}</div>
            ${isRecommended ? '<div style="font-size:10px;color:#f59e0b;font-weight:700">QUEST!</div>' : ''}
        `;

        badgeContainer.appendChild(node);
    });
}
