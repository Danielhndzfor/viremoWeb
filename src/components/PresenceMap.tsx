import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';
import { geoPath, geoMercator, geoContains } from 'd3-geo';

type Puerto = { name: string; coordinates: [number, number] };

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export default function PresenceMap({ puertos }: { puertos: Puerto[] }) {
    const [hover, setHover] = useState<string | null>(null);

    // grid diagonal lines params
    const width = 800;
    const height = 500;
    const spacing = 28;

    // create a d3 projection that matches the ComposableMap projectionConfig
    const projection = geoMercator().scale(900).center([-102, 23]).translate([width / 2, height / 2]);
    const pathGenerator = geoPath().projection(projection as any);

    // build diagonal lines array (both directions) in SVG coords
    const diag1: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let x = -height; x < width + height; x += spacing) {
        diag1.push({ x1: x, y1: 0, x2: x + height, y2: height });
    }
    const diag2: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let x = -height; x < width + height; x += spacing) {
        diag2.push({ x1: x, y1: height, x2: x + height, y2: 0 });
    }

    return (
        <div className="relative w-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#071426] to-[#052033]" />

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 900, center: [-102, 23] }}
                className="relative z-10"
                width={width}
                height={height}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) => {
                        // find Mexico geometry (by common property names / id)
                        const mexico = geographies.find(
                            g => g.properties && (g.id === '484' || g.properties.NAME === 'Mexico' || g.properties.NAME === 'México')
                        );

                        // compute path d string for Mexico to use in a clipPath
                        const mexicoPathD = mexico ? pathGenerator(mexico as any) : null;

                        // build a grid of sample lon/lat points and keep only those inside Mexico
                        const samples: [number, number][] = [];
                        if (mexico) {
                            // lon from -118 to -86, lat from 14 to 32 (rough bounds of Mexico)
                            for (let lon = -118; lon <= -86; lon += 1) {
                                for (let lat = 14; lat <= 32; lat += 1) {
                                    try {
                                        if (geoContains(mexico as any, [lon, lat])) {
                                            samples.push([lon, lat]);
                                        }
                                    } catch (e) {
                                        // ignore
                                    }
                                }
                            }
                        }

                        return (
                            <>
                                {geographies
                                    .filter(g => g.properties && (g.id === '484' || g.properties.NAME === 'Mexico' || g.properties.NAME === 'México'))
                                    .map(geo => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="rgba(139,92,246,0.09)"
                                            stroke="#6D31E8"
                                            strokeWidth={0.6}
                                        />
                                    ))}

                                {/* defs + clipPath using the Mexico path so overlays stay inside the country shape */}
                                {mexicoPathD && (
                                    <defs>
                                        <clipPath id="mexicoClip">
                                            <path d={mexicoPathD} />
                                        </clipPath>
                                    </defs>
                                )}

                                {/* diagonal purple grid lines clipped to Mexico silhouette */}
                                <g clipPath={mexicoPathD ? 'url(#mexicoClip)' : undefined} stroke="#7C3AED" strokeWidth={1.0} opacity={0.18}>
                                    {diag1.map((l, i) => (
                                        <line key={`d1-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
                                    ))}
                                    {diag2.map((l, i) => (
                                        <line key={`d2-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
                                    ))}
                                </g>

                                {/* small sampled dots filling Mexico */}
                                {samples.map((s, idx) => (
                                    <Marker key={`s-${idx}`} coordinates={s}>
                                        <circle r={2} fill="#A78BFA" opacity={0.95} />
                                    </Marker>
                                ))}

                                {/* connections between nearby sample points (nearest neighbors) - drawn in SVG coords and clipped to Mexico */}
                                {(() => {
                                    try {
                                        const projected = samples.map(s => {
                                            const p = projection([s[0], s[1]]) as [number, number] | null;
                                            return { lon: s[0], lat: s[1], x: p ? p[0] : 0, y: p ? p[1] : 0 };
                                        });

                                        const conns: { x1: number; y1: number; x2: number; y2: number }[] = [];
                                        const k = 3; // nearest neighbors
                                        for (let i = 0; i < projected.length; i++) {
                                            const arr = projected
                                                .map((p, j) => ({ j, d: Math.hypot(projected[i].x - p.x, projected[i].y - p.y) }))
                                                .filter(o => o.j !== i)
                                                .sort((a, b) => a.d - b.d)
                                                .slice(0, k);
                                            arr.forEach(a => {
                                                // guard: ensure coordinates are finite
                                                const p1 = projected[i];
                                                const p2 = projected[a.j];
                                                if (
                                                    Number.isFinite(p1.x) &&
                                                    Number.isFinite(p1.y) &&
                                                    Number.isFinite(p2.x) &&
                                                    Number.isFinite(p2.y) &&
                                                    i < a.j
                                                ) {
                                                    conns.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                                                }
                                            });
                                        }

                                        return (
                                            <g clipPath={mexicoPathD ? 'url(#mexicoClip)' : undefined} stroke="#8B5CF6" strokeWidth={0.9} opacity={0.12}>
                                                {conns.map((c, i) => (
                                                    <line key={`conn-${i}`} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2} strokeLinecap="round" />
                                                ))}
                                            </g>
                                        );
                                    } catch (e) {
                                        return null;
                                    }
                                })()}
                            </>
                        );
                    }}
                </Geographies>

                {/* Markers for ports with inline labels */}
                {puertos.map((p, i) => {
                    const isManzanillo = p.name.toLowerCase().includes('manzan');
                    const mainR = isManzanillo ? 12 : 8;
                    const haloR = isManzanillo ? 28 : 16;
                    const fillColor = isManzanillo ? '#FF4DA3' : (i % 2 === 0 ? '#8B5CF6' : '#EC4899');
                    return (
                        <Marker key={p.name} coordinates={p.coordinates}>
                            <motion.g
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.1, 1] }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                onMouseEnter={() => setHover(p.name)}
                                onMouseLeave={() => setHover(null)}
                            >
                                <circle r={mainR} fill={fillColor} stroke="#fff" strokeWidth={1.6} />
                                <circle r={haloR} fill="none" stroke={fillColor} strokeWidth={1.2} opacity={0.85} />
                                <text x={12 + (isManzanillo ? 2 : 0)} y={isManzanillo ? 6 : 4} fontSize={isManzanillo ? 13 : 12} fill="#E6F7FF" fontWeight={800}>{p.name}</text>
                            </motion.g>
                        </Marker>
                    );
                })}

                {/* Place inicial.png in the Gulf of Mexico (bigger and a bit higher) */}
                <Marker key="gulf" coordinates={[-90, 22]}>
                    <g>
                        <image href="/inicial.png" width={64} height={64} x={-32} y={-40} clipPath="circle(32px at 32px 32px)" />
                    </g>
                </Marker>
            </ComposableMap>

            {/* Tooltip (optional) */}
            {hover && (
                <div className="absolute z-20 pointer-events-none right-6 top-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
                        {hover}
                    </div>
                </div>
            )}
        </div>
    );
}
