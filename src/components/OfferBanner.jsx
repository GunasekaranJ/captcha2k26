import React from "react";

const offers = [
  { tag: "OFFER", text: "You can avail Events at Rs.99 on April 7 and April 8" },
  { tag: "OFFER", text: "You can avail Events at Rs.99 on April 7 and April 8" },
  { tag: "OFFER", text: "You can avail Events at Rs.99 on April 7 and April 8" },
];

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    zIndex: 9999,
    borderTop: "2px solid rgba(255,255,255,0.15)",
    padding: "10px 0",
    boxShadow: "0 -4px 30px rgba(255, 78, 0, 0.4)",
  },
  track: {
    display: "inline-flex",
    animation: "offerMarquee 28s linear infinite",
    willChange: "transform",
  },
  inner: {
    display: "inline-flex",
    alignItems: "center",
  },
  item: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 28px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    fontWeight: 500,
    color: "#fff",
    letterSpacing: "0.02em",
  },
  tag: {
    background: "rgba(255,255,255,0.22)",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    padding: "2px 8px",
    borderRadius: "3px",
    color: "#fff",
  },
  sep: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    background: "rgba(255,255,255,0.5)",
    borderRadius: "50%",
    margin: "0 4px",
  },
};

function OfferItems() {
  return (
    <div style={styles.inner} className="bg-gradient-to-b from-crimson-950 to-crimson-900/50">
      {offers.map((o, i) => (
        <React.Fragment key={i}>
          <div style={styles.item}>
            <span style={styles.tag}>{o.tag}</span>
            {o.text}
          </div>
          <span style={styles.sep} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default function OfferBanner() {
  return (
    <>
      {/* Inject keyframe animation once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');
        @keyframes offerMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .offer-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div style={styles.banner} className="bg-gradient-to-b from-crimson-950 to-crimson-900/50" role="marquee" aria-label="Current offers and promotions">
        <div className="offer-marquee-track" style={styles.track}>
          {/* Duplicate content for seamless infinite loop */}
          <OfferItems />
          <OfferItems />
        </div>
      </div>
    </>
  );
}


