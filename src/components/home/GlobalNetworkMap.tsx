import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as d3Geo from "d3-geo";
import * as topojson from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import { globalNetworkData, NetworkNode, NetworkRoute } from "../../data/home/networkData";
import { Plane, Ship, ShieldCheck, Clock, ArrowUpRight, Radio, Compass, RefreshCw } from "lucide-react";

// TopoJSON schema typed for world-atlas
interface WorldAtlasData {
  type: "Topology";
  objects: {
    countries: any;
    land: any;
  };
  arcs: any[];
  transform: any;
}

export function GlobalNetworkMap() {
  const [activeNodeId, setActiveNodeId] = useState<string>("bangladesh");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Projection setup for authentic world coordinates
  const svgWidth = 1000;
  const svgHeight = 500;

  const { projection, landPath, countryPaths, graticulePath } = useMemo(() => {
    // Equirectangular / Cylindrical Projection aligned with international trade dashboards
    const proj = d3Geo
      .geoEquirectangular()
      .scale(155)
      .translate([480, 245]);

    const pathGen = d3Geo.geoPath(proj);
    const graticule = d3Geo.geoGraticule().step([30, 30]);

    const typedWorld = worldData as unknown as WorldAtlasData;
    const landFeature = topojson.feature(typedWorld, typedWorld.objects.land);
    const countriesFeature = topojson.feature(typedWorld, typedWorld.objects.countries) as any;

    const landSvg = pathGen(landFeature) || "";
    const gratSvg = pathGen(graticule()) || "";

    const countriesSvgList = (countriesFeature.features || []).map((feat: any) => ({
      id: feat.id,
      path: pathGen(feat) || "",
    }));

    return {
      projection: proj,
      landPath: landSvg,
      countryPaths: countriesSvgList,
      graticulePath: gratSvg,
    };
  }, []);

  // Compute node pixel positions on the projected map
  const projectedNodes = useMemo(() => {
    return globalNetworkData.nodes.map((node) => {
      const [x, y] = projection(node.coordinates) || [0, 0];
      return {
        ...node,
        projectedX: x,
        projectedY: y,
      };
    });
  }, [projection]);

  const hubProjected = projectedNodes.find((n) => n.id === "bangladesh") || projectedNodes[0];
  const activeNode = projectedNodes.find((n) => n.id === activeNodeId) || hubProjected;

  // Compute curved flight / trade arc paths between Bangladesh and each node
  const routesWithPaths = useMemo(() => {
    return globalNetworkData.routes.map((route) => {
      const srcNode = projectedNodes.find((n) => n.id === route.from);
      const tgtNode = projectedNodes.find((n) => n.id === route.to);

      if (!srcNode || !tgtNode) {
        return { ...route, pathD: "", midX: 0, midY: 0, srcNode, tgtNode };
      }

      const x1 = srcNode.projectedX;
      const y1 = srcNode.projectedY;
      const x2 = tgtNode.projectedX;
      const y2 = tgtNode.projectedY;

      // Calculate dynamic curvature for aesthetic Great Circle simulation
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Arc height depends on distance and direction
      const arcHeight = Math.min(Math.max(dist * 0.28, 25), 85);
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 - arcHeight;

      const pathD = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;

      return {
        ...route,
        pathD,
        midX,
        midY,
        srcNode,
        tgtNode,
      };
    });
  }, [projectedNodes]);

  return (
    <section
      id="global-network-section"
      className="relative w-full overflow-hidden bg-[#03060a] py-24 sm:py-28 lg:py-32"
      aria-label="Global Reach and Manufacturing Network"
    >
      {/* Subtle Atmospheric Grid & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,_rgba(223,178,119,0.06),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full border border-white/[0.02]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header matching exact typography in reference */}
        <div className="mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <h2
              id="network-section-heading"
              className="font-editorial text-4xl font-light leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
            >
              <span>{globalNetworkData.titlePart1}</span>
              <span className="font-georgia italic font-normal text-[#dfb277]">
                {globalNetworkData.titleItalic}
              </span>
              <span>{globalNetworkData.titlePart2}</span>
            </h2>
          </div>
        </div>

        {/* Tactical Map Card Container */}
        <div
          id="tactical-map-viewport"
          className="relative border border-white/15 bg-[#050b14] p-4 sm:p-7 lg:p-9 shadow-2xl backdrop-blur-md"
        >
          {/* Authentic Corner Brackets ┌ ┐ └ ┘ */}
          <div className="pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 border-l-2 border-t-2 border-[#dfb277]/80" />
          <div className="pointer-events-none absolute right-3 top-3 h-3.5 w-3.5 border-r-2 border-t-2 border-[#dfb277]/80" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 border-[#dfb277]/80" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-3.5 w-3.5 border-b-2 border-r-2 border-[#dfb277]/80" />

          {/* Top Status Header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.24em] text-zinc-400">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfb277] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#dfb277]" />
              </span>
              <span className="font-semibold text-white">LIVE SOURCING &amp; PRODUCTION NETWORK</span>
            </div>
            <div className="font-mono text-[9px] text-zinc-500">
              MARKETS &amp; MANUFACTURING NETWORK — NOT OFFICE LOCATIONS
            </div>
          </div>

          {/* Realistic World Map SVG Frame */}
          <div className="relative aspect-[2/1] w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] overflow-hidden rounded border border-white/10 bg-[#070e1a]">
            {/* Ambient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(4,8,15,0.7)_100%)] z-10" />

            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="h-full w-full select-none"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Realistic Global Sourcing Map"
            >
              <defs>
                {/* Tactical grid fill pattern */}
                <pattern
                  id="tactical-grid"
                  width="25"
                  height="25"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 25 0 L 0 0 0 25"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.02)"
                    strokeWidth="0.5"
                  />
                </pattern>

                {/* Hub Radial Glow */}
                <radialGradient id="hubBeaconGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#dfb277" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#dfb277" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#dfb277" stopOpacity="0" />
                </radialGradient>

                {/* Route Linear Gradient */}
                <linearGradient id="routeGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dfb277" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f3d7a8" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Background Grid Pattern */}
              <rect width={svgWidth} height={svgHeight} fill="url(#tactical-grid)" />

              {/* Geographic Graticules (Latitude & Longitude Grid Lines) */}
              <path
                d={graticulePath}
                fill="none"
                stroke="rgba(140, 180, 230, 0.07)"
                strokeWidth="0.6"
              />

              {/* Equator Benchmark Line */}
              <line
                x1="0"
                y1="245"
                x2={svgWidth}
                y2="245"
                stroke="rgba(223, 178, 119, 0.15)"
                strokeWidth="0.8"
                strokeDasharray="4 6"
              />

              {/* Authentic World Landmasses (High Precision Natural Earth vector) */}
              <g className="landmasses">
                {/* General Landmass Fill */}
                <path
                  d={landPath}
                  fill="#0c182a"
                  stroke="#162b48"
                  strokeWidth="0.6"
                  className="transition-colors duration-300"
                />

                {/* Country outlines */}
                {countryPaths.map((c: any, i: number) => (
                  <path
                    key={`country-${i}`}
                    d={c.path}
                    fill="none"
                    stroke="rgba(27, 49, 82, 0.7)"
                    strokeWidth="0.4"
                  />
                ))}
              </g>

              {/* Connecting Trade Route Arcs from Bangladesh */}
              <g className="routes">
                {routesWithPaths.map((route) => {
                  const isSelected = activeNodeId === route.to || activeNodeId === "bangladesh";
                  const isHovered = hoveredNodeId === route.to;
                  const isActive = isSelected || isHovered;

                  return (
                    <g
                      key={route.id}
                      className="cursor-pointer"
                      onClick={() => setActiveNodeId(route.to)}
                      onMouseEnter={() => setHoveredNodeId(route.to)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Invisible wider hit-area for easier interaction */}
                      <path
                        d={route.pathD}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="18"
                      />

                      {/* Underlying dotted arc */}
                      <path
                        d={route.pathD}
                        fill="none"
                        stroke={isActive ? "rgba(223, 178, 119, 0.65)" : "rgba(223, 178, 119, 0.22)"}
                        strokeWidth={isActive ? 1.6 : 1.0}
                        strokeDasharray="3 4"
                        className="transition-all duration-300"
                      />

                      {/* Animated traveling light stream / pulse */}
                      <path
                        d={route.pathD}
                        fill="none"
                        stroke={isActive ? "#ffffff" : "#dfb277"}
                        strokeWidth={isActive ? 2.2 : 1.4}
                        strokeDasharray="6 70"
                        strokeLinecap="round"
                        style={{
                          animation: `dash ${isActive ? "2.2s" : "3.8s"} linear infinite`,
                        }}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Bangladesh Central Hub Radar Beacon Effect */}
              <g>
                <circle
                  cx={hubProjected.projectedX}
                  cy={hubProjected.projectedY}
                  r="45"
                  fill="url(#hubBeaconGlow)"
                  className="animate-pulse"
                />
                <circle
                  cx={hubProjected.projectedX}
                  cy={hubProjected.projectedY}
                  r="30"
                  fill="none"
                  stroke="rgba(223, 178, 119, 0.25)"
                  strokeWidth="1"
                />
                <circle
                  cx={hubProjected.projectedX}
                  cy={hubProjected.projectedY}
                  r="18"
                  fill="none"
                  stroke="rgba(223, 178, 119, 0.45)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
              </g>

              {/* Node Markers & Precise Geographical Pins */}
              {projectedNodes.map((node) => {
                const isHub = node.type === "hub";
                const isSelected = activeNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;
                const isHighlighted = isSelected || isHovered;

                return (
                  <g
                    key={node.id}
                    id={`map-node-${node.id}`}
                    className="cursor-pointer transition-transform duration-300"
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    {/* Pulsing Selection Ring */}
                    {isHighlighted && !isHub && (
                      <circle
                        cx={node.projectedX}
                        cy={node.projectedY}
                        r="14"
                        fill="none"
                        stroke="#dfb277"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        className="animate-spin"
                        style={{
                          transformOrigin: `${node.projectedX}px ${node.projectedY}px`,
                          animationDuration: "6s",
                        }}
                      />
                    )}

                    {/* Outer marker boundary */}
                    <circle
                      cx={node.projectedX}
                      cy={node.projectedY}
                      r={isHub ? 7.5 : 5}
                      fill={isHub ? "#dfb277" : isHighlighted ? "#dfb277" : "#0a1424"}
                      stroke={isHub ? "#ffffff" : "#dfb277"}
                      strokeWidth={isHub ? 2 : 1.5}
                      className="transition-all duration-300"
                    />

                    {/* Inner core pip */}
                    <circle
                      cx={node.projectedX}
                      cy={node.projectedY}
                      r={isHub ? 3 : 2}
                      fill={isHub ? "#050b14" : isHighlighted ? "#050b14" : "#dfb277"}
                    />

                    {/* Text Label styling matching screenshot */}
                    <g className="pointer-events-none">
                      {/* Label background pill for superior contrast over coastlines */}
                      <text
                        x={node.projectedX}
                        y={
                          isHub
                            ? node.projectedY - 14
                            : node.id === "germany"
                            ? node.projectedY - 12
                            : node.projectedY + 16
                        }
                        textAnchor="middle"
                        stroke="#03060a"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                        className="select-none font-sans text-[9px] font-bold tracking-[0.24em] fill-none"
                      >
                        {isHub ? "HUB — BANGLADESH" : node.name}
                      </text>

                      {/* Foreground label */}
                      <text
                        x={node.projectedX}
                        y={
                          isHub
                            ? node.projectedY - 14
                            : node.id === "germany"
                            ? node.projectedY - 12
                            : node.projectedY + 16
                        }
                        textAnchor="middle"
                        className={`select-none font-sans text-[9px] tracking-[0.24em] transition-colors duration-300 ${
                          isHub
                            ? "fill-white font-bold"
                            : isHighlighted
                            ? "fill-[#dfb277] font-bold"
                            : "fill-zinc-300 font-medium"
                        }`}
                      >
                        {isHub ? "HUB — BANGLADESH" : node.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Geographical Coordinate Ticker */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3 text-[9px] font-mono tracking-widest text-zinc-500">
            <div>NETWORK INTEGRATION: DUAL-CARRIER MARITIME &amp; AIR FREIGHT</div>
            <div className="text-[#dfb277]">{globalNetworkData.coordinates}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
