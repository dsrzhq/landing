/* DSRZ Website UI Kit — Primitives
   Buttons, Eyebrow, Field, Divider. Exported to window at end. */

function Eyebrow({ children, onDark }) {
  return (
    <span style={{
      fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13,
      textTransform: "uppercase", letterSpacing: "0.18em",
      color: onDark ? "var(--slate-500)" : "var(--fg-3)",
      display: "inline-flex", alignItems: "center", gap: 10,
    }}>
      <span style={{ width: 24, height: 1, background: "var(--momentum-blue)" }}></span>
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", onDark = false, icon, onClick, type = "button" }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15,
    padding: "13px 24px", borderRadius: 2, border: "1.5px solid transparent",
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 9,
    letterSpacing: "0.01em", transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)",
    lineHeight: 1,
  };
  let style = {};
  if (variant === "primary") {
    style = { background: press ? "var(--accent-press)" : hover ? "var(--accent-hover)" : "var(--accent)", color: "#fff" };
  } else if (variant === "ghost") {
    const line = onDark ? "var(--line-on-dark)" : "var(--line-1)";
    const txt = onDark ? "#fff" : "var(--fg-1)";
    style = { background: "transparent", color: txt, borderColor: hover ? (onDark ? "#fff" : "var(--obsidian)") : line };
  } else if (variant === "dark") {
    style = { background: press ? "#000" : hover ? "#000" : "var(--obsidian)", color: "#fff" };
  } else if (variant === "invert") {
    style = { background: hover ? "var(--slate-100)" : "#fff", color: "var(--obsidian)" };
  } else if (variant === "link") {
    return (
      <button type={type} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ background: "none", border: 0, padding: 0, cursor: "pointer", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15, color: hover ? "var(--accent-hover)" : "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6 }}>
        {children}{icon && <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>}
      </button>
    );
  }
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...style }}>
      {children}{icon && <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>}
    </button>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, name, as = "input", options }) {
  const [focus, setFocus] = React.useState(false);
  const shared = {
    fontFamily: "var(--font-ui)", fontSize: 15, color: "var(--fg-1)",
    padding: "12px 14px", border: `1.5px solid ${focus ? "var(--momentum-blue)" : "var(--line-1)"}`,
    borderRadius: 2, background: "var(--white)", outline: "none", width: "100%",
    boxSizing: "border-box", transition: "border-color var(--dur) var(--ease-standard)",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--fg-3)" }}>{label}</span>
      {as === "select" ? (
        <select name={name} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={shared}>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={shared} />
      )}
    </label>
  );
}

Object.assign(window, { Eyebrow, Button, Field });
