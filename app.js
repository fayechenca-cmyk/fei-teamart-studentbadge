// ==========================================
// FEI TEAMART - ADVENTURE MAP LOGIC
// ==========================================

// 1. THE MAP CONFIGURATION (ISLANDS)
// I have inserted your 2 image links below in 'imgUrl'.
const PAGES = [
  { id:'portrait_foundation',   title:'Sketch Fortress',     imgUrl:'', emoji:'✏️', color:'#f59e0b' },
  { id:'shading_mastery',       title:'Shadow Valley',       imgUrl:'', emoji:'🌙', color:'#7c3aed' },
  { id:'sustainable_creation',  title:'Eco Forest',          imgUrl:'', emoji:'🌿', color:'#10b981' },
  { id:'recycled_art_pioneer',  title:'Scrap Canyon',        imgUrl:'', emoji:'♻️', color:'#22c55e' },
  { id:'creative_thinker',      title:'Idea Lighthouse',     imgUrl:'', emoji:'💡', color:'#f97316' },
  { id:'little_designer',       title:'Design District',     imgUrl:'', emoji:'🎨', color:'#a78bfa' },
  { id:'mindful_illustrator',   title:'Zen Garden',          imgUrl:'', emoji:'🖋️', color:'#06b6d4' },
  { id:'art_explorer',          title:'Rainbow Bridge',      imgUrl:'', emoji:'🌈', color:'#ec4899' },
  { id:'observation_sketcher',  title:'Detective Study',     imgUrl:'', emoji:'👀', color:'#14b8a6' },
  
  // ▼ YOUR UPDATED BADGE HERE ▼
  { 
    id:'architecture_space',    
    title:'Little Architect',    
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617dac227fa894b1b16cd_feiteamart%20achitect.PNG', 
    emoji:'🏛️', 
    color:'#0ea5e9' 
  },

  { id:'visual_storyteller',    title:'Storybook Village',   imgUrl:'', emoji:'📖', color:'#f97316' },

  // ▼ YOUR UPDATED BADGE HERE ▼
  { 
    id:'craft_maker',           
    title:'The Workshop',        
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617da2dc31c5379bbe21a_feiteamart%20handcrafter.PNG', 
    emoji:'🧵', 
    color:'#ef4444' 
  },

  { id:'innovation_explorer',   title:'Future Lab',          imgUrl:'', emoji:'🚀', color:'#f43f5e' },
  { id:'color_light',           title:'Prism Palace',        imgUrl:'', emoji:'🎨', color:'#eab308' },
  { id:'focus_sprint_20min',    title:'Focus Temple',        imgUrl:'', emoji:'⏱️', color:'#4f46e5' }
];

let allStudents = [];

// 2. FETCH DATA & HANDLE LOGIN
document.addEventListener("DOMContentLoaded", () => {
  // Load the database
  fetch('students.json')
    .then(response => response.json())
    .then(data => {
      allStudents = data;
      const loader = document.querySelector('.empty');
      if(loader) loader.style.display = 'none';
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
        renderBadges(student);
      } else {
        alert("Code not found! Please check your sticker.");
      }
    });
  }
});

// 3. RENDER THE GAME MAP
function renderBadges(student) {
    const badgeContainer = document.getElementById('badgeGrid');
    if (!badgeContainer) return;
    badgeContainer.innerHTML = ''; 

    // Show Progress Bar Area
    const progressSection = document.getElementById('progressCard');
    if(progressSection) progressSection.style.display = 'block';
    
    // Get Earned & Recommended IDs
    const earnedIds = student.achievements ? student.achievements.map(a => a.badge_id) : [];
    
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
