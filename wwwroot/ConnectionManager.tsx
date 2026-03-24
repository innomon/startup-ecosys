import React from 'react';

const ConnectionManager: React.FC = () => {
  return (
    <div className="min-h-screen text-on-surface bg-background font-sans pb-32 pt-24 px-6 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Network Requests</h2>
          <p className="text-on-surface-variant">Manage your inbound and outbound connections.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-sm font-bold">Inbound</button>
          <button className="px-4 py-2 rounded-full text-on-surface-variant text-sm font-bold hover:text-primary">Outbound</button>
        </div>
      </header>

      <div className="space-y-4">
        {/* Connection Request Item */}
        <div className="glass-panel p-6 border border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 overflow-hidden">
              <img alt="Mentor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkobYGB2TR2H2HrCY2jIgiltcy9Gb_MOTwz5MpG1LAdChhZK1nS_BZKO9M9YICBZm6CfjlVt0yT6_HUn1hp0ynV3uG8B2GNuaImoIYoGk0R6dEYqJ5XizFwA8gh4c0JKCHmZsbHUXmUGff1fYpBKgJXqGEUd0p85fN5L_8Niqz9UmFBJErl61ybmp83wNInSVbE8PCw_FnptkjbhI6pkQefZet12O-VGkNiI1ItS5ACN3iZadixBsY5QZ8_qy6fHirHP_QiLMlK6kz"/>
            </div>
            <div>
              <h4 className="text-xl font-bold">Bob Mentor</h4>
              <p className="text-sm text-tertiary font-medium">Expert in FDA Compliance • 15 years exp.</p>
              <p className="text-xs text-on-surface-variant mt-1">"I saw your challenge regarding SaMD regulations and would love to help you navigate the process."</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
              Accept
            </button>
            <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-highest text-on-surface font-bold rounded-full border border-outline-variant/20 hover:bg-error/10 hover:text-error hover:border-error/50 transition-colors active:scale-95">
              Decline
            </button>
          </div>
        </div>

        {/* Another Item */}
        <div className="glass-panel p-6 border border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-6 opacity-80">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-tertiary/30 overflow-hidden">
              <img alt="Investor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOhFuC5VcXRnV4nFwI3Hv8ahsAFcptdHV97TTquD2DQSa-Jgku21dCvTOh8qM3AMG4TOK35FC3ChAs7uD7PN33o2fXl6u0Q4ehIjLK1QGzN-NdPEbOMX4WREml-TA1gHj1wC7IVsHrcj1t9BhXEJjtHlDJrT5H8pIgcJJEBRa2aAlybNdC-x9GIwvRPbQmmGzpkU0-wsNwXitg4cHqIEX0PPPhn7H3hKgfooA7GEfuRYCVKJn6z-eEjh8DZVSbICIe14FWjC0sgXJr"/>
            </div>
            <div>
              <h4 className="text-xl font-bold">Charlie Investor</h4>
              <p className="text-sm text-secondary font-medium">Atlas Ventures • Pre-seed/Seed • HealthTech</p>
              <p className="text-xs text-on-surface-variant mt-1">"Impressive AiBizScore. Let's discuss your Series A roadmap."</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-on-primary font-bold rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95">
              Accept
            </button>
            <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-highest text-on-surface font-bold rounded-full border border-outline-variant/20 hover:bg-error/10 hover:text-error hover:border-error/50 transition-colors active:scale-95">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionManager;
