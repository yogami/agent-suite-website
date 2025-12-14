const products = [
  {
    name: 'Semantic Aligner',
    tagline: 'Translation Middleware',
    description: 'Bridges vocabulary gaps between agents. Translates medical jargon, legal terms, and domain-specific language in real-time.',
    icon: '🔮',
    color: 'from-purple-500 to-violet-600',
    url: 'https://agent-semantic-aligner-production.up.railway.app',
  },
  {
    name: 'Trust Verifier',
    tagline: 'Identity & Credential Verification',
    description: 'Validates agent identities using Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). Zero-trust architecture.',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-600',
    url: 'https://agent-trust-verifier-production.up.railway.app',
  },
  {
    name: 'Deadline Enforcer',
    tagline: 'SLA Monitoring & Enforcement',
    description: 'Tracks task deadlines across agent workflows. Automatically flags SLA breaches and ensures accountability.',
    icon: '⏱️',
    color: 'from-orange-500 to-amber-600',
    url: 'https://agent-deadline-enforcer-production.up.railway.app',
  },
  {
    name: 'Capability Broker',
    tagline: 'Service Discovery Engine',
    description: 'Decentralized registry where agents list capabilities and discover partners. Like LinkedIn for AI agents.',
    icon: '🔍',
    color: 'from-cyan-500 to-blue-600',
    url: 'https://agent-capability-broker-production.up.railway.app',
  },
  {
    name: 'Fairness Auditor',
    tagline: 'Bias & Compliance Detection',
    description: 'Scans agent interactions for bias, toxicity, and policy violations. Essential for regulated industries.',
    icon: '⚖️',
    color: 'from-pink-500 to-rose-600',
    url: 'https://agent-fairness-auditor-production.up.railway.app',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-full text-sm text-slate-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            5 Production-Ready MVPs
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AgentOps Suite
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Enterprise-grade infrastructure for building, deploying, and managing
            <span className="text-white font-medium"> multi-agent AI systems</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
            >
              Explore Products
            </a>
            <a
              href="https://github.com/yogami"
              target="_blank"
              className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:bg-slate-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Complete Multi-Agent Toolkit
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Five independent, production-ready services that work together to power your agent ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                {product.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 mb-3">{product.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {product.description}
              </p>

              <div className="absolute bottom-6 right-6 text-slate-600 group-hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-slate-700 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Agent Network?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Each service is open-source and deployed on Railway. Clone, customize, and scale to your needs.
          </p>
          <a
            href="https://github.com/yogami"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Get Started on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2025 AgentOps Suite. Built for the Multi-Agent AI Revolution.</p>
        </div>
      </footer>
    </main>
  );
}
