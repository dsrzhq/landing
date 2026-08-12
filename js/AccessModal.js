/* DSRZ Website UI Kit — Access request modal (interactive click-thru) */

function AccessModal({ open, onClose }) {
  const [step, setStep] = React.useState(0); // 0 form, 1 success
  const [form, setForm] = React.useState({ nombre: "", email: "", perfil: "Emprendedor" });
  React.useEffect(() => { if (open) setStep(0); }, [open]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  if (!open) return null;
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(17,17,17,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 520, background: "var(--white)", border: "1px solid var(--line-1)", borderRadius: 2, padding: 0, position: "relative" }}>
        <button onClick={onClose} aria-label="Cerrar" style={{ position: "absolute", top: 20, right: 20, background: "none", border: 0, cursor: "pointer", color: "var(--fg-3)", display: "flex" }}>
          <i data-lucide="x" style={{ width: 20, height: 20 }}></i>
        </button>
        {step === 0 ? (
          <div style={{ padding: "40px 40px 36px" }}>
            <Eyebrow>Solicitar acceso</Eyebrow>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.01em", margin: "18px 0 6px" }}>Entra al campo de momentum.</h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)", margin: "0 0 28px" }}>El acceso es por invitación. Cuéntanos quién eres.</p>
            <form onSubmit={(e) => { e.preventDefault(); setStep(1); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Field label="Nombre" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} />
              <Field label="Email" name="email" type="email" placeholder="nombre@empresa.com" value={form.email} onChange={set("email")} />
              <Field label="Perfil" name="perfil" as="select" value={form.perfil} onChange={set("perfil")} options={["Emprendedor", "Inversionista", "Líder"]} />
              <div style={{ marginTop: 6 }}>
                <Button variant="primary" icon="arrow-right" type="submit">Enviar solicitud</Button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ padding: "56px 40px", textAlign: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: 2, background: "var(--momentum-blue)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
              <i data-lucide="check" style={{ width: 26, height: 26, color: "#fff" }}></i>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.01em", margin: "0 0 10px" }}>Solicitud recibida.</h3>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", margin: "0 auto 28px", maxWidth: 340 }}>
              Gracias, {form.nombre || "—"}. Revisaremos tu acceso y te escribiremos a {form.email || "tu correo"}.
            </p>
            <Button variant="dark" onClick={onClose}>Volver</Button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { AccessModal });
