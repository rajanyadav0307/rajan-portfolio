export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string; // "YYYY" | "YYYY-MM" | "YYYY-MM-DD"
  end: string;   // "YYYY" | "YYYY-MM" | "YYYY-MM-DD" | "Present"
  highlights: string[];
  tags?: string[];
  links?: Link[];
};

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  links?: Link[];
  featured?: boolean;
};

export type ResearchItem = {
  title: string;
  venue?: string;
  year?: string;
  summary: string;
  links?: Link[];
};

export type BlogPost = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  href: string;
};

export type PRStatus = "Merged" | "Under Review" | "Draft" | "Closed";

export type PullRequest = {
  title: string;
  repo: string;        // e.g. "aws/aws-sdk-cpp"
  number?: number;     // e.g. 1234
  status: PRStatus;
  href: string;        // link to PR
  impact?: string;     // 1-line “why it mattered”
  metrics?: string[];  // measurable outcomes
  tags?: string[];     // tech keywords
};

export type Contribution = {
  project: string;         // repo or project name
  role?: string;           // e.g. "Contributor", "Maintainer"
  summary: string;         // short, high-level
  highlights?: string[];   // optional bullets
  tech?: string[];
  links?: Link[];          // repo/issues/notes
  prs: PullRequest[];      // PR list with status + impact
};

export type Profile = {
  name: string;
  headline: string;
  location: string;
  email?: string;
  links: {
    github: string;
    linkedin?: string;
    scholar?: string;
    resume?: string;
    other?: Link[];
  };
  about: {
    short: string;
    bullets: string[];
  };
  skills: {
    categories: { name: string; items: { label: string; level?: number; note?: string }[] }[];
  };
  experience: Experience[];
  openSource: Contribution[];
  projects: Project[];
  research: ResearchItem[];
  blogs: BlogPost[];
};

export const profile: Profile = {
  name: "Rajan Yadav",
  headline: "Systems Software Developer • C++/Linux • MS in Computer Science",
  location: "Texas, United States",
  email: "rajanyadav0307@gmail.com",
  links: {
    github: "https://github.com/rajanyadav0307",
    linkedin: "https://www.linkedin.com/feed/",
    resume: "./resume.pdf",
    other: [{ label: "Google Scholar", href: "https://scholar.google.com/" }]
  },

  about: {
    short:
      "I build reliable, performance-focused systems in C++ on Linux—and I’m now expanding into applied AI/ML through an MS program in the US.",
    bullets: [
      "4 years building production systems: concurrency, networking, performance tuning, debugging.",
      "Strong fundamentals: OS, memory, compilers/toolchains, distributed systems basics.",
      "AI track focus: model training/inference basics, retrieval, evaluation, and deployment."
    ]
  },

  skills: {
    categories: [
      {
        name: "Systems",
        items: [
          { label: "C++ (17/20)", level: 90, note: "RAII, templates, perf, concurrency" },
          { label: "Linux", level: 88, note: "debugging, tooling, packaging" },
          { label: "Networking", level: 75, note: "HTTP, gRPC basics, sockets" },
          { label: "Build/Tooling", level: 80, note: "CMake, Ninja, clang/gcc, sanitizers" }
        ]
      },
      {
        name: "AI/ML",
        items: [
          { label: "Python", level: 78, note: "data + ML utilities" },
          { label: "ML Foundations", level: 70, note: "training, metrics, overfitting" },
          { label: "LLM Apps", level: 68, note: "RAG, eval, prompt + safety" }
        ]
      },
      {
        name: "Cloud & DevOps",
        items: [
          { label: "AWS", level: 70, note: "core services + SDK work" },
          { label: "Docker", level: 76, note: "repro builds, CI" },
          { label: "CI/CD", level: 68, note: "GitHub Actions, Jenkins" }
        ]
      }
    ]
  },

  experience: [
    {
      company: "Comcast",
      role: "Product Development Engineer",
      location: "India / US",
      start: "2021-07-26",
      end: "2025-07-17",
      highlights: [
        "Built and optimized C++ services on Linux, improving latency and reliability.",
        "Led debugging efforts for production issues using perf, gdb, sanitizers, and logs.",
        "Designed clean interfaces/APIs for multi-team adoption and long-term maintenance."
      ],
      tags: ["C++", "Linux", "Performance", "Debugging"],
      links: [{ label: "Company", href: "https://www.xfinity.com/overview" }]
    }
  ],

  // Keep this section strong: 2–6 PRs per repo with impact + metrics.
  openSource: [
    {
      project: "aws/aws-sdk-cpp",
      role: "Contributor",
      summary: "Reliability and correctness improvements in core HTTP/client behavior.",
      tech: ["C++", "CMake", "AWS", "AWS Service SDK"],
      links: [{ label: "Repo", href: "https://github.com/aws/aws-sdk-cpp" }],
      prs: [
        {
          title: "Replace push_back with emplace_back to avoid unnecessary copies",
          repo: "aws/aws-sdk-cpp",
          status: "Merged",
          href: "https://github.com/aws/aws-sdk-cpp/pull/3663#issuecomment-3715430281",
          impact: "Eliminate unnecessary temporaries, slightly improve performance, and adhere to modern C++ best practices",
          metrics: ["C++ Best Practices", "Modern C++", "Performance Improvement"],
          tags: ["Text-To-Speech", "Vector", "Optimization"]
        },
        {
          title: "Fixes IPv6 loopback handling for EKS Pod Identity agent URLs",
          repo: "aws/aws-sdk-cpp",
          status: "Merged",
          href: "https://github.com/aws/aws-sdk-cpp/pull/3680#issuecomment-3739385533",
          impact: "Fixed IPv6 address handling in GeneralHTTPCredentialsProvider",
          metrics: ["IPV6 Parsing", "Improved robustness", "Enhanced compatibility"],
          tags: ["EKS", "IPV6", "String"]
        },
        {
          title: "CurlHttpClient: added support for non-seekable streams",
          repo: "aws/aws-sdk-cpp",
          status: "Under Review",
          href: "https://github.com/aws/aws-sdk-cpp/pull/3693",
          impact: " Improves compatibility with clients that use non-seekable or filtering output streams",
          metrics: ["Non-seekable stream support", "Robustness", "Improved compatibility"],
          tags: ["Curl", "HTTP", "IOStream","libCurl" ]
        },
        {
          title: "Add a CMake option to stop exporting the C++ standard via pkg-config",
          repo: "aws/aws-sdk-cpp",
          status: "Under Review",
          href: "https://github.com/aws/aws-sdk-cpp/pull/3709",
          impact: "Improves the build compatibiliity in the downstream projects that use aws-sdk-cpp as a dependency",
          metrics: ["CMake option", "Robustness", "Backward compatibility"],
          tags: ["CMake", "pkg-config", "C++ Standard"]
        }
      ]
    },
    {
      project: "awslabs/mcp",
      role: "Contributor",
      summary: "MCP server improvements across auth, schemas, and developer experience.",
      tech: ["Python", "TypeScript", "AWS"],
      links: [{ label: "Repo", href: "https://github.com/awslabs/mcp" }],
      prs: [
        {
          title: "Bedrock server: add API key auth support",
          repo: "awslabs/mcp",
          status: "Under Review",
          href: "https://github.com/awslabs/mcp/pull/2359",
          impact: "Enables easier local dev + CI runs with non-default auth flows.",
          metrics: ["Faster setup for contributors", "Improved local usability"],
          tags: ["Auth", "Bedrock"]
        },
        {
          title: "Fix Optional[int] JSON schema edge case",
          repo: "awslabs/mcp",
          status: "Merged",
          href: "https://github.com/awslabs/mcp",
          impact: "Improves client interoperability by generating correct optional schemas.",
          metrics: ["Reduced schema mismatch failures", "Improved compatibility"],
          tags: ["JSON Schema", "Pydantic"]
        }
      ]
    }
  ],

  projects: [
    {
      name: "Project Name (Featured)",
      description: "A leading project that shows both systems depth and AI direction.",
      highlights: [
        "What problem it solves and why it matters.",
        "A measurable result: latency ↓, throughput ↑, cost ↓, accuracy ↑, etc.",
        "A detail that signals engineering maturity: tests, benchmarks, CI, docs."
      ],
      tech: ["C++", "Linux", "Python", "Docker"],
      links: [
        { label: "GitHub", href: "https://github.com/your-handle/project" },
        { label: "Demo", href: "https://example.com" }
      ],
      featured: true
    },
    {
      name: "Another Project",
      description: "Add 2–5 strong projects. Keep each one crisp.",
      highlights: ["Design choices", "Tradeoffs", "Results"],
      tech: ["C++", "CMake", "AWS"],
      links: [{ label: "GitHub", href: "https://github.com/your-handle/another" }]
    }
  ],

  research: [
    {
      title: "Research Topic / Paper Title",
      venue: "Conference / Workshop",
      year: "2026",
      summary:
        "Add your research interests, publications, posters, or coursework highlights. Keep it readable for recruiters.",
      links: [{ label: "PDF", href: "#" }]
    }
  ],

  blogs: [
    {
      title: "Debugging C++ Hangs: A Practical Checklist",
      date: "2026-02-01",
      description: "How to systematically investigate deadlocks and shutdown hangs in production.",
      tags: ["C++", "Linux", "Debugging"],
      href: "https://your-blog.com/post"
    }
  ]
};
