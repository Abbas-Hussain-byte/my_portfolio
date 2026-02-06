// Sample project data - will be replaced with backend API or real data
export const projectsData = [
    {
        slug: 'distributed-kvstore',
        name: 'distributed-kvstore',
        constraint: 'Build a fault-tolerant key-value store supporting 10K req/s with <50ms p99 latency',
        strategy: 'Raft consensus + RocksDB + zero-copy networking',
        stack: ['Rust', 'gRPC', 'Docker', 'K6'],
        impact: '12K req/s sustained, 38ms p99, survives 2/5 node failures',
        metrics: {
            throughput: '12K req/s',
            latency: '38ms p99',
            faultTolerance: '2/5 nodes'
        },
        status: 'LIVE',
        links: {
            github: '#',
            demo: '#',
            detail: '/projects/distributed-kvstore'
        },
        description: `
## Overview
Built a distributed key-value store from scratch to understand consensus algorithms and high-performance networking.

## Technical Decisions
- **Raft for consensus**: Chosen over Paxos for understandability
- **RocksDB for storage**: LSM trees provide better write performance
- **gRPC for networking**: HTTP/2 multiplexing reduces connection overhead

## Performance Data
- Baseline: 5K req/s, 120ms p99
- After optimization: 12K req/s, 38ms p99
- **Key optimization**: Zero-copy buffer management reduced allocations by 60%

## Challenges
Initial implementation had memory leaks under sustained load. Profiled with Valgrind, discovered issue in RocksDB iterator cleanup.
    `
    },
    {
        slug: 'leetcode-optimizer',
        name: 'leetcode-optimizer',
        constraint: 'Analyze LeetCode solutions and suggest time/space complexity improvements',
        strategy: 'AST parsing + Big-O analysis heuristics + runtime benchmarking',
        stack: ['Python', 'ast', 'pytest', 'matplotlib'],
        impact: 'Identified 40% of solutions with suboptimal approaches',
        metrics: {
            accuracy: '92%',
            analyzed: '500+ solutions',
            improvements: '40%'
        },
        status: 'IN PROGRESS',
        links: {
            github: '#',
            demo: null,
            detail: '/projects/leetcode-optimizer'
        },
        description: `
## Overview
CLI tool that parses Python LeetCode solutions and identifies complexity issues.

## Technical Decisions
- Used AST for static analysis (faster than runtime profiling)
- Built pattern database of common algorithm complexities
- Benchmark against reference implementations for validation

## Current Progress
- ✅ Parser for common data structures (arrays, trees, graphs)
- ✅ Detection of nested loops (O(n²) detection)
- 🚧 Dynamic programming pattern recognition
- 🚧 Space complexity analysis
    `
    },
    {
        slug: 'webapp-perf-audit',
        name: 'webapp-perf-audit',
        constraint: 'Automate performance regression detection for web applications',
        strategy: 'Lighthouse CI + time-series DB + GitHub Actions integration',
        stack: ['Node.js', 'Puppeteer', 'InfluxDB', 'GitHub Actions'],
        impact: 'Caught 3 performance regressions before production',
        metrics: {
            coverage: '100% of PRs',
            avgScore: '92/100',
            regressions: '3 caught'
        },
        status: 'LIVE',
        links: {
            github: '#',
            demo: '#',
            detail: '/projects/webapp-perf-audit'
        },
        description: `
## Overview
Automated Lighthouse audits that run on every PR, tracking performance over time.

## Architecture
1. GitHub Action triggers on PR
2. Puppeteer spins up headless Chrome
3. Lighthouse runs audit
4. Results stored in InfluxDB
5. Dashboard shows trend over time

## Impact
Prevented 3 major regressions:
- Uncompressed 4MB image (dropped score to 45)
- Blocking JS bundle (added 2s to TTI)
- Missing lazy loading (CLS spike)
    `
    }
]
