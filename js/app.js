/* DSRZ Landing — App composition (9 sections) */

function App() {
  const [access, setAccess] = React.useState(false);
  const open = () => setAccess(true);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className="dsrz" style={{ background: "var(--white)", width: 1440, maxWidth: "100%", margin: "0 auto" }}>
      <Nav onAccess={open} />
      <Hero onAccess={open} />
      <Signal />
      <Ecosystem />
      <Vectors />
      <Evidence />
      <FounderFrame />
      <Access onAccess={open} />
      <Footer />
      <AccessModal open={access} onClose={() => setAccess(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
