import React from 'react';

const FounderDashboard: React.FC = () => {
  return (
    <div className="min-h-screen text-on-surface bg-background font-sans pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl flex items-center justify-between px-6 h-16 shadow-lg border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">owl</span>
          <h1 className="font-bold tracking-tighter text-2xl text-primary">OwlWise</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors text-tertiary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOhFuC5VcXRnV4nFwI3Hv8ahsAFcptdHV97TTquD2DQSa-Jgku21dCvTOh8qM3AMG4TOK35FC3ChAs7uD7PN33o2fXl6u0Q4ehIjLK1QGzN-NdPEbOMX4WREml-TA1gHj1wC7IVsHrcj1t9BhXEJjtHlDJrT5H8pIgcJJEBRa2aAlybNdC-x9GIwvRPbQmmGzpkU0-wsNwXitg4cHqIEX0PPPhn7H3hKgfooA7GEfuRYCVKJn6z-eEjh8DZVSbICIe14FWjC0sgXJr"/>
          </div>
        </div>
      </header>

      <main className="mt-24 px-6 max-w-7xl mx-auto space-y-8">
        {/* Hero Greeting Section */}
        <section className="relative overflow-hidden rounded-xl p-8 bg-surface-container-low border border-outline-variant/10">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-on-secondary text-3xl">owl</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Hoo-ray, Founder!</h2>
              </div>
              <p className="text-on-surface-variant text-lg">Your ecosystem is thriving tonight. Ready to hatch something big?</p>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* OwlWise Insights Card */}
          <div className="md:col-span-8 glass-panel p-8 relative overflow-hidden group border border-outline-variant/15">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">format_quote</span>
            </div>
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-secondary text-[10px] font-bold uppercase tracking-wider">AiBizScore Insights</span>
                <blockquote className="text-2xl md:text-3xl font-bold leading-tight text-on-surface">
                  "Your regulatory roadmap is 85% complete. Focus on the final compliance audits to unlock Investor Matchmaking."
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-on-primary">bolt</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-on-secondary">auto_awesome</span>
                  </div>
                </div>
                <span className="text-on-surface-variant text-sm font-medium">Updated 2 hours ago by Matchmaking Agent</span>
              </div>
            </div>
          </div>

          {/* Ecosystem Pulse */}
          <div className="md:col-span-4 bg-surface-container rounded-lg p-6 space-y-6 border border-outline-variant/15">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Ecosystem Pulse</h3>
              <span className="material-symbols-outlined text-primary">sensors</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-highest flex gap-4 items-start border border-outline-variant/10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold">New VC Match</p>
                  <p className="text-xs text-on-surface-variant">Atlas Ventures viewed your roadmap.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-highest flex gap-4 items-start border border-outline-variant/10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">handshake</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold">Mentor Reply</p>
                  <p className="text-xs text-on-surface-variant">Bob Mentor replied to your Challenge.</p>
                </div>
              </div>
              <button className="w-full py-3 rounded-full text-sm font-bold text-primary hover:bg-primary/10 transition-colors">
                View All Activity
              </button>
            </div>
          </div>

          {/* Founder Toolkit */}
          <div className="md:col-span-12 space-y-6">
            <h3 className="font-bold text-2xl px-2">Founder Toolkit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="group p-6 bg-gradient-to-br from-primary to-primary-container rounded-lg text-on-primary flex flex-col gap-4 text-left transition-transform hover:-translate-y-1 active:scale-95">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-2xl">add_business</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold block">Post a Challenge</span>
                  <p className="text-xs opacity-80">Get help from the mentor network.</p>
                </div>
              </button>
              <button className="group p-6 bg-surface-container-high rounded-lg flex flex-col gap-4 text-left transition-transform hover:-translate-y-1 active:scale-95 border border-outline-variant/20 hover:border-secondary/50">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-secondary">groups</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold block text-on-surface">Explore Mentors</span>
                  <p className="text-xs text-on-surface-variant">Direct bridge to industry experts.</p>
                </div>
              </button>
              <button className="group p-6 bg-surface-container-high rounded-lg flex flex-col gap-4 text-left transition-transform hover:-translate-y-1 active:scale-95 border border-outline-variant/20 hover:border-tertiary/50">
                <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-tertiary">analytics</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold block text-on-surface">AiBizScore Report</span>
                  <p className="text-xs text-on-surface-variant">Visualise your readiness metrics.</p>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Metrics */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 text-center space-y-1">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">AiBizScore</p>
              <p className="text-3xl font-black text-secondary">85.5</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 text-center space-y-1">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Connections</p>
              <p className="text-3xl font-black text-primary">12</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 text-center space-y-1">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Challenges</p>
              <p className="text-3xl font-black text-tertiary">02</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 text-center space-y-1">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Marketplace</p>
              <p className="text-3xl font-black text-on-surface">Pro</p>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-background/60 backdrop-blur-xl rounded-t-[40px] shadow-2xl flex justify-around items-center px-4 pb-6 pt-3 border-t border-outline-variant/10">
        <a className="flex flex-col items-center justify-center text-primary px-5 py-2 active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-tertiary px-5 py-2 hover:text-secondary transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Explore</span>
        </a>
        <a className="flex flex-col items-center justify-center text-tertiary px-5 py-2 hover:text-secondary transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Feed</span>
        </a>
        <a className="flex flex-col items-center justify-center text-tertiary px-5 py-2 hover:text-secondary transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Network</span>
        </a>
      </nav>
    </div>
  );
};

export default FounderDashboard;
