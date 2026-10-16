// Original SVG panel artwork. No external packages or bundled fonts.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const assetRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const palette = { navy: '#101B35', panel: '#192846', gold: '#E7BF6B', mint: '#7FD9B0', ivory: '#F7EED8', muted: '#CBD5E1' };
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const rect = (x,y,w,h,fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`;
const label = (x,y,t,size,fill=palette.ivory,anchor='start') => `<text x="${x}" y="${y}" font-family="Arial, Microsoft YaHei, sans-serif" font-size="${size}" font-weight="600" fill="${fill}" text-anchor="${anchor}">${escape(t)}</text>`;
function panel(height, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="${height}" viewBox="0 0 640 ${height}" role="img"><title>${escape(title)}</title>${rect(0,0,640,height,palette.navy)}<path d="M12 4H628V12H636V${height-12}H628V${height-4}H12V${height-12}H4V12H12Z" fill="none" stroke="${palette.gold}" stroke-width="2"/>${rect(16,16,608,height-32,palette.panel)}${body}</svg>\n`;
}
const glyphs = {
  V:['10001','10001','10001','10001','10001','01010','00100'],
  I:['11111','00100','00100','00100','00100','00100','11111'],
  A:['01110','10001','10001','11111','10001','10001','10001'],
  Q:['01110','10001','10001','10001','10101','10010','01101'],
  U:['10001','10001','10001','10001','10001','10001','01110'],
  E:['11111','10000','10000','11110','10000','10000','11111'],
  S:['01111','10000','10000','01110','00001','00001','11110'],
  T:['11111','00100','00100','00100','00100','00100','00100']
};
function wordmark() {
  const text='VIVA QUEST', scale=7, start=(640-(text.length*6-1)*scale)/2;
  let out='';
  [...text].forEach((ch,i)=> (glyphs[ch]||[]).forEach((row,y)=>[...row].forEach((p,x)=>{ if(p==='1') out+=rect(start+(i*6+x)*scale,30+y*scale,scale,scale,palette.gold); })));
  return `<g shape-rendering="crispEdges">${out}</g>`;
}
function icon(kind) {
  let out=rect(30,30,88,80,palette.navy);
  if(kind==='questions') {
    out+=rect(40,43,30,52,palette.gold)+rect(74,43,30,52,palette.gold)+rect(44,47,22,44,palette.ivory)+rect(78,47,22,44,palette.ivory)+rect(69,44,4,56,palette.mint);
    for(let y=55;y<82;y+=10) out+=rect(48,y,14,3,palette.navy)+rect(82,y,14,3,palette.navy);
  } else if(kind==='practice') {
    out+=rect(40,42,58,35,palette.mint)+rect(48,75,10,10,palette.mint)+rect(64,83,40,18,palette.gold)+rect(95,100,8,7,palette.gold);
    for(let x=50;x<90;x+=14) out+=rect(x,55,5,5,palette.navy);
  } else {
    out+=rect(48,38,48,66,palette.ivory)+rect(40,35,60,8,palette.gold)+rect(44,98,60,8,palette.gold);
    for(let y=51;y<90;y+=14) out+=rect(55,y,5,5,palette.mint)+rect(66,y,22,4,palette.navy);
  }
  return `<g shape-rendering="crispEdges">${out}</g>`;
}
const labels = {
  zh: {
    title:'答辩研习所',
    sections:[['modes','三种练习'],['start','准备与启动'],['example','虚构示例'],['workflow','练习路线'],['limits','边界与隐私'],['faq','常见问题'],['feedback','反馈与来源']],
    cards:[['questions','问题清单','主问题 · 出处 · 提问逻辑'],['practice','模拟答辩','一次一题 · 随回答追问'],['review','答辩复盘','对照原文 · 区分事实与回忆']]
  },
  en: {
    title:'THE VIVA STUDY HALL',
    sections:[['modes','THREE WAYS TO PRACTICE'],['start','PREPARE AND BEGIN'],['example','A FICTIONAL EXAMPLE'],['workflow','THE PRACTICE ROUTE'],['limits','BOUNDARIES & PRIVACY'],['faq','COMMON QUESTIONS'],['feedback','FEEDBACK & SOURCES']],
    cards:[['questions','QUESTION BANK','Questions, sources, reasoning'],['practice','MOCK VIVA','One question, adaptive follow-ups'],['review','POST-VIVA REVIEW','Compare the text and recollections']]
  }
};
for(const [lang, copy] of Object.entries(labels)) {
  const dir=path.join(assetRoot,lang); fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'title.svg'),panel(160,`VIVA QUEST | ${copy.title}`,wordmark()+label(320,126,copy.title,30,palette.mint,'middle')));
  copy.sections.forEach(([file,title],i)=>{
    const body=rect(28,24,52,40,palette.gold)+label(54,53,String(i+1).padStart(2,'0'),24,palette.navy,'middle')+label(102,55,title,30);
    fs.writeFileSync(path.join(dir,`${file}.svg`),panel(88,title,body));
  });
  copy.cards.forEach(([file,title,sub])=>{
    fs.writeFileSync(path.join(dir,`${file}.svg`),panel(140,title,icon(file)+label(144,62,title,30,palette.mint)+label(144,99,sub,22,palette.muted)));
  });
}
console.log('Built 22 localized SVG panels.');
