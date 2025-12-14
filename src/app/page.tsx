const products = [
  {
    name: 'Semantic Aligner',
    tagline: 'Translation Middleware',
    description: 'Bridges vocabulary gaps between agents. Translates medical jargon, legal terms, and domain-specific language in real-time.',
    target: 'For teams connecting 3+ agent vendors in one workflow.',
    pain: 'Eliminates dropped handoffs and context loss.',
    metric: '95% reduction in cross-domain communication errors.',
    icon: '🔮',
    color: 'from-purple-500 to-violet-600',
    url: 'https://agent-semantic-aligner-production.up.railway.app',
  },
  {
    name: 'Trust Verifier',
    tagline: 'Identity & Credential Verification',
    description: 'Validates agent identities using Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). Zero-trust architecture.',
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
    description: 'Tracks task deadlines across agent workflows. Automatically flags SLA breaches and ensures accountability.',
    target: 'For enterprise operations reliability teams (SREs).',
    pain: 'Stops silent SLA breaches and stalled workflows.',
    metric: '99.9% of tasks acknowledged within SLA.',
    icon: '⏱️',
    color: 'from-orange-500 to-amber-600',
    url: 'https://agent-deadline-enforcer-production.up.railway.app',
  },
  {
    name: 'Capability Broker',
    tagline: 'Service Discovery Engine',
    description: 'Decentralized registry where agents list capabilities and discover partners. Like LinkedIn for AI agents.',
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
    description: 'Scans agent interactions for bias, toxicity, and policy violations. Essential for regulated industries.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-full text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm shadow-sm ring-1 ring-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Infrastructure for the Agentic Web
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            Infrastructure for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Agent Ecosystems
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Make your agents understand each other, show up on time, and play fair.
            <br className="hidden md:block" />
            <span className="text-slate-500 block mt-4 text-lg">
              Built for agent-platform founders and enterprise "agent mesh" teams.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 w-full sm:w-auto"
            >
              Explore the Platform
            </a>
            <a
              href="mailto:contact@agentops-suite.com"
              className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:bg-slate-700 transition-colors w-full sm:w-auto"
            >
              Discuss Enterprise Needs
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Five Targeted Solutions. One Cohesive Mesh.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Modular infrastructure components designed to solve specific pain points in multi-agent orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/50 flex flex-col h-full"
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

              <div className="space-y-4 border-t border-slate-800 pt-6 mt-auto">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Target</p>
                  <p className="text-sm text-slate-300">{product.target}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Pain Point</p>
                  <p className="text-sm text-slate-300">{product.pain}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Success Metric</p>
                  <p className="text-sm text-emerald-400 font-medium">{product.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Contact Strip */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Simple, Transparent Pricing</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-3xl font-extrabold text-white mb-4">$0 <span className="text-sm text-slate-400 font-normal">/ month</span></div>
                <ul className="text-left text-slate-300 space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">✓ Limited API calls per day</li>
                  <li className="flex items-center gap-2">✓ Community support</li>
                  <li className="flex items-center gap-2">✓ Access to all 5 modules</li>
                </ul>
                <a href="#" className="block w-full py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium">Get Started</a>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/30 relative">
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <div className="text-3xl font-extrabold text-white mb-4">Usage <span className="text-sm text-slate-400 font-normal">/ based</span></div>
                <ul className="text-left text-slate-300 space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">✓ High throughput API</li>
                  <li className="flex items-center gap-2">✓ Priority SLA support</li>
                  <li className="flex items-center gap-2">✓ Custom integrations</li>
                </ul>
                <a href="mailto:sales@agentops-suite.com" className="block w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-medium">Contact Sales</a>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-8 inline-block w-full max-w-2xl border border-slate-700">
              <p className="text-slate-300 mb-6 text-lg">
                Building an internal agent platform? We offer on-premise deployment and white-glove integration support.
              </p>
              <a
                href="mailto:partnerships@agentops-suite.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
              >
                Talk to us about your agent platform
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
            <p className="text-slate-500 text-sm">© 2025 AgentOps Suite. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
