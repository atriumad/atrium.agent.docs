function AtriumSite() {
  const [page, setPage] = React.useState("Home");
  const [caseIndex, setCaseIndex] = React.useState(null);
  const go = (p) => { setCaseIndex(null); setPage(p); };
  const openCase = (i) => { setCaseIndex(i); setPage("Case"); };

  let body;
  if (page === "Case") body = <CaseStudy index={caseIndex} onBack={() => go("Work")} />;
  else if (page === "Work") body = <WorkGrid onOpen={openCase} heading="All work" />;
  else if (page === "Services") body = <Services />;
  else if (page === "Studio") body = <Studio />;
  else if (page === "Contact") body = <Contact />;
  else body = (
    <React.Fragment>
      <Hero onNav={go} />
      <Marquee />
      <WorkGrid onOpen={openCase} />
      <StatsBand />
      <Services />
      <Quote />
    </React.Fragment>
  );

  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100vh" }}>
      <Nav page={page === "Case" ? "Work" : page} onNav={go} />
      {body}
      <Footer onNav={go} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<AtriumSite />);
