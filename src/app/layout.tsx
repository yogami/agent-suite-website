import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgentOps Suite | Enterprise Multi-Agent Infrastructure',
  description: 'Enterprise-grade infrastructure for building, deploying, and managing multi-agent AI systems. Semantic alignment, trust verification, SLA enforcement, capability discovery, and compliance auditing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
