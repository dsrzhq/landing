/* DSRZ Landing — Bottom sections: Evidence, FounderFrame, Access, Footer */

const NAVY_B = "#0F172A", OBS_B = "#111111", BLUE_B = "#2563EB";
const LOGO_B = "../assets/logos/";
const WRAP_B = { maxWidth: 1440, margin: "0 auto", padding: "0 80px", boxSizing: "border-box" };

function Evidence() {
  return (
    <section id="evidence" style={{ background: "var(--white)" }} data-screen-label="Evidence">
      <div style={{ ...WRAP_B, paddingTop: 112, paddingBottom: 112 }}>
        <Eyebrow>Evidencia</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "20px 0 56px", color: "var(--fg-1)", maxWidth: 720 }}>
          El impacto se ve. Y se mide.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {["Métrica 01", "Métrica 02", "Métrica 03"].map((label) => (
            <div key={label} style={{ padding: "32px 24px", borderTop: "1px solid var(--line-1)", background: "var(--white)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 52, lineHeight: 1, color: "var(--fg-1)" }}>—</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--fg-3)", marginTop: 12 }}>{label}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)", marginTop: 10 }}>Pendiente de validación.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderFrame() {
  return (
    <section id="founder" style={{ background: NAVY_B, color: "#fff" }} data-screen-label="Founder">
      <div style={{ ...WRAP_B, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 0, alignItems: "stretch" }}>
          <div style={{ paddingRight: 64 }}>
            <image-slot id="founder-photo" fit="cover" radius="2" placeholder="Retrato del fundador (3:4)"
              style={{ display: "block", width: "100%", aspectRatio: "3 / 4", filter: "grayscale(1)", background: "#162033", border: "1px solid rgba(255,255,255,0.14)" }}></image-slot>
          </div>
          <div style={{ borderLeft: `2px solid ${BLUE_B}`, paddingLeft: 56, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Eyebrow onDark>Fundador</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "22px 0 6px", color: "#fff" }}>
              Diego Leonardo Suárez López
            </h2>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--slate-500)", marginBottom: 26 }}>Brand Owner · DSRZ HQ</div>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 18, lineHeight: 1.7, color: "var(--slate-300)", margin: "0 0 18px" }}>
              El impacto no es un accidente. Ocurre cuando una idea encuentra estructura, velocidad y dirección al mismo tiempo.
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 18, lineHeight: 1.7, color: "var(--slate-300)", margin: 0 }}>
              DSRZ HQ es la fuerza organizada que conecta posibilidades, acelera transformación y multiplica impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Access({ onAccess }) {
  return (
    /* VDS 80/20: fondo Obsidian — Momentum Blue solo en el CTA primario */
    <section id="access" style={{ background: OBS_B, color: "#fff", borderTop: `1px solid rgba(255,255,255,0.08)` }} data-screen-label="Access">
      <div style={{ ...WRAP_B, paddingTop: 104, paddingBottom: 104, textAlign: "center" }}>
        <Eyebrow onDark>Acceso</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", color: "#fff" }}>
          Entrar al ecosistema
        </h2>
          <p style={{ fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "var(--slate-300)", margin: "18px auto 36px", maxWidth: 520 }}>
          El acceso es por invitación. Solicita el tuyo y entra al campo donde las ideas toman trayectoria.
        </p>
        <Button variant="primary" icon="arrow-right" onClick={onAccess}>Solicitar acceso</Button>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Ecosistema", items: ["DSRZ HQ", "NODMIO", "DSRZ Ventures", "DSRZ Labs", "DSRZ Studio", "DSRZ Editorial"] },
    { h: "Compañía", items: ["Manifiesto", "Fundador", "Evidencia", "Contacto"] },
    { h: "Recursos", items: ["Notas", "Casos de impacto", "Términos", "Privacidad"] },
  ];
  return (
    <footer style={{ background: OBS_B, color: "#fff" }} data-screen-label="Footer">
      <div style={{ ...WRAP_B, paddingTop: 80, paddingBottom: 44 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, paddingBottom: 52, borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
          <div>
            <img src={LOGO_B + "DSRZ_lockup_horizontal_inverted.svg"} alt="DSRZ" style={{ height: 30, marginBottom: 20 }} />
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.6, color: "var(--slate-300)", maxWidth: 280, margin: 0 }}>
              Donde las ideas se convierten en impacto.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--slate-500)", marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {c.items.map((i) => (
                  <li key={i}><a href="#" style={{ fontFamily: "var(--font-ui)", fontSize: 15, color: "var(--slate-500)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate-500)")}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 30 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--slate-500)" }}>© 2026 DSRZ HQ · dsrzhq.com · @dsrzhq</span>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--slate-500)", letterSpacing: "0.04em" }}>Organized Momentum</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Evidence, FounderFrame, Access, Footer });
