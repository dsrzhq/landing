/* DSRZ Landing — Mid sections: Ecosystem (node diagram), Vectors (3-col cards) */

const NAVY_M = "#0F172A", OBS_M = "#111111", BLUE_M = "#2563EB";
const LOGO_M = "../assets/logos/";
const WRAP_M = { maxWidth: 1440, margin: "0 auto", padding: "0 80px", boxSizing: "border-box" };

function Ecosystem() {
  // Diagram field 1280 x 520; center node + 5 satellites on an ellipse.
  const W = 1280, H = 520, cx = 640, cy = 260, rx = 470, ry = 178;
  const sats = [
    { name: "NODMIO", kind: "Comunidad", a: -90 },
    { name: "DSRZ Ventures", kind: "Capital", a: -10 },
    { name: "DSRZ Labs", kind: "Producto", a: 55 },
    { name: "DSRZ Studio", kind: "Creación", a: 140 },
    { name: "DSRZ Editorial", kind: "Voz", a: 225 },
  ].map((s) => {
    const r = (s.a * Math.PI) / 180;
    return { ...s, x: cx + rx * Math.cos(r), y: cy + ry * Math.sin(r) };
  });
  return (
    <section id="ecosystem" style={{ background: NAVY_M, color: "#fff" }} data-screen-label="Ecosystem">
      <div style={{ ...WRAP_M, paddingTop: 112, paddingBottom: 112 }}>
        <Eyebrow onDark>El ecosistema</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "20px 0 8px", color: "#fff", maxWidth: 760 }}>
          Una constelación organizada alrededor de DSRZ HQ.
        </h2>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, lineHeight: 1.6, color: "var(--slate-300)", maxWidth: 600, margin: "0 0 56px" }}>
          El ecosistema se organiza alrededor de cinco satélites documentados. La activación pública queda condicionada al cierre de evidencia mínima y validación del set final.
        </p>
        <div style={{ position: "relative", width: W, height: H, margin: "0 auto", maxWidth: "100%" }}>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ position: "absolute", inset: 0, display: "block" }} aria-hidden="true">
            {sats.map((s) => (
              <line key={s.name} x1={cx} y1={cy} x2={s.x} y2={s.y} stroke="rgba(37,99,235,0.55)" strokeWidth="1.5" />
            ))}
            {sats.map((s) => (
              <circle key={s.name + "d"} cx={s.x} cy={s.y} r="3.5" fill={BLUE_M} />
            ))}
            <circle cx={cx} cy={cy} r="4" fill="#fff" />
          </svg>
          {/* Center node */}
            <div style={{ position: "absolute", left: cx, top: cy, transform: "translate(-50%,-50%)", width: 180, height: 180, background: OBS_M, border: `1.5px solid ${BLUE_M}`, borderRadius: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <img src={LOGO_M + "DSRZ_isotype_white.svg"} alt="" style={{ height: 56 }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "0.04em", color: "#fff" }}>DSRZ HQ</span>
          </div>
          {/* Satellites */}
          {sats.map((s) => (
            <div key={s.name} style={{ position: "absolute", left: s.x, top: s.y, transform: "translate(-50%,-50%)", minWidth: 150, padding: "14px 18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 2, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#fff", whiteSpace: "nowrap" }}>{s.name}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--slate-500)", marginTop: 5 }}>{s.kind}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vectors() {
  const cards = [
    { icon: "pen-tool", t: "Editorial", d: "Ideas que se publican y se defienden. La voz que convierte pensamiento en posición." },
    { icon: "bar-chart-2", t: "Capital", d: "La lectura que ordena opciones, prioriza apuestas y convierte claridad en movimiento." },
    { icon: "users", t: "Comunidad", d: "La red que conecta a quienes construyen, financian y deciden. Convergencia real, no volumen." },
  ];
  return (
    <section id="vectors" style={{ background: OBS_M, color: "#fff" }} data-screen-label="Vectors">
      <div style={{ ...WRAP_M, paddingTop: 112, paddingBottom: 112 }}>
        <Eyebrow onDark>Vectores de acción</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "20px 0 56px", color: "#fff", maxWidth: 720 }}>
          Tres fuerzas que mueven el campo.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cards.map((c) => (
            <article key={c.t} style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 2, padding: "36px 32px 32px", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", minHeight: 280 }}>
              <div style={{ width: 48, height: 48, border: `1.5px solid ${BLUE_M}`, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                <i data-lucide={c.icon} style={{ width: 22, height: 22, color: BLUE_M }}></i>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, lineHeight: 1.2, margin: "0 0 12px", color: "#fff" }}>{c.t}</h3>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, lineHeight: 1.65, color: "var(--slate-300)", margin: "0 0 28px" }}>{c.d}</p>
              <a href="#access" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15, color: "#fff", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--impact-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}>
                Explorar <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ecosystem, Vectors });
