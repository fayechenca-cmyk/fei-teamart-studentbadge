// ---------------------------
// FEI TeamArt — Code-gated Student Record
// ---------------------------

// Your custom level vocabulary
const LEVEL_LABELS = {
  beginner: "Beginner",
  explorer: "Explorer",
  creator: "Creator",
  mentor: "Mentor"
};

// Friendly badge titles
const BADGE_TITLES = {
  sustainable_creation: "🌿 Sustainable Creation",
  recycled_art_pioneer: "♻️ Recycled Art Pioneer",
  creative_thinker: "💡 Creative Thinker",
  little_designer: "🎨 Little Designer",
  mindful_illustrator: "🖋️ Mindful Illustrator",
  art_explorer: "🌈 Art Explorer"
};

// ---------- data helpers ----------
async function fetchStudents() {
  const res = await fetch('students.json');
  return await res.json();
}
const fmt = (s) => (s || '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

// ---------- UI helpers ----------
function section(title, inner) {
  return `
    <section style="margin:16px 0;padding:14px;border:1px solid #ece7de;border-radius:12px;background:#fff">
      <div style="font-weight:700;margin-bottom:8px">${title}</div>
      ${inner}
    </section>`;
}
// ---------- FEI TeamArt milestone setup ----------

// 15 milestone "pages" visible to everyone
const PAGES = [
  { id:'portrait_foundation',     title:'Portrait Foundation',     emoji:'🎨', color:'#b86c94' },
  { id:'shading_mastery',         title:'Shading Mastery',         emoji:'🩶', color:'#525252' },
  { id:'sustainable_creation',    title:'Sustainable Creation',    emoji:'🌿', color:'#10b981' },
  { id:'recycled_art_pioneer',    title:'Recycled Art Pioneer',    emoji:'♻️', color:'#22c55e' },
  { id:'creative_thinker',        title:'Creative Thinker',        emoji:'💡', color:'#f59e0b' },
  { id:'little_designer',         title:'Little Designer',         emoji:'🎨', color:'#a78bfa' },
  { id:'mindful_illustrator',     title:'Mindful Illustrator',     emoji:'🖋️', color:'#06b6d4' },
  { id:'art_explorer',            title:'Art Explorer',            emoji:'🌈', color:'#ec4899' },
  { id:'observation_sketcher',    title:'Observation Sketcher',    emoji:'👀', color:'#14b8a6' },
  { id:'architecture_space',      title:'Architecture & Space',    emoji:'🏙️', color:'#0ea5e9' },
  { id:'visual_storyteller',      title:'Visual Storyteller',      emoji:'📖', color:'#f97316' },
  { id:'craft_maker',             title:'Craft Maker',             emoji:'🧵', color:'#ef4444' },
  { id:'innovation_explorer',     title:'Innovation Explorer',     emoji:'🚀', color:'#f43f5e' },
  { id:'color_light',             title:'Color & Light',           emoji:'🌈', color:'#eab308' },
  { id:'focus_sprint_20min',      title:'Focus Sprint — 20 min',   emoji:'⏱️', color:'#4f46e5' }
];

const PAGE_RULES = {
  portrait_foundation:    ['portrait_foundation'],
  shading_mastery:        ['shading_mastery'],
  sustainable_creation:   ['sustainable_creation'],
  recycled_art_pioneer:   ['recycled_art_pioneer'],
  creative_thinker:       ['creative_thinker', 'creative_resilience'],
  little_designer:        ['little_designer'],
  mindful_illustrator:    ['mindful_illustrator'],
  art_explorer:           ['art_explorer', 'art_history_explorer'],
  observation_sketcher:   ['observation_sketcher', 'line_control', 'basic_shapes'],
  architecture_space:     ['architecture_space', 'two_point_street'],
  visual_storyteller:     ['visual_storyteller', 'character_world'],
  craft_maker:            ['craft_maker', 'hand_crafter'],
  innovation_explorer:    ['innovation_explorer', 'creative_pioneer'],
  color_light:            ['color_light', 'limited_palette'],
  focus_sprint_20min:     ['focus_sprint_20min']
};

// 🏅 Render milestone badges (interactive)
function loadBadges(){
  const grid = document.getElementById('badgeGrid');
  if(!grid) return;
  grid.innerHTML = '';

  PAGES.forEach(p=>{
    const el = document.createElement('div');
    el.className = 'badge locked';
    el.dataset.pageId = p.id;
    el.innerHTML = `
      <div class="icon" style="background:${p.color};opacity:0.4">${p.emoji}</div>
      <div class="name" style="color:#999">${p.title}</div>
    `;
    grid.appendChild(el);
  });
}

function list(items) {
  return `<ul style="list-style:none;margin:0;padding:0">
    ${items.map(li => `<li style="padding:8px 0;border-bottom:1px dashed #eee">${li}</li>`).join('')}
  </ul>`;
}

// ---------- render student ----------
function renderStudent(s) {
  const mount = document.getElementById('mount');
  const name = s.display_name || 'Student';

  // Achievements pretty
  const achLis = (s.achievements || []).map(a => {
    const badgeName = BADGE_TITLES[a.badge_id] || fmt(a.badge_id);
    const levelName = LEVEL_LABELS[a.level] || fmt(a.level);
    return `<b>${badgeName}</b> — ${levelName} <span style="color:#5c6370">(${a.date || ''})</span>`;
  });
  const achSec = section('Achievements', achLis.length ? list(achLis) : `<div class="empty">No achievements yet.</div>`);

  // Featured art cards
  const artCards = (s.featured_art || []).map(a => `
    <div style="border:1px solid #eee;border-radius:12px;padding:10px;display:grid;gap:8px">
      ${a.thumb ? `<img src="${a.thumb}" alt="${a.title||''}" style="width:100%;border-radius:10px;border:1px solid #eee">` : ''}
      <div style="font-weight:600">${a.title || ''}</div>
      <div style="color:#5c6370">${a.caption || ''}</div>
      ${a.pdf ? `<a href="${a.pdf}" target="_blank" style="text-decoration:underline;font-size:14px">View Process / PDF</a>` : ''}
    </div>
  `).join('');
  const artGrid = artCards
    ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px">${artCards}</div>`
    : `<div class="empty">Add your first artwork when ready.</div>`;
  const artSec = section('Featured Artwork', artGrid);

  // Notes & dreams (your warm words)
  const notesLis = (s.notes || []).map(n => `<b>${n.date || ''}</b> — ${n.text || ''}`);
  const notesSec = section('Notes & Dreams', notesLis.length ? list(notesLis) : `<div class="empty">No notes yet.</div>`);

  // Critique & next steps
  const critLis = (s.critiques || []).map(c =>
    `<b>${c.date || ''}</b><div style="color:#2b6b3f">Strength:</div>${c.strength || ''}<div style="color:#8a5b00;margin-top:4px">Next:</div>${c.next || ''}`
  );
  const critSec = section('Critique & Next Steps', critLis.length ? list(critLis) : `<div class="empty">No critique yet.</div>`);

  // Goals checklist
  const goalLis = (s.goals || []).map(g =>
    `<label style="display:flex;align-items:center;gap:8px">
       <input type="checkbox" disabled>
       <span>${g.text}</span>
       ${g.due ? `<span style="margin-left:auto;color:#5c6370;font-size:13px">Due ${g.due}</span>` : ''}
     </label>`
  );
  const goalsSec = section('Goals', goalLis.length ? list(goalLis) : `<div class="empty">No goals yet.</div>`);

  // Header
  const header = section(
    `Hello, ${name}!`,
    `${s.teacher_note ? `<div style="color:#5c6370">${s.teacher_note}</div>` : ''}`
  );

  mount.innerHTML = header + artSec + notesSec + critSec + goalsSec + achSec;
}

// ---------- code gate ----------
async function loadStudentByCode(code) {
  const mount = document.getElementById('mount');
  mount.innerHTML = '<div class="empty">Loading…</div>';
  try {
    const students = await fetchStudents();
    const s = students.find(x => (x.id || '').toLowerCase() === code.toLowerCase());
    if (!s) {
      mount.innerHTML = '<div class="empty">Code not found. Please check and try again.</div>';
      return;
    }
    renderStudent(s);
  } catch (e) {
    mount.innerHTML = '<div class="empty">Could not load data.</div>';
  }
  // --- Update progress & badges after code entered ---
function applyProgressFor(student) {
  const unlocked = (student.achievements || []).map(a => a.badge_id);
  const grid = document.getElementById('badgeGrid');
  if(!grid) return;

  let achieved = 0;
  const total = PAGES.length;

  grid.querySelectorAll('.badge').forEach(b=>{
    const id = b.dataset.pageId;
    const unlockedHere = PAGE_RULES[id]?.some(r => unlocked.includes(r));
    const icon = b.querySelector('.icon');
    const name = b.querySelector('.name');

    if(unlockedHere){
      achieved++;
      icon.style.opacity = '1';
      name.style.color = '#333';
      b.classList.add('unlocked');
    } else {
      icon.style.opacity = '0.4';
      name.style.color = '#aaa';
      b.classList.remove('unlocked');
    }
  });

  const percent = Math.round((achieved / total) * 100);
  const progressBar = document.getElementById('progressBar');
  if(progressBar) progressBar.style.width = percent + '%';
}
}

// Hook up the form
const form = document.getElementById('codeForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('codeInput').value.trim();
    if (!code) return;
    const url = new URL(location.href);
    url.searchParams.set('code', code);
    history.replaceState({}, '', url);
    loadStudentByCode(code);
  });
}

// Auto-open if ?code= is in URL
(function () {
  const code = new URLSearchParams(location.search).get('code');
  const mount = document.getElementById('mount');
  if (code) {
    const input = document.getElementById('codeInput');
    if (input) input.value = code;
    loadStudentByCode(code);
  } else {
    if (mount) mount.innerHTML = '<div class="empty">Enter your code to view your record.</div>';
  }
})();

// 🏅 Initialize badge display
loadBadges();



