import React, { useEffect, useMemo, useRef, useState } from "react";
import characterImg from "../assets/namaste-character.png";

/**
 * GreetingOverlay
 * ----------------
 * A full-screen, transparent-background greeting animation:
 *   confetti burst -> character reveal -> "Namaste" badge pop -> hold -> fade out.
 *
 * USAGE
 * -----
 *   const [greet, setGreet] = useState(false);
 *
 *   <div style={{ position: "relative" }}>   // any positioned ancestor works
 *     <Navbar onGreetClick={() => setGreet(true)} />
 *     ...rest of your app...
 *     <GreetingOverlay
 *       show={greet}
 *       duration={4}                 // seconds the greeting stays fully visible
 *       onComplete={() => setGreet(false)}
 *     />
 *   </div>
 *
 * The component renders position: absolute and fills its nearest positioned
 * ancestor (inset: 0), so place that ancestor's own position as "relative"
 * (or just drop this near the root of your app, which is usually enough).
 * It paints nothing of its own besides confetti/character/text, so it can
 * sit on top of any page.
 *
 * PROPS
 * -----
 *  show        boolean   trigger the sequence (toggle true to play, the
 *                        component calls onComplete when it's done and you
 *                        should flip it back to false)
 *  duration    number    seconds to hold on screen before fading (default 4)
 *  message     string    text shown in the popped badge (default "Namaste")
 *  onComplete  function  called once the fade-out finishes
 */

const CONFETTI_COLORS = ["#F4B740", "#FF7A45", "#A02334", "#0F766E", "#F6C453"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function buildBurstPieces(count) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = rand(0, 360);
    const distance = rand(110, 300);
    const size = rand(6, 12);
    return {
      id: `b${i}`,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size,
      rounded: Math.random() > 0.5,
      delay: rand(0, 100),
      dur: rand(850, 1300),
      tx: Math.cos((angle * Math.PI) / 180) * distance,
      ty: Math.sin((angle * Math.PI) / 180) * distance,
      rot: rand(180, 640) * (Math.random() > 0.5 ? 1 : -1),
    };
  });
}

function buildFallPieces(count) {
  return Array.from({ length: count }).map((_, i) => {
    return {
      id: `f${i}`,
      color: CONFETTI_COLORS[(i + 2) % CONFETTI_COLORS.length],
      size: rand(6, 11),
      rounded: Math.random() > 0.5,
      left: rand(2, 98),
      delay: rand(0, 1600),
      dur: rand(2200, 3400),
      sway: rand(20, 60) * (Math.random() > 0.5 ? 1 : -1),
      rot: rand(320, 860),
    };
  });
}

export default function GreetingOverlay({
  show,
  duration = 4,
  message = "Namaste",
  onComplete,
}) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle -> confetti -> character -> namaste -> fading
  const [runId, setRunId] = useState(0);
  const timers = useRef([]);
  const fontInjected = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const burstPieces = useMemo(() => buildBurstPieces(36), [runId]);
  const fallPieces = useMemo(() => buildFallPieces(26), [runId]);

  // load an elegant display font once, without clobbering an existing tag
  useEffect(() => {
    if (fontInjected.current || typeof document === "undefined") return;
    if (!document.getElementById("greeting-overlay-font")) {
      const link = document.createElement("link");
      link.id = "greeting-overlay-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap";
      document.head.appendChild(link);
    }
    fontInjected.current = true;
  }, []);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (show) {
      setRunId((n) => n + 1);
      setMounted(true);

      if (prefersReducedMotion) {
        setPhase("namaste");
        timers.current.push(
          setTimeout(() => setPhase("fading"), Math.max(duration, 1) * 1000)
        );
        timers.current.push(
          setTimeout(() => {
            setMounted(false);
            setPhase("idle");
            onComplete && onComplete();
          }, Math.max(duration, 1) * 1000 + 500)
        );
        return () => timers.current.forEach(clearTimeout);
      }

      setPhase("confetti");
      timers.current.push(setTimeout(() => setPhase("character"), 300));
      timers.current.push(setTimeout(() => setPhase("namaste"), 950));
      const holdMs = Math.max(duration, 1.6) * 1000;
      timers.current.push(setTimeout(() => setPhase("fading"), holdMs));
      timers.current.push(
        setTimeout(() => {
          setMounted(false);
          setPhase("idle");
          onComplete && onComplete();
        }, holdMs + 700)
      );
    } else {
      setMounted(false);
      setPhase("idle");
    }

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!mounted) return null;

  const isFading = phase === "fading";
  const showCharacter =
    phase === "character" || phase === "namaste" || phase === "fading";
  const showNamaste = phase === "namaste" || phase === "fading";

  return (
    <div
      key={runId}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
        background: "transparent",
        zIndex: 9999,
        opacity: isFading ? 0 : 1,
        transition: "opacity 700ms ease",
      }}
    >
      {!prefersReducedMotion && (
        <>
          {/* confetti burst radiating from center */}
          <div style={{ position: "absolute", inset: 0 }}>
            {burstPieces.map((p) => (
              <span
                key={p.id}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  borderRadius: p.rounded ? "50%" : "2px",
                  opacity: 0,
                  "--tx": `${p.tx}px`,
                  "--ty": `${p.ty}px`,
                  "--rot": `${p.rot}deg`,
                  animation: `go-burst ${p.dur}ms ease-out ${p.delay}ms forwards`,
                }}
              />
            ))}
          </div>

          {/* confetti gently falling for the whole duration */}
          <div style={{ position: "absolute", inset: 0 }}>
            {fallPieces.map((p) => (
              <span
                key={p.id}
                style={{
                  position: "absolute",
                  top: "-6%",
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size * 1.4,
                  background: p.color,
                  borderRadius: p.rounded ? "50%" : "2px",
                  opacity: 0,
                  "--sway": `${p.sway}px`,
                  "--rot": `${p.rot}deg`,
                  animation: `go-fall ${p.dur}ms linear ${p.delay}ms forwards`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* soft warm glow behind the character */}
      <div
        style={{
          position: "absolute",
          width: "min(70vw, 420px)",
          height: "min(70vw, 420px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244,183,64,0.35) 0%, rgba(244,183,64,0) 70%)",
          opacity: showCharacter ? 1 : 0,
          transform: showCharacter ? "scale(1)" : "scale(0.6)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            transform: showCharacter
              ? "scale(1) translateY(0)"
              : "scale(0.55) translateY(40px)",
            opacity: showCharacter ? 1 : 0,
            transition:
              "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 400ms ease",
          }}
        >
          <img
            src={characterImg}
            alt="Greeting character with folded hands"
            draggable={false}
            style={{
              width: "min(50vw, 300px)",
              minWidth: "150px",
              maxWidth: "90vw",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.20))",
              userSelect: "none",
            }}
          />

          {/* Namaste badge popping on top of the character */}
          <div
            style={{
              position: "absolute",
              top: "-8%",
              left: "50%",
              transform: showNamaste
                ? "translate(-50%, 0) scale(1) rotate(-3deg)"
                : "translate(-50%, 14px) scale(0.4) rotate(-3deg)",
              opacity: showNamaste ? 1 : 0,
              transition:
                "transform 550ms cubic-bezier(0.34, 1.75, 0.64, 1), opacity 300ms ease",
              whiteSpace: "nowrap",
              padding: "clamp(6px, 1.4vw, 10px) clamp(14px, 3.4vw, 26px)",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #FFDE9E 0%, #F4B740 55%, #FF7A45 100%)",
              boxShadow:
                "0 6px 16px rgba(160,35,52,0.28), 0 0 0 3px rgba(255,255,255,0.55) inset",
              fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(20px, 4.6vw, 34px)",
              color: "#7A1B2E",
              letterSpacing: "0.5px",
            }}
          >
            {message} 🙏
          </div>
        </div>
      </div>

      <style>{`
        @keyframes go-burst {
          0% { opacity: 1; transform: translate(-50%, -50%) rotate(0deg); }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(var(--rot));
          }
        }
        @keyframes go-fall {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          55% { transform: translate(var(--sway), 60vh) rotate(calc(var(--rot) / 2)); }
          100% { opacity: 0.85; transform: translate(0, 118vh) rotate(var(--rot)); }
        }
      `}</style>
    </div>
  );
}