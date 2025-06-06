// src/components/Portfolio/PortfolioComponents.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Users,
  Clock,
  Star,
  BarChart3,
  Target,
  Palette,
  Code,
  TestTube,
  Search,
  CheckCircle,
  AlertTriangle,
  XCircle,
  MapPin,
  TrendingUp,
  Shield,
  Eye,
  FileText,
  Briefcase,
  Brain,
  Smartphone,
  DollarSign,
  Globe,
  Zap,
  ChevronDown,
  ChevronUp,
  Navigation,
  Filter,
  SortAsc,
} from 'lucide-react';
import BadgeIcon from '@/components/BadgeIcon';

// Import types from data file
import type { PersonaType, PrototypeType } from '@/data/portfolioData';

/* eslint-disable react/jsx-no-useless-fragment */

/* ──────────── Primitive Helpers ──────────── */
export const Heading = ({ t }: { t: string }): JSX.Element => (
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t}</h2>
);

export const Skew = ({
  id,
  bg,
  children,
}: {
  id: string;
  bg: string;
  children: React.ReactNode;
}): JSX.Element => (
  <section id={id} className={`relative ${bg}`}>
    <div className="transform skew-y-3 overflow-hidden">
      <div className="max-w-7xl mx-auto py-20 transform -skew-y-3 px-4">
        {children}
      </div>
    </div>
  </section>
);

/* ──────────── Atomic Cards ──────────── */
export const StatCard = ({
  icon,
  number,
  label,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}): JSX.Element => (
  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
    <div className="text-blue-400 mb-3 flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-lg font-semibold text-blue-300 mb-1">{label}</div>
    <div className="text-sm text-neutral-400">{description}</div>
  </div>
);

export const RoleCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-4 text-center hover:bg-neutral-700/50 transition-colors">
    <div className="text-blue-400 mb-2 flex justify-center">{icon}</div>
    <div className="font-semibold text-white mb-1">{title}</div>
    <div className="text-xs text-neutral-400">{subtitle}</div>
  </div>
);

export const ToolCategory = ({
  title,
  tools,
  color,
}: {
  title: string;
  tools: string[];
  color: string;
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <div className="flex flex-wrap gap-3">
      {tools.map((tool) => (
        <span
          key={tool}
          className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white font-medium`}
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export const ProcessPhase = ({
  title,
  icon,
  activities,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  activities: string[];
  color: string;
}): JSX.Element => (
  <div className="text-center">
    <div className={`${color} mb-4 flex justify-center`}>{icon}</div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-neutral-300">
      {activities.map((activity) => (
        <li key={activity}>• {activity}</li>
      ))}
    </ul>
  </div>
);

export const ProblemCard = ({
  icon,
  title,
  problems,
}: {
  icon: React.ReactNode;
  title: string;
  problems: string[];
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6 mb-8">
    <div className="flex items-center mb-4">
      <div className="mr-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2 text-neutral-300">
      {problems.map((problem) => (
        <li key={problem} className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          {problem}
        </li>
      ))}
    </ul>
  </div>
);

export const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}): JSX.Element => (
  <div className="flex items-start space-x-3">
    <div className="text-blue-400 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  </div>
);

/* ──────────── Value & Future Cards ──────────── */
export const ValuePropCard = ({
  title,
  icon,
  features,
}: {
  title: string;
  icon: React.ReactNode;
  features: string[];
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <div className="text-center mb-6">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start">
          <div className="text-green-400 mr-2 mt-1">✓</div>
          <span className="text-neutral-300">{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const FutureFeature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6 hover:bg-neutral-700/50 transition-colors">
    <div className="flex items-center mb-3">
      <div className="mr-3 text-blue-400">{icon}</div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
    </div>
    <p className="text-sm text-neutral-300">{description}</p>
  </div>
);

export const OutcomeCard = ({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}): JSX.Element => (
  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
    <div className="text-3xl font-bold text-blue-400 mb-2">{number}</div>
    <div className="text-lg font-semibold text-white mb-1">{label}</div>
    <div className="text-sm text-neutral-400">{description}</div>
  </div>
);

/* ──────────── Competitor & Ethics ──────────── */
export const CompetitorCard = ({
  name,
  pros,
  cons,
  features,
  focus,
}: {
  name: string;
  pros: string[];
  cons: string[];
  features: string[];
  focus: string;
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <h3 className="text-xl font-bold text-center mb-4">{name}</h3>
    <div className="text-center mb-4">
      <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
        {focus}
      </span>
    </div>

    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths</h4>
        <ul className="text-xs text-neutral-300 space-y-1">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start">
              <CheckCircle className="w-3 h-3 mr-1 mt-0.5 text-green-400 flex-shrink-0" />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-red-400 mb-2">Weaknesses</h4>
        <ul className="text-xs text-neutral-300 space-y-1">
          {cons.map((con) => (
            <li key={con} className="flex items-start">
              <XCircle className="w-3 h-3 mr-1 mt-0.5 text-red-400 flex-shrink-0" />
              {con}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
        <ul className="text-xs text-neutral-300 space-y-1">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const EthicsCard = ({
  icon,
  title,
  considerations,
}: {
  icon: React.ReactNode;
  title: string;
  considerations: string[];
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <div className="flex items-center mb-4">
      <div className="mr-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2 text-neutral-300">
      {considerations.map((c) => (
        <li key={c} className="flex items-start">
          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
          {c}
        </li>
      ))}
    </ul>
  </div>
);

/* ──────────── Research Components ──────────── */
export const DataVisualization = ({
  title,
  data,
  type,
  color,
}: {
  title: string;
  data: any[];
  type: 'pie' | 'bar' | 'rating';
  color: string;
}): JSX.Element => {
  const colorMap: Record<string, string> = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    red: 'text-red-400',
    orange: 'text-orange-400',
  };

  return (
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h5 className={`text-sm font-semibold mb-3 ${colorMap[color]}`}>{title}</h5>
      <div className="space-y-2">
        {type === 'rating'
          ? data.slice(0, 3).map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-neutral-300 truncate">
                  {item.factor}
                </span>
                <span className="text-sm font-semibold text-white ml-2">
                  {item.score}
                </span>
              </div>
            ))
          : data.slice(0, 3).map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-neutral-300 truncate">
                  {item.type ||
                    item.method ||
                    item.challenge ||
                    item.channel ||
                    item.duration ||
                    item.frequency}
                </span>
                <span className="text-sm font-semibold text-white ml-2">
                  {item.percentage}%
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

/* eslint-disable react/no-array-index-key */
export const ResearchMethodology = (): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-8">
    <h3 className="text-2xl font-bold mb-6 text-center">Research Methodology</h3>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold text-blue-300 mb-4">
          Quantitative Research
        </h4>
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4">
          <p className="text-neutral-300 mb-3">
            Online questionnaires targeting job seekers and employers
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-green-400 font-semibold">✓ 25 Job Seekers</span>
              <p className="text-neutral-400">Students, WHV holders, PR</p>
            </div>
            <div>
              <span className="text-blue-400 font-semibold">✓ 17 Employers</span>
              <p className="text-neutral-400">Café managers, recruiters</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-purple-300 mb-4">
          Qualitative Research
        </h4>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4">
          <p className="text-neutral-300 mb-3">
            Usability testing with think-aloud protocol
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-yellow-400 font-semibold">✓ 3 Participants</span>
              <p className="text-neutral-400">Diverse backgrounds</p>
            </div>
            <div>
              <span className="text-orange-400 font-semibold">✓ 6 Tasks</span>
              <p className="text-neutral-400">Core user flows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ──────────── Expandable Research Details ──────────── */
export const ExpandableSection = ({
  title,
  children,
  isExpanded,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl overflow-hidden">
    <button
      type="button"
      onClick={onToggle}
      className="w-full p-6 text-left flex justify-between items-center hover:bg-neutral-700/30 transition-colors"
    >
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-blue-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-400" />
        )}
      </div>
    </button>
    <div className={`transition-all duration-300 ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <div className="p-6 pt-0">
        {children}
      </div>
    </div>
  </div>
);

export const ResearchFindings = ({
  seekerData,
  employerData,
}: {
  seekerData: any;
  employerData: any;
}): JSX.Element => (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold text-center">Key Research Findings</h3>

    {/* Job Seekers */}
    <div className="bg-neutral-800/50 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-blue-300 mb-6">
        Job Seekers Insights (n=25)
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataVisualization
          title="Visa Distribution"
          data={seekerData.visaTypes}
          type="pie"
          color="blue"
        />
        <DataVisualization
          title="Job Search Methods"
          data={seekerData.searchMethods}
          type="bar"
          color="green"
        />
        <DataVisualization
          title="Work Factor Importance"
          data={seekerData.workFactors}
          type="rating"
          color="purple"
        />
        <DataVisualization
          title="Main Challenges"
          data={seekerData.challenges}
          type="bar"
          color="red"
        />
      </div>
    </div>

    {/* Employers */}
    <div className="bg-neutral-800/50 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-orange-300 mb-6">
        Employer Insights (n=17)
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataVisualization
          title="Recruitment Channels"
          data={employerData.recruitmentChannels}
          type="bar"
          color="orange"
        />
        <DataVisualization
          title="Hiring Timeline"
          data={employerData.hiringTime}
          type="pie"
          color="blue"
        />
        <DataVisualization
          title="Hiring Factors"
          data={employerData.hiringFactors}
          type="rating"
          color="green"
        />
        <DataVisualization
          title="Urgent Shortages"
          data={employerData.urgentShortages}
          type="bar"
          color="red"
        />
      </div>
    </div>
  </div>
);

/* ──────────── Testing Components ──────────── */
export const TaskResult = ({
  task,
  completion,
  avgTime,
  difficulty,
}: {
  task: string;
  completion: number;
  avgTime: number;
  difficulty: number;
}): JSX.Element => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-neutral-300 flex-1">{task}</span>
    <div className="flex space-x-4">
      <span
        className={
          completion === 100 ? 'text-green-400' : 'text-yellow-400'
        }
      >
        {completion}%
      </span>
      <span className="text-neutral-400">{avgTime}s</span>
      <span className="text-blue-400">{difficulty}/5</span>
    </div>
  </div>
);

export const UsabilityTestingResults = (): JSX.Element => (
  <div className="space-y-8">
    {/* Evaluation Plan */}
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-purple-300">Evaluation Plan</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Target A */}
        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-4 text-blue-300">Target A - Students and WHV holders</h4>
          <div className="text-sm text-neutral-300 space-y-2">
            <p><span className="text-green-400 font-semibold">Primary users</span></p>
            <p><strong>Method:</strong> Think-Aloud usability test + SUS questionnaire</p>
            <p><strong>Sample:</strong> 3 – 5 students and WHV holders</p>
            <p><strong>Goal:</strong> Detect friction in search, apply, and map flows</p>
          </div>
        </div>
        
        {/* Target B */}
        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-4 text-orange-300">Target B - Employers</h4>
          <div className="text-sm text-neutral-300 space-y-2">
            <p><span className="text-orange-400 font-semibold">Secondary users</span></p>
            <p><strong>Method:</strong> Semi-structured interviews</p>
            <p><strong>Sample:</strong> 1 – 3 café / restaurant owners</p>
            <p><strong>Goal:</strong> Validate posting flow & pain points</p>
          </div>
        </div>
      </div>
    </div>

    {/* Initial Testing Results */}
    <div className="text-center">
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8 max-w-md mx-auto">
        <div className="text-6xl font-bold text-green-400 mb-2">79.2</div>
        <div className="text-xl text-green-300">Average SUS Score</div>
        <div className="text-neutral-300">Good Usability (Initial Testing)</div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-neutral-800/50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Testing Methodology</h3>
        <ul className="space-y-2 text-neutral-300">
          <li><strong>Participants:</strong> 3 users (diverse backgrounds)</li>
          <li><strong>Method:</strong> Think-aloud protocol + task scenarios</li>
          <li><strong>Tasks:</strong> 6 core user flows</li>
          <li><strong>Evaluation:</strong> SUS questionnaire + completion rates</li>
          <li><strong>Duration:</strong> 15-20 minutes per session</li>
        </ul>
      </div>
      <div className="bg-neutral-800/50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Task Performance Overview</h3>
        <div className="space-y-3">
          <div className="text-sm text-neutral-300">
            <div className="flex justify-between mb-2">
              <span>Average Completion:</span>
              <span className="text-green-400 font-semibold">89%</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Average Time:</span>
              <span className="text-blue-400 font-semibold">25.3s</span>
            </div>
            <div className="flex justify-between">
              <span>Average Difficulty:</span>
              <span className="text-purple-400 font-semibold">3.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SUSScoreAnalysis = ({
  susScores,
}: {
  susScores: { participant: string; score: number; profile: string }[];
}): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <h3 className="text-xl font-bold mb-6">SUS Score Analysis</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {susScores.map((s) => (
        <div
          key={s.participant}
          className="text-center bg-neutral-900/50 rounded-lg p-4"
        >
          <h4 className="font-semibold text-white">{s.participant}</h4>
          <div
            className={`text-3xl font-bold mb-2 ${
              s.score >= 80
                ? 'text-green-400'
                : s.score >= 70
                ? 'text-yellow-400'
                : 'text-red-400'
            }`}
          >
            {s.score}
          </div>
          <p className="text-sm text-neutral-400">{s.profile}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4">
      <p className="text-neutral-300 text-center">
        <strong>Score Interpretation:</strong> 80+ Excellent · 70-79 Good ·
        60-69 Okay · Below 60 Poor
      </p>
    </div>
  </div>
);

export const TestingInsights = ({
  keyIssues,
}: {
  keyIssues: string[];
}): JSX.Element => (
  <div className="space-y-8">
    {/* Key Testing Insights */}
    <div className="bg-neutral-800/50 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Key Testing Insights</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-green-300 mb-4">
            Successful Elements
          </h4>
          <ul className="space-y-2 text-neutral-300">
            <li>• Job search and application flow intuitive</li>
            <li>• Profile and badge system easily discoverable</li>
            <li>• Mode switching functionality clear</li>
            <li>• Visual hierarchy supports task completion</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-red-300 mb-4">
            Areas for Improvement
          </h4>
          <ul className="space-y-2 text-neutral-300">
            {keyIssues.map((issue) => (
              <li key={issue}>• {issue}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Employer Interview Feedback */}
    <div className="bg-neutral-800/50 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6 text-orange-300">Employer Interview Feedback</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-blue-300 mb-4">
            Feature Requests
          </h4>
          <ul className="space-y-2 text-neutral-300">
            <li>• Direct messaging and communication with candidates</li>
            <li>• Application count and view count for job posts</li>
            <li>• Candidate resume viewing functionality</li>
            <li>• Scout feature for urgent hiring needs</li>
            <li>• Reviews and ratings for employers</li>
            <li>• Multiple job category selection</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-red-300 mb-4">
            Technical Issues
          </h4>
          <ul className="space-y-2 text-neutral-300">
            <li>• App not switching from Worker mode to Employer mode</li>
            <li>• Unable to see candidates' available working hours</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">
              Key Insights
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>• Employers need better candidate communication tools</li>
              <li>• Analytics for job post performance are essential</li>
              <li>• Two-way rating system builds trust</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ──────────── Technical Components ──────────── */
export const TechChoice = ({
  technology,
  reasoning,
}: {
  technology: string;
  reasoning: string[];
}): JSX.Element => (
  <div className="bg-neutral-900/50 rounded-lg p-4">
    <h4 className="text-lg font-semibold text-blue-300 mb-3">{technology}</h4>
    <ul className="space-y-1 text-sm text-neutral-300">
      {reasoning.map((r) => (
        <li key={r}>• {r}</li>
      ))}
    </ul>
  </div>
);

export const TechnologyChoices = (): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-6">
    <h3 className="text-xl font-bold mb-6">Technology Selection Rationale</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <TechChoice
        technology="React + TypeScript"
        reasoning={[
          'Component reusability for consistent UI',
          'Type safety reduces runtime errors',
          'Strong ecosystem and community support',
          'Easy state management for complex interactions',
          'Excellent developer experience and tooling',
        ]}
      />
      <TechChoice
        technology="Tailwind CSS"
        reasoning={[
          'Rapid prototyping and iteration',
          'Consistent design system implementation',
          'Smaller bundle size than component libraries',
          'Mobile-first responsive design approach',
          'Easy customization and maintenance',
        ]}
      />
    </div>
  </div>
);

/* ──────────── Tech Badge with Logo ──────────── */
export const TechBadge = ({ name, src }: { name: string; src: string }): JSX.Element => (
  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-3 text-center flex flex-col items-center hover:border-blue-400/50 transition-colors">
    <img
      src={src}
      alt={`${name} logo`}
      className="w-8 h-8 mb-2 object-contain"
      draggable={false}
    />
    <div className="text-sm font-medium text-white">{name}</div>
  </div>
);

export const KeyFeatures = (): JSX.Element => (
  <div className="bg-neutral-900/50 rounded-xl p-8">
    <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Real-time Matching */}
      <FeatureItem
        icon={<TrendingUp className="w-5 h-5" />}
        title="Real-time Matching"
        description="Instant alerts for urgent shifts with push notification system."
      />
      {/* Dual-Mode Interface */}
      <FeatureItem
        icon={<Users className="w-5 h-5" />}
        title="Dual-Mode Interface"
        description="Seamless switching between job seeker and employer perspectives."
      />
      {/* Trust & Safety */}
      <FeatureItem
        icon={<Shield className="w-5 h-5" />}
        title="Trust & Safety"
        description="Identity verification, background checks, and review system."
      />
    </div>

    {/* バッジシステムの詳細セクション */}
    <div className="mt-12 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-xl p-8">
      <div className="flex items-center justify-center mb-6">
        <Star className="w-8 h-8 text-amber-400 mr-3" />
        <h4 className="text-2xl font-bold text-amber-300">Verified-Skill Badge System</h4>
      </div>
      
      <p className="text-neutral-200 text-center mb-8 max-w-3xl mx-auto">
        Workers earn Bronze, Silver, and Gold badges through verified experience and employer ratings. 
        This system provides employers with instant proof of candidate qualifications, reducing screening time 
        and helping job seekers showcase their proven skills across different hospitality roles.
      </p>

      {/* バッジ進行システムの説明 */}
      <div className="mb-8 text-center">
        <h5 className="text-lg font-semibold text-blue-300 mb-4">Badge Progression System</h5>
        <div className="flex justify-center items-center space-x-8 text-sm text-neutral-300">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Bronze: 1+ shifts</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            <span>Silver: 3+ shifts</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span>Gold: 5+ shifts</span>
          </div>
        </div>
      </div>

      {/* 9つのバッジ表示（3職種 × 3ランク） */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
        {/* Barista Badges */}
        <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="barista" count={1} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-orange-300 mb-1">Bronze Barista</h6>
          <p className="text-xs text-neutral-400">Basic coffee skills</p>
        </div>

        <div className="bg-gradient-to-br from-slate-600/20 to-slate-700/20 border border-slate-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="barista" count={3} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-slate-300 mb-1">Silver Barista</h6>
          <p className="text-xs text-neutral-400">Advanced techniques</p>
        </div>

        <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="barista" count={5} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-amber-300 mb-1">Gold Barista</h6>
          <p className="text-xs text-neutral-400">Expert latte art</p>
        </div>

        {/* Cook Badges */}
        <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="cook" count={1} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-orange-300 mb-1">Bronze Cook</h6>
          <p className="text-xs text-neutral-400">Basic prep work</p>
        </div>

        <div className="bg-gradient-to-br from-slate-600/20 to-slate-700/20 border border-slate-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="cook" count={3} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-slate-300 mb-1">Silver Cook</h6>
          <p className="text-xs text-neutral-400">Line cooking skills</p>
        </div>

        <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="cook" count={5} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-amber-300 mb-1">Gold Cook</h6>
          <p className="text-xs text-neutral-400">Full menu mastery</p>
        </div>

        {/* Waiter Badges */}
        <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="waiter" count={1} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-orange-300 mb-1">Bronze Waiter</h6>
          <p className="text-xs text-neutral-400">Basic service</p>
        </div>

        <div className="bg-gradient-to-br from-slate-600/20 to-slate-700/20 border border-slate-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="waiter" count={3} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-slate-300 mb-1">Silver Waiter</h6>
          <p className="text-xs text-neutral-400">Efficient service</p>
        </div>

        <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-500/30 rounded-xl p-4 text-center">
          <div className="mb-3 flex justify-center">
            <BadgeIcon badge="waiter" count={5} size={48} variant="gradient" />
          </div>
          <h6 className="text-sm font-bold text-amber-300 mb-1">Gold Waiter</h6>
          <p className="text-xs text-neutral-400">Premium service</p>
        </div>
      </div>

      {/* 実績証明のメリット */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h5 className="text-lg font-bold text-blue-300 mb-4">For Job Seekers</h5>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>• Stand out in competitive job market with verified credentials</li>
            <li>• Skip lengthy interviews with proven skill verification</li>
            <li>• Build professional reputation through employer ratings</li>
            <li>• Access higher-paying opportunities with advanced badges</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h5 className="text-lg font-bold text-green-300 mb-4">For Employers</h5>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>• Instantly identify qualified candidates for urgent shifts</li>
            <li>• Reduce screening time from weeks to minutes</li>
            <li>• Minimize training costs with pre-verified skills</li>
            <li>• Lower hiring risk through transparent work history</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Geolocation Search の詳細セクション */}
    <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8">
      <div className="flex items-center justify-center mb-6">
        <MapPin className="w-8 h-8 text-blue-400 mr-3" />
        <h4 className="text-2xl font-bold text-blue-300">Geolocation Search</h4>
      </div>
      
      <p className="text-neutral-200 text-center mb-8 max-w-3xl mx-auto">
        Find nearby job opportunities using real-time GPS location and Google Maps integration. 
        Workers can discover shifts within walking distance, while employers can target local talent pools effectively.
      </p>

      {/* インタラクティブマップ風デモ */}
      <div className="bg-neutral-800/50 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-semibold text-cyan-300">Melbourne CBD - Available Jobs</h5>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/50">
              <Filter className="w-3 h-3 inline mr-1" />
              Filters
            </button>
            <button className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm border border-green-500/50">
              <Navigation className="w-3 h-3 inline mr-1" />
              My Location
            </button>
          </div>
        </div>

        {/* 仮想マップエリア */}
        <div className="relative bg-gradient-to-br from-blue-900/40 to-green-900/40 rounded-lg h-80 overflow-hidden border border-neutral-600">
          {/* マップ背景グリッド */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-neutral-500/30"></div>
              ))}
            </div>
          </div>

          {/* 地名・エリア表示 */}
          <div className="absolute top-4 left-4 bg-neutral-800/80 rounded px-2 py-1 text-xs text-neutral-300">
            Melbourne CBD
          </div>
          <div className="absolute top-16 right-6 bg-neutral-800/80 rounded px-2 py-1 text-xs text-neutral-300">
            Southbank
          </div>
          <div className="absolute bottom-8 left-8 bg-neutral-800/80 rounded px-2 py-1 text-xs text-neutral-300">
            South Yarra
          </div>

          {/* ユーザー位置 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-semibold whitespace-nowrap">
                You are here
              </div>
            </div>
          </div>

          {/* 求人マーカー */}
          {/* カフェ求人 1 */}
          <div className="absolute top-1/3 left-1/3 group cursor-pointer">
            <div className="w-6 h-6 bg-amber-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900 rounded-lg p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-amber-500/50">
              <div className="font-semibold">Blue Bottle Coffee</div>
              <div className="text-amber-300">Barista • $28/hr</div>
              <div className="text-neutral-400">0.3km • Now hiring</div>
            </div>
          </div>

          {/* レストラン求人 */}
          <div className="absolute top-2/3 right-1/3 group cursor-pointer">
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900 rounded-lg p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-green-500/50">
              <div className="font-semibold">Chin Chin Restaurant</div>
              <div className="text-green-300">Waiter • $26/hr</div>
              <div className="text-neutral-400">0.7km • Urgent</div>
            </div>
          </div>

          {/* バー求人 */}
          <div className="absolute bottom-1/4 left-2/3 group cursor-pointer">
            <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900 rounded-lg p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-purple-500/50">
              <div className="font-semibold">Rooftop Bar</div>
              <div className="text-purple-300">Bartender • $30/hr</div>
              <div className="text-neutral-400">1.2km • Evening shift</div>
            </div>
          </div>

          {/* 距離サークル */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-400/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/20 rounded-full"></div>
        </div>

        {/* マップ下部の求人リスト */}
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-amber-300 text-sm font-semibold">Blue Bottle Coffee</span>
            </div>
            <div className="text-xs text-neutral-300">
              <div>Barista • $28/hr</div>
              <div className="flex items-center space-x-3 mt-1">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />0.3km</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />3min walk</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-300 text-sm font-semibold">Chin Chin</span>
            </div>
            <div className="text-xs text-neutral-300">
              <div>Waiter • $26/hr</div>
              <div className="flex items-center space-x-3 mt-1">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />0.7km</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />8min walk</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-purple-300 text-sm font-semibold">Rooftop Bar</span>
            </div>
            <div className="text-xs text-neutral-300">
              <div>Bartender • $30/hr</div>
              <div className="flex items-center space-x-3 mt-1">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />1.2km</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />15min walk</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 機能の説明 */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h5 className="text-lg font-bold text-blue-300 mb-4">Current Features</h5>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>• Real-time GPS location detection with user consent</li>
            <li>• Interactive Google Maps integration for job discovery</li>
            <li>• User location marker with "Locate Me" functionality</li>
            <li>• Visual job markers on map with click-to-apply</li>
            <li>• Date-based job filtering with tab navigation</li>
            <li>• Responsive map interface optimized for mobile</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 rounded-xl p-6">
          <h5 className="text-lg font-bold text-cyan-300 mb-4">Technical Implementation</h5>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>• Google Maps API integration with @react-google-maps/api</li>
            <li>• Geolocation API for user positioning</li>
            <li>• Custom job pin markers with job details</li>
            <li>• Real-time job data fetching from backend API</li>
            <li>• Map state management and error handling</li>
            <li>• Fallback to mock data when backend unavailable</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Smart Filtering の詳細セクション */}
    <div className="mt-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8">
      <div className="flex items-center justify-center mb-6">
        <Target className="w-8 h-8 text-green-400 mr-3" />
        <h4 className="text-2xl font-bold text-green-300">Smart Filtering & Search</h4>
      </div>
      
      <p className="text-neutral-200 text-center mb-8 max-w-3xl mx-auto">
        Advanced search and filtering capabilities that help job seekers quickly find relevant opportunities 
        and allow employers to target specific skill sets. Multi-parameter filtering with real-time results.
      </p>

      {/* フィルタリング機能のデモ */}
      <div className="bg-neutral-800/50 rounded-xl p-6 mb-8">
        <h5 className="text-lg font-semibold text-green-300 mb-4">Interactive Search & Filter Interface</h5>
        
        {/* 検索バーのデモ */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or description..."
              className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400"
              defaultValue="barista"
            />
          </div>
        </div>

        {/* バッジフィルターのデモ */}
        <div className="mb-6">
          <h6 className="text-sm font-semibold text-neutral-300 mb-3">Filter by Required Skills</h6>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm flex items-center space-x-1">
              <BadgeIcon badge="barista" count={3} size={16} variant="gradient" />
              <span>Barista</span>
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-full text-sm flex items-center space-x-1 border border-neutral-500">
              <BadgeIcon badge="cook" count={0} size={16} variant="gradient" />
              <span>Cook</span>
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-full text-sm flex items-center space-x-1 border border-neutral-500">
              <BadgeIcon badge="waiter" count={0} size={16} variant="gradient" />
              <span>Waiter</span>
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-full text-sm border border-neutral-500">
              + More
            </button>
          </div>
        </div>

        {/* 並び替えオプション */}
        <div className="mb-6">
          <h6 className="text-sm font-semibold text-neutral-300 mb-3">Sort Results</h6>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center space-x-1">
              <SortAsc className="w-3 h-3" />
              <span>Highest Pay</span>
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-lg text-sm border border-neutral-500">
              Lowest Pay
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-lg text-sm border border-neutral-500">
              Longest Duration
            </button>
            <button className="px-3 py-1 bg-neutral-600 text-neutral-300 rounded-lg text-sm border border-neutral-500">
              Shortest Duration
            </button>
          </div>
        </div>

        {/* 検索結果のデモ */}
        <div className="bg-neutral-700/50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h6 className="text-sm font-semibold text-green-300">Search Results</h6>
            <span className="text-xs text-neutral-400">3 jobs found</span>
          </div>
          
          <div className="space-y-3">
            {/* 求人結果1 */}
            <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h6 className="text-sm font-semibold text-white">Senior Barista</h6>
                  <p className="text-xs text-neutral-400">Blue Bottle Coffee • Melbourne CBD</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-400">$32/hr</div>
                  <div className="flex items-center space-x-1">
                    <BadgeIcon badge="barista" count={5} size={16} variant="gradient" />
                    <span className="text-xs text-amber-300">Gold Required</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-300">Experience in specialty coffee required. Latte art skills essential.</p>
            </div>

            {/* 求人結果2 */}
            <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h6 className="text-sm font-semibold text-white">Barista - Weekend Shifts</h6>
                  <p className="text-xs text-neutral-400">Local Café • South Yarra</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-400">$28/hr</div>
                  <div className="flex items-center space-x-1">
                    <BadgeIcon badge="barista" count={1} size={16} variant="gradient" />
                    <span className="text-xs text-orange-300">Bronze OK</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-300">Perfect for students. Training provided for coffee basics.</p>
            </div>

            {/* 求人結果3 */}
            <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h6 className="text-sm font-semibold text-white">Barista - Morning Rush</h6>
                  <p className="text-xs text-neutral-400">Corporate Café • Southbank</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-400">$30/hr</div>
                  <div className="flex items-center space-x-1">
                    <BadgeIcon badge="barista" count={3} size={16} variant="gradient" />
                    <span className="text-xs text-slate-300">Silver Required</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-300">Fast-paced environment. Experience with commercial machines preferred.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ──────────── Persona & Prototype Tabs ──────────── */
const SectionBlock = ({
  title,
  list,
  color,
}: {
  title: string;
  list: string[];
  color: 'green' | 'red' | 'blue';
}): JSX.Element => (
  <div className="bg-neutral-900/50 rounded-lg p-4">
    <h4
      className={`font-semibold mb-3 ${
        color === 'green'
          ? 'text-green-300'
          : color === 'red'
          ? 'text-red-300'
          : 'text-blue-300'
      }`}
    >
      {title}
    </h4>
    <ul className="text-sm text-neutral-300 space-y-2">
      {list.map((item) => (
        <li key={item} className="flex items-start">
          <div
            className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
              color === 'green'
                ? 'bg-green-400'
                : color === 'red'
                ? 'bg-red-400'
                : 'bg-blue-400'
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const EnhancedPersonaCard = ({
  name,
  role,
  age,
  avatar,
  visa,
  business,
  about,
  goals,
  frustrations,
  journey,
  storyboard,
  storyboardCaptions,
}: PersonaType): JSX.Element => (
  <div className="bg-neutral-800/50 rounded-xl p-8">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Profile */}
      <div className="text-center">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          draggable={false}
        />
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-blue-400 font-semibold">{role}</p>
        <p className="text-neutral-400">Age {age}</p>
        {visa && <p className="text-purple-400 text-sm mt-1">{visa}</p>}
        {business && <p className="text-green-400 text-sm mt-1">{business}</p>}

        <div className="mt-4 p-4 bg-neutral-900/50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-300 mb-2">About</h4>
          <p className="text-sm text-neutral-300">{about}</p>
        </div>
      </div>

      {/* Goals & Frustrations */}
      <div className="space-y-6">
        <SectionBlock title="Goals" list={goals} color="green" />
        <SectionBlock
          title="Frustrations"
          list={frustrations}
          color="red"
        />
      </div>

      {/* Journey */}
      <div>
        <h4 className="text-lg font-semibold text-purple-300 mb-4">
          User Journey
        </h4>
        <div className="space-y-3">
          {Object.entries(journey).map(([phase, desc]) => (
            <div key={phase} className="bg-neutral-900/50 rounded-lg p-3">
              <h5 className="text-sm font-semibold text-blue-300 mb-1 capitalize">
                {phase}
              </h5>
              <p className="text-xs text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ストーリーボードセクションを追加 */}
    {storyboard && (
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">User Journey Storyboard</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {storyboard.map((image, index) => (
            <div key={index} className="space-y-2">
              <img
                src={image}
                alt={`${name} storyboard ${index + 1}`}
                className="w-full h-48 object-contain rounded-lg border border-neutral-600"
                draggable={false}
              />
              {storyboardCaptions && (
                <p className="text-xs text-neutral-400 text-center">
                  {index + 1}. {storyboardCaptions[index]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const TabbedPersonas = ({
  personas,
}: {
  personas: PersonaType[];
}): JSX.Element => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);

  const changeTab = async (i: number): Promise<void> => {
    if (i === active) return;
    setFade(true);
    await new Promise((r) => setTimeout(r, 150));
    setActive(i);
    await new Promise((r) => setTimeout(r, 150));
    setFade(false);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          {personas.map((p, i) => (
            <button
              key={p.name}
              onClick={() => changeTab(i)}
              className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 relative border-2 ${
                active === i
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/50 shadow-lg'
                  : 'text-neutral-300 bg-neutral-700 border-neutral-600 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-300 ${
          fade ? 'filter blur-md opacity-50' : 'filter blur-0 opacity-100'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <EnhancedPersonaCard {...personas[active]} />
        </div>
      </div>
    </div>
  );
};

/* ──────────── Prototype Carousel ──────────── */
const AutoCarousel = ({ imgs }: { imgs: string[] }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const idle = useRef(true);
  const timer = useRef<number>();

  const centerTo = (i: number, smooth = true): void => {
    const container = ref.current;
    const slide = container?.children[i] as HTMLElement;
    if (!container || !slide) return;
    const offset =
      slide.offsetLeft -
      container.offsetLeft -
      (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left: offset, behavior: smooth ? 'smooth' : 'auto' });
  };

  const markActive = (): void => {
    idle.current = false;
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      idle.current = true;
    }, 4000);
  };

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    ['pointerdown', 'wheel', 'touchstart'].forEach((e) =>
      container.addEventListener(e, markActive, { passive: true }),
    );
    return () =>
      ['pointerdown', 'wheel', 'touchstart'].forEach((e) =>
        container.removeEventListener(e, markActive as any),
      );
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!idle.current) return;
      setIdx((p) => {
        const n = (p + 1) % imgs.length;
        centerTo(n);
        return n;
      });
    }, 3000);
    return () => window.clearInterval(id);
  }, [imgs.length]);

  return (
    <div className="max-w-5xl mx-auto">
      <div
        ref={ref}
        className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scroll-smooth"
      >
        {imgs.map((src) => (
          <img
            key={src}
            src={src}
            alt="prototype"
            className="snap-center w-[60%] sm:w-[45%] md:w-[35%] lg:w-[28%] flex-shrink-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            draggable={false}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              centerTo(i);
              markActive();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === idx
                ? 'bg-blue-500 scale-125'
                : 'bg-neutral-500 hover:bg-neutral-400'
            }`}
            aria-label={`slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const TabbedPrototypes = ({
  prototypes,
}: {
  prototypes: PrototypeType[];
}): JSX.Element => {
  const [active, setActive] = useState(1);
  const [fade, setFade] = useState(false);

  const changeTab = async (i: number): Promise<void> => {
    if (i === active) return;
    setFade(true);
    await new Promise((r) => setTimeout(r, 150));
    setActive(i);
    await new Promise((r) => setTimeout(r, 150));
    setFade(false);
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-1 bg-neutral-800/50 rounded-lg p-1">
          {prototypes.map((p, i) => (
            <button
              key={p.id}
              onClick={() => changeTab(i)}
              className={`px-4 py-3 rounded-md transition-all duration-300 relative text-sm md:text-base ${
                active === i
                  ? 'text-white bg-blue-600'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          fade ? 'filter blur-md opacity-50' : 'filter blur-0 opacity-100'
        }`}
      >
        <AutoCarousel imgs={prototypes[active].images} />
      </div>
    </div>
  );
};

export const MobileScreenShowcase = (): JSX.Element => {
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);

  const screens = [
    { 
      id: 'home', 
      title: 'Home', 
      image: '/FinalDesign/Home.png',
      route: '/',
      description: 'Main dashboard for job seekers'
    },
    { 
      id: 'jobs', 
      title: 'Job List', 
      image: '/FinalDesign/Home.png', // Job Listの画像がないのでHomeを使用
      route: '/jobs',
      description: 'Browse available job opportunities'
    },
    { 
      id: 'map', 
      title: 'Map', 
      image: '/FinalDesign/Map.png',
      route: '/map',
      description: 'Location-based job discovery'
    },
    { 
      id: 'profile', 
      title: 'Profile', 
      image: '/FinalDesign/Profile.png',
      route: '/profile',
      description: 'Worker profile with badges and skills'
    },
    { 
      id: 'employer', 
      title: 'Employer Home', 
      image: '/FinalDesign/EmployerHome.png',
      route: '/employer',
      description: 'Employer dashboard for job management'
    },
    { 
      id: 'post', 
      title: 'Post Job', 
      image: '/FinalDesign/PostJob.png',
      route: '/post',
      description: 'Create and post new job opportunities'
    },
    { 
      id: 'hire', 
      title: 'Hire', 
      image: '/FinalDesign/HirePage.png',
      route: '/hire',
      description: 'Review and hire candidates'
    }
  ];

  const openModal = (screenId: string): void => {
    setSelectedScreen(screenId);
  };

  const closeModal = (): void => {
    setSelectedScreen(null);
  };

  const selectedScreenData = screens.find(screen => screen.id === selectedScreen);

  return (
    <div className="bg-neutral-800/50 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Mobile App Screens</h3>
      <p className="text-center text-neutral-400 mb-8">Click on any screen to view details and access the live app</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {screens.map((screen) => (
          <div key={screen.id} className="text-center">
            <button
              onClick={() => openModal(screen.id)}
              className="w-full group focus:outline-none"
            >
              <img
                src={screen.image}
                alt={`${screen.title} Page`}
                className="w-full h-48 object-contain rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-3 group-hover:scale-105 cursor-pointer border-2 border-transparent group-hover:border-blue-400/50 bg-white/5"
                draggable={false}
              />
              <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                {screen.title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">{screen.description}</p>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedScreen && selectedScreenData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-700">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedScreenData.title} Screen</h3>
                <p className="text-neutral-400 text-sm">{selectedScreenData.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-neutral-400 hover:text-white transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-center space-y-6">
              {/* Screenshot */}
              <div className="flex justify-center">
                <img
                  src={selectedScreenData.image}
                  alt={`${selectedScreenData.title} Page`}
                  className="rounded-xl shadow-lg max-h-96 object-contain bg-white/5"
                  draggable={false}
                />
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={selectedScreenData.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Open Live App
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-neutral-400 text-sm mt-2">
                  Click to experience the actual DashShift application
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ThesisAbstract = (): JSX.Element => (
  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-center text-blue-300 mb-6">Abstract</h2>
    <div className="text-neutral-200 leading-relaxed space-y-4">
      <p>
        This research developed DashShift, a real-time job matching platform with verified skill badges, to address the disconnect between casual hospitality job seekers on student and working holiday visas and employers in Australia's competitive market. Through mixed-methods research including surveys with 42 participants and usability testing, the platform achieved a SUS score of 79.2 with 89% task completion rate. Key features include geolocation search, verified badges, and dual-mode interface design. The study demonstrates that thoughtful UX design combined with real-time matching technology can bridge the gap between casual workers and employers, suggesting that structured digital platforms with verified credentials may significantly improve Australia's casual employment ecosystem.
      </p>
    </div>
    
  </div>
);

