const { Button, Chip, Badge, Card, Eyebrow, Rule, StatFigure, Highlight, Emphasis, Wordmark, Input, Select, Checkbox } = window.ARTIUMADDesignSystem_c5fefc;

const NAV = ["Work", "Services", "Studio", "Contact"];

const Slot = ({ h = 220, label = "Image", tone = "sunken" }) => (
  <div style={{
    height: h, borderRadius: "var(--radius-md)",
    background: tone === "dark" ? "var(--charcoal-700)" : "var(--cream-300)",
    border: "1px solid " + (tone === "dark" ? "var(--charcoal-500)" : "var(--border-light)"),
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase",
    color: tone === "dark" ? "var(--charcoal-400)" : "var(--charcoal-400)",
  }}>{label}</div>
);

const Shell = ({ children, wide = false }) => (
  <div style={{ maxWidth: wide ? "var(--container-wide)" : "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>{children}</div>
);

function Nav({ page, onNav }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--surface-page)", borderBottom: "1px solid var(--border-light)" }}>
      <Shell>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("Home"); }} style={{ textDecoration: "none" }}><Wordmark size="md" /></a>
          <nav style={{ display: "flex", gap: "var(--space-6)", alignItems: "center" }}>
            {NAV.map((n) => (
              <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNav(n); }}
                style={{
                  fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase", textDecoration: "none",
                  color: page === n ? "var(--charcoal-900)" : "var(--text-muted)",
                  borderBottom: "2px solid " + (page === n ? "var(--lime-500)" : "transparent"), paddingBottom: 4,
                }}>{n}</a>
            ))}
            <Button size="sm" variant="lime" onClick={() => onNav("Contact")}>Start a project</Button>
          </nav>
        </div>
      </Shell>
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-10)" }}>
      <Shell>
        <Eyebrow>Kansas City · Est. 2014</Eyebrow>
        <h1 style={{ fontSize: "var(--text-display-xl)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "16ch" }}>
          We make the ad you <Highlight>remember</Highlight>, and the <Emphasis>proof</Emphasis> behind it.
        </h1>
        <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap", marginBottom: "var(--space-10)" }}>
          <Button size="lg" onClick={() => onNav("Work")}>See the work</Button>
          <Button size="lg" variant="outline" onClick={() => onNav("Services")}>What we do</Button>
        </div>
        <Slot h={340} label="Hero film still" />
      </Shell>
    </section>
  );
}

function Marquee() {
  const items = ["Brand", "Campaign", "Media", "Content", "Film", "Sound"];
  return (
    <section style={{ background: "var(--charcoal-800)", padding: "var(--space-5) 0" }}>
      <Shell>
        <div style={{ display: "flex", gap: "var(--space-8)", justifyContent: "space-between", flexWrap: "wrap" }}>
          {items.map((i) => (
            <span key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 22, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--cream-300)" }}>{i}</span>
          ))}
        </div>
      </Shell>
    </section>
  );
}

const SERVICES = [
  { n: "01", t: "Brand", d: "Positioning, identity, verbal system. The thing everything else hangs off.", tags: ["Strategy", "Identity"] },
  { n: "02", t: "Campaign", d: "One idea, built to run across every place a person might meet it.", tags: ["Concept", "Production"] },
  { n: "03", t: "Media", d: "Planning and buying with the number agreed before we start.", tags: ["Paid", "Measurement"] },
  { n: "04", t: "Content", d: "Film, stills and social built in volume without going slack.", tags: ["Film", "Social"] },
];

function Services({ compact = false }) {
  return (
    <section style={{ padding: "var(--space-12) 0" }}>
      <Shell>
        <Rule />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "var(--space-5) 0 var(--space-8)" }}>
          <Eyebrow rule={false}>02 — What we do</Eyebrow>
          <h2 style={{ margin: 0, maxWidth: "14ch", textAlign: "right" }}>Four things, done properly.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: "var(--space-4)" }}>
          {SERVICES.map((s) => (
            <Card key={s.n} tone="paper" interactive padding="md" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", minHeight: 240 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 30, lineHeight: 1, color: "var(--charcoal-400)" }}>{s.n}</span>
              <h3 style={{ margin: 0 }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", flex: 1 }}>{s.d}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{s.tags.map((t) => <Chip key={t} size="sm">{t}</Chip>)}</div>
            </Card>
          ))}
        </div>
      </Shell>
    </section>
  );
}

const WORK = [
  { t: "A rebrand that paid for itself in nine weeks", c: "Halstead Coffee", tag: "Brand", stat: "2.7x", statLabel: "Return on ad spend" },
  { t: "Selling a pickup truck to people who hate ads", c: "Ridgeline Motors", tag: "Campaign", stat: "$44M", statLabel: "Attributed revenue" },
  { t: "Forty films in six weeks without losing the plot", c: "Verdant Foods", tag: "Content", stat: "40", statLabel: "Films delivered" },
  { t: "Cutting media waste in half, then spending the rest better", c: "Northline Bank", tag: "Media", stat: "51%", statLabel: "Waste removed" },
];

function WorkGrid({ onOpen, heading = "Selected work" }) {
  return (
    <section style={{ padding: "var(--space-12) 0" }}>
      <Shell>
        <Rule />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "var(--space-5) 0 var(--space-8)" }}>
          <Eyebrow rule={false}>01 — {heading}</Eyebrow>
          <span className="art-label">2024 — 2026</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
          {WORK.map((w, i) => (
            <a key={w.t} href="#" onClick={(e) => { e.preventDefault(); onOpen(i); }} style={{ textDecoration: "none", color: "inherit" }}>
              <Card tone="paper" padding="none" interactive style={{ overflow: "hidden" }}>
                <Slot h={260} label={w.c} />
                <div style={{ padding: "var(--space-5)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                    <Chip size="sm" variant="lime">{w.tag}</Chip>
                    <span className="art-label">{w.c}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: "var(--text-2xl)" }}>{w.t}</h3>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function StatsBand() {
  return (
    <section style={{ background: "var(--charcoal-800)", padding: "var(--space-12) 0" }}>
      <Shell>
        <Eyebrow tone="onDark">03 — Proof</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-6)", marginTop: "var(--space-8)" }}>
          <StatFigure value="2.7x" label="Median return on ad spend" tone="cream" />
          <StatFigure value="$44M" label="Media managed a year" tone="cream" />
          <StatFigure value="91%" label="Clients past year three" tone="cream" />
          <StatFigure value="18" label="People, no layers" tone="cream" />
        </div>
      </Shell>
    </section>
  );
}

function Quote() {
  return (
    <section style={{ padding: "var(--space-12) 0" }}>
      <Shell>
        <Card tone="lime" padding="lg">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-display-md)", lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", margin: 0, maxWidth: "20ch", color: "var(--charcoal-900)" }}>
            "They put a number on it before they started. Then they showed us the number after."
          </p>
          <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <span className="art-label" style={{ color: "var(--charcoal-800)" }}>Dana Okafor</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--charcoal-800)" }} />
            <span className="art-label" style={{ color: "var(--charcoal-800)" }}>CMO, Northline Bank</span>
          </div>
        </Card>
      </Shell>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: "var(--charcoal-900)", color: "var(--text-on-dark)", paddingTop: "var(--space-10)", paddingBottom: "var(--space-6)" }}>
      <Shell>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--space-10)", alignItems: "flex-start" }}>
          <div>
            <Wordmark size="lg" tone="cream" />
            <p style={{ marginTop: "var(--space-5)", color: "var(--cream-400)", maxWidth: "34ch" }}>
              An independent advertising studio. We take four clients at a time.
            </p>
          </div>
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-end" }}>
            <Input tone="dark" label="Quarterly roundup" placeholder="you@company.com" style={{ flex: 1 }} />
            <Button variant="lime">Subscribe</Button>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--charcoal-700)", marginTop: "var(--space-8)", paddingTop: "var(--space-4)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
          <span className="art-label" style={{ color: "var(--charcoal-400)" }}>© 2026 Atrium AD</span>
          <div style={{ display: "flex", gap: "var(--space-5)" }}>
            {NAV.map((n) => <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNav(n); }} className="art-label" style={{ color: "var(--cream-400)", textDecoration: "none" }}>{n}</a>)}
          </div>
        </div>
      </Shell>
    </footer>
  );
}

function CaseStudy({ index, onBack }) {
  const w = WORK[index] || WORK[0];
  return (
    <section style={{ paddingTop: "var(--space-8)", paddingBottom: "var(--space-12)" }}>
      <Shell>
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="art-label" style={{ textDecoration: "none", color: "var(--text-muted)" }}>← All work</a>
        <div style={{ display: "flex", gap: "var(--space-3)", margin: "var(--space-6) 0 var(--space-5)" }}>
          <Chip variant="ink" size="sm">{w.tag}</Chip><Chip size="sm">{w.c}</Chip>
        </div>
        <h1 style={{ maxWidth: "18ch" }}>{w.t}</h1>
        <Slot h={420} label={w.c + " — key visual"} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--space-10)", marginTop: "var(--space-8)" }}>
          <div>
            <Eyebrow rule={false}>The problem</Eyebrow>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-lg)" }}>
              {w.c} had spent three years buying reach and could not name a single thing anyone remembered about them. The category had converged on the same photography, the same promise and the same discount.
            </p>
            <Eyebrow rule={false}>What we did</Eyebrow>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-lg)" }}>
              We rebuilt the brand around one claim we could defend, wrote a campaign that used it plainly, and moved the media budget to the two channels where the claim actually landed. Everything shipped in nine weeks.
            </p>
          </div>
          <Card tone="ruled" padding="md" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", height: "fit-content" }}>
            <StatFigure value={w.stat} label={w.statLabel} size="sm" />
            <StatFigure value="9 wks" label="Concept to air" size="sm" />
            <StatFigure value="4" label="Channels, down from 11" size="sm" />
          </Card>
        </div>
      </Shell>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ padding: "var(--space-10) 0 var(--space-12)" }}>
      <Shell>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)" }}>
          <div>
            <Eyebrow>04 — Contact</Eyebrow>
            <h1 style={{ marginTop: "var(--space-5)", maxWidth: "12ch" }}>Tell us what you're <Emphasis>up against</Emphasis>.</h1>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--text-muted)" }}>
              We reply within two working days, and we will tell you if we're the wrong studio for it.
            </p>
            <Rule weight="hair" />
            <div style={{ display: "flex", gap: "var(--space-8)", marginTop: "var(--space-5)" }}>
              <StatFigure value="4" label="Clients at a time" size="sm" />
              <StatFigure value="2 days" label="Reply window" size="sm" />
            </div>
          </div>
          <Card tone="ruled" padding="lg">
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <Badge variant="lime">Sent</Badge>
                <h3 style={{ margin: 0 }}>Got it. We'll come back within two days.</h3>
                <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Work email" placeholder="you@company.com" />
                <Select label="What do you need" options={["Brand", "Campaign", "Media", "Content", "Not sure yet"]} />
                <Select label="Budget band" options={["Under $50k", "$50k — $150k", "$150k — $500k", "$500k+"]} />
                <Checkbox label="Send me the quarterly work roundup" />
                <Button variant="lime" size="lg" fullWidth onClick={() => setSent(true)}>Send it</Button>
              </div>
            )}
          </Card>
        </div>
      </Shell>
    </section>
  );
}

function Studio() {
  return (
    <section style={{ padding: "var(--space-10) 0 var(--space-12)" }}>
      <Shell>
        <Eyebrow>05 — Studio</Eyebrow>
        <h1 style={{ marginTop: "var(--space-5)", maxWidth: "18ch" }}>Eighteen people. <Emphasis>No layers.</Emphasis></h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)", marginTop: "var(--space-8)" }}>
          <Slot h={280} label="Studio" /><Slot h={280} label="Team" /><Slot h={280} label="Edit suite" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-10)", marginTop: "var(--space-10)" }}>
          <p style={{ fontSize: "var(--text-xl)" }}>
            The people who pitch the work make the work. There is no strategy department that hands a deck to a creative department that hands a file to a media department.
          </p>
          <p style={{ fontSize: "var(--text-xl)" }}>
            We take four clients at a time because that is how many we can do this way. When we are full we will say so.
          </p>
        </div>
      </Shell>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Services, WorkGrid, StatsBand, Quote, Footer, CaseStudy, Contact, Studio, Shell, Slot, WORK });
