const base='https://wa.me/6285129990202?text=';
document.querySelectorAll('.wa').forEach(a=>{a.href=base+encodeURIComponent('Halo NCK, saya ingin konsultasi '+(a.dataset.product||'produksi pakaian')+'. Mohon informasi spesifikasi, harga, dan estimasi pengerjaannya.');a.target='_blank';a.rel='noopener noreferrer';});
const need=document.querySelector('#need'),qty=document.querySelector('#qty'),note=document.querySelector('#note'),link=document.querySelector('#brief-link');
function updateBrief(){link.href=base+encodeURIComponent('Halo NCK, saya ingin membahas kebutuhan produksi.\nProduk/jasa: '+need.value+'\nJumlah: '+(qty.value?qty.value+' pcs':'ingin didiskusikan')+'\nDesain/target waktu: '+(note.value.trim()||'ingin didiskusikan')+'\nMohon informasi spesifikasi, penawaran, dan estimasi pengerjaannya.');}
[need,qty,note].forEach(el=>el.addEventListener('input',updateBrief));updateBrief();
