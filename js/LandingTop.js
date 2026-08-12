/* DSRZ Landing — Top sections: Nav, Hero, Signal */

const NAVY = "#0F172A", OBS = "#111111", BLUE = "#2563EB";
const LOGO_T = "../assets/logos/";
const WRAP_T = { maxWidth: 1440, margin: "0 auto", padding: "0 80px", boxSizing: "border-box" };

function Nav({ onAccess }) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Ecosistema", "#ecosystem"], ["Vectores", "#vectors"],
    ["Evidencia", "#evidence"], ["Fundador", "#founder"],
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: solid ? OBS : "transparent",
      borderBottom: `1px solid ${solid ? "rgba(255,255,255,0.10)" : "transparent"}`,
      transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)",
    }}>
      <div style={{ ...WRAP_T, height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <img src={LOGO_T + "DSRZ_lockup_horizontal_inverted.svg"} alt="DSRZ" style={{ height: 28 }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 38 }}>
          {links.map(([l, href]) => (
            <a key={l} href={href} style={{ fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.72)", textDecoration: "none", letterSpacing: "0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}>{l}</a>
          ))}
          <Button variant="primary" onClick={onAccess}>Entrar</Button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onAccess }) {
  return (
    <section id="top" style={{ position: "relative", background: NAVY, color: "#fff", overflow: "hidden", marginTop: -80, paddingTop: 80 }} data-screen-label="Hero">
      {/* Diagonal hairlines, top-right corner — sin gradient mask (VDS: no gradients) */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, right: 0, width: 420, height: 320, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(54deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 26px)",
      }}></div>
      <div style={{ ...WRAP_T, position: "relative", paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ maxWidth: 880 }}>
          <Eyebrow onDark>Organized Momentum</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.08, letterSpacing: "-0.02em", margin: "26px 0 0", color: "#fff" }}>
            Donde las ideas se convierten en <span style={{ color: BLUE }}>impacto</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 20, lineHeight: 1.6, color: "var(--slate-300)", maxWidth: 620, margin: "28px 0 0" }}>
            DSRZ HQ es el punto de entrada al ecosistema DSRZ.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            <Button variant="primary" icon="arrow-right" onClick={onAccess}>Entrar al ecosistema</Button>
            <Button variant="ghost" onDark>Conocer la visión</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signal() {
  return (
    <section style={{ background: "var(--white)" }} data-screen-label="Signal">
      <div style={{ ...WRAP_T, paddingTop: 128, paddingBottom: 128 }}>
        <div style={{ maxWidth: 1080 }}>
          <Eyebrow>Señal</Eyebrow>
          <blockquote style={{ margin: "32px 0 0" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: 46, lineHeight: 1.28, letterSpacing: "-0.01em", color: "var(--fg-1)", margin: 0 }}>
              La plataforma donde las ideas se convierten en impacto.
              </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Signal });
