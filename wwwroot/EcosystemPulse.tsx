import React from 'react';

const EcosystemPulse: React.FC = () => {
  return (
    <div className="glass-panel p-6 border border-outline-variant/15 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
          Ecosystem Pulse
        </h3>
        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full tracking-wider animate-pulse">Live</span>
      </div>

      <div className="space-y-4">
        {/* Pulse Item 1 */}
        <div className="flex gap-4 items-start p-4 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">workspace_premium</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">Acme HealthTech (You)</p>
            <p className="text-xs text-on-surface-variant">Grant application for "FDA Innovation" is 80% complete.</p>
          </div>
        </div>

        {/* Pulse Item 2 */}
        <div className="flex gap-4 items-start p-4 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
          <div className="w-10 h-10 shrink-0 rounded-full bg-tertiary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary">visibility</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">VC Activity</p>
            <p className="text-xs text-on-surface-variant">3 Investors from HealthTech sector viewed your pitch deck.</p>
          </div>
        </div>

        {/* Pulse Item 3 */}
        <div className="flex gap-4 items-start p-4 rounded-xl bg-surface-container-highest border border-outline-variant/10 hover:border-secondary/30 transition-colors">
          <div className="w-10 h-10 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">trending_up</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">Ecosystem Milestone</p>
            <p className="text-xs text-on-surface-variant">50 New Mentors joined the Bharat network this week.</p>
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-surface-container rounded-xl text-sm font-bold text-primary border border-outline-variant/10 hover:bg-primary/10 transition-all">
        Explore Full Network Activity
      </button>
    </div>
  );
};

export default EcosystemPulse;
