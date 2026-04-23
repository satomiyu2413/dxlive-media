import React from "react";

type Props = {
  slug?: string;
  category?: string;
  className?: string;
};

/* ── individual SVG illustrations ── */

const IllustReview = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* monitor */}
    <rect x="40" y="18" width="120" height="72" rx="6" stroke="white" strokeOpacity=".9" strokeWidth="2.5" fill="none"/>
    <rect x="40" y="18" width="120" height="50" rx="6" fill="white" fillOpacity=".07"/>
    <line x1="40" y1="68" x2="160" y2="68" stroke="white" strokeOpacity=".4" strokeWidth="1.5"/>
    <rect x="88" y="90" width="24" height="10" rx="2" fill="white" fillOpacity=".3"/>
    <line x1="70" y1="110" x2="130" y2="110" stroke="white" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round"/>
    {/* play button */}
    <circle cx="100" cy="43" r="18" stroke="white" strokeOpacity=".7" strokeWidth="2"/>
    <polygon points="95,36 95,50 112,43" fill="white" fillOpacity=".85"/>
    {/* live badge */}
    <rect x="50" y="24" width="28" height="13" rx="3" fill="#e8003d"/>
    <text x="57" y="34" fontSize="7" fill="white" fontWeight="700" fontFamily="sans-serif">LIVE</text>
    {/* stars */}
    <text x="52" y="82" fontSize="9" fill="#f5c518" fontFamily="sans-serif">★★★★</text>
    <text x="118" y="82" fontSize="9" fill="white" fillOpacity=".5" fontFamily="sans-serif">☆</text>
  </svg>
);

const IllustRegistration = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* clipboard */}
    <rect x="55" y="15" width="90" height="95" rx="5" stroke="white" strokeOpacity=".8" strokeWidth="2.2" fill="white" fillOpacity=".05"/>
    <rect x="75" y="8" width="50" height="16" rx="8" stroke="white" strokeOpacity=".6" strokeWidth="2" fill="#1a1828"/>
    {/* form lines */}
    <rect x="68" y="36" width="22" height="8" rx="2" fill="white" fillOpacity=".15" stroke="white" strokeOpacity=".3" strokeWidth="1"/>
    <line x1="98" y1="40" x2="130" y2="40" stroke="white" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="68" y="52" width="22" height="8" rx="2" fill="white" fillOpacity=".15" stroke="white" strokeOpacity=".3" strokeWidth="1"/>
    <line x1="98" y1="56" x2="130" y2="56" stroke="white" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round"/>
    {/* check row */}
    <circle cx="74" cy="74" r="7" stroke="#4ade80" strokeWidth="2" fill="none"/>
    <polyline points="70,74 73,77 79,70" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="88" y1="74" x2="130" y2="74" stroke="white" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
    {/* button */}
    <rect x="68" y="88" width="64" height="14" rx="7" fill="#e8003d" fillOpacity=".9"/>
    <line x1="87" y1="95" x2="113" y2="95" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    {/* gift tag / FREE badge */}
    <rect x="128" y="24" width="26" height="13" rx="6" fill="#f5c518" fillOpacity=".9"/>
    <text x="133" y="34" fontSize="7" fill="#1a1000" fontWeight="800" fontFamily="sans-serif">FREE</text>
  </svg>
);

const IllustSafety = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* shield */}
    <path d="M100 14 L148 30 L148 66 Q148 96 100 110 Q52 96 52 66 L52 30 Z"
      stroke="white" strokeOpacity=".85" strokeWidth="2.5" fill="white" fillOpacity=".06"/>
    <path d="M100 22 L138 34 L138 66 Q138 88 100 100 Q62 88 62 66 L62 34 Z"
      fill="white" fillOpacity=".04"/>
    {/* lock */}
    <rect x="87" y="60" width="26" height="22" rx="4" stroke="white" strokeOpacity=".9" strokeWidth="2" fill="white" fillOpacity=".12"/>
    <path d="M90 60 L90 52 Q90 42 100 42 Q110 42 110 52 L110 60"
      stroke="white" strokeOpacity=".9" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <circle cx="100" cy="70" r="3" fill="white" fillOpacity=".85"/>
    <line x1="100" y1="73" x2="100" y2="78" stroke="white" strokeOpacity=".85" strokeWidth="2" strokeLinecap="round"/>
    {/* SSL badge */}
    <rect x="56" y="18" width="28" height="13" rx="3" fill="#4ade80" fillOpacity=".85"/>
    <text x="61" y="28" fontSize="7" fill="#052e16" fontWeight="800" fontFamily="sans-serif">SSL</text>
    {/* tick marks */}
    <circle cx="75" cy="90" r="5" fill="#4ade80" fillOpacity=".7"/>
    <polyline points="72,90 74,92 78,87" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="100" cy="95" r="5" fill="#4ade80" fillOpacity=".7"/>
    <polyline points="97,95 99,97 103,92" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="125" cy="90" r="5" fill="#4ade80" fillOpacity=".7"/>
    <polyline points="122,90 124,92 128,87" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IllustCancellation = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* door frame */}
    <rect x="55" y="18" width="70" height="90" rx="4" stroke="white" strokeOpacity=".7" strokeWidth="2.2" fill="white" fillOpacity=".05"/>
    {/* door panel */}
    <rect x="62" y="26" width="56" height="74" rx="3" stroke="white" strokeOpacity=".3" strokeWidth="1.5" fill="white" fillOpacity=".04"/>
    {/* door knob */}
    <circle cx="110" cy="64" r="4" stroke="white" strokeOpacity=".7" strokeWidth="2" fill="none"/>
    {/* exit arrow */}
    <line x1="125" y1="60" x2="155" y2="60" stroke="white" strokeOpacity=".9" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="146,52 155,60 146,68" stroke="white" strokeOpacity=".9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* step marks */}
    <line x1="132" y1="78" x2="155" y2="78" stroke="white" strokeOpacity=".25" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="140" y1="88" x2="155" y2="88" stroke="white" strokeOpacity=".15" strokeWidth="1.5" strokeLinecap="round"/>
    {/* top label */}
    <rect x="60" y="8" width="60" height="14" rx="7" fill="white" fillOpacity=".08" stroke="white" strokeOpacity=".2" strokeWidth="1"/>
    <line x1="74" y1="15" x2="108" y2="15" stroke="white" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IllustRanks = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* podium */}
    <rect x="78" y="60" width="44" height="48" rx="3" fill="white" fillOpacity=".12" stroke="white" strokeOpacity=".5" strokeWidth="2"/>
    <rect x="44" y="76" width="36" height="32" rx="3" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".35" strokeWidth="2"/>
    <rect x="120" y="84" width="36" height="24" rx="3" fill="white" fillOpacity=".05" stroke="white" strokeOpacity=".25" strokeWidth="2"/>
    {/* numbers */}
    <text x="96" y="82" fontSize="11" fill="white" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">1</text>
    <text x="62" y="93" fontSize="9" fill="white" fillOpacity=".7" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">2</text>
    <text x="138" y="100" fontSize="9" fill="white" fillOpacity=".5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">3</text>
    {/* crown */}
    <path d="M83 52 L90 38 L100 48 L110 38 L117 52 Z" stroke="#f5c518" strokeWidth="2" fill="#f5c518" fillOpacity=".2" strokeLinejoin="round"/>
    <line x1="83" y1="52" x2="117" y2="52" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="83" cy="37" r="3" fill="#f5c518"/>
    <circle cx="100" cy="35" r="3" fill="#f5c518"/>
    <circle cx="117" cy="37" r="3" fill="#f5c518"/>
    {/* VIP tag */}
    <rect x="82" y="18" width="36" height="14" rx="7" fill="#e8003d"/>
    <text x="100" y="28" fontSize="8" fill="white" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">VIP</text>
  </svg>
);

const IllustTips = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* lightbulb */}
    <path d="M100 20 Q120 20 120 42 Q120 56 108 62 L108 72 L92 72 L92 62 Q80 56 80 42 Q80 20 100 20 Z"
      stroke="white" strokeOpacity=".85" strokeWidth="2.2" fill="white" fillOpacity=".08"/>
    <line x1="92" y1="76" x2="108" y2="76" stroke="white" strokeOpacity=".6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="94" y1="80" x2="106" y2="80" stroke="white" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round"/>
    {/* filament glow */}
    <circle cx="100" cy="42" r="10" fill="#f5c518" fillOpacity=".15"/>
    <circle cx="100" cy="42" r="5" fill="#f5c518" fillOpacity=".3"/>
    {/* rays */}
    <line x1="100" y1="10" x2="100" y2="15" stroke="#f5c518" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round"/>
    <line x1="122" y1="18" x2="118" y2="22" stroke="#f5c518" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="78" y1="18" x2="82" y2="22" stroke="#f5c518" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="128" y1="42" x2="123" y2="42" stroke="#f5c518" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="72" y1="42" x2="77" y2="42" stroke="#f5c518" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round"/>
    {/* coins */}
    <circle cx="60" cy="90" r="13" stroke="#f5c518" strokeOpacity=".7" strokeWidth="2" fill="#f5c518" fillOpacity=".1"/>
    <text x="60" y="94" fontSize="10" fill="#f5c518" fillOpacity=".8" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">$</text>
    <circle cx="100" cy="95" r="10" stroke="#f5c518" strokeOpacity=".5" strokeWidth="2" fill="#f5c518" fillOpacity=".08"/>
    <text x="100" y="99" fontSize="9" fill="#f5c518" fillOpacity=".6" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">$</text>
    <circle cx="136" cy="90" r="8" stroke="#f5c518" strokeOpacity=".35" strokeWidth="1.5" fill="none"/>
    <text x="136" y="94" fontSize="7" fill="#f5c518" fillOpacity=".4" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">$</text>
  </svg>
);

const IllustHowToLike = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* chat bubble left */}
    <rect x="20" y="28" width="90" height="54" rx="14" stroke="white" strokeOpacity=".7" strokeWidth="2.2" fill="white" fillOpacity=".07"/>
    <path d="M30 82 L22 96 L46 82" stroke="white" strokeOpacity=".7" strokeWidth="2" fill="white" fillOpacity=".07" strokeLinejoin="round"/>
    {/* chat bubble right */}
    <rect x="90" y="50" width="80" height="46" rx="12" stroke="white" strokeOpacity=".45" strokeWidth="2" fill="white" fillOpacity=".04"/>
    <path d="M160 96 L170 108 L148 96" stroke="white" strokeOpacity=".45" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* hearts */}
    <path d="M52 50 Q52 44 58 44 Q64 44 64 50 Q64 56 52 62 Q40 56 40 50 Q40 44 46 44 Q52 44 52 50 Z"
      fill="#e8003d" fillOpacity=".8"/>
    <path d="M126 70 Q126 66 130 66 Q134 66 134 70 Q134 74 126 78 Q118 74 118 70 Q118 66 122 66 Q126 66 126 70 Z"
      fill="#e8003d" fillOpacity=".5"/>
    {/* dots in right bubble */}
    <circle cx="115" cy="73" r="2.5" fill="white" fillOpacity=".5"/>
    <circle cx="125" cy="73" r="2.5" fill="white" fillOpacity=".5"/>
    <circle cx="135" cy="73" r="2.5" fill="white" fillOpacity=".5"/>
    {/* small hearts floating */}
    <text x="72" y="36" fontSize="12" fill="#e8003d" fillOpacity=".6" fontFamily="sans-serif">♥</text>
    <text x="148" y="50" fontSize="8" fill="#e8003d" fillOpacity=".4" fontFamily="sans-serif">♥</text>
  </svg>
);

const IllustEvents = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* calendar */}
    <rect x="38" y="24" width="100" height="86" rx="6" stroke="white" strokeOpacity=".8" strokeWidth="2.2" fill="white" fillOpacity=".05"/>
    <rect x="38" y="24" width="100" height="26" rx="6" fill="#e8003d" fillOpacity=".35"/>
    <line x1="38" y1="50" x2="138" y2="50" stroke="white" strokeOpacity=".3" strokeWidth="1"/>
    {/* rings */}
    <line x1="66" y1="16" x2="66" y2="32" stroke="white" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round"/>
    <line x1="110" y1="16" x2="110" y2="32" stroke="white" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round"/>
    {/* grid dates */}
    {[0,1,2,3,4,5,6].map((i) => (
      <circle key={i} cx={52 + (i % 4) * 22} cy={66 + Math.floor(i / 4) * 20}
        r="7" fill={i === 2 ? "#e8003d" : "white"} fillOpacity={i === 2 ? ".9" : ".1"}
        stroke="white" strokeOpacity={i === 2 ? "0" : ".2"} strokeWidth="1"/>
    ))}
    {/* star burst */}
    <text x="152" y="48" fontSize="22" fill="#f5c518" fillOpacity=".8" fontFamily="sans-serif">★</text>
    <text x="158" y="72" fontSize="14" fill="#f5c518" fillOpacity=".5" fontFamily="sans-serif">★</text>
    {/* EVENT label */}
    <rect x="46" y="30" width="42" height="12" rx="2" fill="white" fillOpacity=".15"/>
    <line x1="50" y1="36" x2="82" y2="36" stroke="white" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IllustCompare = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* left bar chart */}
    <rect x="28" y="72" width="18" height="38" rx="3" fill="#e8003d" fillOpacity=".7"/>
    <rect x="50" y="52" width="18" height="58" rx="3" fill="#e8003d" fillOpacity=".9"/>
    <rect x="72" y="40" width="18" height="70" rx="3" fill="#e8003d"/>
    {/* right bar chart */}
    <rect x="112" y="60" width="18" height="50" rx="3" fill="white" fillOpacity=".2"/>
    <rect x="134" y="72" width="18" height="38" rx="3" fill="white" fillOpacity=".15"/>
    <rect x="156" y="80" width="18" height="30" rx="3" fill="white" fillOpacity=".1"/>
    {/* VS divider */}
    <line x1="100" y1="18" x2="100" y2="115" stroke="white" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="4 3"/>
    <circle cx="100" cy="60" r="16" fill="#1a1828" stroke="white" strokeOpacity=".5" strokeWidth="2"/>
    <text x="100" y="65" fontSize="11" fill="white" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">VS</text>
    {/* axis */}
    <line x1="22" y1="110" x2="94" y2="110" stroke="white" strokeOpacity=".3" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="106" y1="110" x2="182" y2="110" stroke="white" strokeOpacity=".15" strokeWidth="1.5" strokeLinecap="round"/>
    {/* labels */}
    <text x="56" y="22" fontSize="8" fill="#e8003d" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">LIVE CHAT</text>
    <text x="148" y="22" fontSize="8" fill="white" fillOpacity=".5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">AV</text>
  </svg>
);

const IllustPricing = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    {/* card */}
    <rect x="30" y="30" width="110" height="68" rx="8" stroke="white" strokeOpacity=".7" strokeWidth="2.2" fill="white" fillOpacity=".06"/>
    <rect x="30" y="30" width="110" height="22" rx="8" fill="white" fillOpacity=".1"/>
    <rect x="30" y="44" width="110" height="8" fill="white" fillOpacity=".06"/>
    {/* chip */}
    <rect x="42" y="38" width="18" height="14" rx="3" stroke="#f5c518" strokeOpacity=".8" strokeWidth="1.5" fill="#f5c518" fillOpacity=".12"/>
    <line x1="48" y1="38" x2="48" y2="52" stroke="#f5c518" strokeOpacity=".5" strokeWidth="1"/>
    <line x1="54" y1="38" x2="54" y2="52" stroke="#f5c518" strokeOpacity=".5" strokeWidth="1"/>
    <line x1="42" y1="44" x2="60" y2="44" stroke="#f5c518" strokeOpacity=".5" strokeWidth="1"/>
    {/* dots */}
    {[0,1,2,3,4,5,6,7].map((i) => (
      <circle key={i} cx={44 + (i % 4) * 8} cy={66 + Math.floor(i / 4) * 8} r="2.5"
        fill="white" fillOpacity={i < 4 ? ".6" : ".2"}/>
    ))}
    {/* price tag */}
    <path d="M155 24 L180 24 L180 54 L167 67 L155 54 Z" stroke="white" strokeOpacity=".7" strokeWidth="2" fill="white" fillOpacity=".07"/>
    <circle cx="165" cy="36" r="4" fill="white" fillOpacity=".6"/>
    <text x="167" y="56" fontSize="11" fill="#f5c518" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">$</text>
    {/* table lines */}
    <line x1="34" y1="84" x2="136" y2="84" stroke="white" strokeOpacity=".2" strokeWidth="1"/>
    <line x1="34" y1="92" x2="136" y2="92" stroke="white" strokeOpacity=".15" strokeWidth="1"/>
    <text x="38" y="81" fontSize="6" fill="white" fillOpacity=".5" fontFamily="sans-serif">パーティーチャット</text>
    <text x="38" y="89" fontSize="6" fill="white" fillOpacity=".5" fontFamily="sans-serif">2ショット</text>
    <text x="113" y="81" fontSize="6.5" fill="#f5c518" fillOpacity=".8" fontFamily="sans-serif" textAnchor="end">1.2P/分</text>
    <text x="113" y="89" fontSize="6.5" fill="#f5c518" fillOpacity=".8" fontFamily="sans-serif" textAnchor="end">2.2P/分</text>
  </svg>
);

const IllustDefault = () => (
  <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="24" width="112" height="80" rx="6" stroke="white" strokeOpacity=".5" strokeWidth="2" fill="white" fillOpacity=".05"/>
    <line x1="60" y1="48" x2="140" y2="48" stroke="white" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round"/>
    <line x1="60" y1="60" x2="120" y2="60" stroke="white" strokeOpacity=".2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="60" y1="72" x2="130" y2="72" stroke="white" strokeOpacity=".15" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SLUG_MAP: Record<string, () => React.ReactElement> = {
  "dxlive-review": IllustReview,
  "registration-guide": IllustRegistration,
  "safety": IllustSafety,
  "cancellation": IllustCancellation,
  "member-ranks": IllustRanks,
  "tips": IllustTips,
  "how-to-be-liked": IllustHowToLike,
  "events": IllustEvents,
  "av-vs-livechat": IllustCompare,
  "pricing": IllustPricing,
};

const CATEGORY_MAP: Record<string, () => React.ReactElement> = {
  review: IllustReview,
  guide: IllustRegistration,
  safety: IllustSafety,
  cancel: IllustCancellation,
  rank: IllustRanks,
  tips: IllustTips,
  compare: IllustCompare,
  event: IllustEvents,
};

export default function ThumbnailIllustration({ slug, category, className }: Props) {
  const Component =
    (slug && SLUG_MAP[slug]) ||
    (category && CATEGORY_MAP[category]) ||
    IllustDefault;

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Component />
    </div>
  );
}
