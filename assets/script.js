const LOGIN = { username: 'mai', password: '1442008' };
const songs = [
  { src: 'music/بيتك_كبير.mp3', title: 'بيت كبير', artist: 'من مكتبة مي', note: 'ابدئي بيها وغيّري المود' },
  { src: 'music/جت_على_كرامتي.mp3', title: 'جت على كرامتي', artist: 'من مكتبة مي', note: 'للجو الحماسي الحلو' },
  { src: 'music/ولاد_الهلال.mp3', title: 'ولاد الحلال', artist: 'من مكتبة مي', note: 'وقت تغيير الجو' },
  { src: 'music/يمكن_خير.mp3', title: 'يمكن خير', artist: 'من مكتبة مي', note: 'مود هادي ومريح' },
  { src: 'music/مسافات_اتقابلنا.mp3', title: 'مسافات اتقابلنا', artist: 'من مكتبة مي', note: 'للجو الرايق' },
  { src: 'music/كلمة.mp3', title: 'كلمة', artist: 'من مكتبة مي', note: 'هدوء آخر اليوم' },
  { src: 'music/شفت_كلام.mp3', title: 'شفت كلام', artist: 'من مكتبة مي', note: 'للوقت اللي محتاج هدوء' },
  { src: 'music/طويت_يناوي_مع_سايب_ليفانت.mp3', title: 'طويت يناوي مع سايب ليفانت', artist: 'إضافة سابقة', note: 'إضافة جديدة' },
  { src: 'music/أنا_مش_أناني.mp3', title: 'أنا مش أناني', artist: 'إضافة جديدة', note: 'مود عاطفي' },
  { src: 'music/خلصانة_الحكاية.mp3', title: 'خلصانة الحكاية', artist: 'إضافة جديدة', note: 'لوقت الكلام الكتير' },
  { src: 'music/قولوله_سامح.mp3', title: 'قولوله سامح', artist: 'إضافة جديدة', note: 'مود هادي' },
  { src: 'music/مراية_الحب.mp3', title: 'مراية الحب', artist: 'تامر عاشور', note: 'للمود الهادي' },
  { src: 'music/سكت_ليه.mp3', title: 'سكت ليه', artist: 'إضافة جديدة', note: 'للوقت اللي فيه كلام كتير' },
  { src: 'music/بتفتكرني_ساعات.mp3', title: 'بتفتكرني ساعات', artist: 'رامي صبري', note: 'مود هادي على مهل' },
  { src: 'music/لما_بيوحشني.mp3', title: 'لما بيوحشني', artist: 'رامي صبري', note: 'وقت الحنين' },
  { src: 'music/محبتش.mp3', title: 'محبتش', artist: 'إضافة جديدة', note: 'مزاج هادي' },
  { src: 'music/أنا_بحبك_إنت.mp3', title: 'أنا بحبك إنت', artist: 'رامي صبري', note: 'للقلب على طول' },
  { src: 'music/مستغرب_إنت.mp3', title: 'مستغرب إنت', artist: 'رامي صبري', note: 'مود السهر' },
  { src: 'music/بحكيلك_عن_الأيام.mp3', title: 'بحكيلك عن الأيام', artist: 'رامي صبري', note: 'للحكايات القديمة' }
];
const messages = [
  'يا مي، أنا جنبك علطول… وقت الفرح ووقت اللخبطة ووقت السكوت كمان 🤍',
  'إنتِ تستاهلي كل خير، وكل حاجة حلوة جاية ليكي تستحق إنك تستقبليها بقلب مرتاح ✨',
  'إنتِ أَشطر وأحلى مي… ومهما يومك قال عكس كده، ما تصدقيهوش ♥',
  'اللي يخسرك هو الخسران، حتى لو عرف قيمتك بعدين وندم. إنتِ مش محتاجة حد يثبتلك قيمتك.',
  'أنا شايف فيكي حاجات جميلة يمكن إنتِ مش واخدة بالك منها أصلًا… وده مش هيتغير عشان يوم وحش.',
  'لما الدنيا تضيق، افتكري إنك مش لوحدك. خدي نفس وبعدين كمّلي على مهلك 🌷',
  'إوعي تقللي من نفسك عشان حد ما عرفش يقدّرها. دي مشكلة عنده، مش نقص فيكي.',
  'إنتِ من الناس اللي وجودها بيضيف، وغيابها بيتحس. افتكري ده دايمًا.',
  'خلي الدنيا حلوة كده يا مي… اغنية، حاجة حلوة، شوية ضحك، والباقي يتظبط واحدة واحدة.',
  'مفيش سباق. مفيش امتحان. في يومك إنتِ، وبطريقتك إنتِ، وده كفاية جدًا.',
  'لو النهارده تقيل، بكرة مش لازم يكون شبهه. الحكاية لسه فيها فصول حلوة كتير.',
  'أنا فخور بيكي على كل مرة كملتي فيها وإنتِ مش عارفة هتكملي إزاي.',
  'إنتِ تستاهلي حد يسمعك للآخر، يفهمك، ويطمنك من غير ما يحسسك إنك حمل.',
  'كل مرة شككتي في نفسك، كان المفروض تبصي للحاجات اللي عدّيتيها وتقولي: أنا عملتها قبل كده وهعملها تاني.',
  'وفي الآخر… يا مي، إنتِ غالية. غالية بجد. متنسيش ده.'
];
const letters = [
  { title: 'لو يومك مش حلو…', text: 'يا مي، لو اليوم تقيل عليكي، مش مطلوب منك تكسبيه كله. كفاية تعدّيه بهدوء. إنتِ مش مطالبة تكوني قوية كل دقيقة، وإنتِ مش مطالبة تشرحي تعبك لحد. خدي وقتك، واسمعي أغنية، وأنا هنا جنبك طول ما إنتِ عاوزاني.', sign: '— من صاحبك، اللي شايفك تستاهلي كل خير 🤍' },
  { title: 'عن شطارتك…', text: 'ممكن تتعبي وتنسي إنتِ شاطرة قد إيه. بس أنا شايف. شايف إنك بتكملي، وبتتعلمي، وبتقفي تاني حتى بعد الحاجات اللي كانت ممكن توقعك. إنتِ أَشطر وأقوى من الصوت اللي ساعات يقلل منك.', sign: '— من صاحبك، وممنوع تظلمي نفسك ♥' },
  { title: 'ولو حد ما قدّركيش…', text: 'خسارتك مش بسيطة. وممكن اللي ما عرفش قيمتك دلوقتي يفهمها بعدين ويرجع ندمان، بس المهم إنك ما تعلقيش قيمتك على اعتراف حد. إنتِ قيمة من الأساس، واللي يخسرك هو الخسران.', sign: '— كلمة حق، مش مجاملة ✦' },
  { title: 'عن وجودك…', text: 'وجودك مش حاجة عادية. إنتِ بتسيبي أثر حلو، حتى لو مش واخدة بالك. وعشان كده أنا حاببك تفتحي المكان ده وقت ما تحتاجي تفتكري إن في حد شايفك كويس ومصدق فيكي.', sign: '— من هنا لحد آخر الرسالة، أنا جنبك 🤍' },
  { title: 'خلي الدنيا حلوة…', text: 'مش لازم تستني الدنيا تتحسن لوحدها. خدي منها اللي يعجبك: أغنية تحبيها، صورة حلوة، ضحكة، قهوة، أو حتى قعدة هادية. اعملي مساحة صغيرة للفرحة، حتى لو اليوم كله مش جميل.', sign: '— وأهو المكان ده معمول عشان يساعدك في ده ✨' }
];
const quotes = [
  '“اللي يخسر شخص جميل زيك، هو اللي خسر… ولو فهم متأخر، الندم هيكون عليه مش عليكي.”',
  '“إنتِ مش محتاجة تبقي نسخة أحسن من نفسك… إنتِ محتاجة تبقي أحن على نفسك.”',
  '“إنتِ أَشطر وأحلى مي، حتى في الأيام اللي مش شايفة فيها ده.”',
  '“ممكن يومك يبقى وحش، بس ده مش معناه إنك وحشة أو إن حياتك وحشة.”',
  '“الناس اللي تستاهلك هتفهم قيمتك من غير امتحانات طويلة.”',
  '“كل مرة تختاري فيها نفسك، إنتِ بتقربي من النسخة اللي تستاهل الراحة.”',
  '“أنا جنبك علطول. دي مش جملة وقتية، دي جملة ثابتة.”'
];

const $ = (id) => document.getElementById(id);
const loginScreen = $('loginScreen');
const mainScreen = $('mainScreen');
const toast = $('toast');
const audio = $('audioPlayer');
audio.preload = 'none';

const playlist = $('playlist');
let activeIndex = -1;
let messageTimer = null;

function toastMsg(text){
  toast.textContent = text; toast.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(()=>toast.classList.remove('show'), 3600);
}
function setLoggedIn(yes){
  loginScreen.classList.toggle('hidden', yes);
  mainScreen.classList.toggle('hidden', !yes);
}
function enter(){
  setLoggedIn(true);
  $('username').value = 'mai';
  $('password').value = '';
  $('loginError').textContent = '';
  toastMsg('أهلاً يا مي… مكانك مفتوح 🤍');
}
function leave(){
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  activeIndex = -1;
  renderPlaylist();
  $('nowPlaying').textContent='اختاري أغنية من القائمة';
  $('nowArtist').textContent='مكتبة مي';
  $('sideSong').textContent='موسيقى اليوم';
  $('sideArtist').textContent='اختاري أغنية';
  setLoggedIn(false);
  $('password').value='';
  $('loginError').textContent='';
}

$('loginForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const u = $('username').value.trim(); const p = $('password').value;
  if(u === LOGIN.username && p === LOGIN.password) enter();
  else { $('loginError').textContent='اسم المستخدم أو كلمة المرور مش صح.'; }
});
$('logoutBtn').addEventListener('click', leave);

function renderPlaylist(){
  playlist.innerHTML = songs.map((s,i)=>`<button class="song ${i===activeIndex?'active':''}" data-index="${i}" type="button"><span class="play">${i===activeIndex?'❚❚':'▶'}</span><span class="song-info"><strong>${s.title}</strong><small>${s.artist} · ${s.note}</small></span><span class="song-arrow">♪</span></button>`).join('');
  playlist.querySelectorAll('.song').forEach(btn=>btn.addEventListener('click',()=>playSong(Number(btn.dataset.index))));
}
function playSong(index){
  const s = songs[index];
  if (!s) return;

  activeIndex = index;
  renderPlaylist();

  // حمّل الأغنية عند الضغط فقط، ثم شغّلها مباشرة من نفس ضغطة المستخدم.
  audio.pause();
  audio.preload = 'auto';
  audio.removeAttribute('src');
  audio.load();

  const src = new URL(s.src, document.baseURI).href;
  audio.src = src;
  audio.load();

  $('nowPlaying').textContent = s.title;
  $('nowArtist').textContent = s.artist;
  $('sideSong').textContent = s.title;
  $('sideArtist').textContent = s.artist;

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => toastMsg('اضغطي تشغيل من المشغل لو المتصفح منع التشغيل تلقائيًا.'));
  }
}

renderPlaylist();
audio.addEventListener('error',()=>{
  const err = audio.error;
  console.error('Audio error:', err);
  toastMsg('الأغنية مش متاحة من مكان الملفات الحالي. جرّبي الملف مرة تانية بعد رفع مجلد music كامل.');
});
audio.addEventListener('loadedmetadata',()=>{
  if (activeIndex >= 0) {
    const s = songs[activeIndex];
    $('nowPlaying').textContent = s.title;
    $('nowArtist').textContent = s.artist;
  }
});
audio.addEventListener('ended',()=>{ if(activeIndex < songs.length-1) playSong(activeIndex+1); });
$('randomSongBtn').addEventListener('click',()=>playSong(Math.floor(Math.random()*songs.length)));
$('scrollMusic').addEventListener('click',()=>document.querySelector('#music').scrollIntoView({behavior:'smooth'}));
$('messageBtn').addEventListener('click',()=>{
  const msg = messages[Math.floor(Math.random()*messages.length)];
  toastMsg(msg);
});
$('letterBtn').addEventListener('click',()=>{
  const l = letters[Math.floor(Math.random()*letters.length)];
  $('letterTitle').textContent = l.title;
  $('letterText').textContent = l.text;
  $('letterSign').textContent = l.sign;
  $('quoteText').textContent = quotes[Math.floor(Math.random()*quotes.length)];
  toastMsg('رسالة جديدة وصلت ليكي 💌');

});
$('moodBtn').addEventListener('click',()=>{ toastMsg(messages[Math.floor(Math.random()*messages.length)]); });

document.querySelectorAll('.gallery img').forEach(img=>img.addEventListener('click',()=>{ $('lightboxImg').src=img.src; $('lightbox').classList.remove('hidden'); }));
$('closeLightbox').addEventListener('click',()=>$('lightbox').classList.add('hidden'));
$('lightbox').addEventListener('click',(e)=>{ if(e.target.id==='lightbox') $('lightbox').classList.add('hidden'); });

// Never auto-login. The password is required every time the site is opened after a logout/refresh.
setLoggedIn(false);
