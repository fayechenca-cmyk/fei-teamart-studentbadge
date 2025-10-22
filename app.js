
async function loadData(){
  const mount=document.getElementById('mount');
  mount.innerHTML='<div class="empty">Loading...</div>';
  try{
    const res=await fetch('data/students.json');
    const students=await res.json();
    renderRecent(students);
    mount.innerHTML='';
    students.forEach(s=>{
      const div=document.createElement('div');
      div.className='card';
      div.style.border='1px solid #eee';
      div.style.borderRadius='12px';
      div.style.padding='12px';
      div.style.marginBottom='12px';
      div.innerHTML=`<h3>${s.name}</h3>
      <p><strong>Achievements:</strong> ${(s.achievements||[]).length}</p>
      <p>${s.teacher_note||''}</p>`;
      mount.appendChild(div);
    });
  }catch(e){mount.innerHTML='<div class="empty">Could not load data.</div>';}
}
function renderRecent(students){
  let newest = null, who = null;
  students.forEach(s=>{
    (s.achievements||[]).forEach(a=>{
      if(!newest || (a.date||'') > (newest.date||'')){ newest = a; who = s; }
    });
  });
  const box = document.getElementById('recentBody');
  if(!newest || !box){ return; }
  box.innerHTML = `${who.name} earned <b>${newest.badge_id.replace(/_/g,' ')}</b> (${newest.level.toUpperCase()}) on ${newest.date}. Great job!`;
}
loadData();

async function loadArtworks(){
  const wrap=document.getElementById('artworkGallery');
  try{
    const res=await fetch('data/artworks.json');
    const artworks=await res.json();
    artworks.forEach(a=>{
      const art=document.createElement('div');
      art.className='art';
      art.innerHTML=`<img src="${a.image}" alt="${a.title}"><h4>${a.title}</h4><p>${a.student}</p>`;
      wrap.appendChild(art);
    });
  }catch(e){
    wrap.innerHTML='<div class="empty">No artworks yet.</div>';
  }
}
loadArtworks();
