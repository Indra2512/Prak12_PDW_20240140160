import React, { useState } from "react";

// DATA PORTOFOLIO
const GALLERY_DATA = [
  {
    id: 1,
    type: "Photography",
    titel: "Pantai",
    category: "Street Photography",
    imgUrl: "/foto/foto1.jpg",
    desc: "Sebuah kapal yang tertata rapi di tepi pantai."
  },
  {
    id: 2,
    type: "Photography",
    titel: "Dari atas",
    category: "Street Photography",
    imgUrl: "/foto/foto2.jpg",
    desc: "menatap keindahan cipataan yang maha kuasa."
  },
  {
    id: 3,
    type: "Photography",
    titel: "kepekaan",
    category: "CloseUp",
    imgUrl: "/foto/foto3.jpg",
    desc: "stay calm and alert"
  },
  {
    id: 4,
    type: "Photography",
    titel: "NightStreet",
    category: "Light Trails",
    imgUrl: "/foto/foto4.jpg",
    desc: "walking in the night"
  },
  {
    id: 5,
    type: "Photography",
    titel: "ibadah",
    category: "Potrait",
    imgUrl: "/foto/foto5.jpg",
    desc: "sebuah rumah ibadah"
  },
  {
    id: 6,
    type: "Videography",
    titel: "event",
    category: "Cenematic",
    imgUrl: "/video/video7.mp4",
    desc: "mencoba hal baru"
  }
];

export default function app() {
  const [filter, setFilter] = useState('all');

  const filteredGallery = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.type === filter);
  
    return (
      <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-amber-500 selection:text-neutral-900">

        {/* NAVBAR */}
        <nav className="bg-neutral-900/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-neutral-800">
        <h1 className="text-xl font-black tracking-widest text-amber-500 uppercase">INDRA . VISUAL</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-amber-500 transition">Home</a>
          <a href="#gallery" className="hover:text-amber-500 transition">Gallery</a>
          <a href="#gear" className="hover: text-amber-500 transition">Gear</a>
        </div>
        </nav>

        {/* HERO SECTION */}
        <section id="gallery" className="bg-neutral-900/50 py-24 border-t border-neutral-800">
        <span className="text-xs font-bold tracking-widest text-ember-500 uppercase bg-ember-500/10 px-3 py-1 rounded-full">
          Street Photographer & Videographer
        </span>
        <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 tracking-tight leading-none">
          menuangkan sebuah cerita kedalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">sebuah foto</span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Hai, aku indra. melalui sebuah lensa, aku bisa mendokumentasikan sebuah interksi manusia, permainan cahaya, kontras bayangan, dan hiruk-pikuk kota menjadi sebuah karya visual yang sinematik.
        </p>
        <div className="mt-10">
          <a href="#gallery" className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold px-8 py-3.5 rounded-md shadow-lg shadow-amber-500/10 transition-all duration-300">
            Jelajahi Karya
          </a>
        </div>
        </section>

        {/* GALLERY SECTION */}
      <section id="gallery" className="bg-neutral-900/50 py-24 border-t border-neutral-800">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-black text-amber-500 mb-2 uppercase tracking-wide">Katalog Portofolio</h3>
              <p className="text-neutral-400 text-sm">Gunakan filter untuk melihat spesifik karya fotografi atau videografi.</p>
            </div>
            
            {/* FILTER BUTTONS (Interaktivitas React State) */}
            <div className="flex gap-2 bg-neutral-900 p-1 rounded-lg border border-neutral-800 self-start md:self-auto">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${filter === 'all' ? 'bg-amber-500 text-neutral-900' : 'text-neutral-400 hover:text-neutral-100'}`}>
                ALL
              </button>
              <button 
                onClick={() => setFilter('photography')} 
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${filter === 'photography' ? 'bg-amber-500 text-neutral-900' : 'text-neutral-400 hover:text-neutral-100'}`}>
                PHOTOGRAPHY
              </button>
              <button 
                onClick={() => setFilter('videography')} 
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${filter === 'videography' ? 'bg-amber-500 text-neutral-900' : 'text-neutral-400 hover:text-neutral-100'}`}>
                VIDEOGRAPHY
              </button>
            </div>
          </div>

          {/* GRID LAYOUT TAILWIND */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGallery.map((item) => (
              <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden group hover:border-amber-500/30 transition-all duration-350">
                <div className="relative aspect-video overflow-hidden bg-neutral-800">
                  {/* Gambar mockup portofolio */}
                  <img 
                    src={item.imgUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 object-center"
                  />
                  {/* Badge jenis karya */}
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold bg-neutral-950/80 backdrop-blur-sm text-amber-500 px-2.5 py-1 rounded tracking-widest uppercase border border-neutral-800">
                    {item.type}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-neutral-500 font-medium">{item.category}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2 group-hover:text-amber-400 transition">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* GEAR & SPEC SECTION */}
      <section id="gear" className="container mx-auto px-6 py-24 text-center md:text-left">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w md space-y-4">
            <h3 className="text-2xl font-black text-amber-500 uppercase tracking-wide">The Tools I Use</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Kualitas visual tidak hanya soal rasa, melainkan juga kesiapan alat untuk menangkap momen krusial di jalanan dengan cepat dan tajam.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto text-left">
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">Camera Body</span>
              <span className="font-bold text-sm text-neutral-200">Cannon 700 D</span>
            </div>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">Favorite Lens</span>
              <span className="font-bold text-sm text-neutral-200">18-200mm & 50mm</span>
            </div>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">Color Grading</span>
              <span className="font-bold text-sm text-neutral-200">Lightroom & Premier Pro</span>
            </div>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">Video Resolution</span>
              <span className="font-bold text-sm text-neutral-200">4K Cinematic 24fps</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-xs text-neutral-600">
        <p>&copy; {new Date().getFullYear()} INDRA.VISUALS. All Rights Reseved.</p>
      </footer>

      </div>
    );
}