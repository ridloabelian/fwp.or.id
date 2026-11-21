import { useMemo, useState } from 'react';
import { Search, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { nazhirList } from '../data/nazhir';

export default function NazhirDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Semua');

  const regions = useMemo(() => {
    const counts = new Map();
    for (const item of nazhirList) {
      const reg = item.region || 'Lainnya';
      counts.set(reg, (counts.get(reg) || 0) + 1);
    }
    return [
      { label: 'Semua', count: nazhirList.length },
      ...Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({ label, count })),
    ];
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return nazhirList.filter((item) => {
      const matchesRegion = selectedRegion === 'Semua' || (item.region || 'Lainnya') === selectedRegion;
      if (!matchesRegion) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        (item.yayasan || '').toLowerCase().includes(q) ||
        (item.stbpn || '').toLowerCase().includes(q) ||
        (item.region || '').toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div>
      <div className="filter-bar" style={{ marginBottom: 24 }}>
        <div className="filter-chips" role="tablist" aria-label="Filter wilayah nazhir">
          {regions.map((region) => {
            const active = selectedRegion === region.label;
            return (
              <button
                key={region.label}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedRegion(region.label)}
                className={`filter-chip ${active ? 'is-active' : ''}`}
              >
                {region.label} ({region.count})
              </button>
            );
          })}
        </div>

        <div className="search-inline">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari lembaga, yayasan, STBPN, atau provinsi..."
            aria-label="Cari lembaga nazhir"
          />
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 999,
              background: 'var(--navy-800)',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            <Search size={18} />
          </span>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: 20 }}>
        Menampilkan <strong style={{ color: 'var(--navy-900)' }}>{filtered.length}</strong> dari{' '}
        <strong>{nazhirList.length}</strong> lembaga tercatat (sumber data pembaruan Juli 2026).
      </p>

      {filtered.length === 0 ? (
        <div className="fwp-card text-center" style={{ padding: '48px 24px' }}>
          <Building2 size={40} color="var(--ink-muted)" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ marginBottom: 8 }}>Lembaga tidak ditemukan</h3>
          <p style={{ marginBottom: 16 }}>
            Tidak ada lembaga yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo; pada wilayah {selectedRegion}.
          </p>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('Semua');
            }}
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid-3" style={{ gap: 18 }}>
          {filtered.map((nazhir) => (
            <article
              key={`${nazhir.no}-${nazhir.name}`}
              className="fwp-card"
              style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'var(--green-50)',
                    color: 'var(--green-700)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  <ShieldCheck size={13} /> STBPN {nazhir.stbpn}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)' }}>
                  #{String(nazhir.no).padStart(2, '0')}
                </span>
              </div>

              <h3 style={{ fontSize: '1.08rem', lineHeight: 1.32, margin: 0 }}>{nazhir.name}</h3>

              <p style={{ fontSize: '0.84rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5 }}>
                {nazhir.yayasan}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 12,
                  borderTop: '1px solid var(--surface-mist)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--cyan-700)',
                }}
              >
                <MapPin size={14} />
                <span>{nazhir.region}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
