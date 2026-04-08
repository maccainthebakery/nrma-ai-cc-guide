/*
  DESIGN PHILOSOPHY: "Field Intelligence" — NRMA Blue & White Edition
  NRMA brand: Deep Navy #003087, Mid Blue #0057A8, Sky Blue #0099D8
  White cards, blue-grey background, blue accents throughout.
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
import { X, Search, ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://d2xsxph8kpxj0f.cloudfront.net/103634151/RBZatdY9R9eLrkBZWnJdMt/hero-banner-D6LYm9W6wFSxWnTUF9exQU.webp';

const ALL_CATEGORIES: VendorCategory[] = ['voice', 'agent-assist', 'orchestration', 'analytics'];
const ALL_UNITS: BusinessUnit[] = ['roadside', 'sixt', 'parks-marine', 'energy', 'cross-portfolio'];

// Category badge colours — all blue-family tones
const categoryChipColors: Record<VendorCategory, string> = {
  voice:          'bg-[#E8EFF7] text-[#003087] border border-[#B8CCE4]',
  'agent-assist': 'bg-[#E0F0FA] text-[#005F8E] border border-[#9DCFEC]',
  orchestration:  'bg-[#EAF2FF] text-[#0057A8] border border-[#A8C8F0]',
  analytics:      'bg-[#E0EEF8] text-[#004F96] border border-[#90BDE4]',
};

// Business unit pill colours — blues, teals, and white
const unitColors: Record<BusinessUnit, string> = {
  roadside:          'bg-[#003087] text-white border-[#003087]',
  sixt:              'bg-[#0057A8] text-white border-[#0057A8]',
  'parks-marine':    'bg-[#0099D8] text-white border-[#0099D8]',
  energy:            'bg-[#E8EFF7] text-[#003087] border-[#B8CCE4]',
  'cross-portfolio': 'bg-white text-[#5A7FA8] border-[#C8D9EC]',
};

function CategoryBadge({ category }: { category: VendorCategory }) {
  return (
    <span className={`mono-tag inline-flex items-center px-2.5 py-0.5 rounded-full ${categoryChipColors[category]}`}>
      {categoryLabels[category]}
    </span>
  );
}

function VendorCard({ vendor, onClick }: { vendor: Vendor; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="vendor-card w-full text-left p-6 flex flex-col gap-4 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#003087] mb-1 group-hover:text-[#0057A8] transition-colors">
            {vendor.name}
          </h3>
          <p className="text-sm text-[#5A7FA8] leading-snug">{vendor.tagline}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[#C8D9EC] group-hover:text-[#0057A8] transition-colors shrink-0 mt-1" />
      </div>

      <CategoryBadge category={vendor.category} />

      <p className="text-sm text-[#334E6B] leading-relaxed line-clamp-3">
        {vendor.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#E8EFF7]">
        {vendor.businessUnits.slice(0, 3).map((unit) => (
          <span
            key={unit}
            className={`text-xs px-2 py-0.5 rounded border font-medium ${unitColors[unit]}`}
          >
            {businessUnitLabels[unit]}
          </span>
        ))}
        {vendor.businessUnits.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded border bg-[#F0F4F8] text-[#5A7FA8] border-[#C8D9EC]">
            +{vendor.businessUnits.length - 3} more
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

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 350);
  };

  if (!vendor) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#003087]/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      <div className={`slide-over ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="sticky top-0 bg-[#003087] px-6 py-5 flex items-start justify-between gap-4 z-10">
          <div>
            <h2 className="text-xl font-bold text-white">{vendor.name}</h2>
            <p className="text-sm text-[#9DCFEC] mt-0.5">{vendor.tagline}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <CategoryBadge category={vendor.category} />

          {/* Description */}
          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-2">Overview</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed">{vendor.description}</p>
          </div>

          {/* Why NRMA */}
          <div className="nrma-callout py-3">
            <h3 className="mono-tag text-[#0057A8] block mb-1.5">Why NRMA</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed">{vendor.whyNRMA}</p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-3">Key Capabilities</h3>
            <ul className="space-y-2">
              {vendor.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#334E6B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0057A8] mt-1.5 shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Examples */}
          <div>
            <h3 className="mono-tag text-[#5A7FA8] block mb-3">Enterprise Deployments</h3>
            <div className="flex flex-wrap gap-2">
              {vendor.enterpriseExamples.map((ex, i) => (
                <span key={i} className="text-xs px-3 py-1.5 bg-[#F0F4F8] border border-[#C8D9EC] rounded-lg text-[#334E6B]">
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Business Units */}
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

          {/* Pre-sales angle */}
          <div className="bg-[#F0F4F8] rounded-xl p-4 border border-[#C8D9EC]">
            <h3 className="mono-tag text-[#5A7FA8] block mb-2">Pre-Sales Angle</h3>
            <p className="text-sm text-[#334E6B] leading-relaxed italic">"{vendor.presalesAngle}"</p>
          </div>

          {/* Website */}
          <a
            href={vendor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#0057A8] hover:underline"
          >
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

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      const matchesSearch =
        !search ||
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.tagline.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase()) ||
        v.categoryLabel.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || v.category === activeCategory;
      const matchesUnit = !activeUnit || v.businessUnits.includes(activeUnit);
      return matchesSearch && matchesCategory && matchesUnit;
    });
  }, [search, activeCategory, activeUnit]);

  const scrollToVendors = () => {
    vendorsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8]">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 bg-[#003087] shadow-md">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            {/* NRMA wordmark style */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#003087] text-xs font-bold font-mono tracking-tight">NRMA</span>
              </div>
              <span className="font-semibold text-white text-sm hidden sm:block">
                Next-Gen CC AI Guide
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#9DCFEC]">
            <button onClick={scrollToVendors} className="hover:text-white transition-colors">Vendors</button>
            <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
            <a href="#presales" className="hover:text-white transition-colors">Pre-Sales</a>
          </div>
          <div className="text-xs font-mono text-[#6B9EC4] hidden sm:block">
            April 2026 · Internal Briefing
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#003087]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003087] via-[#003087]/95 to-[#0057A8]/80" />
        {/* Sky blue accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0099D8] via-[#0057A8] to-[#003087]" />

        <div className="relative container py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099D8] animate-pulse" />
              <span className="mono-tag text-[#9DCFEC]">Pre-Sales Exploration · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Next-Generation
              <br />
              <span className="text-[#0099D8]">Contact Centre AI</span>
            </h1>
            <p className="text-lg text-[#A8C8E8] leading-relaxed mb-8 max-w-xl">
              A curated guide to niche and innovative AI vendors that augment NRMA's existing
              Avaya + Google CCAI stack — without ripping and replacing.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToVendors}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0099D8] text-white text-sm font-semibold rounded-lg hover:bg-[#007BB5] transition-colors"
              >
                Explore Vendors <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                View Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC CONTEXT ── */}
      <section className="container py-16 border-b border-[#C8D9EC]">
        <div className="max-w-3xl mb-10">
          <span className="mono-tag text-[#5A7FA8] block mb-3">01 · Strategic Context</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-4">
            {strategicContext.title}
          </h2>
          <p className="text-[#334E6B] leading-relaxed">{strategicContext.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {strategicContext.pillars.map((pillar, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#C8D9EC] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#E8EFF7] flex items-center justify-center text-xl mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-semibold text-[#003087] mb-2">{pillar.title}</h3>
              <p className="text-sm text-[#334E6B] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VENDOR DIRECTORY ── */}
      <section ref={vendorsSectionRef} className="container py-16 border-b border-[#C8D9EC]">
        <div className="mb-8">
          <span className="mono-tag text-[#5A7FA8] block mb-3">02 · Vendor Directory</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-2">
            Crafty &amp; Innovative Players
          </h2>
          <p className="text-[#5A7FA8] text-sm">
            {vendors.length} vendors · Click any card to explore in detail
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7FA8]" />
            <input
              type="text"
              placeholder="Search vendors, capabilities…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#C8D9EC] rounded-lg text-sm text-[#003087] placeholder:text-[#8AAFC8] focus:outline-none focus:ring-2 focus:ring-[#0057A8]/25 focus:border-[#0057A8]"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory(null)} className={`filter-chip ${activeCategory === null ? 'active' : ''}`}>
              All Categories
            </button>
            {ALL_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(activeCategory === cat ? null : cat)} className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}>
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Division chips */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveUnit(null)} className={`filter-chip ${activeUnit === null ? 'active' : ''}`}>
              All Divisions
            </button>
            {ALL_UNITS.map((unit) => (
              <button key={unit} onClick={() => setActiveUnit(activeUnit === unit ? null : unit)} className={`filter-chip ${activeUnit === unit ? 'active' : ''}`}>
                {businessUnitLabels[unit]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {(search || activeCategory || activeUnit) && (
          <p className="text-sm text-[#5A7FA8] mb-5">
            Showing <strong className="text-[#003087]">{filtered.length}</strong> of {vendors.length} vendors
            {search && <span> matching "<em>{search}</em>"</span>}
          </p>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} onClick={() => setSelectedVendor(vendor)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#5A7FA8]">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p className="font-medium">No vendors match your filters</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory(null); setActiveUnit(null); }}
              className="mt-3 text-sm text-[#0057A8] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* ── USE CASE MATRIX ── */}
      <section id="use-cases" className="container py-16 border-b border-[#C8D9EC]">
        <div className="mb-8">
          <span className="mono-tag text-[#5A7FA8] block mb-3">03 · Use Case Mapping</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-2">
            Innovations by NRMA Division
          </h2>
          <p className="text-[#5A7FA8] text-sm max-w-2xl">
            Mapping specific AI capabilities to NRMA's diverse portfolio — from roadside dispatch
            to energy billing and seasonal park bookings.
          </p>
        </div>

        <div className="space-y-4">
          {useCaseMatrix.map((row, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#C8D9EC] shadow-sm overflow-hidden">
              <div className="flex items-stretch">
                <div className="w-1 bg-[#0057A8] shrink-0" />
                <div className="p-5 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="mono-tag text-[#5A7FA8] block mb-1">{row.unit}</span>
                      <h3 className="font-semibold text-[#003087]">{row.useCase}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {row.vendors.map((v, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            const found = vendors.find((vd) => vd.id === row.vendorIds[j]);
                            if (found) setSelectedVendor(found);
                          }}
                          className="text-xs px-2.5 py-1 bg-[#E8EFF7] border border-[#B8CCE4] rounded-lg text-[#0057A8] hover:bg-[#0057A8] hover:text-white hover:border-[#0057A8] transition-colors font-medium"
                        >
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
      <section id="presales" className="container py-16 border-b border-[#C8D9EC]">
        <div className="mb-8">
          <span className="mono-tag text-[#5A7FA8] block mb-3">04 · Pre-Sales Preparation</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-2">
            Key Questions for Vendor Meetings
          </h2>
          <p className="text-[#5A7FA8] text-sm max-w-2xl">
            Use these questions to evaluate how each vendor integrates with NRMA's existing
            Avaya + Google CCAI architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {presalesQuestions.map((q, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#C8D9EC] shadow-sm p-6">
              <div className="flex items-start gap-4">
                <span className="mono-tag text-2xl font-bold text-[#C8D9EC] shrink-0 leading-none">
                  {q.number}
                </span>
                <div>
                  <h3 className="font-semibold text-[#003087] mb-2">{q.question}</h3>
                  <p className="text-sm text-[#334E6B] leading-relaxed">{q.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#003087] mt-0">
        <div className="container py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <span className="text-[#003087] text-[9px] font-bold font-mono tracking-tight">NRMA</span>
            </div>
            <span className="text-sm text-[#9DCFEC]">Next-Gen Contact Centre AI Guide</span>
          </div>
          <p className="text-xs text-[#6B9EC4] font-mono">
            Internal briefing · April 2026 · Pre-sales exploration only
          </p>
        </div>
      </footer>

      {/* ── SLIDE-OVER ── */}
      <SlideOver vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />
    </div>
  );
}
