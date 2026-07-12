import React, { useState } from 'react';

const PromoOfferSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: 'Lunch Hour Dash', rate: '20% OFF', code: 'LUNCH20', criteria: 'Valid Mon-Fri, 11 AM - 2 PM', badge: 'Popular', isActive: true},
    { id: 2, title: 'Family Weekend Feast', rate: 'Rs.50 OFF', code: 'FAMILY15', criteria: 'On bills above $60', badge: 'Weekend Only', isActive: true},
    { id: 3, title: 'First App Order', rate: 'Free Delivery', code: 'FREESHIP', criteria: 'New mobile app accounts', badge: 'New User', isActive: true},
    { id: 4, title: 'Midnight Cravings', rate: 'Buy 1 Get 1', code: 'BOGOFEAST', criteria: 'Select appetizers & desserts', badge: 'Late Night', isActive: true},
  ]);

  const toggleCampaign = (id) => {
    setCampaigns(campaigns.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c));
  };

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const filteredCampaigns = campaigns.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mx-auto px-4 py-6 sm:px-6 lg:px-8 font-sans bg-white rounded-2xl border border-slate-200 space-y-6 shadow-xs">
      
      {/* Search & Header Panel Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5 gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            Active Promo Campaigns
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Live store discount schedules and menu voucher codes</p>
        </div>
        
        {/* Simple Search Input */}
        <div className="relative w-full sm:w-60">
          <input 
            type="text"
            placeholder="Filter campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-3.5 pr-8 py-2.5 focus:outline-hidden focus:border-blue-650 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900 placeholder-slate-400"
          />
          <span className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">🔍</span>
        </div>
      </div>

      {/* Promotional Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCampaigns.map((promo) => (
          <div 
            key={promo.id}
            className={`border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 relative overflow-hidden group ${
              promo.isActive 
                ? 'border-slate-200 bg-white hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5' 
                : 'border-slate-100 bg-slate-50/60 opacity-50'
            }`}
          >
            {/* Ambient Background Glow Effect on Hover */}
            {promo.isActive && (
              <div className="absolute -inset-px bg-linear-to-r from-blue-500/0 via-blue-550/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}

            {/* Left Column Text Details */}
            <div className="space-y-1 relative z-10">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {promo.title}
                </span>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider ${
                  promo.isActive ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-400'
                }`}>
                  {promo.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{promo.criteria}</p>
              
              <div className="flex items-center space-x-3 pt-3 text-xs font-semibold">
                <span className={`text-lg font-black tracking-tight ${promo.isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                  {promo.rate}
                </span>
                <span className="text-slate-200">|</span>
              </div>
            </div>

            {/* Right Side Control Panel */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-5 gap-4 relative z-10">
              
              {/* Dynamic Toggle Control Switch using Premium Green */}
              <div className="flex items-center space-x-2.5">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${promo.isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {promo.isActive ? 'Live' : 'Paused'}
                </span>
                <button
                  onClick={() => toggleCampaign(promo.id)}
                  className={`w-9 h-5 rounded-full p-0.5 cursor-pointer transition-colors duration-200 focus:outline-hidden ${
                    promo.isActive ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs transform transition-transform duration-200 translate-x-0 group-hover:scale-102 dynamic-toggle" 
                       style={{ transform: promo.isActive ? 'translateX(16px)' : 'translateX(0px)' }} />
                </button>
              </div>

              {/* Click-to-Copy Coupon Block Component */}
              <button 
                disabled={!promo.isActive}
                onClick={() => handleCopy(promo.code, promo.id)}
                className={`font-mono text-xs font-bold px-3 py-2 rounded-lg tracking-wider uppercase flex items-center space-x-2 transition-all cursor-pointer ${
                  !promo.isActive 
                    ? 'bg-slate-50 border border-slate-200 text-slate-400 cursor-not-allowed'
                    : copiedId === promo.id
                    ? 'bg-emerald-50 border border-emerald-500 text-emerald-600 scale-95'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-500 active:scale-98'
                }`}
                title={promo.isActive ? "Click to copy code" : "Campaign paused"}
              >
                <span>{promo.code}</span>
                <span className="text-[10px]">
                  {copiedId === promo.id ? '✓' : '📋'}
                </span>
              </button>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PromoOfferSection;