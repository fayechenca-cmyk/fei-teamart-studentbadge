async function fetchStudents(){
  const res = await fetch('data/students.json');   // or 'students.json' if you kept files at root
  return await res.json();
}

async function loadStudentByCode(code){
  const mount = document.getElementById('mount');
  mount.innerHTML = '<div class="empty">Loading…</div>';
  try{
    const students = await fetchStudents();
    const s = students.find(x => (x.id || '').toLowerCase() === code.toLowerCase());
    if(!s){
      mount.innerHTML = '<div class="empty">Code not found. Please check and try again.</div>';
      return;
    }
    // Render ONLY this student's card
    const div = document.createElement('div');
    div.className='card';
    div.style.border='1px solid #eee';
    div.style.borderRadius='12px';
    div.style.padding='12px';
    div.style.marginBottom='12px';

    // Build achievements list
    const list = (s.achievements || []).map(a=>{
      const badgeName = BADGE_TITLES[a.badge_id] || a.badge_id.replace(/_/g,' ');
      const levelName = LEVEL_LABELS[a.level] || a.level;
      return `<li style="padding:6px 0;border-bottom:1px dashed #eee">
                <b>${badgeName}</b> — ${levelName} <span style="color:#5c6370">(${a.date||''})</span>
              </li>`;
    }).join('') || '<li style="color:#5c6370">No achievements yet.</li>';

    div.innerHTML = `
      <h3>${s.display_name || 'Student'}</h3>
      <ul style="list-style:none;margin:8px 0 0;padding:0">${list}</ul>
      ${s.teacher_note ? `<p style="margin-top:10px;color:#5c6370">${s.teacher_note}</p>` : ''}
    `;
    mount.innerHTML = '';
    mount.appendChild(div);
  }catch(e){
    mount.innerHTML = '<div class="empty">Could not load data.</div>';
  }
}

// Handle form submit
const form = document.getElementById('codeForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const code = document.getElementById('codeInput').value.trim();
    if(!code) return;
    // Optional: keep code in URL ?code= so they can bookmark
    const url = new URL(location.href);
    url.searchParams.set('code', code);
    history.replaceState({}, '', url);
    loadStudentByCode(code);
  });
}

// Auto-open if ?code= is present
(function autoFromURL(){
  const code = new URLSearchParams(location.search).get('code');
  if(code){
    const input = document.getElementById('codeInput');
    if(input) input.value = code;
    loadStudentByCode(code);
  } else {
    // Start with a friendly state instead of listing everyone
    const mount = document.getElementById('mount');
    if(mount) mount.innerHTML = '<div class="empty">Enter your code to view your record.</div>';
  }
})();

