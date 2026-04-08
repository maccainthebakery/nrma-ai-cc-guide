/*
  DESIGN: "Field Intelligence" — NRMA Blue & White, Visually Elevated
  Rich hero with generated background, polished cards with gradient top borders,
  stat counters, gradient section headers, improved typography hierarchy.
*/

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  vendors,
  categoryLabels,
  businessUnitLabels,
  strategicContext,
  useCaseMatrix,
  presalesQuestions,
  type VendorCategory,
  type BusinessUnit,
  type Vendor,
} from '@/lib/vendors';
import { X, Search, ExternalLink, ChevronRight, ArrowRight, Zap, Brain, Mic, BarChart3 } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/103634151/RBZatdY9R9eLrkBZWnJdMt/hero-v2-PG6fPEirDNVMFHvp5FcTDc.webp';

const ALL_CATEGORIES: VendorCategory[] = ['voice', 'agent-assist', 'orchestration', 'analytics'];
const ALL_UNITS: BusinessUnit[] = ['roadside', 'sixt', 'parks-marine', 'energy', 'cross-portfolio'];

const categoryConfig: Record<VendorCategory, { color: string; icon: React.ReactNode }> = {
  voice:          { color: 'bg-blue-50 text-blue-800 border border-blue-200',    icon: <Mic className="w-3 h-3" /> },
  'agent-assist': { color: 'bg-sky-50 text-sky-800 border border-sky-200',       icon: <Zap className="w-3 h-3" /> },
  orchestration:  { color: 'bg-indigo-50 text-indigo-800 border border-indigo-200', icon: <Brain className="w-3 h-3" /> },
  analytics:      { color: 'bg-cyan-50 text-cyan-800 border border-cyan-200',    icon: <BarChart3 className="w-3 h-3" /> },
};

const unitColors: Record<BusinessUnit, string> = {
  roadside:          'bg-[#003087] text-white border-[#003087]',
  sixt:              'bg-[#0057A8] text-white border-[#0057A8]',
  'parks-marine':    'bg-[#0099D8] text-white border-[#0099D8]',
  energy:            'bg-[#E8EFF7] text-[#003087] border-[#B8CCE4]',
  'cross-portfolio': 'bg-white text-[#5A7FA8] border-[#C8D9EC]',
};

const pillarIcons = [
  <Zap className="w-5 h-5 text-[#0099D8]" />,
  <Mic className="w-5 h-5 text-[#0099D8]" />,
  <Brain className="w-5 h-5 text-[#0099D8]" />,
];

function CategoryBadge({ category }: { category: VendorCategory }) {
  const { color, icon } = categoryConfig[category];
  return (
    <span className={`mono-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${color}`}>
      {icon}
      {categoryLabels[category]}
    </span>
  );
}

function VendorCard({ vendor, onClick }: { vendor: Vendor; onClick: () => void }) {
  return (
    <button onClick={onClick} className="vendor-card w-full text-left p-6 flex flex-col gap-4 group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Vendor initial avatar */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#003087] to-[#0099D8] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
              {vendor.name.charAt(0)}
            </div>
            <h3 className="text-base font-bold text-[#003087] group-hover:text-[#0057A8] transition-colors leading-tight">
              {vendor.name}
            </h3>
          </div>
          <p className="text-sm text-[#5A7FA8] leading-snug">{vendor.tagline}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[#C8D9EC] group-hover:text-[#0057A8] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>

      <CategoryBadge category={vendor.category} />

      <p className="text-sm text-[#334E6B] leading-relaxed line-clamp-3 flex-1">
        {vendor.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#EEF4FB]">
        {vendor.businessUnits.slice(0, 3).map((unit) => (
          <span key={unit} className={`text-xs px-2 py-0.5 rounded-md border font-medium ${unitColors[unit]}`}>
            {businessUnitLabels[unit]}
          </span>
        ))}
        {vendor.businessUnits.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded-md border bg-[#F0F4F8] text-[#5A7FA8] border-[#C8D9EC]">
            +{vendor.businessUnits.length - 3}
          </span>
        )}
      </div>
    </button>
  );
}

function SlideOver({ vendor, onClose }: { vendor: Vendor | null; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (vendor) {
      setTimeout(() => setIsOpen(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [vendor]);

  const handleClose = () => { setIsOpen(false); setTimeout(onClose, 350); };
  if (!vendor) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#001840]/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      <div className={`slide-over ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {/* Header with gradient */}
        <div className="sticky top-0 z-10" style={{ background: 'linear-gradient(135deg, #003087 0%, #0057A8 100%)' }}>
          <div className="px-6 py-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {vendor.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{vendor.name}</h2>
                <p className="text-sm text-[#9DCFEC] mt-0.5 leading-snug">{vendor.tagline}</p>
              </div>
            </div>
            <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-white/15 transition-colors text-white/60 hover:text-white shrink-0 mt-0.5">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Sky blue accent line */}
          <div className="h-0.5 bg-gradient-to-r from-[#0099D8] via-white/30 to-transparent" />
        </div>

        <div className="px-6 py-6 space-y-6">
          <CategoryBadge category={vendor.category} />

          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-2">Overview</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed">{vendor.description}</p>
          </div>

          <div className="nrma-callout py-3.5">
            <h3 className="mono-tag text-[#0057A8] block mb-1.5">Why NRMA</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed">{vendor.whyNRMA}</p>
          </div>

          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-3">Key Capabilities</h3>
            <ul className="space-y-2.5">
              {vendor.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334E6B]">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#003087] to-[#0099D8] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-3">Enterprise Deployments</h3>
            <div className="flex flex-wrap gap-2">
              {vendor.enterpriseExamples.map((ex, i) => (
                <span key={i} className="text-xs px-3 py-1.5 bg-[#F0F4F8] border border-[#D1E3F4] rounded-lg text-[#334E6B] font-medium">
                  {ex}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-3">Relevant NRMA Divisions</h3>
            <div className="flex flex-wrap gap-2">
              {vendor.businessUnits.map((unit) => (
                <span key={unit} className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${unitColors[unit]}`}>
                  {businessUnitLabels[unit]}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-4 border border-[#D1E3F4]" style={{ background: 'linear-gradient(135deg, #EEF5FC, #F5F9FF)' }}>
            <h3 className="mono-tag text-[#5A7FA8] block mb-2">Pre-Sales Angle</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed italic">"{vendor.presalesAngle}"</p>
          </div>

          <a href={vendor.website} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003087] to-[#0057A8] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm">
            Visit {vendor.name} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<VendorCategory | null>(null);
  const [activeUnit, setActiveUnit] = useState<BusinessUnit | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const vendorsSectionRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => vendors.filter((v) => {
    const q = search.toLowerCase();
    const matchesSearch = !search ||
      v.name.toLowerCase().includes(q) ||
      v.tagline.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.categoryLabel.toLowerCase().includes(q);
    return matchesSearch &&
      (!activeCategory || v.category === activeCategory) &&
      (!activeUnit || v.businessUnits.includes(activeUnit));
  }), [search, activeCategory, activeUnit]);

  const scrollToVendors = () => vendorsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-[#EEF4FB]">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 shadow-lg" style={{ background: 'linear-gradient(90deg, #002070 0%, #003087 50%, #0057A8 100%)' }}>
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-[#003087] text-[9px] font-bold font-mono tracking-tight leading-none">NRMA</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-sm tracking-wide">Next-Gen CC AI Guide</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
          {[{ label: 'Vendors', action: scrollToVendors }, { label: 'Use Cases', action: () => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' }) }, { label: 'Pre-Sales', action: () => document.getElementById('presales')?.scrollIntoView({ behavior: 'smooth' }) }].map(({ label, action }) => (
            <button key={label} onClick={action}
              className="px-4 py-2 text-sm text-[#9DCFEC] hover:text-white hover:bg-white/10 rounded-lg transition-all">
              {label}
            </button>
          ))}
          </div>
          <div className="text-xs font-mono text-[#6B9EC4] hidden sm:block bg-white/8 px-3 py-1.5 rounded-full border border-white/15">
            April 2026
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(0,32,112,0.96) 0%, rgba(0,48,135,0.88) 45%, rgba(0,87,168,0.65) 75%, rgba(0,153,216,0.3) 100%)' }} />
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EEF4FB] to-transparent" />

        <div className="relative container py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-white/20" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full bg-[#0099D8] animate-pulse" />
              <span className="mono-tag text-[#9DCFEC]">Pre-Sales Exploration · 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5" style={{ fontFamily: 'Lora, Georgia, serif' }}>
              Next-Generation
              <br />
              <span className="gradient-text">Contact Centre AI</span>
            </h1>

            <p className="text-lg text-[#A8C8E8] leading-relaxed mb-8 max-w-lg">
              A curated guide to niche and innovative AI vendors that augment NRMA's existing
              Avaya + Google CCAI stack — without ripping and replacing.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { value: '9', label: 'Vendors Profiled' },
                { value: '4', label: 'AI Categories' },
                { value: '5', label: 'NRMA Divisions' },
              ].map((s) => (
                <div key={s.label} className="stat-badge text-center min-w-[90px]">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Lora, serif' }}>{s.value}</div>
                  <div className="text-xs text-[#9DCFEC] mt-0.5 font-mono">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={scrollToVendors}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #0099D8, #0057A8)' }}>
                Explore Vendors <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#use-cases"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white border border-white/25 hover:bg-white/15 transition-all"
                style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.08)' }}>
                View Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC CONTEXT ── */}
      <section className="container py-16 border-b border-[#D1E3F4]">
        <div className="max-w-3xl mb-10">
          <span className="mono-tag text-[#0099D8] block mb-3">01 · Strategic Context</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-4">{strategicContext.title}</h2>
          <p className="text-[#334E6B] leading-relaxed text-base">{strategicContext.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {strategicContext.pillars.map((pillar, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#D1E3F4] shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #003087, #0099D8)' }}>
                {pillarIcons[i]}
              </div>
              <h3 className="font-bold text-[#003087] mb-2 text-base">{pillar.title}</h3>
              <p className="text-sm text-[#334E6B] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VENDOR DIRECTORY ── */}
      <section ref={vendorsSectionRef} className="container py-16 border-b border-[#D1E3F4]">
        {/* Section header with gradient accent */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="mono-tag text-[#0099D8] block mb-2">02 · Vendor Directory</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003087]">Crafty &amp; Innovative Players</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D1E3F4] bg-white text-sm text-[#5A7FA8] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#0099D8]" />
            {vendors.length} vendors
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 space-y-3">
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7FA8]" />
            <input type="text" placeholder="Search vendors, capabilities, categories…"
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#D1E3F4] rounded-xl text-sm text-[#003087] placeholder:text-[#8AAFC8] focus:outline-none focus:ring-2 focus:ring-[#0057A8]/20 focus:border-[#0057A8] shadow-sm transition-shadow" />
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory(null)} className={`filter-chip ${!activeCategory ? 'active' : ''}`}>All Categories</button>
            {ALL_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(activeCategory === cat ? null : cat)} className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}>
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveUnit(null)} className={`filter-chip ${!activeUnit ? 'active' : ''}`}>All Divisions</button>
            {ALL_UNITS.map((unit) => (
              <button key={unit} onClick={() => setActiveUnit(activeUnit === unit ? null : unit)} className={`filter-chip ${activeUnit === unit ? 'active' : ''}`}>
                {businessUnitLabels[unit]}
              </button>
            ))}
          </div>
        </div>

        {(search || activeCategory || activeUnit) && (
          <p className="text-sm text-[#5A7FA8] mb-5">
            Showing <strong className="text-[#003087]">{filtered.length}</strong> of {vendors.length} vendors
            {search && <span> matching "<em className="text-[#0057A8]">{search}</em>"</span>}
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} onClick={() => setSelectedVendor(vendor)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#5A7FA8]">
            <div className="w-16 h-16 rounded-2xl bg-[#EEF5FC] flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 opacity-40" />
            </div>
            <p className="font-semibold text-[#003087]">No vendors match your filters</p>
            <button onClick={() => { setSearch(''); setActiveCategory(null); setActiveUnit(null); }}
              className="mt-3 text-sm text-[#0057A8] hover:underline font-medium">
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* ── USE CASE MATRIX ── */}
      <section id="use-cases" className="py-16 border-b border-[#D1E3F4]">
        {/* Full-width gradient header band */}
        <div className="mb-10" style={{ background: 'linear-gradient(135deg, #003087 0%, #0057A8 60%, #0099D8 100%)' }}>
          <div className="container py-10">
            <span className="mono-tag text-[#9DCFEC] block mb-2">03 · Use Case Mapping</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Innovations by NRMA Division</h2>
            <p className="text-[#A8C8E8] text-sm max-w-2xl">
              Mapping specific AI capabilities to NRMA's diverse portfolio — from roadside dispatch to energy billing and seasonal park bookings.
            </p>
          </div>
        </div>

        <div className="container space-y-4">
          {useCaseMatrix.map((row, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#D1E3F4] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="flex items-stretch">
                <div className="w-1.5 shrink-0" style={{ background: 'linear-gradient(180deg, #003087, #0099D8)' }} />
                <div className="p-5 md:p-6 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="mono-tag text-[#0099D8] block mb-1">{row.unit}</span>
                      <h3 className="font-bold text-[#003087] text-base">{row.useCase}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {row.vendors.map((v, j) => (
                        <button key={j}
                          onClick={() => { const found = vendors.find((vd) => vd.id === row.vendorIds[j]); if (found) setSelectedVendor(found); }}
                          className="text-xs px-3 py-1.5 rounded-lg font-semibold border border-[#B8CCE4] text-[#0057A8] bg-[#EEF5FC] hover:bg-[#0057A8] hover:text-white hover:border-[#0057A8] transition-all shadow-sm">
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#334E6B] leading-relaxed">{row.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRE-SALES QUESTIONS ── */}
      <section id="presales" className="container py-16 border-b border-[#D1E3F4]">
        <div className="mb-8">
          <span className="mono-tag text-[#0099D8] block mb-2">04 · Pre-Sales Preparation</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-2">Key Questions for Vendor Meetings</h2>
          <p className="text-[#5A7FA8] text-sm max-w-2xl">
            Use these questions to evaluate how each vendor integrates with NRMA's existing Avaya + Google CCAI architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {presalesQuestions.map((q, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#D1E3F4] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #003087, #0099D8)' }}>
                  <span className="text-white font-bold text-sm font-mono">{q.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#003087] mb-2">{q.question}</h3>
                  <p className="text-sm text-[#334E6B] leading-relaxed">{q.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'linear-gradient(135deg, #001840 0%, #003087 100%)' }}>
        <div className="container py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-[#003087] text-[9px] font-bold font-mono tracking-tight">NRMA</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Next-Gen Contact Centre AI Guide</div>
                <div className="text-[#6B9EC4] text-xs font-mono mt-0.5">Internal briefing · Pre-sales exploration only</div>
              </div>
            </div>
            <div className="text-xs text-[#6B9EC4] font-mono">April 2026</div>
          </div>
        </div>
      </footer>

      <SlideOver vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />
    </div>
  );
}
