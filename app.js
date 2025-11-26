// ==========================================
// 1. THE MAP CONFIGURATION (BADGES & ARTISTS)
// ==========================================
const PAGES = [
  // --- FOUNDATIONS ---
  { id:'basic_sketch',          title:'Basic Sketch',          artist:'Des. by Alex',    imgUrl:'', emoji:'✏️', color:'#f59e0b' },
  { id:'still_life',            title:'Still Life',            artist:'Des. by Sara',    imgUrl:'', emoji:'🍎', color:'#ef4444' },
  { id:'landscape',             title:'Landscape',             artist:'Des. by John',    imgUrl:'', emoji:'⛰️', color:'#10b981' },
  { id:'material_explore',      title:'Material Explore',      artist:'Des. by Xinyue',  imgUrl:'', emoji:'🧱', color:'#78716c' },
  { id:'observation_detective', title:'Observation Detective', artist:'Des. by Leo',     imgUrl:'', emoji:'👀', color:'#06b6d4' },
  
  // *** NEW: REALISM BADGE ***
  { id:'realism_expert',        title:'Realism Expert',        artist:'Des. by Cameron', imgUrl:'', emoji:'👁️', color:'#374151' }, 

  { id:'figure_sketch',         title:'Figure Sketch',         artist:'Des. by Mia',     imgUrl:'', emoji:'🧍', color:'#f43f5e' },

  // *** NEW: PORTRAIT BADGE ***
  { id:'portrait_master',       title:'Portrait Master',       artist:'Des. by Regina',  imgUrl:'', emoji:'👤', color:'#be185d' },

  // --- DESIGN & CRAFT ---
  { id:'interior_design',       title:'Interior Design',       artist:'Des. by Serena',  imgUrl:'', emoji:'🛋️', color:'#d97706' },
  { id:'costume_design',        title:'Costume Design',        artist:'Des. by Max',     imgUrl:'', emoji:'👗', color:'#db2777' },
  { 
    id:'hand_crafter', 
    title:'Hand Crafter', 
    artist:'Des. by Alissie', 
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617da2dc31c5379bbe21a_feiteamart%20handcrafter.PNG', 
    emoji:'🧵', 
    color:'#ec4899' 
  },
  { 
    id:'little_architect', 
    title:'Little Creator', 
    artist:'Des. by Cameron', 
    imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617dac227fa894b1b16cd_feiteamart%20achitect.PNG', 
    emoji:'🏛️', 
    color:'#0ea5e9' 
  },

  // --- CREATIVE EXPRESSION ---
  { id:'idea_inventor',         title:'Idea Inventor',         artist:'Des. by Natalie', imgUrl:'', emoji:'💡', color:'#8b5cf6' },
  { id:'storyteller',           title:'Storyteller',           artist:'Des. by Adrian',  imgUrl:'', emoji:'📖', color:'#f97316' },
  { id:'art_painting',          title:'Art Painting',          artist:'Des. by Regina',  imgUrl:'', emoji:'🎨', color:'#3b82f6' },
  { id:'scene_designer',        title:'Scene Designer',        artist:'Des. by Tom',     imgUrl:'', emoji:'🎬', color:'#6366f1' },

  // *** NEW: CHARACTER DESIGN BADGE ***
  { id:'character_designer',    title:'Character Designer',    artist:'Des. by Judy',    imgUrl:'', emoji:'🦸', color:'#8b5cf6' },

  // --- DIGITAL & FUTURE ---
  { id:'digital_creator',       title:'Digital Creator',       artist:'Des. by Temp',    imgUrl:'', emoji:'💻', color:'#0ea5e9' },
  { id:'animation_beginner',    title:'Animator Creator',      artist:'Des. by Rainie',  imgUrl:'', emoji:'🎞️', color:'#8b5cf6' },
  { id:'gaming_creator',        title:'Gaming Creator',        artist:'Des. by Cody',    imgUrl:'', emoji:'🎮', color:'#a855f7' },
  { id:'sustainable_creator',   title:'Sustainable Creator',   artist:'Des. by Amy',     imgUrl:'', emoji:'🌿', color:'#22c55e' },

  // --- THINKING & COMMUNITY ---
  { id:'critical_thinker',      title:'Critical Thinker',      artist:'Des. by Zoe',     imgUrl:'', emoji:'🧠', color:'#ef4444' },
  { id:'art_history',           title:'Art History',           artist:'Des. by Ray',     imgUrl:'', emoji:'🏺', color:'#eab308' },
  { id:'fei_volunteer',         title:'FEI Volunteer',         artist:'Des. by Rebecca', imgUrl:'', emoji:'🤝', color:'#14b8a6' },
  { id:'community_builder',     title:'Community Builder',     artist:'Des. by Team',    imgUrl:'', emoji:'🏙️', color:'#f59e0b' },
  { id:'focus_sprinter',        title:'Focus Sprinter',        artist:'Des. by Cam',     imgUrl:'', emoji:'⏱️', color:'#64748b' },

  // *** NEW: PORTFOLIO BADGE ***
  { id:'portfolio_builder',     title:'Portfolio Builder',     artist:'Des. by Regina',  imgUrl:'', emoji:'📂', color:'#1e3a8a' }
];

let allStudents = [];

// ==========================================
// 2. FETCH DATA & HANDLE LOGIN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // Load JSON
  fetch('students.json')
    .then(response => response.json())
    .then(data => { allStudents = data; })
    .catch(error => { console.error('Error loading data:', error); });

  // Handle Login Logic
  const form = document.getElementById('codeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('codeInput').value.trim();
      if (!code) return;

      // Find Student (by Name or ID)
      const student = allStudents.find(s => 
        (s.id && s.id.toUpperCase() === code.toUpperCase()) || 
        (s.display_name && s.display_name.toUpperCase() === code.toUpperCase())
      );

      if (student) {
        // Unlock
        document.getElementById('gate').style.display = 'none';
        document.getElementById('gameUI').style.display = 'block';
        loadReport(student); 
      } else {
        alert("Name not found! Please try again.");
      }
    });
  }
});

// ==========================================
// 3. LOAD THE FULL REPORT
// ==========================================
function loadReport(student) {
    
    // A. Header Info
    document.getElementById('welcomeText').innerText = `Report for: ${student.display_name}`;

    // B. Teacher Note
    const noteEl = document.getElementById('teacherNote');
    if (student.teacher_note) {
        noteEl.innerText = `"${student.teacher_note}"`;
    } else {
        noteEl.innerText = "Welcome back to your creative journey!";
    }

    // C. Strength Tags
    const tagsContainer = document.getElementById('strengthTags');
    tagsContainer.innerHTML = '';
    if (student.tags) {
        student.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = tag;
            tagsContainer.appendChild(span);
        });
    }

    // D. Art Spotlight
    const spotGrid = document.getElementById('spotlightGrid');
    spotGrid.innerHTML = '';
    
    if (student.featured_art && student.featured_art.length > 0) {
        student.featured_art.forEach(art => {
            const div = document.createElement('div');
            div.className = 'spotlight-item';
            div.innerHTML = `
                <div class="spotlight-frame">
                    <img src="${art.thumb}" class="spotlight-img" onerror="this.src='https://placehold.co/150x150?text=Art'">
                </div>
                <div class="spotlight-caption">${art.title}</div>
                <div class="spotlight-sub">${art.caption || ''}</div>
            `;
            spotGrid.appendChild(div);
        });
    } else {
        spotGrid.innerHTML = '<p style="color:#999;font-style:italic;">No featured artwork yet.</p>';
    }

    // E. Render the Map
    renderMap(student);
}

function renderMap(student) {
    const container = document.getElementById('badgeGrid');
    container.innerHTML = ''; 

    // 1. Get IDs
    let earnedIds = [];
    if (student.achievements) earnedIds = student.achievements.map(a => a.badge_id);

    let recommendedIds = [];
    if (student.badges && student.badges.should_target) {
        recommendedIds = student.badges.should_target.map(t => t.id);
    }

    // 2. Stats
    const total = PAGES.length;
    const count = earnedIds.length;
    const pct = Math.round((count / total) * 100);
    document.getElementById('progressCount').textContent = `${count} / ${total} Badges`;
    document.getElementById('progressBar').style.width = `${pct}%`;
    document.getElementById('progressPct').textContent = `${pct}%`;

    // 3. Draw Nodes
    PAGES.forEach((page, index) => {
        const isUnlocked = earnedIds.includes(page.id);
        const isRecommended = !isUnlocked && recommendedIds.includes(page.id);
        
        const node = document.createElement('div');
        
        let statusClass = 'locked';
        if (isUnlocked) statusClass = 'unlocked';
        else if (isRecommended) statusClass = 'recommended';

        node.className = `map-node ${statusClass}`;
        node.style.animationDelay = `${index * 0.05}s`;

        // Image Logic
        const hasImage = page.imgUrl && page.imgUrl.length > 5;
        const imageHTML = hasImage 
            ? `<img src="${page.imgUrl}" class="node-img">` 
            : `<div class="node-icon-fallback" style="font-size:30px;">${page.emoji}</div>`;

        node.innerHTML = `
            <div class="node-visual" style="border-color:${isRecommended ? '#f59e0b' : '#e5e7eb'}">
                ${imageHTML}
                ${isUnlocked ? '<div class="check-mark">✓</div>' : ''}
                ${isRecommended ? '<div class="quest-mark">⭐</div>' : ''}
            </div>
            <div class="node-label">${page.title}</div>
            <div class="badge-credit">${page.artist}</div>
        `;
        
        container.appendChild(node);
    });
}
