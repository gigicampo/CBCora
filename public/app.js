
const CBC_META = {
  WBC:{name:'White Blood Cell Count',cat:'White Blood Cells',unit:'×10⁹/L',brief:'Shows how many white blood cells are in your blood.',what:'White blood cell count measures the number of white blood cells in your blood. These cells are part of your immune system and help the body respond to infections, inflammation, and other stressors.'},
  RBC:{name:'Red Blood Cell Count',cat:'Red Blood Cells',unit:'×10¹²/L',brief:'Shows how many red blood cells are carrying oxygen.',what:'Red blood cell count measures how many red blood cells are present in a volume of blood. Red blood cells carry oxygen from the lungs to the rest of the body.'},
  HGB:{name:'Hemoglobin',cat:'Red Blood Cells',unit:'g/L',brief:'Shows the oxygen-carrying protein inside red blood cells.',what:'Hemoglobin is a protein inside red blood cells that carries oxygen around the body. Low or high values need interpretation together with the rest of the CBC, symptoms, and medical history.'},
  HCT:{name:'Hematocrit',cat:'Red Blood Cells',unit:'L/L',brief:'Shows the proportion of your blood made up of red blood cells.',what:'Hematocrit estimates the proportion of your blood that is made up of red blood cells. It is often interpreted together with hemoglobin and red blood cell count.'},
  MCV:{name:'Mean Corpuscular Volume',cat:'Red Blood Cells',unit:'fL',brief:'Shows the average size of your red blood cells.',what:'MCV describes the average size of your red blood cells. It helps clinicians understand whether red blood cells are smaller, normal sized, or larger than expected.'},
  MCH:{name:'Mean Corpuscular Hemoglobin',cat:'Red Blood Cells',unit:'pg',brief:'Shows the average hemoglobin amount in each red blood cell.',what:'MCH estimates the average amount of hemoglobin in each red blood cell. It is usually reviewed together with MCV and MCHC.'},
  MCHC:{name:'Mean Corpuscular Hemoglobin Concentration',cat:'Red Blood Cells',unit:'g/L',brief:'Shows the average hemoglobin concentration inside red blood cells.',what:'MCHC estimates the average concentration of hemoglobin inside red blood cells. It helps describe how concentrated the hemoglobin is inside each cell.'},
  RDW:{name:'Red Cell Distribution Width',cat:'Red Blood Cells',unit:'%',brief:'Shows how much your red blood cells vary in size.',what:'RDW reflects how much red blood cells vary in size. It is commonly used together with MCV and hemoglobin to give context to red blood cell patterns.'},
  PLT:{name:'Platelet Count',cat:'Platelets',unit:'×10⁹/L',brief:'Shows how many platelets help your blood clot.',what:'Platelets are cell fragments that help blood clot. A platelet result is interpreted with symptoms such as bruising, bleeding, or clotting concerns and with other clinical information.'},
  MPV:{name:'Mean Platelet Volume',cat:'Platelets',unit:'fL',brief:'Shows the average size of your platelets.',what:'Mean platelet volume estimates the average size of platelets. It is usually considered together with platelet count and the rest of the clinical picture.'},
  NEUT:{name:'Neutrophils',cat:'White Blood Cells',unit:'%',brief:'Shows one major white blood cell type that fights infection.',what:'Neutrophils are a type of white blood cell involved in the body’s immune response. They are often discussed when clinicians review possible infection, inflammation, medicine effects, or bone marrow suppression.'},
  LYMPH:{name:'Lymphocytes',cat:'White Blood Cells',unit:'%',brief:'Shows white blood cells involved in immune defense.',what:'Lymphocytes are white blood cells involved in immune defense. Their context depends on the rest of the CBC, the differential, symptoms, and sometimes other tests.'},
  MONO:{name:'Monocytes',cat:'White Blood Cells',unit:'%',brief:'Shows white blood cells involved in cleanup and immune response.',what:'Monocytes are white blood cells that help remove damaged tissue and support immune defense. They are interpreted with the rest of the differential and your clinical context.'},
  EOS:{name:'Eosinophils',cat:'White Blood Cells',unit:'%',brief:'Shows white blood cells often linked with allergies or parasites.',what:'Eosinophils are white blood cells that can be affected by allergies, asthma, some skin conditions, medicines, parasites, and other causes.'},
  BASO:{name:'Basophils',cat:'White Blood Cells',unit:'%',brief:'Shows a small white blood cell group involved in immune reactions.',what:'Basophils are a less common white blood cell type involved in immune and inflammatory responses. Their value is usually reviewed together with the rest of the CBC differential.'}
};

const sample = [
  ['WBC',7.4,4.0,11.0],['RBC',4.34,4.0,5.2],['HGB',112,120,160],['HCT',0.35,0.35,0.47],['MCV',78,80,100],['MCH',27,27,33],['MCHC',322,320,360],['RDW',14.1,11.5,14.5],['PLT',271,150,400],['MPV',9.8,7.5,11.5],['NEUT',61,40,75],['LYMPH',30,20,45],['MONO',6,2,8],['EOS',2,0,6],['BASO',1,0,2]
].map(([code,value,low,high])=>({code,value,low,high,unit:CBC_META[code].unit}));

function shiftValues(values, shifts){
  return values.map(r=>({...r,value:(r.code in shifts)?shifts[r.code]:r.value}));
}
const test5 = shiftValues(sample,{HGB:129,MCV:83,WBC:6.8,PLT:248,RBC:4.62,HCT:0.39,MCH:28,NEUT:58,LYMPH:32,MPV:9.2});
const test4 = shiftValues(sample,{HGB:125,MCV:81,WBC:7.1,PLT:255,RBC:4.54,HCT:0.38,MCH:28,NEUT:60,LYMPH:31,MPV:9.4});
const test3 = shiftValues(sample,{HGB:118,MCV:79,WBC:6.9,PLT:262,RBC:4.45,HCT:0.36,MCH:27,NEUT:59,LYMPH:30,MPV:9.5});
const test2 = shiftValues(sample,{HGB:115,MCV:79,WBC:7.2,PLT:266,RBC:4.39,HCT:0.36,MCH:27,NEUT:60,LYMPH:30,MPV:9.7});
const test1 = JSON.parse(JSON.stringify(sample));

const defaultAvatar = '/icon.svg';
const state = {
  currentView:'splash',
  selectedCode:'HGB',
  draft:JSON.parse(JSON.stringify(sample)),
  results:[
    {id:5,date:'2026-09-15',lab:'Sample Community Laboratory',values:test1},
    {id:4,date:'2026-08-10',lab:'Sample Community Laboratory',values:test2},
    {id:3,date:'2026-06-12',lab:'Sample Community Laboratory',values:test3},
    {id:2,date:'2026-04-20',lab:'Sample Community Laboratory',values:test4},
    {id:1,date:'2026-03-03',lab:'Sample Community Laboratory',values:test5}
  ],
  uploadedFile:null,
  profile:{
    name:'Maria',
    fullName:'Maria Santos',
    dob:'1990-06-12',
    age:'36',
    sex:'Female',
    bloodType:'O+',
    email:'maria@example.com',
    phone:'+63 912 345 6789',
    city:'Majayjay, Laguna',
    photo:defaultAvatar,
    localOnly:true
  },
  splashShown:false,
};

const app = document.getElementById('app');
const infoDialog = document.getElementById('infoDialog');
const topbar = document.querySelector('.topbar');
const bottomNav = document.querySelector('.bottom-nav');

document.getElementById('helpBtn').addEventListener('click',()=>infoDialog.showModal());
document.querySelectorAll('.dialog-close,.dialog-close-action').forEach(b=>b.addEventListener('click',()=>infoDialog.close()));

document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-nav]');
  if(nav){navigate(nav.dataset.nav);return;}
  const metric=e.target.closest('[data-metric]');
  if(metric){state.selectedCode=metric.dataset.metric;navigate('detail');return;}
  const history=e.target.closest('[data-history]');
  if(history){renderHistoryDetail(Number(history.dataset.history));return;}
  const guide=e.target.closest('[data-guide]');
  if(guide){state.selectedCode=guide.dataset.guide;navigate('guidance');return;}
});

function navigate(view){
  state.currentView=view;
  const splashMode=view==='splash';
  topbar.classList.toggle('hidden', splashMode);
  bottomNav.classList.toggle('hidden', splashMode);
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.nav===view));
  const renderers={splash:renderSplash,home:renderHome,results:renderResults,scan:renderScan,ocr:renderOCR,trends:renderTrends,profile:renderProfile,summary:renderSummary,review:renderReview,detail:renderDetail,guidance:renderGuidance,compare:renderCompare};
  (renderers[view]||renderHome)();
  if(!splashMode){app.focus({preventScroll:true});window.scrollTo({top:0,behavior:'smooth'});}
}

function statusOf(r){return Number(r.value)<Number(r.low)?'low':Number(r.value)>Number(r.high)?'high':'ok'}
function statusText(s){return s==='low'?'↓ Below Range':s==='high'?'↑ Above Range':'✓ Within Range'}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function formatDate(d){return new Date(d+'T00:00:00').toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}
function shortDate(d){return new Date(d+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'})}
function summaryCounts(values){return values.reduce((a,r)=>{a[statusOf(r)]++;return a},{ok:0,low:0,high:0})}
function currentValues(){return state.draft.length?state.draft:(state.results[0]?.values||[])}
function currentMetric(){const vals=currentValues();return vals.find(x=>x.code===state.selectedCode)||vals[0]||sample[0]}
function redCellCodes(){return ['RBC','HGB','HCT','MCV','MCH','MCHC','RDW']}
function whiteCellCodes(){return ['WBC','NEUT','LYMPH','MONO','EOS','BASO']}
function plateletCodes(){return ['PLT','MPV']}
function getProfileStat(label,value){return `<div class="profile-stat"><small>${label}</small><strong>${escapeHtml(value||'—')}</strong></div>`}

function renderSplash(){
  app.innerHTML=`<section class="splash-screen" aria-label="CBCora title page"><div class="splash-center"><img src="icon.svg" class="splash-logo" alt="CBCora logo"><h1 class="splash-title">CBCora</h1><p class="splash-tag">Your CBC, made clearer.</p><div class="loading-dots" aria-hidden="true"><span></span><span></span><span></span></div></div></section>`;
  if(!state.splashShown){
    state.splashShown=true;
    setTimeout(()=>navigate('home'),2500);
  }
}

function recommendationPack(code,status){
  const meta=CBC_META[code]||{name:code};
  const redCellLow = {
    note:'Low red-cell related results can have many causes. These suggestions are general education only and are not a diagnosis or a substitute for clinician advice.',
    take:['Iron-rich foods such as lean red meat, liver if appropriate for you, sardines, beans, lentils, tofu, spinach, and iron-fortified cereals.','Vitamin C-rich foods such as citrus, guava, bell pepper, tomatoes, or calamansi with meals may help the body absorb non-heme iron.','B12 and folate sources such as eggs, dairy, fish, meat, leafy greens, beans, and fortified foods may be useful when dietary intake is low.'],
    avoid:['Tea or coffee taken with iron-rich meals, because they can reduce iron absorption from food.','Self-starting iron supplements without knowing the cause, especially if you have a history of iron overload or are already under treatment.','Excess alcohol if your clinician has told you it may worsen nutrition or blood results.'],
    do:['Bring up fatigue, dizziness, shortness of breath, heavy periods, black stools, or other bleeding symptoms with your clinician.','Take supplements only if they are prescribed or recommended for your situation.','Use the trend page to compare hemoglobin, MCV, MCH, and RDW together rather than looking at a single number alone.'],
    dont:['Do not assume low results always mean iron deficiency.','Do not ignore urgent symptoms such as chest pain, fainting, severe weakness, or shortness of breath.','Do not rely on food changes alone if you have a large or fast drop in values.'],
    visuals:[
      {image:'/assets/iron-rich-foods.png',title:'Iron-rich foods',text:'Show a realistic plate with greens, beans, and protein to support red blood cell nutrition.'},
      {image:'/assets/vitamin-c-foods.png',title:'Vitamin C pairings',text:'Use a realistic citrus or fruit image to explain meal pairings that can support iron absorption.'},
      {image:'/assets/doctor-visit.png',title:'Doctor questions',text:'A doctor-visit image helps users remember symptoms or questions to discuss.'}
    ]
  };
  const redCellHigh = {
    note:'Higher red-cell related results can happen for several reasons, including dehydration and smoking. Interpretation depends on the whole CBC and your health background.',
    take:['Water and regular fluids if you may be dehydrated.','A balanced diet instead of adding iron supplements unless a clinician recommends them.','Regular meals and good sleep habits while waiting for clinical interpretation.'],
    avoid:['Smoking or vaping if possible, since they can affect oxygen delivery and some blood count patterns.','Dehydration, especially before repeat blood work.','Unnecessary iron supplements unless prescribed.'],
    do:['Tell your clinician about snoring, sleep apnea, smoking, lung issues, high-altitude exposure, testosterone use, or dehydration.','Repeat labs only as advised, especially if the result may have been influenced by hydration or timing.','Review hemoglobin, hematocrit, and RBC together.'],
    dont:['Do not try to lower blood counts with over-the-counter products on your own.','Do not ignore headaches, chest pain, breathing difficulty, or signs of clotting risk.','Do not assume a single high value explains how you feel.'],
    visuals:[
      {image:'/assets/hydration.png',title:'Hydration support',text:'A realistic water image visually reinforces hydration before repeat testing when appropriate.'},
      {image:'/assets/no_smoke.svg',title:'Avoid smoking',text:'Use a no-smoking image when discussing lifestyle factors that can affect some CBC patterns.'},
      {image:'/assets/rest-recovery.png',title:'Rest and oxygen support',text:'A rest or sleep image can support discussion of sleep and breathing factors.'}
    ]
  };
  const whiteLow = {
    note:'Low white-cell related results may be temporary or may need follow-up. Food cannot correct every cause, so safety and clinical context matter.',
    take:['Protein-rich foods and balanced meals to support overall nutrition.','Foods with folate, B12, copper, and zinc such as beans, greens, eggs, seafood, meat, seeds, and fortified foods if dietary intake is poor.','Plenty of fluids and regular meals if you are recovering from illness or not eating well.'],
    avoid:['Raw or undercooked meat, eggs, seafood, or unwashed produce if your clinician told you your immune system is low.','Large crowds or sick contacts when you are feeling unwell, especially if your clinician has advised infection precautions.','Self-treating suspected infection with leftover antibiotics.'],
    do:['Report fever, mouth sores, persistent infection symptoms, or chills promptly, especially if you were told your counts are low.','Review medicines with your clinician because some drugs can affect white blood cells.','Practice handwashing and food safety.'],
    dont:['Do not assume immune-boosting supplements are safe or necessary.','Do not delay medical advice if fever or severe illness occurs.','Do not rely on one number without the full differential and clinical history.'],
    visuals:[
      {image:'/assets/handwashing.png',title:'Handwashing',text:'A realistic handwashing image is helpful for low white-cell safety reminders.'},
      {image:'/assets/food_safety.svg',title:'Food safety',text:'A food safety image can remind users about properly cooked food and washed produce.'},
      {image:'/assets/thermometer.svg',title:'When to call for fever',text:'A fever image highlights when prompt medical advice matters.'}
    ]
  };
  const whiteHigh = {
    note:'A higher white-cell related result can happen with infection, inflammation, stress, medicines, or other causes. Food alone does not identify the reason.',
    take:['Adequate fluids and regular meals while you recover from minor illness if your clinician agrees.','A balanced diet focused on fruits, vegetables, protein, and enough rest.','Any prescribed treatment exactly as directed by your clinician.'],
    avoid:['Assuming a high count automatically means a serious disease.','Starting antibiotics, steroids, or supplements without medical advice.','Ignoring symptoms such as fever, significant pain, or worsening illness.'],
    do:['Monitor symptoms and share them with your clinician.','Tell your clinician about recent infection, stress, steroid use, or smoking because these may affect white blood cell patterns.','Use the history page to see whether the count is new, improving, or persistent.'],
    dont:['Do not use the app to decide whether you need antibiotics.','Do not treat a single raised value as a final answer.','Do not ignore emergency symptoms such as confusion, breathing difficulty, or severe weakness.'],
    visuals:[
      {image:'/assets/rest-recovery.png',title:'Rest and recovery',text:'A realistic rest image keeps the guidance calm and practical.'},
      {image:'/assets/hydration.png',title:'Hydration and recovery',text:'A water image supports simple self-care while awaiting professional advice.'},
      {image:'/assets/doctor-visit.png',title:'Symptom check-in',text:'A doctor-visit image encourages users to track fever, cough, pain, or inflammation.'}
    ]
  };
  const plateletLow = {
    note:'Low platelet-related results can raise bleeding concerns in some situations. General nutrition can support health, but it is important to follow medical advice.',
    take:['Balanced meals with folate, B12, iron, and protein if intake is poor.','Hydration and regular meals to support overall recovery.','Prescribed treatment and follow-up exactly as directed.'],
    avoid:['Alcohol if your clinician has said it may worsen platelet problems.','Aspirin, ibuprofen, or similar medicines unless your clinician says they are safe for you.','Activities with high injury risk if your platelet count is significantly low or you are bruising or bleeding.'],
    do:['Watch for unusual bruising, nosebleeds, gum bleeding, black stools, or very heavy periods.','Use a soft toothbrush and take care to prevent cuts if advised by your clinician.','Seek prompt advice if bleeding is severe or persistent.'],
    dont:['Do not start herbal products marketed for platelets without checking safety.','Do not ignore bleeding symptoms.','Do not rely on diet alone when platelets are significantly low.'],
    visuals:[
      {image:'/assets/bleeding_safety.svg',title:'Bleeding safety',text:'Use a realistic safety image to reinforce bruising and bleeding precautions.'},
      {image:'/assets/doctor-visit.png',title:'Medicine caution',text:'A medicine or checklist image helps users remember to ask before taking NSAIDs.'},
      {image:'/assets/rest-recovery.png',title:'Gentle daily care',text:'A calm daily-care image supports reminders to prevent cuts and injuries.'}
    ]
  };
  const plateletHigh = {
    note:'Higher platelet-related results can happen with inflammation, iron deficiency, surgery, or other causes. The cause matters more than the number alone.',
    take:['Good hydration and a balanced diet.','Follow-up testing if your clinician wants to recheck platelets after illness or treatment.','Treatment for the underlying cause if identified by your clinician.'],
    avoid:['Smoking and dehydration if possible.','Starting blood-thinning medication or supplements on your own.','Assuming a single high platelet-related result always means a chronic problem.'],
    do:['Discuss recent infection, inflammation, surgery, and iron deficiency with your clinician.','Stay active as appropriate for your health status.','Use the trend page to see whether the result is persistent or temporary.'],
    dont:['Do not ignore symptoms such as severe headache, chest pain, or one-sided swelling.','Do not self-medicate to lower platelets.','Do not interpret the number without the rest of the CBC and your symptoms.'],
    visuals:[
      {image:'/assets/hydration.png',title:'Hydration support',text:'A realistic water image remains a useful neutral reminder.'},
      {image:'/assets/gentle-walking.png',title:'Gentle movement',text:'An activity image supports the message of staying active when appropriate.'},
      {image:'/assets/doctor-visit.png',title:'Underlying causes',text:'A checklist image helps users think about infection, inflammation, or iron deficiency.'}
    ]
  };
  const normal = {
    note:'A result within range is reassuring, but it still needs context from symptoms, health history, and the rest of the CBC.',
    take:['Balanced meals with vegetables, fruits, protein, and enough fluids.','Regular sleep, movement, and routine follow-up when recommended.','Use the trend page to keep track of changes over time.'],
    avoid:['Assuming normal means every health concern is explained.','Repeated self-testing without a clinical reason.','Major supplement changes without a clear need.'],
    do:['Keep copies of your reports and compare them over time.','Note any symptoms you want to discuss at your visit.','Continue any treatment plan prescribed for you.'],
    dont:['Do not use one normal result to dismiss urgent symptoms.','Do not stop medicines without medical guidance.','Do not rely on the app as a diagnosis tool.'],
    visuals:[
      {image:'/assets/balanced-meal.png',title:'Balanced meals',text:'Use realistic food images to represent an overall balanced, supportive diet.'},
      {image:'/assets/gentle-walking.png',title:'Regular movement',text:'An activity image reinforces healthy routine and daily movement.'},
      {image:'/assets/doctor-visit.png',title:'Keep tracking',text:'A note or trend image reinforces long-term tracking and discussion.'}
    ]
  };

  if(status==='ok') return normal;
  if(redCellCodes().includes(code)) return status==='low' ? redCellLow : redCellHigh;
  if(whiteCellCodes().includes(code)) return status==='low' ? whiteLow : whiteHigh;
  if(plateletCodes().includes(code)) return status==='low' ? plateletLow : plateletHigh;
  return normal;
}

function quickPreviewCards(pack){
  const cards = [
    {label:'Best to include',text:pack.take[0],image:pack.visuals[0]?.image},
    {label:'Avoid or limit',text:pack.avoid[0],image:pack.visuals[1]?.image || pack.visuals[0]?.image},
    {label:'Best to do',text:pack.do[0],image:pack.visuals[2]?.image || pack.visuals[0]?.image}
  ];
  return `<div class="preview-grid">${cards.map(c=>`<article class="preview-card"><img src="${c.image}" alt="${escapeHtml(c.label)} illustration"><div><span class="preview-label">${c.label}</span><p>${c.text}</p></div></article>`).join('')}</div>`;
}

function sparklineSvg(points, width=140, height=48, pad=6){
  if(!points.length) return '';
  const values = points.map(p=>Number(p.value));
  const min = Math.min(...values), max = Math.max(...values), span = Math.max(1, max-min);
  const coords = points.map((p,i)=>{
    const x = pad + i * ((width - pad*2) / Math.max(1, points.length - 1));
    const y = height - pad - ((Number(p.value)-min)/span) * (height - pad*2);
    return {x,y,value:p.value,date:p.date};
  });
  const poly = coords.map(p=>`${p.x},${p.y}`).join(' ');
  return `<svg viewBox="0 0 ${width} ${height}" class="mini-spark" aria-hidden="true"><polyline points="${poly}"></polyline>${coords.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="${i===coords.length-1?3.6:2.8}"></circle>`).join('')}</svg>`;
}

function latestResultsSlice(n=5){
  return state.results.slice(0,n);
}

function normalizedRangePosition(r){
  const low=Number(r.low), high=Number(r.high), value=Number(r.value);
  const span=Math.max(0.000001,high-low);
  const raw=25+((value-low)/span)*50;
  return Math.max(2,Math.min(98,raw));
}

function combinedCBCTrendChart(){
  const recent=latestResultsSlice(5).slice().reverse();
  if(!recent.length) return '<p class="muted">No CBC trend data yet.</p>';
  const codes=Object.keys(CBC_META).filter(code=>recent.some(rec=>rec.values.some(v=>v.code===code)));
  const palette=['#8D1F2D','#B53D4D','#D56A74','#A75261','#7B3140','#C8848D','#9E5E68','#6F1622','#D99099','#A92F40','#C76370','#7D4550','#B97882','#934858','#C44D5D'];
  const w=920,h=330,padL=48,padR=22,padT=34,padB=50;
  const plotW=w-padL-padR,plotH=h-padT-padB;
  const xAt=i=>padL+i*(plotW/Math.max(1,recent.length-1));
  const yAt=score=>padT+(100-score)/100*plotH;
  const yLow=yAt(25), yHigh=yAt(75), yMid=yAt(50);
  const dateLabels=recent.map((r,i)=>`<text class="combined-axis-label" x="${xAt(i)}" y="${h-15}" text-anchor="middle">${new Date(r.date+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'})}</text>`).join('');
  const verticalGrid=recent.map((r,i)=>`<line x1="${xAt(i)}" y1="${padT}" x2="${xAt(i)}" y2="${h-padB}" class="soft-grid-line"/>`).join('');
  const series=codes.map((code,idx)=>{
    const color=palette[idx%palette.length];
    const pts=recent.map((rec,i)=>{
      const r=rec.values.find(v=>v.code===code);
      if(!r) return null;
      return {x:xAt(i),y:yAt(normalizedRangePosition(r)),r,date:rec.date};
    }).filter(Boolean);
    if(!pts.length) return '';
    const poly=pts.map(p=>`${p.x},${p.y}`).join(' ');
    const area=`${pts[0].x},${h-padB} ${poly} ${pts[pts.length-1].x},${h-padB}`;
    const points=pts.map(p=>{
      const outside=statusOf(p.r)!=='ok';
      const title=`${code}: ${p.r.value} ${p.r.unit} on ${formatDate(p.date)} — ${statusText(statusOf(p.r)).replace(/[↓↑✓]\s*/,'')}`;
      return outside
        ? `<g class="outlier-point"><circle cx="${p.x}" cy="${p.y}" r="8.5" fill="#FFF7F8" stroke="#8D1F2D" stroke-width="3.5"><title>${escapeHtml(title)}</title></circle><circle cx="${p.x}" cy="${p.y}" r="3.8" fill="${color}"><title>${escapeHtml(title)}</title></circle></g>`
        : `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#fff" stroke="${color}" stroke-width="2.8"><title>${escapeHtml(title)}</title></circle>`;
    }).join('');
    return `<polygon points="${area}" fill="${color}" opacity=".075"/><polyline points="${poly}" fill="none" stroke="${color}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" opacity=".96"/>${points}`;
  }).join('');
  const legend=codes.map((code,idx)=>{
    const color=palette[idx%palette.length];
    return `<button class="aesthetic-legend-item" data-metric="${code}" title="Open ${escapeHtml(CBC_META[code].name)}"><span class="legend-dot" style="--legend-color:${color}"></span><span>${code}</span></button>`;
  }).join('');
  return `<div class="combined-chart-wrap aesthetic-chart-card">
    <div class="combined-chart-header"><div><span class="chart-kicker">CBC OVERVIEW</span><p>Each area is normalized to its own lab range so all CBC measures can share one view.</p></div><button class="text-btn" data-nav="trends">See details</button></div>
    <div class="chart-key"><span><i class="key-band"></i>Reference range</span><span><i class="key-alert"></i>Outside range</span></div>
    <div class="combined-svg-scroll"><svg class="combined-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Combined CBC trends for the last five tests">
      <defs>
        <linearGradient id="cbcRangeGlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF1F3"/><stop offset="100%" stop-color="#FFF9FA"/></linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#8D1F2D" flood-opacity="0.10"/></filter>
      </defs>
      <rect x="${padL}" y="${yHigh}" width="${plotW}" height="${yLow-yHigh}" rx="18" fill="url(#cbcRangeGlow)"/>
      ${verticalGrid}
      <line x1="${padL}" y1="${yHigh}" x2="${w-padR}" y2="${yHigh}" class="range-line"/>
      <line x1="${padL}" y1="${yMid}" x2="${w-padR}" y2="${yMid}" class="mid-line"/>
      <line x1="${padL}" y1="${yLow}" x2="${w-padR}" y2="${yLow}" class="range-line"/>
      <text x="${padL-8}" y="${yHigh+4}" text-anchor="end" class="combined-axis-label">High</text>
      <text x="${padL-8}" y="${yMid+4}" text-anchor="end" class="combined-axis-label">Mid</text>
      <text x="${padL-8}" y="${yLow+4}" text-anchor="end" class="combined-axis-label">Low</text>
      ${dateLabels}${series}
    </svg></div>
    <div class="aesthetic-legend">${legend}</div>
  </div>`;
}
function renderHome(){
  const latest=state.results[0], c=latest?summaryCounts(latest.values):{ok:0,low:0,high:0};
  app.innerHTML=`
    <section class="hero premium-hero">
      <button class="home-gear-btn" data-nav="profile" aria-label="Profile settings" title="Profile settings">⚙</button>
      <div class="hero-profile">
        <img src="${state.profile.photo}" alt="${escapeHtml(state.profile.name)} photo" class="hero-avatar">
        <div>
          <p class="eyebrow">CBC Companion</p>
          <h1>Welcome back, ${escapeHtml(state.profile.name)}</h1>
          <p class="muted">A clearer, more personal way to track, understand, and discuss your CBC results.</p>
        </div>
      </div>
      ${combinedCBCTrendChart()}
      <div class="hero-actions single-action">
        <button class="btn primary scan-primary" data-nav="scan">📷 Scan a CBC Result</button>
      </div>
    </section>
    <div class="dashboard-grid">
      <section class="card highlight-card">
        <div class="section-head compact"><h2>Latest CBC</h2><button class="text-btn" data-nav="results">View history</button></div>
        ${latest?`
        <p class="history-date">${formatDate(latest.date)}</p><h3>${escapeHtml(latest.lab)}</h3>
        <div class="stat-row">
          <div class="stat"><strong>${c.ok}</strong><small>Within range</small></div>
          <div class="stat"><strong>${c.low}</strong><small>Below range</small></div>
          <div class="stat"><strong>${c.high}</strong><small>Above range</small></div>
        </div>
        <button class="btn secondary full" style="margin-top:14px" data-nav="summary">View CBC Summary</button>`:`<p class="muted">No CBC results saved yet.</p><button class="btn primary full" data-nav="scan">Add your first CBC</button>`}
      </section>
      <section class="card personal-card">
        <div class="section-head compact"><h2>Your profile</h2><button class="text-btn" data-nav="profile">Open</button></div>
        <div class="profile-quick-grid">
          ${getProfileStat('Full name',state.profile.fullName)}
          ${getProfileStat('Age',state.profile.age)}
          ${getProfileStat('Sex',state.profile.sex)}
          ${getProfileStat('Blood type',state.profile.bloodType)}
        </div>
      </section>
      <section class="card feature-card">
        <div class="feature-icon">📚</div>
        <div><h3>Guidance now included</h3><p class="muted">Open each CBC result to see quick food and lifestyle preview cards, then view the full guidance page with realistic illustrations.</p></div>
      </section>
      <section class="card soft privacy"><span>🔒</span><div><strong>Privacy first</strong><p class="muted">This prototype keeps its demo data in your browser session. Production builds can support local-only storage and explicit cloud backup.</p></div></section>
    </div>`;
}

function renderScan(){
  app.innerHTML=`<p class="eyebrow">Add CBC Result</p><h1>Scan or upload your report</h1><p class="muted">Review every detected value before saving. Lab formats vary, so automatic extraction should never bypass your confirmation.</p>
  <section class="upload-zone">
    <div class="upload-icon">📄</div><h2>Choose a CBC report</h2><p class="muted">Photo, image, or PDF</p>
    <input id="fileInput" type="file" accept="image/*,.pdf,application/pdf" capture="environment" />
    <label for="fileInput" class="btn primary">Choose File / Camera</label>
    <p id="fileName" class="muted" style="margin-top:12px"></p>
  </section>
  <div class="choice-grid">
    <button class="choice" id="sampleBtn"><strong>Try Sample CBC</strong><small>Explore the complete app flow using demo values.</small></button>
    <button class="choice" id="manualBtn"><strong>Enter Manually</strong><small>Type values exactly as printed on your lab report.</small></button>
  </div>
  <div class="notice"><strong>Important:</strong> CBCora compares values with the reference ranges entered from the report. A result outside that range does not by itself identify a medical condition.</div>`;
  document.getElementById('fileInput').addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;state.uploadedFile=f;document.getElementById('fileName').textContent=`Selected: ${f.name}`;
    setTimeout(()=>{state.draft=JSON.parse(JSON.stringify(sample));navigate('review')},250);
  });
  document.getElementById('sampleBtn').addEventListener('click',()=>{state.draft=JSON.parse(JSON.stringify(sample));navigate('review')});
  document.getElementById('manualBtn').addEventListener('click',()=>{state.draft=[{code:'HGB',value:'',low:'',high:'',unit:'g/L'}];navigate('review')});
}

function renderReview(){
  app.innerHTML=`<p class="eyebrow">Review</p><h1>Check every detected value</h1><p class="muted">Correct the measurement, unit, and reference range to match your report before continuing.</p>
  <section class="card" id="editList">${state.draft.map((r,i)=>editRow(r,i)).join('')}</section>
  <button class="btn ghost full" id="addRow">＋ Add CBC measurement</button>
  <button class="btn primary full" style="margin-top:10px" id="continueReview">Continue to Summary</button>`;
  bindReview();
}
function editRow(r,i){return `<div class="result-edit" data-index="${i}">
  <div class="field name-field"><label>Test</label><select data-key="code">${Object.keys(CBC_META).map(c=>`<option ${c===r.code?'selected':''}>${c}</option>`).join('')}</select></div>
  <div class="field"><label>Result</label><input inputmode="decimal" data-key="value" value="${escapeHtml(r.value)}"></div>
  <div class="field"><label>Low</label><input inputmode="decimal" data-key="low" value="${escapeHtml(r.low)}"></div>
  <div class="field"><label>High</label><input inputmode="decimal" data-key="high" value="${escapeHtml(r.high)}"></div>
  <button class="remove-btn" aria-label="Remove row">×</button></div>`}
function bindReview(){
  app.querySelectorAll('[data-key]').forEach(el=>el.addEventListener('input',e=>{
    const i=Number(e.target.closest('.result-edit').dataset.index),key=e.target.dataset.key;
    state.draft[i][key]=key==='code'?e.target.value:Number(e.target.value);
    if(key==='code')state.draft[i].unit=CBC_META[e.target.value].unit;
  }));
  app.querySelectorAll('.remove-btn').forEach(b=>b.addEventListener('click',e=>{const i=Number(e.target.closest('.result-edit').dataset.index);state.draft.splice(i,1);renderReview()}));
  document.getElementById('addRow').addEventListener('click',()=>{state.draft.push({code:'WBC',value:'',low:'',high:'',unit:'×10⁹/L'});renderReview()});
  document.getElementById('continueReview').addEventListener('click',()=>{
    state.draft=state.draft.filter(r=>Number.isFinite(Number(r.value))&&r.value!==''&&Number.isFinite(Number(r.low))&&Number.isFinite(Number(r.high))).map(r=>({...r,value:Number(r.value),low:Number(r.low),high:Number(r.high),unit:CBC_META[r.code]?.unit||r.unit}));
    navigate('summary');
  });
}

function renderSummary(){
  const vals=currentValues(),c=summaryCounts(vals);
  const groups={};vals.forEach(r=>{const cat=CBC_META[r.code]?.cat||'Other';(groups[cat]??=[]).push(r)});
  app.innerHTML=`<p class="eyebrow">CBC Summary</p><h1>Your results at a glance</h1>
  <section class="card"><div class="stat-row"><div class="stat"><strong>${c.ok}</strong><small>Within range</small></div><div class="stat"><strong>${c.low}</strong><small>Below range</small></div><div class="stat"><strong>${c.high}</strong><small>Above range</small></div></div></section>
  <div class="notice">${c.low+c.high} result${c.low+c.high===1?'':'s'} ${c.low+c.high===1?'is':'are'} outside the reference range entered from this report. This alone does not establish a diagnosis.</div>
  ${Object.entries(groups).map(([cat,rows])=>`<h3 class="category-title">${cat}</h3><div class="metric-stack">${rows.map(metricCard).join('')}</div>`).join('')}
  <button class="btn primary full" style="margin-top:16px" id="saveResult">Save to CBC History</button>`;
  document.getElementById('saveResult').addEventListener('click',()=>{
    const today=new Date().toISOString().slice(0,10);
    state.results.unshift({id:Date.now(),date:today,lab:'New CBC Report',values:JSON.parse(JSON.stringify(vals))});
    state.results=state.results.slice(0,20);
    state.draft=JSON.parse(JSON.stringify(vals));
    navigate('results');
  });
}
function metricCard(r){
  const s=statusOf(r),meta=CBC_META[r.code]||{name:r.code,brief:'CBC measurement',what:'This is a CBC measurement.'};
  return `<article class="metric-card">
    <div class="metric-grid">
      <div class="metric-main">
        <strong>${r.code} · ${meta.name}</strong>
        <p class="metric-brief">${meta.brief}</p>
        <small>Reference ${r.low}–${r.high} ${r.unit}</small>
      </div>
      <div class="metric-value">
        <b>${r.value} ${r.unit}</b>
        <span class="badge ${s}">${statusText(s)}</span>
      </div>
    </div>
    <details class="meaning-box"><summary>▼ Full meaning</summary><p>${meta.what}</p></details>
    <div class="card-inline-note">Guidance preview available for this result.</div>
    <div class="metric-actions"><button class="mini-btn" data-metric="${r.code}">Open result</button><button class="mini-btn ghost-mini" data-guide="${r.code}">Guidance</button></div>
  </article>`
}

function renderDetail(){
  const r=currentMetric(),m=CBC_META[r.code]||{name:r.code,brief:'CBC measurement',what:'This is a CBC measurement.'},s=statusOf(r),pack=recommendationPack(r.code,s);
  app.innerHTML=`<button class="text-btn" data-nav="summary">‹ Back to summary</button><p class="eyebrow">${r.code}</p><h1>${m.name}</h1>
  <section class="card"><div class="detail-number">${r.value} <span style="font-size:18px;font-weight:600">${r.unit}</span></div><span class="badge ${s}">${statusText(s)}</span><div class="range-box"><strong>Reference range from this report</strong><p>${r.low}–${r.high} ${r.unit}</p></div><p class="metric-brief large">${m.brief}</p></section>
  <section class="card"><h2>What is ${r.code}?</h2><p>${m.what}</p><p class="muted">Values can be affected by many factors. Interpretation depends on your symptoms, history, medications, hydration, laboratory method, and other test results.</p></section>
  <section class="card"><h2>Quick guidance preview</h2><p class="muted">This preview appears directly on the result page for faster guidance.</p>${quickPreviewCards(pack)}<button class="btn secondary full" data-guide="${r.code}" style="margin-top:14px">View full food & lifestyle guidance</button></section>
  <section class="card"><h2>Questions for your healthcare professional</h2><div class="question-list">
    <label class="question"><input type="checkbox"> <span>Is this difference important for me?</span></label>
    <label class="question"><input type="checkbox"> <span>Should this CBC be repeated?</span></label>
    <label class="question"><input type="checkbox"> <span>Are additional tests needed to understand this result?</span></label>
    <label class="question"><input type="checkbox"> <span>How does this compare with my previous CBC?</span></label>
  </div></section>`;
}

function helpfulTipDescription(title,code,status){
  const key=title.toLowerCase();
  if(key.includes('iron')) return 'Choose iron-containing foods as part of balanced meals when appropriate. Food can support nutrition, but a low CBC result should not be assumed to be iron deficiency without clinical assessment.';
  if(key.includes('vitamin c')) return 'Pair plant-based iron foods with vitamin C-rich fruit or vegetables at the same meal to support iron absorption from food.';
  if(key.includes('hydration')) return 'Drink regular fluids unless your healthcare professional has restricted your fluid intake. Hydration can affect some CBC measurements and is especially relevant before repeat testing.';
  if(key.includes('smoking')) return 'Smoking can influence oxygen-related blood measurements. If you smoke or vape, tell your healthcare professional because it can be relevant when interpreting red blood cell results.';
  if(key.includes('rest') || key.includes('recovery')) return 'Prioritize adequate sleep and recovery while you are unwell. Rest does not correct every CBC abnormality, but it supports general recovery and makes symptom changes easier to notice.';
  if(key.includes('handwashing')) return 'Wash hands regularly, especially before meals and after public contact. This is particularly useful when a healthcare professional has advised infection precautions.';
  if(key.includes('food safety')) return 'Wash produce and cook meat, eggs, and seafood thoroughly when infection precautions apply. Follow any specific food-safety advice given by your healthcare team.';
  if(key.includes('fever')) return 'Pay attention to fever or chills when white blood cell results are low or you have been told your immune defenses are reduced. Seek prompt medical advice when instructed by your clinician.';
  if(key.includes('bleeding')) return 'Watch for unusual bruising, nosebleeds, gum bleeding, black stools, or prolonged bleeding. Low platelet-related results may need clinical follow-up rather than diet changes alone.';
  if(key.includes('movement') || key.includes('activity')) return 'Gentle regular movement may support overall health when you feel well enough and have no activity restrictions. Avoid high-injury-risk activity if a clinician has warned you about bleeding risk.';
  if(key.includes('doctor') || key.includes('tracking') || key.includes('causes') || key.includes('medicine')) return 'Use this tip to prepare for your healthcare visit: note symptoms, medicines, supplements, recent illness, and questions so the CBC can be interpreted in the right context.';
  if(key.includes('balanced')) return 'Aim for regular balanced meals with protein, vegetables, fruit, whole grains, and adequate fluids. A healthy diet supports general nutrition but does not replace evaluation of an abnormal CBC.';
  return 'Use this tip as general education only. Your CBC should be interpreted together with symptoms, medical history, medicines, and the reference ranges from your own laboratory report.';
}

function renderGuidance(){
  const r=currentMetric();
  const m=CBC_META[r.code]||{name:r.code};
  const s=statusOf(r);
  const pack=recommendationPack(r.code,s);
  app.innerHTML=`<button class="text-btn" data-metric="${r.code}">‹ Back to result</button>
  <p class="eyebrow">Guidance</p><h1>${m.name}</h1>
  <section class="card guidance-hero">
    <div><div class="detail-number small">${r.value} <span style="font-size:18px;font-weight:600">${r.unit}</span></div><span class="badge ${s}">${statusText(s)}</span></div>
    <p class="muted">${pack.note}</p>
  </section>
  <section class="guidance-grid">
    ${guidanceCard('Best to include',pack.take,'✅')}
    ${guidanceCard('Food / items to avoid or limit',pack.avoid,'⚠️')}
    ${guidanceCard('Best to do',pack.do,'👍')}
    ${guidanceCard('Best not to do',pack.dont,'⛔')}
  </section>
  <section class="card"><h2>Helpful Tips</h2><div class="visual-grid">${pack.visuals.map(v=>`<article class="visual-card"><img src="${v.image}" alt="${escapeHtml(v.title)}"><h3>${v.title}</h3><p>${helpfulTipDescription(v.title,r.code,s)}</p></article>`).join('')}</div></section>
  <section class="notice"><strong>Safety note:</strong> These suggestions are general educational reminders. They do not tell you the cause of an abnormal CBC and do not replace medical advice.</section>`;
}
function guidanceCard(title,items,icon){
  return `<section class="card guidance-card"><div class="guidance-label">${icon} ${title}</div><ul class="bullets">${items.map(item=>`<li>${item}</li>`).join('')}</ul></section>`;
}

function renderResults(){
  if(!state.results.length){
    app.innerHTML=`<p class="eyebrow">History</p><h1>My CBC Results</h1><div class="empty"><div class="big">🧾</div><h2>No CBC history yet</h2><p class="muted">Save a CBC result to build your history.</p><button class="btn primary" data-nav="scan">Add CBC Result</button></div>`;
    return;
  }
  app.innerHTML=`<p class="eyebrow">History</p><h1>My CBC Results</h1><p class="muted">Keep reports organized by date and compare changes over time.</p>
  <div class="history-grid">${state.results.map(r=>{const c=summaryCounts(r.values);return `<button class="card clickable" data-history="${r.id}"><p class="history-date">${formatDate(r.date)}</p><h3>${escapeHtml(r.lab)}</h3><div class="status-list"><div class="status-row"><span>${r.values.length} measurements</span><span class="badge neutral">${c.low+c.high} outside range</span></div></div></button>`}).join('')}</div>`;
}
function renderHistoryDetail(id){
  const rec=state.results.find(r=>r.id===id);if(!rec)return;
  state.draft=JSON.parse(JSON.stringify(rec.values));
  app.innerHTML=`<button class="text-btn" data-nav="results">‹ Back to history</button><p class="eyebrow">Saved CBC</p><h1>${formatDate(rec.date)}</h1><p class="muted">${escapeHtml(rec.lab)}</p><div class="metric-stack">${rec.values.map(metricCard).join('')}</div><button class="btn secondary full" style="margin-top:14px" data-nav="trends">Compare trends</button>`;
}

function renderTrends(){
  if(!state.results.length){
    app.innerHTML=`<p class="eyebrow">Trends</p><h1>Track changes over time</h1><div class="empty"><div class="big">📈</div><h2>No trend data yet</h2><p class="muted">Save at least one CBC result to start tracking trends.</p><button class="btn primary" data-nav="scan">Add CBC Result</button></div>`;
    return;
  }
  const codes=[...new Set(state.results.flatMap(r=>r.values.map(v=>v.code)))];
  app.innerHTML=`<p class="eyebrow">Trends</p><h1>Track changes over time</h1><p class="muted">Trend charts show measurements only; they do not decide whether a change is medically significant.</p>
  <div class="field"><label for="trendMetric">CBC measurement</label><select id="trendMetric">${codes.map(c=>`<option ${c===state.selectedCode?'selected':''}>${c}</option>`).join('')}</select></div><div id="trendArea"></div>`;
  const select=document.getElementById('trendMetric');select.addEventListener('change',()=>{state.selectedCode=select.value;drawTrend()});drawTrend();
}
function drawTrend(){
  const code=state.selectedCode;
  const pts=state.results.slice().reverse().map(rec=>({date:rec.date,r:rec.values.find(v=>v.code===code)})).filter(x=>x.r);
  if(!pts.length)return;
  const values=pts.map(p=>p.r.value),min=Math.min(...values),max=Math.max(...values),span=Math.max(1,max-min),w=520,h=180,pad=35;
  const xy=pts.map((p,i)=>({x:pad+i*((w-pad*2)/Math.max(1,pts.length-1)),y:h-pad-((p.r.value-min)/span)*(h-pad*2),...p}));
  const poly=xy.map(p=>`${p.x},${p.y}`).join(' '), unit=pts[0].r.unit;
  document.getElementById('trendArea').innerHTML=`<section class="chart-wrap"><svg class="chart" viewBox="0 0 ${w} ${h}" aria-label="${code} trend chart"><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}"/><polyline points="${poly}"/>${xy.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="5"/><text x="${p.x}" y="${h-10}" text-anchor="middle">${new Date(p.date+'T00:00:00').toLocaleDateString(undefined,{month:'short',year:'2-digit'})}</text><text x="${p.x}" y="${p.y-12}" text-anchor="middle">${p.r.value}</text>`).join('')}</svg></section><section class="card" style="margin-top:14px"><h2>${code} history</h2>${pts.slice().reverse().map(p=>`<div class="status-row"><span>${formatDate(p.date)}</span><strong>${p.r.value} ${unit}</strong></div>`).join('')}</section>`;
}

function renderProfile(){
  app.innerHTML=`<p class="eyebrow">Profile & Settings</p><h1>Your CBCora</h1>
  <section class="card profile-card-main">
    <div class="profile-header-edit">
      <img src="${state.profile.photo}" alt="Profile photo" class="profile-photo-large">
      <div>
        <h2>${escapeHtml(state.profile.name)}</h2>
        <p class="muted">Make the app feel more personal by saving your basic information and photo.</p>
        <label class="btn ghost photo-upload-btn">Add / Change Photo<input id="profilePhotoInput" type="file" accept="image/*"></label>
      </div>
    </div>
    <div class="profile-form-grid">
      <div class="field"><label for="displayName">Display name</label><input id="displayName" value="${escapeHtml(state.profile.name)}"></div>
      <div class="field"><label for="fullName">Full name</label><input id="fullName" value="${escapeHtml(state.profile.fullName)}"></div>
      <div class="field"><label for="dob">Date of birth</label><input id="dob" type="date" value="${escapeHtml(state.profile.dob)}"></div>
      <div class="field"><label for="age">Age</label><input id="age" inputmode="numeric" value="${escapeHtml(state.profile.age)}"></div>
      <div class="field"><label for="sex">Sex</label><select id="sex"><option ${state.profile.sex==='Female'?'selected':''}>Female</option><option ${state.profile.sex==='Male'?'selected':''}>Male</option><option ${state.profile.sex==='Prefer not to say'?'selected':''}>Prefer not to say</option></select></div>
      <div class="field"><label for="bloodType">Blood type</label><input id="bloodType" value="${escapeHtml(state.profile.bloodType)}"></div>
      <div class="field"><label for="email">Email</label><input id="email" type="email" value="${escapeHtml(state.profile.email)}"></div>
      <div class="field"><label for="phone">Phone</label><input id="phone" value="${escapeHtml(state.profile.phone)}"></div>
      <div class="field profile-full"><label for="city">City / location</label><input id="city" value="${escapeHtml(state.profile.city)}"></div>
    </div>
    <button class="btn primary" id="saveProfile">Save profile</button>
  </section>
  <section class="card"><h2>Privacy</h2><label class="question"><input type="checkbox" checked disabled> <span><strong>Local-first prototype</strong><br><span class="muted">Demo information stays inside this browser session.</span></span></label><button class="btn ghost full" style="margin-top:12px" id="clearData">Clear demo history</button></section>
  <section class="card"><h2>Medical safety</h2><p>CBCora provides educational explanations and organizes laboratory measurements. It does not diagnose conditions, prescribe treatment, or replace professional medical care.</p><button class="btn secondary" id="openSafety">Read safety notice</button></section>
  <section class="card"><h2>Responsive display</h2><p class="muted">This version is optimized for mobile phones and tablets with flexible cards, scalable type, a splash title screen, and realistic illustration panels.</p></section>
  <section class="card"><h2>About</h2><p><strong>CBCora</strong><br><span class="muted">Scan. Understand. Track. Discuss.</span></p><p class="muted">Prototype v0.6</p></section>`;

  document.getElementById('saveProfile').addEventListener('click',()=>{
    state.profile.name=document.getElementById('displayName').value.trim()||'Friend';
    state.profile.fullName=document.getElementById('fullName').value.trim();
    state.profile.dob=document.getElementById('dob').value;
    state.profile.age=document.getElementById('age').value.trim();
    state.profile.sex=document.getElementById('sex').value;
    state.profile.bloodType=document.getElementById('bloodType').value.trim();
    state.profile.email=document.getElementById('email').value.trim();
    state.profile.phone=document.getElementById('phone').value.trim();
    state.profile.city=document.getElementById('city').value.trim();
    renderProfile();
  });
  document.getElementById('profilePhotoInput').addEventListener('change',e=>{
    const file=e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{ state.profile.photo = reader.result; renderProfile(); };
    reader.readAsDataURL(file);
  });
  document.getElementById('clearData').addEventListener('click',()=>{state.results=[];state.draft=[];app.innerHTML=`<div class="empty"><div class="big">✓</div><h2>Demo history cleared</h2><p class="muted">You can add a CBC report anytime.</p><button class="btn primary" data-nav="scan">Add CBC Result</button></div>`});
  document.getElementById('openSafety').addEventListener('click',()=>infoDialog.showModal());
}



// --- v0.5 production-ready workflow additions ---
function confidenceBadge(c){
  const pct=Math.round((c??1)*100);
  const cls=pct>=90?'ok':pct>=75?'low':'high';
  return `<span class="confidence ${cls}">${pct}% confidence</span>`;
}

function simulateOCRExtraction(){
  const confidences={WBC:.98,RBC:.96,HGB:.93,HCT:.88,MCV:.96,MCH:.91,MCHC:.84,RDW:.93,PLT:.97,MPV:.81,NEUT:.92,LYMPH:.94,MONO:.79,EOS:.86,BASO:.73};
  state.draft=JSON.parse(JSON.stringify(sample)).map(r=>({...r,confidence:confidences[r.code]||.85,source:'ocr-demo'}));
}

function renderScan(){
  app.innerHTML=`<p class="eyebrow">Add CBC Result</p><h1>Scan or upload your report</h1><p class="muted">CBCora uses a review-first OCR workflow: upload, extract, check confidence, correct anything uncertain, then save.</p>
  <section class="upload-zone">
    <div class="upload-icon">📄</div><h2>Choose a CBC report</h2><p class="muted">Photo, image, or PDF</p>
    <input id="fileInput" type="file" accept="image/*,.pdf,application/pdf" capture="environment" />
    <label for="fileInput" class="btn primary">Choose File / Camera</label>
    <p id="fileName" class="muted" style="margin-top:12px"></p>
  </section>
  <section class="card ocr-ready-card"><h2>OCR-ready workflow</h2><div class="ocr-steps"><span>1 Upload</span><span>2 Extract</span><span>3 Confidence check</span><span>4 Review</span><span>5 Save</span></div><p class="muted">The prototype includes a provider-ready extraction layer. A production OCR engine can later be connected without changing the review and validation screens.</p></section>
  <div class="choice-grid"><button class="choice" id="sampleBtn"><strong>Try OCR Demo</strong><small>Simulates extraction and confidence scores.</small></button><button class="choice" id="manualBtn"><strong>Enter Manually</strong><small>Type values exactly as printed on your report.</small></button></div>
  <div class="notice"><strong>Important:</strong> OCR should never save values automatically. CBCora requires user review because lab layouts, units, and reference ranges vary.</div>`;
  document.getElementById('fileInput').addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    state.uploadedFile=f;document.getElementById('fileName').textContent=`Selected: ${f.name}`;navigate('ocr');
  });
  document.getElementById('sampleBtn').addEventListener('click',()=>{state.uploadedFile={name:'sample-cbc-report.pdf',type:'application/pdf'};navigate('ocr')});
  document.getElementById('manualBtn').addEventListener('click',()=>{state.draft=[{code:'HGB',value:'',low:'',high:'',unit:'g/L',confidence:1,source:'manual'}];navigate('review')});
}

function renderOCR(){
  app.innerHTML=`<button class="text-btn" data-nav="scan">‹ Back</button><p class="eyebrow">OCR Extraction</p><h1>Reading your CBC report</h1>
  <section class="card scan-progress"><div class="scan-graphic"><div class="scan-line"></div><span>▤</span></div><h2>${escapeHtml(state.uploadedFile?.name||'CBC report')}</h2><p class="muted">The prototype is simulating the extraction stage. In production, this is where the connected OCR provider returns test names, values, units, ranges, and confidence scores.</p><div class="progress-track"><div class="progress-bar" id="ocrProgress"></div></div><p id="ocrText" class="muted">Preparing image...</p></section>
  <section class="card"><h2>Validation rules</h2><ul class="bullets"><li>Flag low-confidence readings for manual review.</li><li>Require a result, unit, lower range, and upper range before saving.</li><li>Keep the original uploaded report available for side-by-side checking.</li><li>Never infer a diagnosis from extracted CBC values.</li></ul></section>`;
  const bar=document.getElementById('ocrProgress'),text=document.getElementById('ocrText');
  const stages=[[20,'Detecting table and CBC labels...'],[46,'Reading values and units...'],[72,'Matching reference ranges...'],[100,'Extraction complete - review required.']];
  let i=0;
  const tick=()=>{const [pct,msg]=stages[i];bar.style.width=pct+'%';text.textContent=msg;i++;if(i<stages.length)setTimeout(tick,320);else setTimeout(()=>{simulateOCRExtraction();navigate('review')},500)};
  setTimeout(tick,150);
}

function editRow(r,i){return `<div class="result-edit ocr-row ${((r.confidence??1)<.8)?'needs-review':''}" data-index="${i}">
  <div class="field name-field"><label>Test ${r.source==='ocr-demo'?confidenceBadge(r.confidence):''}</label><select data-key="code">${Object.keys(CBC_META).map(c=>`<option ${c===r.code?'selected':''}>${c}</option>`).join('')}</select></div>
  <div class="field"><label>Result</label><input inputmode="decimal" data-key="value" value="${escapeHtml(r.value)}"></div>
  <div class="field"><label>Low</label><input inputmode="decimal" data-key="low" value="${escapeHtml(r.low)}"></div>
  <div class="field"><label>High</label><input inputmode="decimal" data-key="high" value="${escapeHtml(r.high)}"></div>
  <button class="remove-btn" aria-label="Remove row">×</button></div>`}

function renderReview(){
  const uncertain=state.draft.filter(r=>(r.confidence??1)<.8).length;
  app.innerHTML=`<p class="eyebrow">Review</p><h1>Check every detected value</h1><p class="muted">Correct the measurement, unit, and reference range to match your report before continuing.</p>
  ${uncertain?`<div class="notice"><strong>${uncertain} low-confidence reading${uncertain===1?'':'s'}:</strong> highlighted rows need extra checking against the original report.</div>`:''}
  <section class="card source-preview"><div><strong>Source report</strong><p class="muted">${escapeHtml(state.uploadedFile?.name||'Manual entry')}</p></div><span class="badge neutral">Review required</span></section>
  <section class="card" id="editList">${state.draft.map((r,i)=>editRow(r,i)).join('')}</section>
  <button class="btn ghost full" id="addRow">＋ Add CBC measurement</button>
  <button class="btn primary full" style="margin-top:10px" id="continueReview">I reviewed these values - Continue</button>`;
  bindReview();
}

function summaryTableRows(vals){
  return vals.map(r=>{const m=CBC_META[r.code]||{name:r.code};return `<tr><td><strong>${r.code}</strong><br><span>${m.name}</span></td><td>${r.value} ${r.unit}</td><td>${r.low}-${r.high} ${r.unit}</td><td>${statusText(statusOf(r)).replace(/[↓↑✓]/g,'')}</td></tr>`}).join('');
}

function openPrintableSummary(vals, title='CBC Summary'){
  const counts=summaryCounts(vals);const latestDate=state.results[0]?.date||new Date().toISOString().slice(0,10);
  const popup=window.open('','_blank','noopener,noreferrer');
  if(!popup){alert('Please allow pop-ups to create the PDF summary.');return;}
  const profile=state.profile;
  popup.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><style>
  body{font-family:Arial,sans-serif;color:#2f1d20;margin:0;background:#fff} .page{max-width:800px;margin:0 auto;padding:36px} .brand{display:flex;align-items:center;gap:12px;border-bottom:3px solid #8D1F2D;padding-bottom:16px;margin-bottom:18px}.brand img{width:54px}.brand h1{margin:0;color:#8D1F2D}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#fff5f6;padding:14px;border-radius:12px;margin-bottom:18px}.summary{display:flex;gap:10px;margin:14px 0}.pill{padding:8px 12px;border-radius:999px;background:#f4edef;font-weight:bold}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{border-bottom:1px solid #e8d6d9;text-align:left;padding:10px;vertical-align:top}th{color:#8D1F2D}td span{font-size:12px;color:#76656A}.foot{margin-top:24px;font-size:12px;color:#76656A;border-top:1px solid #e8d6d9;padding-top:12px}@media print{.no-print{display:none}.page{padding:18px}}</style></head><body><div class="page"><div class="brand"><img src="${location.origin+location.pathname.replace(/[^/]+$/,'')}icon.svg"><div><h1>CBCora</h1><div>Your CBC, made clearer.</div></div></div><h2>${title}</h2><div class="meta"><div><strong>Name:</strong> ${escapeHtml(profile.fullName||profile.name)}</div><div><strong>Date:</strong> ${formatDate(latestDate)}</div><div><strong>Age:</strong> ${escapeHtml(profile.age||'—')}</div><div><strong>Sex:</strong> ${escapeHtml(profile.sex||'—')}</div></div><div class="summary"><div class="pill">${counts.ok} within range</div><div class="pill">${counts.low} below range</div><div class="pill">${counts.high} above range</div></div><table><thead><tr><th>Measurement</th><th>Result</th><th>Reference range</th><th>Status</th></tr></thead><tbody>${summaryTableRows(vals)}</tbody></table><div class="foot">Educational summary only. CBCora does not diagnose medical conditions or replace professional medical care.</div><p class="no-print"><button onclick="window.print()" style="margin-top:18px;padding:12px 18px;border:0;border-radius:10px;background:#8D1F2D;color:white;font-weight:bold">Print / Save as PDF</button></p></div></body></html>`);
  popup.document.close();
}

function renderSummary(){
  const vals=currentValues(),c=summaryCounts(vals);const groups={};vals.forEach(r=>{const cat=CBC_META[r.code]?.cat||'Other';(groups[cat]??=[]).push(r)});
  app.innerHTML=`<p class="eyebrow">CBC Summary</p><h1>Your results at a glance</h1>
  <section class="card"><div class="stat-row"><div class="stat"><strong>${c.ok}</strong><small>Within range</small></div><div class="stat"><strong>${c.low}</strong><small>Below range</small></div><div class="stat"><strong>${c.high}</strong><small>Above range</small></div></div></section>
  <div class="notice">${c.low+c.high} result${c.low+c.high===1?'':'s'} ${c.low+c.high===1?'is':'are'} outside the reference range entered from this report. This alone does not establish a diagnosis.</div>
  <section class="card summary-actions"><button class="btn secondary" id="pdfSummary">🧾 Print / Save Summary as PDF</button><button class="btn ghost" data-nav="compare">⇄ Compare Two CBC Reports</button></section>
  ${Object.entries(groups).map(([cat,rows])=>`<h3 class="category-title">${cat}</h3><div class="metric-stack">${rows.map(metricCard).join('')}</div>`).join('')}
  <button class="btn primary full" style="margin-top:16px" id="saveResult">Save to CBC History</button>`;
  document.getElementById('pdfSummary').addEventListener('click',()=>openPrintableSummary(vals));
  document.getElementById('saveResult').addEventListener('click',()=>{const today=new Date().toISOString().slice(0,10);state.results.unshift({id:Date.now(),date:today,lab:'New CBC Report',values:JSON.parse(JSON.stringify(vals))});state.results=state.results.slice(0,20);state.draft=JSON.parse(JSON.stringify(vals));navigate('results');});
}

function compareValue(a,b){
  if(a==null||b==null)return {delta:'—',dir:''};
  const diff=Number(b.value)-Number(a.value);const sign=diff>0?'+':'';return {delta:`${sign}${Number(diff.toFixed(2))}`,dir:diff>0?'up':diff<0?'down':'same'};
}
function compareRows(recA,recB){
  const codes=[...new Set([...recA.values.map(v=>v.code),...recB.values.map(v=>v.code)])];
  return codes.map(code=>{const a=recA.values.find(v=>v.code===code),b=recB.values.find(v=>v.code===code),m=CBC_META[code]||{name:code,unit:a?.unit||b?.unit||''},d=compareValue(a,b);return `<tr><td><strong>${code}</strong><br><small>${m.name}</small></td><td>${a?`${a.value} ${a.unit}`:'—'}</td><td>${b?`${b.value} ${b.unit}`:'—'}</td><td><span class="delta ${d.dir}">${d.delta}</span></td></tr>`}).join('');
}
function renderCompare(){
  if(state.results.length<2){app.innerHTML=`<button class="text-btn" data-nav="results">‹ Back</button><h1>Compare CBC Reports</h1><div class="notice">You need at least two saved CBC results to compare.</div>`;return;}
  const a=state.results[1],b=state.results[0];
  app.innerHTML=`<button class="text-btn" data-nav="results">‹ Back to results</button><p class="eyebrow">Comparison</p><h1>Compare two CBC reports</h1><p class="muted">Choose any two saved reports. CBCora shows the numerical change only and does not decide whether it is medically significant.</p>
  <section class="card compare-selects"><div class="field"><label>Earlier report</label><select id="compareA">${state.results.map((r,i)=>`<option value="${r.id}" ${i===1?'selected':''}>${formatDate(r.date)} - ${escapeHtml(r.lab)}</option>`).join('')}</select></div><div class="field"><label>Later report</label><select id="compareB">${state.results.map((r,i)=>`<option value="${r.id}" ${i===0?'selected':''}>${formatDate(r.date)} - ${escapeHtml(r.lab)}</option>`).join('')}</select></div></section>
  <section class="card table-scroll"><table class="compare-table"><thead><tr><th>Measure</th><th id="aDate">${formatDate(a.date)}</th><th id="bDate">${formatDate(b.date)}</th><th>Change</th></tr></thead><tbody id="compareBody">${compareRows(a,b)}</tbody></table></section>
  <div class="notice"><strong>Reminder:</strong> A rise or fall can have many explanations. Use this comparison to prepare questions for your healthcare professional.</div>`;
  const refresh=()=>{const ra=state.results.find(r=>String(r.id)===document.getElementById('compareA').value),rb=state.results.find(r=>String(r.id)===document.getElementById('compareB').value);document.getElementById('aDate').textContent=formatDate(ra.date);document.getElementById('bDate').textContent=formatDate(rb.date);document.getElementById('compareBody').innerHTML=compareRows(ra,rb)};
  document.getElementById('compareA').addEventListener('change',refresh);document.getElementById('compareB').addEventListener('change',refresh);
}

function renderResults(){
  if(!state.results.length){app.innerHTML=`<p class="eyebrow">History</p><h1>My CBC Results</h1><div class="empty"><div class="big">🧾</div><h2>No CBC history yet</h2><p class="muted">Save a CBC result to build your history.</p><button class="btn primary" data-nav="scan">Add CBC Result</button></div>`;return;}
  app.innerHTML=`<p class="eyebrow">History</p><h1>My CBC Results</h1><p class="muted">Keep reports organized by date and compare changes over time.</p><section class="card results-toolbar"><button class="btn secondary" data-nav="compare">⇄ Compare Two Reports</button><button class="btn ghost" id="latestPdf">🧾 Latest Summary PDF</button></section><div class="history-grid">${state.results.map(r=>{const c=summaryCounts(r.values);return `<button class="card clickable" data-history="${r.id}"><p class="history-date">${formatDate(r.date)}</p><h3>${escapeHtml(r.lab)}</h3><div class="status-list"><div class="status-row"><span>${r.values.length} measurements</span><span class="badge neutral">${c.low+c.high} outside range</span></div></div></button>`}).join('')}</div>`;
  document.getElementById('latestPdf').addEventListener('click',()=>openPrintableSummary(state.results[0].values,`CBC Summary - ${formatDate(state.results[0].date)}`));
}

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
navigate('splash');
