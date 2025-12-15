const products = [
  {
    name: 'Semantic Aligner',
    tagline: 'Translation Middleware',
    description: 'Stop agents talking past each other. Normalizes intents and fields across vendors and domains so multi-agent workflows don\'t fail on naming and schema mismatches.',
    target: 'For teams connecting 3+ agent vendors in one workflow.',
    pain: 'Eliminates dropped handoffs and context loss.',
    metric: '95% reduction in cross-domain communication errors.',
    icon: '🔮',
    color: 'from-purple-500 to-violet-600',
    url: 'https://agent-semantic-aligner-production.up.railway.app',
    recommended: true,
  },
  {
    name: 'Trust Verifier',
    tagline: 'Identity & Credential Verification',
    description: 'Verify which agent is acting on behalf of whom before high-risk actions. Uses Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) to enforce a zero-trust posture for autonomous agents.',
    target: 'For financial services and high-risk automated workflows.',
    pain: 'Prevents unknown agent identity and unauthorized actions.',
    metric: '100% verified agent interactions for compliance.',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-600',
    url: 'https://agent-trust-verifier-production.up.railway.app',
  },
  {
    name: 'Deadline Enforcer',
    tagline: 'SLA Monitoring & Enforcement',
    description: 'SLA watchdog for agents. Tracks task deadlines with heartbeats and escalation so you catch silent failures instead of learning from angry users.',
    target: 'For enterprise operations reliability teams (SREs).',
    pain: 'Stops silent SLA breaches and stalled workflows.',
    metric: '99.9% of tasks acknowledged within SLA.',
    icon: '⏱️',
    color: 'from-orange-500 to-amber-600',
    url: 'https://agent-deadline-enforcer-production.up.railway.app',
    recommended: true,
  },
  {
    name: 'Capability Broker',
    tagline: 'Service Discovery Engine',
    description: 'Skills-aware routing for agents. A registry where agents publish capabilities and historical performance so each task is sent to the right agent, not just the first one found.',
    target: 'For agent platforms needing dynamic skills routing.',
    pain: 'Solves static hardcoded agent logic issues.',
    metric: 'Dynamic capabilities discovery in <200ms.',
    icon: '🔍',
    color: 'from-cyan-500 to-blue-600',
    url: 'https://agent-capability-broker-production.up.railway.app',
  },
  {
    name: 'Fairness Auditor',
    tagline: 'Bias & Compliance Detection',
    description: 'Referee for autonomous decisions. Audits agent interactions and negotiations for unfair outcomes, bias, and policy violations, with regulator-ready reports for sensitive domains.',
    target: 'For automated negotiation and procurement systems.',
    pain: 'Mitigates regulatory risk and unfair outcomes.',
    metric: 'Real-time auditing of 100% of negotiations.',
    icon: '⚖️',
    color: 'from-pink-500 to-rose-600',
    url: 'https://agent-fairness-auditor-production.up.railway.app',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-white">
            AgentOps Suite
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Infrastructure for serious agent ecosystems.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-6">
              Make your AI agents understand each other, hit their deadlines, prove who they are, and stay compliant in real production workflows.
            </p>
            <p className="text-lg text-slate-400">
              Built for agent-platform teams and enterprise AI platform owners running 3+ cooperating agents across tools.
            </p>
          </div>
        </div>
      </section>

      {/* The Complete Multi-Agent Toolkit */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Complete Multi-Agent Toolkit
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Five independent, production-ready services that you can adopt individually or together to harden your agent mesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`group relative bg-slate-900/50 border ${product.recommended ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : 'border-slate-800'} rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/50 flex flex-col h-full`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-3xl shadow-lg ring-1 ring-white/10`}>
                  {product.icon}
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800 rounded-full border border-slate-700 hover:text-white hover:border-slate-600 transition-colors"
                >
                  Live Demo →
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-cyan-500/80 uppercase tracking-wider mb-4">{product.tagline}</p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Hard-Launch Your Agent Network? */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />

          <div className="p-10 md:p-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Hard-Launch Your Agent Network?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              Each service is open-source and deployed on Railway. Use them as-is, or work with us to tailor them to your production agent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@agentops-suite.com?subject=AgentOps Suite"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg shadow-white/10 w-full sm:w-auto"
              >
                Contact us about your agent mesh
              </a>
              <a
                href="https://github.com/yogami"
                className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl hover:bg-slate-700 transition-colors w-full sm:w-auto"
              >
                View projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-2">AgentOps Suite</h4>
            <p className="text-slate-500 text-sm">© 2025 AgentOps Suite. Built for the Multi-Agent AI Revolution.</p>
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://github.com/yogami" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
