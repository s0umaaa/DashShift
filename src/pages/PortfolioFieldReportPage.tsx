// src/pages/PortfolioFieldReportPage.tsx
import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Users,
  Clock,
  Target,
  Code,
  Palette,
  TestTube,
  BarChart3,
  MapPin,
  Star,
  TrendingUp,
  Briefcase,
  Brain,
  Smartphone,
  Globe,
  DollarSign,
  Shield,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TimelineBars from '@/components/TimelineBars';
import BadgeIcon from '@/components/BadgeIcon';
import {
  Heading,
  Skew,
  StatCard,
  RoleCard,
  ToolCategory,
  ProcessPhase,
  FeatureItem,
  ValuePropCard,
  FutureFeature,
  TabbedPersonas,
  TabbedPrototypes,
  ResearchMethodology,
  ResearchFindings,
  UsabilityTestingResults,
  SUSScoreAnalysis,
  TestingInsights,
  TechnologyChoices,
  KeyFeatures,
  MobileScreenShowcase,
  ExpandableSection,
  TechBadge,
  ThesisAbstract,
} from '@/components/Portfolio/PortfolioComponents';
import {
  personas,
  prototypes,
  seekerData,
  employerData,
  usabilityData,
} from '@/data/portfolioData';

/**
 * DashShift – Comprehensive Visual Portfolio
 * SOMA HAYASAKA · Master of IT (HCI) · Jun 2025
 * ------------------------------------------------
 * • Hero with blurred café backdrop
 * • Detailed sections covering research, design, development
 * • Interactive expandable sections for research details
 * • Auto-advancing carousels (Lo-Fi / Mid-Fi / Hi-Fi) pause on user interaction
 */

export default function PortfolioFieldReportPage(): JSX.Element {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string): void => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-neutral-900 text-white">
      {/* ───── Hero ───── */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/baristabackground.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm brightness-[.55] select-none"
          draggable={false}
        />
        <div className="relative z-10 text-center px-4 space-y-6">
          <img
            src="/DashShiftIcon.png"
            alt="DashShift logo"
            className="mx-auto w-24 h-24 rounded-full"
            draggable={false}
          />

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              DashShift — Real-Time Casual Job Matching
            </h1>
          </div>

          {/* Author & Institution Info */}
          <div className="space-y-3">
            <div className="text-lg text-neutral-200">
              <p>
                <strong>Soma Hayasaka</strong>
              </p>
              <p>June 2025</p>
            </div>

            <div className="text-sm text-neutral-300 space-y-1">
              <p>University of Melbourne</p>
              <p>Faculty of Engineering and Information Technology School of Computing and Information Systems</p>
            </div>

            <div className="text-sm text-neutral-400 space-y-1">
              <p>Submitted in partial fulfilment of the degree of Master of Information Technology (Human-Computer Interaction)</p>
            </div>

            <div className="text-sm text-neutral-400">
              <p>
                <strong>Supervised by</strong> Arzoo Atiq
              </p>
            </div>
          </div>

          <Button
            asChild
            className="mx-auto mt-4 text-lg px-6 py-4 bg-primary"
          >
            <a
              href="https://youtu.be/hlIQ7lBknPg"
              target="_blank"
              rel="noreferrer"
            >
              Watch Demo Video <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </section>

      {/* ───── Abstract ───── */}
      <section className="bg-neutral-900 py-16 px-4">
        <ThesisAbstract />
      </section>

      {/* ───── Project Overview ───── */}
      <Skew id="overview" bg="bg-neutral-800">
        <Heading t="Project Overview" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <p className="text-lg text-neutral-200 leading-relaxed">
              DashShift bridges the gap between casual job seekers (especially
              international students and working-holiday holders) and
              hospitality employers in Australia through a real-time
              job-matching platform with verified-skill badges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <StatCard
              icon={<Users className="w-8 h-8" />}
              number="42"
              label="Research Participants"
              description="25 seekers · 17 employers"
            />
            <StatCard
              icon={<Clock className="w-8 h-8" />}
              number="12"
              label="Week Timeline"
              description="Research → Prototype"
            />
            <StatCard
              icon={<Star className="w-8 h-8" />}
              number="79.2"
              label="SUS Score"
              description="Good usability"
            />
          </div>
        </div>
      </Skew>

      {/* ───── My Role & Tools ───── */}
      <Skew id="role" bg="bg-neutral-900">
        <Heading t="My Role & Tools" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <RoleCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Research"
              subtitle="Surveys & interviews"
            />
            <RoleCard
              icon={<Users className="w-6 h-6" />}
              title="Personas"
              subtitle="Journey mapping"
            />
            <RoleCard
              icon={<Target className="w-6 h-6" />}
              title="UX Design"
              subtitle="Flows & wireframes"
            />
            <RoleCard
              icon={<Palette className="w-6 h-6" />}
              title="UI Design"
              subtitle="Visual prototyping"
            />
            <RoleCard
              icon={<Code className="w-6 h-6" />}
              title="Development"
              subtitle="Frontend & Backend"
            />
            <RoleCard
              icon={<TestTube className="w-6 h-6" />}
              title="Testing"
              subtitle="Usability eval"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ToolCategory
              title="Design Tools"
              tools={['Canva', 'GoodNotes', 'Figma']}
              color="from-pink-500 to-rose-500"
            />
            <ToolCategory
              title="Development"
              tools={['React', 'TypeScript', 'Node.js', 'Tailwind CSS']}
              color="from-blue-500 to-cyan-500"
            />
          </div>
        </div>
      </Skew>

      {/* ───── Timeline ───── */}
      <Skew id="timeline" bg="bg-neutral-800">
        <Heading t="Project Timeline" />
        <div className="max-w-4xl mx-auto">
          <TimelineBars />
        </div>
      </Skew>

      {/* ───── Research Phase ───── */}
      <Skew id="research" bg="bg-neutral-900">
        <Heading t="Research Phase" />
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="grid md:grid-cols-3 gap-6">
            <FindingCard
              percentage="60%"
              label="High competition"
              description="Market saturated for seekers"
            />
            <FindingCard
              percentage="48%"
              label="Need urgent shifts"
              description="Seekers value immediacy"
            />
            <FindingCard
              percentage="Weekly"
              label="Staff shortages"
              description="Employers need fast hires"
            />
          </div>

          {/* Interactive Research Details */}
          <div className="space-y-6">
            <ResearchMethodology />

            {/* Job Seekers Analysis */}
            <ExpandableSection
              title="Job Seekers Analysis (25 participants)"
              isExpanded={expandedSection === 'seekers'}
              onToggle={() => toggleSection('seekers')}
            >
              <JobSeekersAnalysis />
            </ExpandableSection>

            {/* Employers Analysis */}
            <ExpandableSection
              title="Employers Analysis (17 participants)"
              isExpanded={expandedSection === 'employers'}
              onToggle={() => toggleSection('employers')}
            >
              <EmployersAnalysis />
            </ExpandableSection>

            {/* Key Research Findings */}
            <ExpandableSection
              title="Key Research Findings"
              isExpanded={expandedSection === 'findings'}
              onToggle={() => toggleSection('findings')}
            >
              <KeyFindings />
            </ExpandableSection>
          </div>
        </div>
      </Skew>
      {/* ───── HMW Question & Feature Prioritization ───── */}
<Skew id="hmw-features" bg="bg-neutral-800">
  <Heading t="How Might We & Feature Prioritization" />
  <div className="max-w-6xl mx-auto space-y-12">
    
    {/* HMW Question */}
    <div className="text-center">
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-blue-300">
          How Might We Question
        </h3>
        <p className="text-2xl italic text-neutral-200">
          &quot;How might we enable both employers and short-term job seekers to easily find and offer last-minute shifts, ensuring that businesses can handle unpredictable surges in demand while workers can quickly see transparent pay and role details?&quot;
        </p>
      </div>
    </div>

    {/* Feature Prioritization */}
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center">Feature Prioritization Based on Research Findings</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Priority 1: Badge System */}
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              Priority #1
            </div>
            <h4 className="text-xl font-bold text-green-300">Badge System</h4>
          </div>
          <img
            src="/BadgeSystemFeature.png"
            alt="Badge System Feature"
            className="w-full rounded-lg mb-4"
            draggable={false}
          />
          <p className="text-neutral-300 text-sm">
            Addresses employers' need for "ready-to-work experience" and reduces screening time by providing verified skill verification, directly tackling the "lack of required skills" challenge faced by 48% of job seekers.
          </p>
        </div>

        {/* Priority 2: Map Matching */}
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              Priority #2
            </div>
            <h4 className="text-xl font-bold text-blue-300">Map Matching Feature</h4>
          </div>
          <img
            src="/MapSystemFeature.png"
            alt="Map System Feature"
            className="w-full rounded-lg mb-4"
            draggable={false}
          />
          <p className="text-neutral-300 text-sm">
            Enables real-time geographic job discovery for urgent staffing needs, supporting both workers' preference for proximity and employers' requirement for immediate availability during weekly/monthly shortages.
          </p>
        </div>

        {/* Priority 3: Language & Experience Filters */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              Priority #3
            </div>
            <h4 className="text-xl font-bold text-purple-300">Language & Experience Filters</h4>
          </div>
          <div className="bg-neutral-700/50 rounded-lg p-4 mb-4 flex items-center justify-center h-32">
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-neutral-300 text-sm">Filter Interface</span>
            </div>
          </div>
          <p className="text-neutral-300 text-sm">
            Helps overcome language barriers affecting 24% of job seekers while allowing employers to specify communication requirements, improving job-candidate matching accuracy and reducing misaligned applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</Skew>

      {/* ───── Personas (Tabbed) ───── */}
      <Skew id="personas" bg="bg-neutral-800">
        <Heading t="User Personas" />
        <div className="max-w-6xl mx-auto">
          <TabbedPersonas personas={personas} />
        </div>
      </Skew>

      {/* ───── Wireframes & Prototypes (Tabbed) ───── */}
      <Skew id="prototypes" bg="bg-neutral-900">
        <Heading t="Wireframes & Prototypes" />
        <div className="max-w-6xl mx-auto">
          <TabbedPrototypes prototypes={prototypes} />
        </div>
      </Skew>

      {/* ───── Testing & Evaluation ───── */}
      <Skew id="testing" bg="bg-neutral-800">
        <Heading t="User Testing & Evaluation" />
        <div className="max-w-6xl mx-auto space-y-12">
          <UsabilityTestingResults />
          <SUSScoreAnalysis susScores={usabilityData.susScores} />
          <TestingInsights keyIssues={usabilityData.keyIssues} />
        </div>
      </Skew>

      {/* ───── Technical Implementation ───── */}
      <Skew id="technical" bg="bg-neutral-900">
        <Heading t="Technical Implementation" />
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Frontend Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                <TechBadge name="React" src="/Icon/react-logo.svg" />
                <TechBadge name="TypeScript" src="/Icon/ts-logo-256.png" />
                <TechBadge name="Tailwind CSS" src="/Icon/tailwind.png" />
                <TechBadge name="Vite" src="/Icon/vite.png" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Backend & Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                <TechBadge name="Node.js" src="/Icon/node.avif" />
                <TechBadge name="Google API" src="/Icon/googleapi.jpg" />
              </div>
            </div>
          </div>

          <TechnologyChoices />
          <KeyFeatures />
          <MobileScreenShowcase />
        </div>
      </Skew>

      {/* ───── Final Solution ───── */}
      <Skew id="solution" bg="bg-neutral-800">
        <Heading t="Final Solution" />
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <ValuePropCard
              title="For Job Seekers"
              icon={<Users className="w-8 h-8 text-blue-400" />}
              features={[
                'Showcase verified skills',
                'Real-time shift alerts',
                'Transparent pay & details',
                'Smart filters & maps',
                'Location-based matching',
              ]}
            />
            <ValuePropCard
              title="For Employers"
              icon={<Briefcase className="w-8 h-8 text-blue-400" />}
              features={[
                'Instant qualified candidates',
                'View skills & ratings',
                'Post urgent shifts',
                'Reduce screening time',
                'Pre-vetted talent pool',
              ]}
            />
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Project Impact</h3>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              DashShift creates transparency in pay, verifies worker skills and
              delivers real-time matching—transforming Australia&apos;s casual
              employment landscape.
            </p>
          </div>
        </div>
      </Skew>

      {/* ───── Future Roadmap ───── */}
      <Skew id="roadmap" bg="bg-neutral-900">
        <Heading t="Future Roadmap" />
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-neutral-200">
                Expanding DashShift&apos;s capabilities to create a comprehensive ecosystem
                for Australia&apos;s casual employment market.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FutureFeature
              icon={<Brain className="w-6 h-6" />}
              title="AI-Powered Matching"
              description="Machine learning algorithms to predict job-worker compatibility and optimize shift allocation."
            />
            <FutureFeature
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile App"
              description="Native iOS and Android apps with push notifications for instant shift alerts and on-the-go job management."
            />
            <FutureFeature
              icon={<DollarSign className="w-6 h-6" />}
              title="Integrated Payroll"
              description="Seamless payment processing and automatic payroll integration for employers and workers."
            />
            <FutureFeature
              icon={<BarChart3 className="w-6 h-6" />}
              title="Analytics Dashboard"
              description="Comprehensive insights on hiring trends, worker performance, and market demand for data-driven decisions."
            />
            <FutureFeature
              icon={<Globe className="w-6 h-6" />}
              title="Multi-Language Support"
              description="Platform localization in multiple languages to better serve Australia's diverse workforce."
            />
          </div>
        </div>
      </Skew>

      {/* ───── Reflection ───── */}
      <Skew id="reflection" bg="bg-neutral-800">
        <Heading t="Reflection" />
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-neutral-300">
            Designing for dual user groups taught me to balance conflicting
            needs, validate assumptions with real users and iterate rapidly
            within technical constraints.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Key Learnings
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• User feedback drives design validation.</li>
                <li>• Technical constraints shape creativity.</li>
                <li>• Real-world testing reveals hidden gaps.</li>
                <li>• Iteration significantly boosts usability.</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Challenges Overcome
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• Balancing seeker vs employer priorities.</li>
                <li>• Meeting timeline with limited resources.</li>
                <li>• Design-dev trade-off negotiation.</li>
              </ul>
            </div>
          </div>
        </div>
      </Skew>

      {/* ───── Conclusion ───── */}
      <Skew id="conclusion" bg="bg-neutral-900">
        <Heading t="Conclusion" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl text-neutral-200">
            DashShift transforms casual hiring by aligning skilled workers with
            urgent opportunities through verified badges and real-time
            connectivity.
          </p>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
            <p className="text-lg text-neutral-300">
              Thoughtful UX research and iterative design solved a pressing
              market problem—demonstrating the impact of HCI methods.
            </p>
          </div>
        </div>
      </Skew>

      {/* ───── Embedded Demo Video ───── */}
      <section className="bg-neutral-800 py-16 px-4">
        <Heading t="Demo Video" />
        <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/hlIQ7lBknPg"
            title="DashShift Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      {/* ───── References ───── */}
      <section className="bg-neutral-900 py-16 px-4">
        <Heading t="References" />
        <div className="max-w-4xl mx-auto bg-neutral-800/50 rounded-xl p-6">
          <div className="space-y-3 text-sm text-neutral-400">
            <p>
              Hawlitschek, F., Teubner, T., &amp; Weinhardt, C. (2016). Trust in
              the sharing economy. <em>Swiss Journal of Business Research</em>.
            </p>
            <p>
              Healy, J., Nicholson, D., &amp; Pekarek, A. (2017). Should we take
              the gig economy seriously? <em>Labour &amp; Industry</em>.
            </p>
            <p>
              Jin, D., &amp; Liu-Lastres, B. (2024). Gig economy impact on the
              hospitality workforce. <em>IJCHM</em>.
            </p>
            <p>
              Wobbrock, J. O., &amp; Kientz, J. A. (2016). Research
              contributions in HCI. <em>interactions</em>.
            </p>
            <p>
              Zaman, U. et al. (2020). Joy of gig work.{' '}
              <em>Cogent Business &amp; Management</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────── Helper Components ───────── */
const FindingCard = ({
  percentage,
  label,
  description,
}: {
  percentage: string;
  label: string;
  description: string;
}): JSX.Element => (
  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
    <div className="text-4xl font-bold text-purple-400 mb-2">{percentage}</div>
    <div className="text-lg font-semibold text-white mb-2">{label}</div>
    <div className="text-sm text-neutral-400">{description}</div>
  </div>
);

const JobSeekersAnalysis = (): JSX.Element => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Visa Distribution */}
      <div className="bg-neutral-900/50 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">Visa Status Distribution</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-300">Student Visa</span>
            <span className="text-white font-medium">44% (11)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Working Holiday</span>
            <span className="text-white font-medium">40% (10)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">PR/Graduate Visa</span>
            <span className="text-white font-medium">16% (4)</span>
          </div>
        </div>
      </div>

      {/* Job Search Methods */}
      <div className="bg-neutral-900/50 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-4 text-green-300">Most Effective Job Search Methods</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-300">Job listing websites</span>
            <span className="text-white font-medium">52% (13)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Direct visits</span>
            <span className="text-white font-medium">20% (5)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Social media</span>
            <span className="text-white font-medium">16% (4)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Work Factor Importance */}
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4 text-purple-300">Work Factor Importance (Average Score)</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.2</div>
          <div className="text-sm text-neutral-300">High Pay</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.4</div>
          <div className="text-sm text-neutral-300">Workplace Atmosphere</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">3.7</div>
          <div className="text-sm text-neutral-300">Shift Flexibility</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">3.8</div>
          <div className="text-sm text-neutral-300">Proximity</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">3.5</div>
          <div className="text-sm text-neutral-300">Skill Development</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">3.2</div>
          <div className="text-sm text-neutral-300">Short-notice Work</div>
        </div>
      </div>
    </div>

    {/* Main Challenges */}
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4 text-red-300">Main Challenges Faced</h4>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex justify-between">
          <span className="text-neutral-300">High competition</span>
          <span className="text-white font-medium">60% (15)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Lack of required skills</span>
          <span className="text-white font-medium">48% (12)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Visa restrictions</span>
          <span className="text-white font-medium">44% (11)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Language barriers</span>
          <span className="text-white font-medium">24% (6)</span>
        </div>
      </div>
    </div>
  </div>
);

const EmployersAnalysis = (): JSX.Element => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Recruitment Channels */}
      <div className="bg-neutral-900/50 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">Primary Recruitment Channels</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-300">Job listing websites</span>
            <span className="text-white font-medium">82% (14)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Employee referrals</span>
            <span className="text-white font-medium">71% (12)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Social media</span>
            <span className="text-white font-medium">47% (8)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">In-store posters</span>
            <span className="text-white font-medium">35% (6)</span>
          </div>
        </div>
      </div>

      {/* Hiring Time */}
      <div className="bg-neutral-900/50 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-4 text-green-300">Time Investment for Hiring</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-300">2-4 weeks</span>
            <span className="text-white font-medium">59% (10)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">1-2 weeks</span>
            <span className="text-white font-medium">29% (5)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-300">Over 1 month</span>
            <span className="text-white font-medium">12% (2)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Hiring Factor Importance */}
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4 text-purple-300">Hiring Factor Importance (Average Score)</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.4</div>
          <div className="text-sm text-neutral-300">Ready-to-work Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.4</div>
          <div className="text-sm text-neutral-300">Shift Flexibility</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.2</div>
          <div className="text-sm text-neutral-300">Communication Skills</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">4.1</div>
          <div className="text-sm text-neutral-300">Team Compatibility</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">2.7</div>
          <div className="text-sm text-neutral-300">Hygiene Qualifications</div>
        </div>
      </div>
    </div>

    {/* Staff Shortage Frequency */}
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4 text-red-300">Urgent Staffing Shortage Frequency</h4>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex justify-between">
          <span className="text-neutral-300">Monthly</span>
          <span className="text-white font-medium">53% (9)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Weekly</span>
          <span className="text-white font-medium">24% (4)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Daily</span>
          <span className="text-white font-medium">12% (2)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-300">Never</span>
          <span className="text-white font-medium">12% (2)</span>
        </div>
      </div>
    </div>

    {/* Current Method Satisfaction */}
    <div className="bg-neutral-900/50 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4 text-orange-300">Satisfaction with Current Methods</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-lg font-bold text-red-400">41%</div>
          <div className="text-xs text-neutral-300">Dissatisfied</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-400">35%</div>
          <div className="text-xs text-neutral-300">Neutral</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-400">24%</div>
          <div className="text-xs text-neutral-300">Satisfied</div>
        </div>
      </div>
    </div>
  </div>
);

const KeyFindings = (): JSX.Element => (
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-4 text-blue-300">Job Seekers Pain Points</h4>
      <ul className="space-y-2 text-neutral-300">
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          60% face high competition in market
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          48% lack required skills/experience
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          44% struggle with visa restrictions
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          Low satisfaction with job info accessibility (2.8/5)
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          Need for short-notice work varies (3.2/5 importance)
        </li>
      </ul>
    </div>
    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-4 text-green-300">Employer Pain Points</h4>
      <ul className="space-y-2 text-neutral-300">
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          59% spend 2-4 weeks on hiring process
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          77% face monthly/weekly staff shortages
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          41% dissatisfied with current methods
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          High priority: Experience & flexibility (4.4/5)
        </li>
        <li className="flex items-start">
          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
          Multiple channels needed for effective recruitment
        </li>
      </ul>
    </div>
  </div>
);