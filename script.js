// Data diambil dari Aggregate Report JMeter. Debug Sampler dan TOTAL tidak ditampilkan sebagai endpoint.
const results = [
['GET Login Page',1,197,197,197,197,197,197,197,'0.000%',5.07614,208.18,0.59],
['Login Garage21',1,1035,1035,1035,1035,1035,1035,1035,'0.000%',0.96618,44.49,3.69],
['GET Jasa',1,198,198,198,198,198,198,198,'0.000%',5.05051,234.55,4.15],
['GET Tambah Jasa',1,273,273,273,273,273,273,273,'0.000%',3.66300,151.33,3.78],
['GET Jasa Pricing Rule',1,254,254,254,254,254,254,254,'0.000%',3.93701,167.37,3.30],
['GET Tambah Jasa Pricing Rule',1,212,212,212,212,212,212,212,'0.000%',4.71698,194.88,4.20],
['POST Tambah Jasa Pricing Rule',1,190,190,190,190,190,190,190,'0.000%',5.26316,8.60,7.63],
['GET Pelanggan',1,249,249,249,249,249,249,249,'0.000%',4.01606,181.34,3.32],
['GET Tambah Pelanggan',1,202,202,202,202,202,202,202,'0.000%',4.95050,204.58,4.13],
['POST Tambah Pelanggan',1,232,232,232,232,232,232,232,'0.000%',4.31034,7.00,6.09],
['GET Velg',1,232,232,232,232,232,232,232,'0.000%',4.31034,219.86,3.54],
['GET Tambah Velg',1,227,227,227,227,227,227,227,'0.000%',4.40529,194.62,3.65],
['POST Tambah Velg',1,260,260,260,260,260,260,260,'0.000%',3.84615,6.15,1142.47],
['PUT Edit Velg',1,212,212,212,212,212,212,212,'0.000%',4.71698,7.72,1401.09],
['GET Sparepert',1,233,233,233,233,233,233,233,'0.000%',4.29185,191.74,3.55],
['GET Tambah Sparepart',1,956,956,956,956,956,956,956,'0.000%',1.04603,49.79,3.45],
['POST Tambah Sparepart',1,270,270,270,270,270,270,270,'0.000%',3.70370,6.01,5.27],
['PUT Edit Sparepart',1,264,264,264,264,264,264,264,'0.000%',3.78788,6.17,5.42],
['GET Order',1,242,242,242,242,242,242,242,'0.000%',4.13223,243.60,3.40],
['GET Tambah Order',1,906,906,906,906,906,906,906,'0.000%',1.10375,52.53,3.64],
['POST Tambah Order',1,245,245,245,245,245,245,245,'0.000%',4.08163,6.61,5.73]
];
const rows = document.getElementById('rows');
const search = document.getElementById('search');
const ms = n => `${Number(n).toLocaleString('id-ID')} ms`;
const total = results.reduce((s,r)=>s+r[1],0);
const avg = results.reduce((s,r)=>s+r[1]*r[2],0)/total;
document.getElementById('samples').textContent = total;
document.getElementById('average').textContent = ms(Math.round(avg));
document.getElementById('fastest').textContent = ms(Math.min(...results.map(r=>r[7])));
document.getElementById('slowest').textContent = ms(Math.max(...results.map(r=>r[8])));
function render(){
 const q=search.value.trim().toLowerCase();
 const filtered=results.filter(r=>r[0].toLowerCase().includes(q));
 rows.innerHTML=filtered.map(r=>`<tr><td>${escapeHTML(r[0])}</td><td>${r[1]}</td><td>${ms(r[2])}</td><td>${ms(r[3])}</td><td>${ms(r[4])}</td><td>${ms(r[5])}</td><td>${ms(r[6])}</td><td>${ms(r[7])}</td><td>${ms(r[8])}</td><td class="error">${escapeHTML(r[9])}</td><td>${Number(r[10]).toFixed(2)}</td><td>${Number(r[11]).toFixed(2)}</td><td>${Number(r[12]).toFixed(2)}</td></tr>`).join('');
 document.getElementById('count').textContent=`Menampilkan ${filtered.length} dari ${results.length} endpoint · geser tabel ke samping untuk melihat semua kolom`;
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
search.addEventListener('input',render);render();
