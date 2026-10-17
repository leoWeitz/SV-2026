/* Capítulo II · El Museo — landing + visita guiada (máquina de pantallas) */

const DIR = 'resources/museo/';

// Orden de salas definitivo. Textos y fechas: reemplazar los "Escribí acá:".
const TEXTO = 'Escribí acá: tu descripción para este cuadro.';
// era = álbum de la canción de la sala ('' si la sala no tiene canción).
// Canciones: los mp3 van en resources/music/ con estos nombres. song: null = sala sin música.
const MUSIC = 'resources/music/';
const SONGS = {
  wtny: { title: 'Welcome to New York', album: '1989 (TV)', src: MUSIC + 'welcome-to-new-york.mp3' },
  sweet: { title: 'Sweet Nothing', album: 'Midnights', src: MUSIC + 'sweet-nothing.mp3' },
  daylight: { title: 'Daylight', album: 'Lover', src: MUSIC + 'daylight.mp3' },
  paper: { title: 'Paper Rings', album: 'Lover', src: MUSIC + 'paper-rings.mp3' },
  lover: { title: 'Lover', album: 'Lover', src: MUSIC + 'lover.mp3' },
  opalite: { title: 'Opalite', album: 'The Life of a Showgirl', src: encodeURI(MUSIC + 'Taylor Swift - Opalite - LatinHype.mp3') } // recap y sala final
};
const ROOMS = [
  { n: '01', era: '1989', moment: 'Saliditas', wall: '#dcecf5', deep: '#1a1838', accent: '#3d8fc4', works: [
    { title: 'Saliditas I · Alicia en el país de las maravillas', date: '2026', ph: [
      'noche_1', 'noche_2', 27, 19, 'noche_6', 'noche_8', 'noche_10', 'alicia_pareja', 'noche_5', // los dos
      22, 29, 24, 20, 23, 'noche_3', 'noche_4', 'noche_7', 'noche_9', 'noche_11', 'noche_12', 'noche_13'], text: 'Con vos, me siento en el país de las maravillas todos los días', song: SONGS.wtny },
    { title: 'Saliditas II · por la ciudad', date: '2026', ph: ['ciudad_1', 3, 4, 'vaca', 'tienda', 57, 52], text: 'Sean pasajes, librerías, bazares o expos, todo es más lindo con vos', song: SONGS.wtny },
    { title: 'Saliditas III · nosotros', date: '2026', ph: [46, 48, 37, 10, 56, 50], text: 'Algunos closeups de un par de personas lindas en distintos puntos de la ciudad', song: SONGS.wtny } ] },
  { n: '02', era: 'MIDNIGHTS', moment: 'En el ascensor', wall: '#e2dfdf', deep: '#141414', accent: '#3a3a3a', works: [
    { title: 'En el ascensor', date: '2026', ph: [21, 32, 51, 42, 16, 'asc_a', 'asc_b'], text: 'Me gusta que estemos en el ascensor porque significa que estoy yendo a alguna parte con vos', song: SONGS.sweet } ] },
  { n: '03', era: 'LOVER', moment: 'Comidas compartidas', wall: '#f6ead0', deep: '#5a4210', accent: '#c4962e', works: [
    { title: 'Comidas compartidas', date: '2026', ph: [33, 36, 40, 42, 34, 2, 'mate', 9], text: 'Entre cenas en mac, meriendas más grandes que tu cara, unos mac&cheese riquísimos y comidas en casa la vida se pasa más rápido (literalmente no sé qué tendrá el polvo ese del mac&cheese)', song: SONGS.daylight } ] },
  { n: '04', era: 'LOVER', moment: 'Besos', wall: '#f7dfe7', deep: '#5a1a33', accent: '#d6336c', works: [
    { title: 'Besos', date: '2026', ph: ['beso_kitty', 43, 25, 17, 'beso_teatro', 53, 8, 54], text: 'Mi actividad favorita', song: SONGS.paper } ] },
  { n: '05', era: 'LOVER', moment: 'Cómodos en casa', wall: '#e7e3dd', deep: '#3a3632', accent: '#7d756b', works: [
    { title: 'Cómodos en casa', date: '2026', ph: [41, 14, 44], text: 'Como Kitty, de mis momentos favoritos.', song: SONGS.lover } ] },
  { n: '06', era: '', moment: 'Momentos graciosos', wall: '#f8e6d6', deep: '#5a2a10', accent: '#e0742c', works: [
    { title: 'Momentos graciosos', date: '2026', ph: [{ p: 'v3', t: 'Bien entrenado' }, { p: 'v2', t: 'Un novio mentiroso y con complejo de jirafa' }], text: TEXTO, song: null } ] }
];

// Frases de Kitty, la guía del museo. Tocarla (o el globito) pasa a la siguiente frase.
const KITTY = {
  expo: ['¡Hola! Soy tu guía de hoy', 'Tocá "Iniciar visita" y te acompaño', 'Shhh… en el museo se habla bajito'],
  rooms: [ // mismo orden que ROOMS
    ['¡Qué lindas salidas!', 'La próxima me llevan a mí'],          // Saliditas
    ['¿Cuántos pisos fueron?', 'El ascensor más famoso del mundo'], // En el ascensor
    ['¿Me convidan?', 'Esta parece riquísima'],                     // Comidas compartidas
    ['¡Ay, me tapo los ojos!', 'Cuántos besitos…'],                 // Besos
    ['Despeinados y felices', 'Esta es mi favorita'],               // Cómodos en casa
    ['¡Jajaja no puedo!', 'Ponele play otra vez']                   // Momentos graciosos
  ],
  recap: ['¡Mirá esos números!', 'Yo los conté todos, eh'],
  end: ['La obra más linda del museo ♥', 'Gracias por visitarnos']
};

const RDUR = 7000;
const RSL = [
  { bg: '#ff4f9a', fg: '#1a0d10', word: 'NUESTRO AÑO' }, { bg: '#e0263a', fg: '#fff4f1', word: 'TE AMO' },
  { bg: '#2fbf71', fg: '#0d2a1a', word: 'JUNTOS' }, { bg: '#1a0d10', fg: '#fff4f1', word: 'TAYLOR' },
  { bg: '#fbf3ee', fg: '#3a1520', word: 'MOMENTOS' },
  { bg: '#5a5fb0', fg: '#fff4f1', word: 'POCHOCLO' }, { bg: '#ffc2db', fg: '#3a1520', word: 'ERAS' },
  { bg: '#12060a', fg: '#fff4f1', word: 'TE AMO' }
];

const S = { screen: 'landing', room: 0, work: 0, modal: null, photo: 0, playing: false, muted: false, prog: 0, rs: 0, el: 0, rPaused: false };

const $ = q => document.querySelector(q);
const $$ = q => document.querySelectorAll(q);
const app = $('#app'), modalEl = $('#modal'), fadeEl = $('#fade'), muteEl = $('#mute'), kittyEl = $('#kitty');
const audio = new Audio();
audio.loop = true;
let walkTimer;

/* ---------- helpers ---------- */
const pad = i => String(i).padStart(2, '0');
const isVid = p => typeof p === 'string' && /^v\d+$/.test(p);
// Cada foto puede ser un id suelto (22, 'vaca', 'v1') o { p: id, t: 'texto propio de esa foto' }.
const phId = p => (p && typeof p === 'object' ? p.p : p);
const media = raw => { const p = phId(raw); return { v: isVid(p), src: DIR + (isVid(p) ? p + '.mp4' : typeof p === 'string' ? p + '.jpeg' : 'f' + pad(p) + '.jpeg') }; };
const caption = (w, j) => (w.ph[j] && typeof w.ph[j] === 'object' && w.ph[j].t) || w.text;
const pieces = r => r.works.reduce((a, w) => a + w.ph.length, 0);
const visited = () => { try { return localStorage.getItem('ayleo_museo_visitado') === '1'; } catch (e) { return false; } };
const markVisited = () => { try { localStorage.setItem('ayleo_museo_visitado', '1'); } catch (e) {} };
const curRoom = () => ROOMS[S.room];
const curWork = () => curRoom().works[S.work];
const curSong = () => curWork().song;

function fadeTo(fn) {
  fadeEl.classList.add('on');
  setTimeout(() => { fn(); fadeEl.classList.remove('on'); }, 450);
}

function setScreen(name, html) {
  S.screen = name;
  app.innerHTML = html;
  muteEl.classList.toggle('show', name !== 'landing');
  document.body.dataset.screen = name;
  window.scrollTo(0, 0);
  renderKitty();
}

/* ---------- Kitty ---------- */
let kTap = 0;
const KLOOK = {
  expo: ['a', 96, 'kbob 2.6s ease-in-out infinite'],
  room: ['a', 96, 'kbob 2.6s ease-in-out infinite'],
  recap: ['a', 96, 'kdance 1.1s ease-in-out infinite'],
  end: ['b', 150, 'kbob 2.6s ease-in-out infinite']
};

function kittyLine() {
  const L = S.screen === 'room' ? KITTY.rooms[S.room] || KITTY.rooms[0] : KITTY[S.screen];
  return L ? L[((S.screen === 'room' ? S.work : 0) + kTap) % L.length] : '';
}

// Se vuelve a montar en cada cambio de pantalla para que repita la entrada (kpeek).
function renderKitty() {
  if (S.screen === 'walk') {
    kittyEl.className = 'fly';
    kittyEl.innerHTML = `<img src="${DIR}kitty_b.png" alt="" draggable="false">`;
    return;
  }
  const look = KLOOK[S.screen];
  kittyEl.className = '';
  if (!look) { kittyEl.innerHTML = ''; return; }
  const [img, w, anim] = look;
  kittyEl.innerHTML = `<div class="kin">
    <div class="kbub" data-act="kittyTap" style="margin-bottom:${Math.round(w * 0.55)}px">${kittyLine()}</div>
    <img src="${DIR}kitty_${img}.png" alt="Hello Kitty" draggable="false" data-act="kittyTap" style="width:${w}px;animation:${anim}">
  </div>`;
}

// Cambia solo el globito y lo hace "re-aparecer".
function updateKittyLine() {
  const b = kittyEl.querySelector('.kbub');
  if (!b) return;
  const nb = b.cloneNode(false);
  nb.textContent = kittyLine();
  b.replaceWith(nb);
}

function thumb(p, cls) {
  const m = media(p);
  return m.v
    ? `<video class="${cls}" src="${m.src}#t=1" muted playsinline preload="metadata"></video>`
    : `<div class="${cls}" style="background-image:url('${m.src}')"></div>`;
}

/* ---------- música ---------- */
// Un solo <audio> en loop. Si la obra siguiente tiene la misma canción, sigue sonando sin reiniciar.
let curSrc = null;

function setMusic(song) {
  if (!song) return stopSong();
  if (curSrc !== song.src) {
    curSrc = song.src;
    audio.src = song.src;
    S.prog = 0;
  }
  S.playing = true;
  if (!S.muted) audio.play().catch(() => {});
  updateProg();
}

function playSong() { setMusic(curSong()); }

function stopSong() {
  audio.pause();
  curSrc = null;
  S.playing = false;
  S.prog = 0;
  updateProg();
}

function updateProg() {
  const pct = (S.prog * 100).toFixed(1) + '%';
  $$('.js-prog').forEach(e => { e.style.width = pct; });
  $$('.js-icon').forEach(e => { e.textContent = S.playing && !S.muted ? '❚❚' : '▶'; });
}

setInterval(() => {
  if (!S.playing || S.muted || !audio.duration) return;
  S.prog = audio.currentTime / audio.duration;
  updateProg();
}, 250);

/* ---------- 1. Landing ---------- */
function renderLanding() {
  setScreen('landing', `
  <div class="landing" id="landing">
    <div class="halo" id="halo"></div>
    <div class="eyebrow">Aylu &amp; Leo · colección permanente</div>
    <h1>Nuestra <span>historia</span></h1>
    <div class="sub">Elegí un capítulo</div>
    <div class="chapters">
      <a class="chap chap1" href="cap1.html">
        <div class="thumb">♥</div>
        <span class="k">I · 14.02</span><span class="t">San Valentín</span><span class="s">visitado ✓</span>
      </a>
      <div class="chap chap2" data-act="goExpo">
        <div class="thumb">
          <span style="width:22px;height:28px;background:#ffc2db"></span><span style="width:30px;height:38px;background:#f7a3ad"></span><span style="width:22px;height:28px;background:#c4e2f3"></span>
        </div>
        <span class="k" style="color:#d9b26a">II · AHORA</span><span class="t">El Museo</span><span class="s" style="color:#ff6b9d">entrar →</span>
      </div>
      <div class="chap chap3">
        <div class="thumb"></div>
        <span class="k">III · ???</span><span class="t">Próximamente</span><span class="s">en construcción</span>
      </div>
    </div>
  </div>`);
  const l = $('#landing'), h = $('#halo');
  l.addEventListener('mousemove', e => {
    const b = l.getBoundingClientRect();
    h.style.left = (e.clientX - b.left) + 'px';
    h.style.top = (e.clientY - b.top) + 'px';
  });
}

/* ---------- 2. Expo ---------- */
const songsOf = r => {
  const t = [...new Set(r.works.filter(w => w.song).map(w => w.song.title))];
  return t.length ? `♪ ${t.join(', ')} · ` : '';
};

function renderExpo() {
  const P = '#ffc2db', G = '#2f8f5b', W = '#fff', Rd = '#e0263a';
  const beads = 'AYLU♥LEO'.split('').map((c, i) => {
    const bg = c === '♥' ? Rd : [P, W, G][i % 3], fg = c === '♥' || i % 3 === 2 ? W : '#3a1520';
    return `<div class="bead" style="background:${bg};color:${fg}">${c}</div>`;
  }).join('');
  const cards = ROOMS.map((r, i) => {
    // Dos miniaturas distintas que no repiten la portada de ninguna obra:
    // la 2ª foto de la primera obra y la 2ª de la última (o la última foto, si la sala tiene una sola obra).
    // Si la sala tiene solo 2 fotos, no queda otra que usar la primera.
    const last = r.works[r.works.length - 1], ph0 = r.works[0].ph;
    const first = ph0.length > 2 || r.works.length > 1 ? ph0[1] : ph0[0];
    const second = r.works.length > 1 ? last.ph[1] : last.ph[last.ph.length - 1];
    return `
    <div class="rcard" data-act="room" data-arg="${i}" style="background:${r.wall}">
      <div class="meta"><span>SALA ${r.n}</span><span style="color:${r.accent}">${r.era}</span></div>
      <div class="thumbs">${thumb(first, 'th1')}${thumb(second, 'th2')}</div>
      <span class="serif" style="font-size:30px;line-height:1">${r.moment}</span>
      <span style="font-size:14px;color:#6a3a48">${songsOf(r)}${pieces(r)} piezas</span>
    </div>`;
  }).join('');
  const total = ROOMS.reduce((a, r) => a + pieces(r), 0);
  setScreen('expo', `
  <div class="expo">
    <div class="topbar"><span class="back ptr" data-act="goLanding">← CAPÍTULOS</span><span>CAPÍTULO II · EXPOSICIÓN ACTUAL</span></div>
    <div class="hero">
      <div style="font-size:36px">🎀</div>
      <h1><span>Aylu &amp; Leo</span><span class="it">(Our Version)</span></h1>
      <div class="portraits">
        <div class="portrait" style="rotate:-3deg;margin-top:clamp(24px,3.4vw,48px)"><div class="pic" style="background-image:url('${DIR}retrato_leo.jpeg');background-position:50% 35%"></div><div class="plate">LEO</div></div>
        <div style="font-size:40px;color:#e0263a">♥</div>
        <div class="portrait" style="rotate:3deg;margin-bottom:clamp(24px,3.4vw,48px)"><div class="pic" style="background-image:url('${DIR}retrato_aylu.jpeg');background-position:52% 40%"></div><div class="plate">AYLU</div></div>
      </div>
      <p>Una visita guiada por todo lo que pasó después del primer San Valentín.</p>
      <div class="beads">${beads}</div>
      <button class="cta" data-act="startTour">INICIAR VISITA →</button>
    </div>
    <div class="onshow">
      <div class="onshow-h">
        <span class="serif" style="font-size:40px">En exposición</span>
        <span class="mono" style="font-size:13px;color:#8a5a68">${ROOMS.length} SALAS · ${total} OBRAS · o empezá por cualquier sala</span>
      </div>
      <div class="grid">
        ${cards}
        <div class="rcard rfinal" data-act="recap">
          <div class="meta"><span>SALA FINAL</span><span style="color:#ff4f9a">RECAP</span></div>
          <div class="thumbs"><span style="background:#ff4f9a"></span><span style="background:#e0263a"></span><span style="background:#2fbf71"></span><span style="background:#ffc2db"></span></div>
          <span class="black" style="font-size:26px;line-height:1">Nuestro año en números</span>
          <span style="font-size:14px;color:#e8c6cf">${RSL.length} historias · no hagas trampa</span>
        </div>
      </div>
    </div>
  </div>`);
}

/* ---------- 3. Walk ---------- */
function renderWalk(recap) {
  const cr = curRoom();
  const w = recap
    ? { deep: '#12060a', wall: '#ff4f9a', accent: '#ff4f9a', label: 'SALA FINAL', moment: 'El Recap' }
    : { deep: cr.deep, wall: cr.wall, accent: cr.accent, label: `SALA ${cr.n}${cr.era ? ' · ' + cr.era : ''}`, moment: cr.moment };
  const doors = Array.from({ length: 7 }, (_, i) =>
    `<div class="door" style="border:3px solid ${w.wall};border-radius:${recap ? 40 : 0}px;box-shadow:0 0 40px ${w.accent}66,inset 0 0 40px ${w.accent}44;animation-delay:${(i * 0.16).toFixed(2)}s"></div>`).join('');
  setScreen('walk', `<div class="walk" style="background:${w.deep}">${doors}<div class="walk-title"><div class="l">${w.label}</div><div class="m">${w.moment}</div></div></div>`);
}

function enterRoom(r) {
  clearTimeout(walkTimer);
  fadeTo(() => { S.room = r; S.work = 0; S.photo = 0; openModal(null); renderWalk(false); });
  walkTimer = setTimeout(() => { renderRoom(); playSong(); }, 3100);
}

function enterRecap() {
  stopSong();
  clearTimeout(walkTimer);
  fadeTo(() => { openModal(null); renderWalk(true); });
  walkTimer = setTimeout(() => { S.rs = 0; S.el = 0; S.rPaused = false; renderRecap(); setMusic(SONGS.opalite); }, 3100);
}

/* ---------- 4. Room ---------- */
function renderRoom() {
  const cr = curRoom(), len = cr.works.length;
  const stops = cr.works.map((w, i) => {
    const photos = w.ph.map(p => {
      const m = media(p);
      return `<div class="slide">${m.v
        ? `<video src="${m.src}" muted loop playsinline preload="metadata"></video>`
        : `<div class="bg" style="background-image:url('${m.src}')"></div><img src="${m.src}" alt="" loading="lazy">`}</div>`;
    }).join('');
    const pnav = w.ph.length > 1
      ? `<div class="pnav" data-act="stop"><span class="pb" data-act="photoPrevR">‹</span><span class="pcount"></span><span class="pb" data-act="photoNextR">›</span></div>`
      : '';
    return `
    <div class="stop" style="width:${100 / len}%">
      <div class="spot"></div>
      <div class="floor" style="border-top:6px solid ${cr.deep}"></div>
      <div class="stage">
        <div class="frame" data-act="openPhoto"><div class="passe"><div class="photos">${photos}${pnav}</div></div></div>
        <div class="side">
          <div class="label" data-act="openText">
            <span class="k" style="color:${cr.accent}">OBRA ${pad(i + 1)} · ${w.date}</span>
            <span class="t">${w.title}</span>
            <span class="x">${caption(w, 0)}</span>
          </div>
          ${w.song ? `<div class="songpill" data-act="openSong">
            <span class="note" style="background:${cr.accent}">♪</span>
            <span class="st"><span style="font-size:15px;font-weight:600">${w.song.title}</span><span style="font-size:12px;opacity:.7">Taylor Swift · ${w.song.album}</span></span>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
  setScreen('room', `
  <div class="room" style="background:${cr.wall}">
    <div class="camera moving" id="camera"><div class="track" id="track" style="width:${len * 100}%">${stops}</div></div>
    <div class="hud-top">
      <span class="pill-back" data-act="goExpo">← PLANO</span>
      <span class="mid">SALA ${cr.n}${cr.era ? ' · ' + cr.era : ''} — <span>${cr.moment}</span></span>
      <span style="white-space:nowrap">OBRA <span id="wnum">1</span> / ${len}</span>
    </div>
    <div class="hud-nav">
      <div class="hud-prev" id="prev" data-act="prev">←</div>
      <div class="dots" id="dots">${cr.works.map(() => '<span></span>').join('')}</div>
      <div class="hud-next" data-act="next"><span id="nextLabel"></span>&nbsp;→</div>
    </div>
    <div class="hud-song" id="hudSong"><span class="bar"><span class="js-prog" style="background:${cr.accent}"></span></span><span><span class="js-icon"></span> <span id="songTitle"></span></span></div>
  </div>`);
  updateRoom();
  setTimeout(() => $('#camera') && $('#camera').classList.remove('moving'), 60);
}

function updateRoom() {
  const len = curRoom().works.length;
  $('#track').style.transform = `translateX(${-S.work * 100 / len}%)`;
  $('#wnum').textContent = S.work + 1;
  $('#prev').style.opacity = S.work > 0 ? 1 : 0.35;
  $('#hudSong').style.visibility = curSong() ? 'visible' : 'hidden';
  $('#songTitle').textContent = curSong() ? curSong().title : '';
  [...$('#dots').children].forEach((d, i) => d.classList.toggle('on', i === S.work));
  $('#nextLabel').textContent = S.work < len - 1 ? 'SIGUIENTE OBRA' : S.room < ROOMS.length - 1 ? 'SIGUIENTE SALA' : 'SALA FINAL: RECAP';
  updatePhotos();
}

// Una foto a la vez: marca la activa en la obra actual y pausa los videos que no se ven.
function updatePhotos() {
  $$('.stop').forEach((stop, i) => {
    const pl = stop.querySelectorAll('.slide').length;
    stop.querySelectorAll('.slide').forEach((s, j) => {
      const on = i === S.work && j === S.photo;
      s.classList.toggle('on', on || (i !== S.work && j === 0));
      const v = s.querySelector('video');
      if (v) on ? v.play().catch(() => {}) : v.pause();
    });
    const c = stop.querySelector('.pcount');
    if (c) c.textContent = `${i === S.work ? S.photo + 1 : 1} / ${pl}`;
    const x = stop.querySelector('.label .x'), t = caption(curRoom().works[i], i === S.work ? S.photo : 0);
    if (x && x.textContent !== t) x.textContent = t;
  });
}

function photoStep(d) {
  const pl = curWork().ph.length, p = S.photo + d;
  if (p >= 0 && p < pl) { S.photo = p; return updatePhotos(); }
  if (d > 0) return next();
  if (S.work > 0) step(S.work - 1, curRoom().works[S.work - 1].ph.length - 1);
}

function step(w, photo = 0) {
  S.work = w;
  S.photo = photo;
  $('#camera').classList.add('moving');
  updateRoom();
  updateKittyLine();
  playSong();
  setTimeout(() => $('#camera') && $('#camera').classList.remove('moving'), 650);
}

function next() {
  const len = curRoom().works.length;
  if (S.work < len - 1) step(S.work + 1);
  else if (S.room < ROOMS.length - 1) enterRoom(S.room + 1);
  else enterRecap();
}

function prev() { if (S.work > 0) step(S.work - 1); }

/* ---------- 5. Recap ---------- */
const N = v => `<span data-n="${v}">0</span>`;
const rise = (d, dur = '.6s') => `animation:rise ${dur} ${d} ease-out both`;

function roomCounts() {
  return ROOMS.map(r => ({ label: r.moment, era: r.era, v: pieces(r), c: r.accent })).sort((a, b) => b.v - a.v);
}

const STORIES = [
  () => `
  <div class="col" style="gap:20px">
    <span class="mono" style="font-size:16px;letter-spacing:.3em;${rise('0s')}">SALA FINAL · EL RECAP</span>
    <span class="black" style="font-size:clamp(72px,13vw,210px);line-height:.82;letter-spacing:-.04em;${rise('.15s', '.8s')}">Nuestro<br>año.</span>
    <span class="serif it" style="font-size:clamp(28px,3.4vw,48px);${rise('.5s', '.8s')}">en números que nadie pidió, pero acá están.</span>
    <span class="mono" style="font-size:13px;opacity:.8;${rise('1.2s', '.8s')}">tocá la derecha para avanzar →</span>
  </div>`,
  () => `
  <div class="col" style="gap:10px">
    <span class="serif it" style="font-size:clamp(32px,4vw,56px);${rise('0s')}">Este año nos dijimos</span>
    <span class="big" style="font-size:clamp(100px,19vw,300px)">${N(691)}</span>
    <span class="black" style="font-size:clamp(40px,6vw,96px);line-height:.9;${rise('.4s')}">"te amo"</span>
    <span class="serif it" style="font-size:clamp(24px,2.6vw,38px);margin-top:18px;${rise('1.6s')}">(en WhatsApp, al menos ji)</span>
  </div>`,
  () => `
  <div class="g2" style="grid-template-columns:minmax(0,1.1fr) minmax(0,1fr)">
    <div class="col" style="gap:6px">
      <span class="mono" style="font-size:15px;letter-spacing:.2em;${rise('0s')}">HORAS JUNTOS</span>
      <span class="big" style="font-size:clamp(100px,16vw,250px)">~${N(339)}</span>
      <span class="serif it" style="font-size:clamp(28px,3vw,44px);${rise('1s')}">= 14 días y 3 horas</span>
    </div>
    <div class="col" style="gap:14px">
      ${[['313', 'reproducciones de Taylor Swift en el auto', '.6s'],
         ['8+ pelis', '1 obra de teatro · 1 show de jazz · 1 documental del Eras Tour · 1 Gravity Falls · 1 HIMYM', '.9s'],
         ['y paseos', 'barrio chino, centros culturales, museos, bazares, galerías, pizzerías y más', '1.2s']].map(([v, l, d]) =>
        `<div class="eq" style="${rise(d)}"><span class="black" style="font-size:38px;line-height:1">${v}</span><span style="font-size:17px">${l}</span></div>`).join('')}
    </div>
  </div>`,
  () => `
  <div class="g2" style="grid-template-columns:minmax(0,1fr) minmax(0,1.2fr)">
    <div class="col" style="gap:18px;align-items:flex-start">
      <span class="mono" style="font-size:15px;letter-spacing:.2em;${rise('0s')}">LO QUE MÁS ESCUCHAMOS</span>
      <div style="width:min(30vw,300px);aspect-ratio:1;border-radius:50%;background:repeating-radial-gradient(circle,#2a1418 0 3px,#3a1a20 3px 6px);animation:spin 5s linear infinite;display:flex;align-items:center;justify-content:center;box-shadow:0 0 80px #ff4f9a55">
        <div class="black" style="width:36%;height:36%;border-radius:50%;background:#ff4f9a;display:flex;align-items:center;justify-content:center;color:#1a0d10;font-size:20px">A♥L</div>
      </div>
      <span class="black" style="font-size:clamp(48px,6vw,92px);line-height:.9;${rise('.5s')}">Taylor Swift</span>
      <span style="font-size:20px;${rise('.7s')}">70% de todo lo que sonó</span>
    </div>
    <div class="col" style="gap:6px">
      ${[['01', 'Taylor Swift', 70], ['02', 'Ciro y los Persas', 10], ['03', 'Sabrina Carpenter', 10], ['04', 'Olivia Rodrigo', 5], ['05', 'Queen', 5]].map(([n, t, p], i) => `
      <div class="top5row" style="${rise((0.3 + i * 0.18).toFixed(2) + 's')}">
        <span class="black" style="font-size:40px;color:#ff4f9a">${n}</span>
        <span class="black" style="font-size:26px">${t}</span>
        <span class="mono" style="font-size:15px">${p}%</span>
      </div>`).join('')}
    </div>
  </div>`,
  () => {
    const counts = roomCounts(), max = counts[0].v;
    return `
    <div class="col" style="gap:18px">
      <span class="black" style="font-size:clamp(40px,min(6vw,9vh),96px);line-height:.9;letter-spacing:-.03em;${rise('0s')}">Lo que más<br>fotografiamos</span>
      <div class="col" style="gap:min(10px,1vh)">
        ${counts.map(c => `
        <div class="barrow">
          <span class="serif" style="font-size:24px">${c.label}</span>
          <div style="height:min(26px,3.2vh);background:#3a152012;border-radius:13px;overflow:hidden"><div data-w="${(c.v / max * 100).toFixed(1)}" style="height:100%;width:0;background:${c.c};border-radius:13px"></div></div>
          <span class="black" style="font-size:22px">${N(c.v)}</span>
        </div>`).join('')}
      </div>
    </div>`;
  },
  () => `
  <div class="col" style="gap:10px;align-items:center;text-align:center">
    <span class="mono" style="font-size:15px;letter-spacing:.2em;${rise('0s')}">CINE</span>
    <span class="big" style="font-size:clamp(110px,18vw,280px)">${N(8)}+</span>
    <span class="black" style="font-size:clamp(32px,4.5vw,70px);line-height:.95;${rise('.3s')}">películas vistas</span>
    <span class="serif it" style="font-size:clamp(24px,3vw,44px);margin-top:20px;max-width:900px;text-wrap:balance;${rise('1.6s', '.8s')}">Obsession, Odisea, Antes del atardecer, Akira, Minions vs. Monstruos… y otras más</span>
  </div>`,
  () => `
  <div class="col" style="gap:22px">
    <span class="mono" style="font-size:15px;letter-spacing:.2em;${rise('0s')}">NUESTRAS CANCIONES, ERA POR ERA</span>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px">
      ${[['Blank Space', '1989', 'octubre 2025 → enero 2026', '#fff', '#3a1520'],
         ['Red', 'Red', 'febrero 2026 → junio 2026', '#e0263a', '#fff'],
         ['Paper Rings', 'Lover', 'julio 2026 → presente', '#d6336c', '#fff']].map(([t, a, when, bg, fg], i) => `
      <div style="background:${bg};color:${fg};border-radius:24px;padding:26px 24px;display:flex;flex-direction:column;gap:8px;${rise((0.4 + i * 0.35).toFixed(2) + 's')}">
        <span class="mono" style="font-size:12px;letter-spacing:.15em;opacity:.8">0${i + 1} · ${when.toUpperCase()}</span>
        <span class="black" style="font-size:clamp(34px,3.6vw,56px);line-height:.95">${t}</span>
        <span class="serif it" style="font-size:24px">${a}</span>
      </div>`).join('')}
    </div>
  </div>`,
  () => `
  <div class="col" style="gap:20px;align-items:center;text-align:center">
    <span class="serif" style="font-size:clamp(52px,7.5vw,120px);line-height:1.05;text-wrap:balance;${rise('.2s', '.8s')}">Gracias por este año <span class="it" style="color:#ff6b9d">Aylu</span></span>
    <div class="rbtn" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:14px;${rise('1.6s', '.8s')}">
      <div class="again" data-act="recapRestart">↺ ver de nuevo</div>
      <div class="fin" data-act="finishTour">SALA FINAL →</div>
    </div>
  </div>`
];

function renderRecap() {
  setScreen('recap', `
  <div class="recap" id="recap">
    <div class="rfx" id="rfx"></div>
    <div class="rtop">
      <div class="segs" id="segs">${RSL.map(() => '<div><div></div></div>').join('')}</div>
      <div class="rbar">
        <span>AYLU &amp; LEO · RECAP 2026</span>
        <div class="btns"><span class="rpill" id="pauseLbl" data-act="togglePause"></span><span class="rpill" data-act="goExpo">✕</span></div>
      </div>
    </div>
    <div class="zone l" data-act="recapPrev"></div>
    <div class="zone r" data-act="recapNext"></div>
    <div class="rbody"><div id="rbody"></div></div>
  </div>`);
  renderStory();
}

function renderStory() {
  const r = RSL[S.rs], root = $('#recap');
  root.style.background = r.bg;
  root.style.color = r.fg;
  $$('#segs>div').forEach(s => { s.style.background = r.fg + '33'; });
  const word = (r.word + ' ✦ ').repeat(4);
  $('#rfx').innerHTML = `<div class="marquee"><span>${word}</span><span>${word}</span></div>` +
    [[8, 18, 120, '0s'], [82, 12, 70, '.6s'], [88, 70, 160, '1.2s'], [4, 78, 50, '.3s']].map(([x, y, s, d], i) =>
      `<div class="bub" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation:bob ${4 + i}s ease-in-out ${d} infinite"></div>`).join('');
  $('#rbody').innerHTML = STORIES[S.rs]();
  storyStart = performance.now();
  tickRecap();
}

// Los números cuentan con su propio reloj, así llegan a su valor aunque la historia esté en pausa.
let storyStart = 0;

function tickRecap() {
  const t = Math.min(1, (performance.now() - storyStart) / 2200), ease = 1 - Math.pow(1 - t, 3);
  $$('#rbody [data-n]').forEach(e => { e.textContent = Math.round(+e.dataset.n * ease).toLocaleString('es-AR'); });
  $$('#rbody [data-w]').forEach(e => { e.style.width = (+e.dataset.w * ease).toFixed(1) + '%'; });
  $$('#segs>div>div').forEach((e, i) => { e.style.width = i < S.rs ? '100%' : i > S.rs ? '0%' : (S.el / RDUR * 100).toFixed(1) + '%'; });
  $('#pauseLbl').textContent = S.rPaused ? '▶ seguir' : '❚❚ pausa';
}

function rGo(i) {
  if (i < 0) i = 0;
  if (i > RSL.length - 1) { S.el = RDUR; return tickRecap(); }
  S.rs = i;
  S.el = 0;
  renderStory();
}

setInterval(() => {
  if (S.screen !== 'recap') return;
  if (S.rPaused || S.el >= RDUR) return tickRecap();
  S.el += 50;
  if (S.el >= RDUR && S.rs < RSL.length - 1) rGo(S.rs + 1);
  else { S.el = Math.min(S.el, RDUR); tickRecap(); }
}, 50);

/* ---------- 6. Sala final ---------- */
function renderEnd() {
  setScreen('end', `
  <div class="end">
    <div class="glow"></div>
    <div class="art">
      <div class="pic"></div>
      <div class="plaque">AYLU · OBRA MAESTRA · 2026</div>
    </div>
    <div class="txt">
      <span class="mono" style="font-size:13px;letter-spacing:.3em;color:#d9b26a;${rise('.3s', '.8s')}">SALA FINAL · CIERRE</span>
      <span class="serif" style="font-size:clamp(48px,6vw,84px);line-height:.95;${rise('.5s', '.8s')}">La pieza más <span class="it" style="color:#ff6b9d">linda</span> del museo</span>
      <span class="hand" style="font-size:clamp(26px,2.4vw,34px);line-height:1.3;color:#f3d6de;white-space:pre-line;${rise('.9s', '.8s')}">Gracias de corazón por aparecer en mi vida, por quedarte cuando fue más difícil y ninguno sabía qué iba a pasar y por todos los momentos que vivimos los últimos tres meses. Hay tanto que querría decir, pero acá lo voy a resumir en las 3 palabras que creo que mejor lo hacen:

Gracias, te amo.</span>
      <div class="firma" style="${rise('1.2s', '.8s')}"></div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:12px;${rise('1.5s', '.8s')}">
        <div class="ghost" data-act="goExpo">↺ volver al plano</div>
        <div class="solid" data-act="goLanding">capítulos →</div>
      </div>
    </div>
  </div>`);
}

/* ---------- Modals ---------- */
function openModal(m) {
  S.modal = m;
  renderModal();
}

function renderModal() {
  if (!S.modal) { modalEl.innerHTML = ''; return; }
  const cr = curRoom(), w = curWork();
  let bg = '.8', body = '';
  if (S.modal === 'photo') {
    const pl = w.ph.length, i = Math.min(S.photo, pl - 1), m = media(w.ph[i]);
    bg = '.9';
    body = `
    <div class="m-photo" data-act="stop">
      <div class="pf">${m.v ? `<video src="${m.src}" controls autoplay playsinline></video>` : `<img src="${m.src}" alt="">`}</div>
      <div class="ctl">
        <span class="b" data-act="photoPrev">←</span>
        <span>${i + 1} / ${pl} · ${w.title}</span>
        <span class="b" data-act="photoNext">→</span>
        <span class="ptr" style="padding:8px 14px" data-act="closeModal">cerrar ✕</span>
      </div>
    </div>`;
  } else if (S.modal === 'queen') {
    bg = '.88';
    body = `
    <div class="m-queen" data-act="stop">
      <div class="q"></div>
      <div class="qt">
        <span class="mono" style="font-size:12px;letter-spacing:.25em;color:#ff6b7d">♥ DECRETO REAL ♥</span>
        <span class="serif" style="font-size:clamp(30px,3.4vw,44px);line-height:1.05;text-wrap:pretty">¡La reina no te permite saltearte salas por ser tu <span class="it" style="color:#ff6b9d">primera vez</span> en el museo!</span>
        <span style="font-size:17px;line-height:1.5;color:#e9cfc4;text-wrap:pretty">Te demanda que vuelvas y entres por la entrada principal (el botón de iniciar visita).</span>
        <div class="ok" data-act="backToEntrance">SÍ, MAJESTAD →</div>
      </div>
    </div>`;
  } else if (S.modal === 'text') {
    body = `
    <div class="m-text" data-act="stop">
      <span class="mono" style="font-size:12px;letter-spacing:.15em;color:${cr.accent}">SALA ${cr.n} · OBRA ${pad(S.work + 1)} · ${w.date}</span>
      <span class="serif" style="font-size:52px;line-height:1">${w.title}</span>
      <span class="hand" style="font-size:34px;line-height:1.25;color:#5a2a38;white-space:pre-line">${caption(w, S.photo)}</span>
      <span class="mono ptr" style="align-self:flex-end;font-size:13px" data-act="closeModal">cerrar ✕</span>
    </div>`;
  } else if (S.modal === 'song' && curSong()) {
    const s = curSong();
    body = `
    <div class="m-song" data-act="stop">
      <div class="cover" style="background:repeating-linear-gradient(135deg,${cr.accent} 0 8px,#4a2030 8px 16px)"><span class="mono" style="font-size:11px">${s.album}</span></div>
      <div class="col"><span class="black" style="font-size:28px">${s.title}</span><span style="opacity:.7">Taylor Swift · ${s.album}</span></div>
      <div style="height:4px;background:#fbf3ee30;border-radius:2px;overflow:hidden"><div class="js-prog" style="height:100%;width:0;background:${cr.accent}"></div></div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="mono" style="font-size:12px;opacity:.7">sonando en Sala ${cr.n}</span>
        <div class="pb js-icon" data-act="togglePlay"></div>
      </div>
    </div>`;
  }
  modalEl.innerHTML = `<div class="backdrop" data-act="closeModal" style="background:rgba(18,6,10,${bg})">${body}</div>`;
  updateProg();
}

/* ---------- Actions ---------- */
const A = {
  goExpo() {
    clearTimeout(walkTimer);
    stopSong();
    openModal(null);
    fadeTo(renderExpo);
  },
  goLanding() {
    clearTimeout(walkTimer);
    stopSong();
    fadeTo(renderLanding);
  },
  startTour() { markVisited(); enterRoom(0); },
  room(i) {
    i = +i;
    if (i === 0) { markVisited(); return enterRoom(0); }
    if (!visited()) return openModal('queen');
    enterRoom(i);
  },
  recap() {
    if (!visited()) return openModal('queen');
    enterRecap();
  },
  next, prev,
  openPhoto() { openModal('photo'); },
  photoPrevR() { photoStep(-1); },
  photoNextR() { photoStep(1); },
  openText() { openModal('text'); },
  closeModal() { openModal(null); },
  stop() {},
  photoPrev() { const pl = curWork().ph.length; S.photo = (S.photo - 1 + pl) % pl; renderModal(); updatePhotos(); },
  photoNext() { S.photo = (S.photo + 1) % curWork().ph.length; renderModal(); updatePhotos(); },
  openSong() { openModal('song'); },
  togglePlay() {
    if (!curSrc) return playSong();
    S.playing = !S.playing;
    S.playing && !S.muted ? audio.play().catch(() => {}) : audio.pause();
    updateProg();
  },
  toggleMute() {
    S.muted = !S.muted;
    muteEl.textContent = S.muted ? '🔇' : '🔊';
    if (S.muted) audio.pause();
    else if (S.playing && curSrc) audio.play().catch(() => {});
    updateProg();
  },
  kittyTap() { kTap++; updateKittyLine(); },
  backToEntrance() { openModal(null); window.scrollTo({ top: 0, behavior: 'smooth' }); },
  recapPrev() { rGo(S.rs - 1); },
  recapNext() { rGo(S.rs + 1); },
  togglePause() { S.rPaused = !S.rPaused; tickRecap(); },
  recapRestart() { S.rPaused = false; rGo(0); },
  finishTour() { fadeTo(renderEnd); }
};

document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (el && A[el.dataset.act]) A[el.dataset.act](el.dataset.arg);
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') return openModal(null);
  if (S.screen === 'recap') {
    if (e.key === 'ArrowRight') rGo(S.rs + 1);
    if (e.key === 'ArrowLeft') rGo(S.rs - 1);
    if (e.key === ' ') { e.preventDefault(); A.togglePause(); }
    return;
  }
  if (S.screen !== 'room') return;
  if (S.modal === 'photo') {
    if (e.key === 'ArrowRight') A.photoNext();
    if (e.key === 'ArrowLeft') A.photoPrev();
    return;
  }
  if (S.modal) return;
  if (e.key === 'ArrowRight') photoStep(1);
  if (e.key === 'ArrowLeft') photoStep(-1);
});

renderLanding();
