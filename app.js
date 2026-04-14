const PAGES = [
  { id:'basic_sketch', title:'Basic Sketch', artist:'Des. by Alex', imgUrl:'', emoji:'✏️', color:'#f59e0b' },
  { id:'still_life', title:'Still Life', artist:'Des. by Sara', imgUrl:'', emoji:'🍎', color:'#ef4444' },
  { id:'landscape', title:'Landscape', artist:'Des. by Xinyue', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/696544b4fa92c8867e1c6d5c_Screenshot%202026-01-12%20at%2010.59.57%E2%80%AFAM.png', emoji:'⛰️', color:'#10b981' },
  { id:'material_explore', title:'Material Explore', artist:'Des. by Xinyue', imgUrl:'', emoji:'🧱', color:'#78716c' },
  { id:'observation_detective', title:'Observation Detective', artist:'Des. by Faye', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/6930817dc2b2e1062da9b98c_IMG_0186.jpg', emoji:'👀', color:'#06b6d4' },
  { id:'realism_expert', title:'Realism Expert', artist:'Des. by Temp', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/6930817d21bc1b688929665c_Untitled_-_December_2_2025_18.22.11.jpg', emoji:'👁️', color:'#374151' },
  { id:'calm_illustration', title:'Calm Illustration', artist:'Des. by Cameron', imgUrl:'', emoji:'🌅', color:'#60a5fa' },
  { id:'figure_sketch', title:'Figure Sketch', artist:'Des. by Mia', imgUrl:'', emoji:'🧍', color:'#f43f5e' },
  { id:'portrait_master', title:'Portrait Master', artist:'Des. by Regina', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/6980e96299ba4edfc375f693_506d6e9e0733a890480cbd0d1d8b84f1.JPG', emoji:'👤', color:'#be185d' },
  { id:'interior_design', title:'Interior Design', artist:'Des. by Serena', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69406958b761df83827f9dd5_524d9a710bb12ade81c4881230ad64f8.jpg', emoji:'🛋️', color:'#d97706' },
  { id:'costume_design', title:'Costume Design', artist:'Des. by Max', imgUrl:'', emoji:'👗', color:'#db2777' },
  { id:'hand_crafter', title:'Hand Crafter', artist:'Des. by Alissie', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/693081a5795fc4e17b5952f6_Screenshot%202025-12-03%20at%2010.29.44%E2%80%AFAM.png', emoji:'🧵', color:'#ec4899' },
  { id:'little_architect', title:'Little Architect', artist:'Des. by Cameron', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617dac227fa894b1b16cd_feiteamart%20achitect.PNG', emoji:'🏛️', color:'#0ea5e9' },
  { id:'idea_inventor', title:'Idea Inventor', artist:'Des. by Natalie', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69ced4ef7068f80595cfd07e_15CCA2B1-5146-4602-9B9B-02F5D74536A1.JPG', emoji:'💡', color:'#8b5cf6' },
  { id:'student_led', title:'Student-Led', artist:'Des. by Judy', imgUrl:'', emoji:'🚀', color:'#8b5cf6' },
  { id:'storyteller', title:'Storyteller', artist:'Des. by Adrian', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/693081850b75764ec5a2d2dc_Screenshot%202025-12-03%20at%2010.28.28%E2%80%AFAM.png', emoji:'📖', color:'#f97316' },
  { id:'art_painting', title:'Art Painting', artist:'Des. by Regina', imgUrl:'', emoji:'🎨', color:'#3b82f6' },
  { id:'scene_designer', title:'Scene Designer', artist:'Des. by Tom', imgUrl:'', emoji:'🎬', color:'#6366f1' },
  { id:'character_designer', title:'Character Designer', artist:'Des. by Judy', imgUrl:'', emoji:'🦸', color:'#8b5cf6' },
  { id:'digital_creator', title:'Digital Creator', artist:'Des. by Temp', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/693082569d6d79a6f03770b1_Screenshot%202025-12-03%20at%2010.32.38%E2%80%AFAM.png', emoji:'💻', color:'#0ea5e9' },
  { id:'animation_beginner', title:'Animator Creator', artist:'Des. by Rainie', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692b479b135604dcbecfd915_Screenshot%202025-11-29%20at%2011.20.54%E2%80%AFAM.png', emoji:'🎞️', color:'#8b5cf6' },
  { id:'gaming_creator', title:'Gaming Creator', artist:'Des. by Cody', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/692617da8041d3d9ce2e5caa_feiteamart%20digtal%20gaming%20creator.PNG', emoji:'🎮', color:'#a855f7' },
  { id:'sustainable_creator', title:'Sustainable Creator', artist:'Des. by Amy', imgUrl:'', emoji:'🌿', color:'#22c55e' },
  { id:'critical_thinker', title:'Critical Thinker', artist:'Des. by Zoe', imgUrl:'', emoji:'🧠', color:'#ef4444' },
  { id:'art_history', title:'Art History', artist:'Des. by Ray', imgUrl:'', emoji:'🏺', color:'#eab308' },
  { id:'fei_volunteer', title:'FEI Volunteer', artist:'Des. by Rebecca', imgUrl:'', emoji:'🤝', color:'#14b8a6' },
  { id:'community_builder', title:'Community Builder', artist:'Des. by Team', imgUrl:'', emoji:'🏙️', color:'#f59e0b' },
  { id:'focus_sprinter', title:'Focus Sprinter', artist:'Des. by Cam', imgUrl:'', emoji:'⏱️', color:'#64748b' },
  { id:'portfolio_builder', title:'Portfolio Builder', artist:'Des. by Regina', imgUrl:'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69ced4efc423b6f032f27496_7ce471ab56c32f732fa052a1ef003958.JPG', emoji:'📂', color:'#1e3a8a' }
];

const LEARNING_SHOWCASE_ITEMS = [
  {
    key: 'self_study',
    kicker: 'Creation Path',
    title: '100 Classes Self-Learning',
    desc: 'Practice drawing, design, and creative making step by step through FEI TeamArt’s structured class collection.',
    image: 'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69dd5d690649c09cad159ec2_Screenshot%202026-04-13%20at%202.16.23%E2%80%AFPM.png',
    link: 'https://www.feiteamart.com/100-classes-catalog',
    fallback: '100 Classes Self-Learning'
  },
  {
    key: 'lfc',
    kicker: 'Critical Thinking for Art',
    title: 'Learn From Collection',
    desc: 'Build visual judgment and critical thinking through artworks, ideas, and guided contemporary art exploration.',
    image: 'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69dd5d69f50f866fa33e6303_Screenshot%202026-04-13%20at%202.14.40%E2%80%AFPM.png',
    link: 'https://www.feiteamart.com/contemporary-lens',
    fallback: 'Learn From Collection'
  },
  {
    key: 'art_history',
    kicker: 'History & Context',
    title: 'Art History Path',
    desc: 'Discover artists, movements, and visual culture to strengthen understanding, context, and inspiration.',
    image: 'https://cdn.prod.website-files.com/67b17a6580f358f0c7dd29f4/69dd5d6a087f1c8985d33c17_Screenshot%202026-04-13%20at%202.16.38%E2%80%AFPM.png',
    link: 'https://www.feiteamart.com/100-classes-catalog',
    fallback: 'Art History Path'
  }
];

const SELF_STUDY_LINKS = {
  lfc: {
    title: 'LFC Learning System',
    desc: 'Explore Learn From Collection with guided visual thinking.',
    link: 'https://www.feiteamart.com/contemporary-lens'
  },
  art_history: {
    title: 'Art History',
    desc: 'Study art movements, artists, and visual context.',
    link: 'https://www.feiteamart.com/100-classes-catalog'
  },
  self_study: {
    title: '100 Self-Study Classes',
    desc: 'Continue learning independently with FEI TeamArt resources.',
    link: 'https://www.feiteamart.com/100-classes-catalog'
  }
};

let allStudents = [];
let activeStudent = null;

document.addEventListener("DOMContentLoaded", () => {
  fetch('students.json')
    .then(response => response.json())
    .then(data => { allStudents = data; })
    .catch(error => { console.error('Error loading data:', error); });

  const form = document.getElementById('codeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('codeInput').value.trim();
      if (!code) return;

      const student = allStudents.find(s => s.id && s.id.toUpperCase() === code.toUpperCase());

      if (student) {
        activeStudent = student;
        document.getElementById('gate').style.display = 'none';
        document.getElementById('gameUI').style.display = 'block';
        loadReport(student);
      } else {
        alert("Incorrect Code. Please check your private access key.");
      }
    });
  }

  const badgeModal = document.getElementById('badgeModal');
  const closeBadgeModal = document.getElementById('closeBadgeModal');

  if (closeBadgeModal) {
    closeBadgeModal.addEventListener('click', () => {
      badgeModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === badgeModal) badgeModal.style.display = 'none';
  });
});

function normalizeToArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function loadReport(student) {
  document.getElementById('welcomeText').innerText = `Report for: ${student.display_name}`;

  const noteEl = document.getElementById('teacherNote');
  noteEl.innerText = student.teacher_note ? `"${student.teacher_note}"` : "Welcome back!";

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

  const goalsList = document.getElementById('goalsList');
  goalsList.innerHTML = '';
  if (student.goals && student.goals.length > 0) {
    student.goals.forEach(g => {
      const li = document.createElement('li');
      li.className = 'info-item goal';
      li.innerHTML = `<span class="info-date">Due: ${g.due || 'Soon'}</span>${g.text}`;
      goalsList.appendChild(li);
    });
  } else {
    goalsList.innerHTML = '<li style="font-size:12px; color:#999; padding:10px;">No current goals active.</li>';
  }

  const critList = document.getElementById('critiquesList');
  critList.innerHTML = '';
  if (student.critiques && student.critiques.length > 0) {
    student.critiques.forEach(c => {
      const li = document.createElement('li');
      li.className = 'info-item critique';
      li.innerHTML = `<span class="info-date">${c.date || ''}</span>
        <span class="info-label">Strength:</span>${c.strength}<br>
        <span class="info-label" style="color:#d97706">Focus:</span>${c.next}`;
      critList.appendChild(li);
    });
  } else {
    critList.innerHTML = '<li style="font-size:12px; color:#999; padding:10px;">No feedback recorded yet.</li>';
  }

  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  if (student.notes && student.notes.length > 0) {
    student.notes.forEach(n => {
      const li = document.createElement('li');
      li.className = 'info-item note';
      li.innerHTML = `<span class="info-date">${n.date}</span>${n.text}`;
      notesList.appendChild(li);
    });
  } else {
    notesList.innerHTML = '<li style="font-size:12px; color:#999; padding:10px;">No class notes yet.</li>';
  }

  const spotGrid = document.getElementById('spotlightGrid');
  spotGrid.innerHTML = '';
  const featuredArt = normalizeToArray(student.featured_art);
  if (featuredArt.length > 0) {
    featuredArt.forEach(art => {
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

  renderLearningCenter(student);
  renderPortfolio(student);
  renderMap(student);
}

function renderLearningCenter(student) {
  const card = document.getElementById('learningCenterCard');
  card.style.display = 'block';

  renderLearningShowcase();
  renderLiveClass(student);
  renderRecommendedCourses(student);
  renderSelfStudy(student);
}

function renderLearningShowcase() {
  const grid = document.getElementById('learningFeatureGrid');
  if (!grid) return;

  grid.innerHTML = '';

  LEARNING_SHOWCASE_ITEMS.forEach(itemData => {
    const item = document.createElement('a');
    item.className = 'learning-feature-card';
    item.href = itemData.link || '#';
    item.target = '_blank';

    const hasImage = itemData.image && itemData.image.length > 5;

    item.innerHTML = `
      <div class="learning-feature-image-wrap">
        ${
          hasImage
            ? `<img src="${itemData.image}" alt="${itemData.title}" class="learning-feature-image" onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=&quot;learning-feature-fallback&quot;>${itemData.fallback}</div>';">`
            : `<div class="learning-feature-fallback">${itemData.fallback}</div>`
        }
      </div>
      <div class="learning-feature-body">
        <div class="learning-feature-kicker">${itemData.kicker}</div>
        <h4 class="learning-feature-title">${itemData.title}</h4>
        <p class="learning-feature-desc">${itemData.desc}</p>
        <span class="learning-feature-btn">Enter Path</span>
      </div>
    `;
    grid.appendChild(item);
  });
}

function renderLiveClass(student) {
  const wrap = document.getElementById('liveClassWrap');
  const box = document.getElementById('liveClassBox');

  if (!student.live_class || !student.live_class.enabled) {
    wrap.style.display = 'none';
    box.innerHTML = '';
    return;
  }

  wrap.style.display = 'block';
  box.innerHTML = `
    <div class="live-class-box">
      <h3>🎓 Live Class</h3>
      <p><strong>${student.live_class.title || 'Upcoming Class'}</strong></p>
      <p>${student.live_class.subtitle || ''}</p>
      <p>🕒 ${student.live_class.time || 'Time TBA'}</p>
      <p>${student.live_class.lesson_focus || ''}</p>
      <a class="portal-btn" href="${student.live_class.zoom_link || '#'}" target="_blank">Join Class</a>
    </div>
  `;
}

function renderRecommendedCourses(student) {
  const wrap = document.getElementById('recommendedCoursesWrap');
  const grid = document.getElementById('recommendedCoursesGrid');
  grid.innerHTML = '';

  const courses = normalizeToArray(student.recommended_courses);

  if (!courses.length) {
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = 'block';

  courses.forEach(course => {
    const item = document.createElement('div');
    item.className = 'portal-card';
    item.innerHTML = `
      <div class="portal-card-title">${course.title || 'Recommended Course'}</div>
      <div class="portal-card-desc">${course.description || ''}</div>
      <div class="portal-card-meta">${course.badge_id ? 'Linked badge: ' + course.badge_id : ''}</div>
      <a class="portal-btn" href="${course.link || '#'}" target="_blank">View Course</a>
    `;
    grid.appendChild(item);
  });
}

function renderSelfStudy(student) {
  const wrap = document.getElementById('selfStudyWrap');
  const grid = document.getElementById('selfStudyGrid');
  grid.innerHTML = '';

  const access = student.portal_access || {};
  const items = [];

  if (access.lfc) items.push(SELF_STUDY_LINKS.lfc);
  if (access.art_history) items.push(SELF_STUDY_LINKS.art_history);
  if (access.self_study) items.push(SELF_STUDY_LINKS.self_study);

  if (!items.length) {
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = 'block';

  items.forEach(itemData => {
    const item = document.createElement('div');
    item.className = 'portal-card';
    item.innerHTML = `
      <div class="portal-card-title">${itemData.title}</div>
      <div class="portal-card-desc">${itemData.desc}</div>
      <a class="portal-btn" href="${itemData.link}" target="_blank">Open</a>
    `;
    grid.appendChild(item);
  });
}

function renderPortfolio(student) {
  const wrap = document.getElementById('portfolioHubCard');
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '';

  const portfolio = normalizeToArray(student.portfolio);

  if (!portfolio.length) {
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = 'block';

  portfolio.forEach(work => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
      <div class="portfolio-frame">
        <img src="${work.image}" class="portfolio-img" onerror="this.src='https://placehold.co/220x220?text=Portfolio'">
      </div>
      <div class="portfolio-title">${work.title || ''}</div>
      <div class="portfolio-sub">${work.category || ''}${work.caption ? ' · ' + work.caption : ''}</div>
    `;
    grid.appendChild(item);
  });
}

function renderMap(student) {
  const container = document.getElementById('badgeGrid');
  container.innerHTML = '';

  let earnedIds = [];
  if (student.achievements) earnedIds = student.achievements.map(a => (a.badge_id || '').toLowerCase());

  let recommendedIds = [];
  if (student.badges && student.badges.should_target) {
    recommendedIds = student.badges.should_target.map(t => (t.id || '').toLowerCase());
  }

  const total = PAGES.length;
  const count = earnedIds.length;
  const pct = Math.round((count / total) * 100);
  document.getElementById('progressCount').textContent = `${count} / ${total} Badges`;
  document.getElementById('progressBar').style.width = `${pct}%`;
  document.getElementById('progressPct').textContent = `${pct}%`;

  PAGES.forEach((page, index) => {
    const pageId = page.id.toLowerCase();
    const isUnlocked = earnedIds.includes(pageId);
    const isRecommended = !isUnlocked && recommendedIds.includes(pageId);

    const node = document.createElement('div');
    let statusClass = 'locked';
    if (isUnlocked) statusClass = 'unlocked';
    else if (isRecommended) statusClass = 'recommended';

    node.className = `map-node ${statusClass}`;
    node.style.animationDelay = `${index * 0.05}s`;

    const hasImage = page.imgUrl && page.imgUrl.length > 5;
    const imageHTML = hasImage
      ? `<img src="${page.imgUrl}" class="node-img">`
      : `<div class="node-icon-fallback">${page.emoji}</div>`;

    node.innerHTML = `
      <div class="node-visual" style="border-color:${isRecommended ? '#f59e0b' : '#e5e7eb'}">
        ${imageHTML}
        ${isUnlocked ? '<div class="check-mark">✓</div>' : ''}
        ${isRecommended ? '<div class="quest-mark">⭐</div>' : ''}
      </div>
      <div class="node-label">${page.title}</div>
      <div class="badge-credit">${page.artist}</div>
    `;

    node.addEventListener('click', () => openBadgeModal(student, page, isUnlocked, isRecommended));
    container.appendChild(node);
  });
}

function openBadgeModal(student, page, isUnlocked, isRecommended) {
  const modal = document.getElementById('badgeModal');
  const title = document.getElementById('badgeModalTitle');
  const status = document.getElementById('badgeModalStatus');
  const desc = document.getElementById('badgeModalDesc');
  const coursesWrap = document.getElementById('badgeModalCourses');

  title.textContent = page.title;
  coursesWrap.innerHTML = '';

  if (isUnlocked) {
    status.textContent = 'Achieved';
    status.style.background = '#ecfdf5';
    status.style.color = '#047857';
    desc.textContent = `You have already unlocked ${page.title}. Keep building this strength and consider using it in your next project or portfolio piece.`;
  } else if (isRecommended) {
    status.textContent = 'Recommended Next';
    status.style.background = '#fff7ed';
    status.style.color = '#c2410c';
    desc.textContent = `This badge is currently recommended for you. You can use the linked course suggestions below to help unlock this next stage.`;
  } else {
    status.textContent = 'Not Yet';
    status.style.background = '#f3f4f6';
    status.style.color = '#6b7280';
    desc.textContent = `This badge is not active yet, but it may become part of your future learning path.`;
  }

  const matchedCourses = normalizeToArray(student.recommended_courses).filter(
    c => (c.badge_id || '').toLowerCase() === page.id.toLowerCase()
  );

  if (matchedCourses.length) {
    matchedCourses.forEach(course => {
      const item = document.createElement('div');
      item.className = 'mini-course-item';
      item.innerHTML = `
        <div class="portal-card-title">${course.title}</div>
        <div class="portal-card-desc">${course.description || ''}</div>
        <a class="portal-btn" href="${course.link || '#'}" target="_blank">Open Course</a>
      `;
      coursesWrap.appendChild(item);
    });
  } else {
    const fallback = document.createElement('div');
    fallback.className = 'mini-course-item';
    fallback.innerHTML = `
        <div class="portal-card-desc">No linked course has been added for this badge yet.</div>
      `;
    coursesWrap.appendChild(fallback);
  }

  modal.style.display = 'flex';
}
