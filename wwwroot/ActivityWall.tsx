import React from 'react';

const ActivityWall: React.FC = () => {
  return (
    <div className="min-h-screen text-on-surface bg-background font-sans pb-32 pt-24 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Activity Wall</h2>
          <p className="text-on-surface-variant text-lg">Help founders solve their biggest challenges.</p>
        </div>
        <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Post Challenge
        </button>
      </header>

      {/* Challenge Categories */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
        <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm whitespace-nowrap">All Challenges</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">Compliance</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">Fundraising</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">Marketing</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">Tech Stack</button>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Challenge Card 1 */}
        <div className="bg-surface-container rounded-lg p-6 hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/10 flex flex-col gap-6 group">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-extrabold uppercase rounded-full tracking-widest border border-secondary/20">HealthTech</span>
              <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-extrabold uppercase rounded-full tracking-widest border border-tertiary/20">Seed</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant">2 HOURS AGO</span>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Need help with FDA compliance for SaMD</h4>
            <p className="text-sm text-on-surface-variant line-clamp-3">We are Acme HealthTech, building AI-driven diagnostics. Looking for a mentor who has navigated the FDA approval process for software-as-a-medical-device.</p>
          </div>

          <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary/20 overflow-hidden">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRjQDawggmTpMlw_VZD32H7Y0BzIj-zoHTXw_7MZQkIzoZDhoqEsIj2eg2HARjDQPH1G7_t4F3i9zuEAzAvL9M8tB0uX9Ndf66QtUH3tJza1ExSM6gRAr9VQqV8Ig_KUI2ZmJncVVpQ5fYgPVQFplDycdWNiK3t4fXog7NoWNXtbl3QYJp7xh_O6cWkJ5jyM3ok7pnhDdNMxnii8l35YkygEbJsSm2Ew2W0x86sYemkTlHaJS8TGBnWaAFFUiIvdHmCgjw-p0qJL6r"/>
              </div>
              <span className="text-xs font-bold">Alice Founder</span>
            </div>
            <button className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              3 Replies
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
            </button>
          </div>

          <button className="w-full py-4 bg-surface-container-highest rounded-xl text-sm font-bold border border-outline-variant/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
            Solve Challenge
          </button>
        </div>

        {/* Challenge Card 2 */}
        <div className="bg-surface-container rounded-lg p-6 hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/10 flex flex-col gap-6 group">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-extrabold uppercase rounded-full tracking-widest border border-secondary/20">AgriTech</span>
              <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-extrabold uppercase rounded-full tracking-widest border border-tertiary/20">Series A</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant">5 HOURS AGO</span>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Optimizing satellite data processing pipelines</h4>
            <p className="text-sm text-on-surface-variant line-clamp-3">Seeking expertise in scaling IoT and satellite data ingestion for rural farming analytics. Experience with low-bandwidth environments is a plus.</p>
          </div>

          <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary/20 overflow-hidden">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByoilAbFmw3CFuNuVovpwyzrUtKaeG9g1fuMpC2GB0ouF3j3tT6ihv4_fB4njJnhCd9vXf2P1pIOn7XbPefgahQj3UXGR1KKpeq7eQV9gDg1A98ZZk5FKZQNpc31KNM1sNgp3zv4eeYUksLGGAfGzcTiCZCP4wxVamyUABRP5nbWXdkfx1db9Xnk8vwdLrsVymafvfz0ROEqFA0qvgzzPSdjeCXfEsVDVjpChzJ1knN28Tvq8WCV5AS13-v37J7BEVz3eUWSu-97py"/>
              </div>
              <span className="text-xs font-bold">Kiran Agri</span>
            </div>
            <button className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              0 Replies
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
            </button>
          </div>

          <button className="w-full py-4 bg-surface-container-highest rounded-xl text-sm font-bold border border-outline-variant/20 group-hover:bg-primary group-hover:text-on-primary transition-all text-on-surface-variant group-hover:text-on-primary">
            Solve Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityWall;
