/*
  DESIGN PHILOSOPHY: "Field Intelligence"
  Premium analyst report meets interactive product directory.
  Warm off-white canvas, Lora serif headings, NRMA red accents.
  Asymmetric hero, grid vendor cards, slide-over detail panel.
*/

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  vendors,
  categoryLabels,
  businessUnitLabels,
  categoryColors,
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

const unitColors: Record<BusinessUnit, string> = {
  roadside: 'bg-red-50 text-red-700 border-red-200',
  sixt: 'bg-blue-50 text-blue-700 border-blue-200',
  'parks-marine': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  energy: 'bg-amber-50 text-amber-700 border-amber-200',
  'cross-portfolio': 'bg-slate-50 text-slate-600 border-slate-200',
};

function CategoryBadge({ category }: { category: VendorCategory }) {
  const colorMap: Record<VendorCategory, string> = {
    voice: 'bg-blue-50 text-blue-700 border border-blue-200',
    'agent-assist': 'bg-amber-50 text-amber-700 border border-amber-200',
    orchestration: 'bg-purple-50 text-purple-700 border border-purple-200',
    analytics: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };
  return (
    <span
      className={`mono-tag inline-flex items-center px-2.5 py-0.5 rounded-full ${colorMap[category]}`}
    >
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
          <h3 className="text-lg font-semibold text-[#1C1917] mb-1 group-hover:text-[#E3001B] transition-colors">
            {vendor.name}
          </h3>
          <p className="text-sm text-slate-500 leading-snug">{vendor.tagline}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#E3001B] transition-colors shrink-0 mt-1" />
      </div>

      <CategoryBadge category={vendor.category} />

      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
        {vendor.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-slate-100">
        {vendor.businessUnits.slice(0, 3).map((unit) => (
          <span
            key={unit}
            className={`text-xs px-2 py-0.5 rounded border font-medium ${unitColors[unit]}`}
          >
            {businessUnitLabels[unit]}
          </span>
        ))}
        {vendor.businessUnits.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded border bg-slate-50 text-slate-500 border-slate-200">
            +{vendor.businessUnits.length - 3} more
          </span>
        )}
      </div>
    </button>
  );
}

function SlideOver({
  vendor,
  onClose,
}: {
  vendor: Vendor | null;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (vendor) {
      setTimeout(() => setIsOpen(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [vendor]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 350);
  };

  if (!vendor) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`slide-over ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${vendor.name} details`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-start justify-between gap-4 z-10">
          <div>
            <h2 className="text-xl font-bold text-[#1C1917]">{vendor.name}</h2>
            <p className="text-sm text-slate-500 mt-0.5">{vendor.tagline}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Category */}
          <CategoryBadge category={vendor.category} />

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">{vendor.description}</p>
          </div>

          {/* Why NRMA */}
          <div className="nrma-callout py-3">
            <h3 className="text-xs font-semibold text-[#E3001B] uppercase tracking-wider mb-1.5 font-mono">
              Why NRMA
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">{vendor.whyNRMA}</p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-mono">
              Key Capabilities
            </h3>
            <ul className="space-y-2">
              {vendor.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3001B] mt-1.5 shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Examples */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-mono">
              Enterprise Deployments
            </h3>
            <div className="flex flex-wrap gap-2">
              {vendor.enterpriseExamples.map((ex, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Business Units */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-mono">
              Relevant NRMA Divisions
            </h3>
            <div className="flex flex-wrap gap-2">
              {vendor.businessUnits.map((unit) => (
                <span
                  key={unit}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${unitColors[unit]}`}
                >
                  {businessUnitLabels[unit]}
                </span>
              ))}
            </div>
          </div>

          {/* Pre-sales angle */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
              Pre-Sales Angle
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "{vendor.presalesAngle}"
            </p>
          </div>

          {/* Website link */}
          <a
            href={vendor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#E3001B] hover:underline"
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
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#E3001B] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold font-mono">N</span>
            </div>
            <span className="font-semibold text-[#1C1917] text-sm">
              NRMA · Next-Gen CC AI Guide
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <button onClick={scrollToVendors} className="hover:text-[#E3001B] transition-colors">
              Vendors
            </button>
            <a href="#use-cases" className="hover:text-[#E3001B] transition-colors">
              Use Cases
            </a>
            <a href="#presales" className="hover:text-[#E3001B] transition-colors">
              Pre-Sales
            </a>
          </div>
          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            April 2026 · Internal Briefing
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-[#FAF8F5]/40" />
        <div className="relative container py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E3001B]/8 border border-[#E3001B]/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3001B] animate-pulse" />
              <span className="mono-tag text-[#E3001B]">Pre-Sales Exploration · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
              Next-Generation
              <br />
              <em className="not-italic text-[#E3001B]">Contact Centre AI</em>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              A curated guide to niche and innovative AI vendors that augment NRMA's existing
              Avaya + Google CCAI stack — without ripping and replacing.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToVendors}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E3001B] text-white text-sm font-semibold rounded-lg hover:bg-[#c0001a] transition-colors"
              >
                Explore Vendors <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-[#1C1917] text-sm font-semibold rounded-lg hover:border-slate-300 transition-colors"
              >
                View Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC CONTEXT ── */}
      <section className="container py-16 border-b border-slate-200">
        <div className="max-w-3xl mb-10">
          <span className="mono-tag text-slate-400 block mb-3">01 · Strategic Context</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-4">
            {strategicContext.title}
          </h2>
          <p className="text-slate-600 leading-relaxed">{strategicContext.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {strategicContext.pillars.map((pillar, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="text-2xl mb-3">{pillar.icon}</div>
              <h3 className="font-semibold text-[#1C1917] mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VENDOR DIRECTORY ── */}
      <section ref={vendorsSectionRef} className="container py-16 border-b border-slate-200">
        <div className="mb-8">
          <span className="mono-tag text-slate-400 block mb-3">02 · Vendor Directory</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">
            Crafty & Innovative Players
          </h2>
          <p className="text-slate-500 text-sm">
            {vendors.length} vendors · Click any card to explore in detail
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search vendors, capabilities…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-[#1C1917] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E3001B]/20 focus:border-[#E3001B]/40"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`filter-chip ${activeCategory === null ? 'active' : ''}`}
            >
              All Categories
            </button>
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Business unit chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveUnit(null)}
              className={`filter-chip ${activeUnit === null ? 'active' : ''}`}
            >
              All Divisions
            </button>
            {ALL_UNITS.map((unit) => (
              <button
                key={unit}
                onClick={() => setActiveUnit(activeUnit === unit ? null : unit)}
                className={`filter-chip ${activeUnit === unit ? 'active' : ''}`}
              >
                {businessUnitLabels[unit]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {(search || activeCategory || activeUnit) && (
          <p className="text-sm text-slate-500 mb-5">
            Showing <strong>{filtered.length}</strong> of {vendors.length} vendors
            {search && (
              <span>
                {' '}
                matching "<em>{search}</em>"
              </span>
            )}
          </p>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onClick={() => setSelectedVendor(vendor)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p className="font-medium">No vendors match your filters</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory(null);
                setActiveUnit(null);
              }}
              className="mt-3 text-sm text-[#E3001B] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* ── USE CASE MATRIX ── */}
      <section id="use-cases" className="container py-16 border-b border-slate-200">
        <div className="mb-8">
          <span className="mono-tag text-slate-400 block mb-3">03 · Use Case Mapping</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">
            Innovations by NRMA Division
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl">
            Mapping specific AI capabilities to NRMA's diverse portfolio — from roadside
            dispatch to energy billing and seasonal park bookings.
          </p>
        </div>

        <div className="space-y-4">
          {useCaseMatrix.map((row, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-stretch">
                {/* Left accent */}
                <div className="w-1 bg-[#E3001B] shrink-0" />
                <div className="p-5 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="mono-tag text-slate-400 block mb-1">{row.unit}</span>
                      <h3 className="font-semibold text-[#1C1917]">{row.useCase}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {row.vendors.map((v, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            const found = vendors.find((vd) => vd.id === row.vendorIds[j]);
                            if (found) setSelectedVendor(found);
                          }}
                          className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:border-[#E3001B]/40 hover:text-[#E3001B] transition-colors font-medium"
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{row.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRE-SALES QUESTIONS ── */}
      <section id="presales" className="container py-16 border-b border-slate-200">
        <div className="mb-8">
          <span className="mono-tag text-slate-400 block mb-3">04 · Pre-Sales Preparation</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">
            Key Questions for Vendor Meetings
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl">
            Use these questions to evaluate how each vendor integrates with NRMA's existing
            Avaya + Google CCAI architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {presalesQuestions.map((q, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <span className="mono-tag text-2xl font-bold text-slate-200 shrink-0 leading-none">
                  {q.number}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1C1917] mb-2">{q.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{q.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="container py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#E3001B] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold font-mono">N</span>
            </div>
            <span className="text-sm text-slate-500">
              NRMA Next-Gen Contact Centre AI Guide
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Internal briefing · April 2026 · Pre-sales exploration only
          </p>
        </div>
      </footer>

      {/* ── SLIDE-OVER ── */}
      <SlideOver vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />
    </div>
  );
}
