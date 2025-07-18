import { JSX } from 'react';
import {
  BookOpenText,
  ExternalLink,
  Newspaper,
  type LucideIcon,
} from 'lucide-react';

import { Github } from '@/components/common/icons';
import { ChartProps } from '@/components/docs/leaderboard/chart/types';
import { Tables } from '@/components/docs/leaderboard/tables-card';
import { type Link } from '.';

type TsxIcon = (props: any) => JSX.Element;
type ButtonLink = Link & {
  icon?: LucideIcon | TsxIcon;
};

interface LeaderboardUIConfig {
  title: string;
  description: string;
  buttonLinks: ButtonLink[];
  tables: Tables;
  analytics: {
    title?: string;
    description?: string;
    blogLink?: string;
    resolveRateLineChart: ChartProps;
    numCallsBarChart: ChartProps;
    timePercentageBarChart: ChartProps;
    costBarChart: ChartProps;
    metricsRadarChart: ChartProps;
  };
  citation: {
    citationTitle?: string;
    citationDescription?: string;
    bibtex?: string;
    apa?: string;
  };
}

export const getLeaderboardUIConfig = (): LeaderboardUIConfig => ({
  title: 'SWE-Effi: Holistic Efficiency Evaluation of LLM-Based SWE Scaffolds', // main title
  description:
    'We introduce SWE-Effi, a new leaderboard that re-evaluates agents based on holistic efficiency scores beyond simple resolve rate, offering a deeper insights into the balance between resolve rate (the outcome) and the resources consumed (token cost and execution time). ', // main description
  // links for the buttons in the header
  buttonLinks: [
    {
      title: 'About',
      href: '/benchmark/agent-scaffold-blog',
      icon: Newspaper,
    },
    {
      title: 'Github',
      href: 'https://github.com/Center-for-Software-Excellence/SWE-Lens',
      external: true,
      icon: Github,
    },
    {
      title: 'Submit',
      href: '/guide/update-site-data',
      icon: ExternalLink,
    },
    {
      title: 'Paper',
      href: '#',
      icon: BookOpenText,
      disabled: true,
    },
  ],
  // leaderboard tables configuration
  tables: {
    leaderboard: {
      caption:
        'Table 1 -  An overall comparison of agent scaffolds and models across the token usage, duration, and LLM API call metrics',
      tabTitle: 'Table 1',
      tableTitle: 'Scaffold comparison on SWE-bench tasks',
      filterPlaceholder: 'Filter models...',
      // if the tooltips is "" or not defined, the tooltip will not be shown
      columnTooltips: {
        rank: 'Ranked by inference efficiency',
        scaffold: 'Name of the agent scaffold',
        model: 'LLM name',
        total: 'Total mean duration including CPU time and NIM',
        cpuTime: "Duration of agent scaffold's local operations (seconds)",
        inputToken: 'Mean number of input tokens used for single issue',
        outputToken: 'Mean number of output tokens used for single issue',
        calls: 'Number of inference calls to the LLM',
        infTime:
          'Normalized Inference Time (NIM): mean normalized LLM inference time per single issue',
        resolveRate:
          'Number of generated patches that correctly resolved the issue',
        precision: 'Precision of the generated patches',
      },
    },
    leaderboardRVU: {
      caption:
        'Table 2 - Comparison of scaffold dynamics and performance between resolved and unresolved cases',
      tabTitle: 'Table 2',
      tableTitle: 'Token and time costs for resolved and unresolved instances',
      filterPlaceholder: 'Filter models...',
      // if the tooltips is "" or not defined, the tooltip will not be shown
      columnTooltips: {
        rank: 'Ranked by total time resolved',
        scaffold: 'Name of the agent scaffold',
        model: 'LLM name',
        avgTotalTime: 'Mean total duration per instance',
        avgCPUTime: 'Mean CPU task duration per instance',
        avgInfTime: 'Mean Normalized Inference Time (NIM) per instance',
        avgTotalTokens: 'Mean number of total tokens used per instance',
        avgLLMRequests: 'Mean number of LLM API calls per instance',
      },
    },
  },
  analytics: {
    title: 'Analytics',
    description:
      'Here are some visualization highlights of our analysis, for more details please read our ',
    blogLink: '/about/introducing-swe-effi',
    resolveRateLineChart: {
      title: 'Resolve rate vs. total tokens used',
      description:
        'Issue resolve rate across the number of total tokens used per issue (in millions of tokens).',
      overview: '',
      insight: 'Insight about the resolve rate line chart...',
      xAxisLabel: 'Total Tokens (input tokens + output tokens) (Millions)',
      yAxisLabel: 'Resolve Rate',
      // ignore this
      xAxisDataKey: 'totalTokens',
    },
    numCallsBarChart: {
      title: 'Mean Num. of LLM calls per instance',
      description:
        'How many LLM requests did the agent scaffold use to attempt to issue resolution.',
      overview: 'Overview of the number of calls bar chart...',
      insight: 'Insight about the number of calls bar chart...',
      xAxisLabel: 'Scaffold',
      yAxisLabel: 'Number of Calls',
      // ignore this
      xAxisDataKey: 'scaffold',
    },
    timePercentageBarChart: {
      title: 'Agent Architecture Fingerprint: Where Does the Time Go? ',
      description: '(on average)',
      overview: 'Overview of the time percentage bar chart...',
      insight: 'Insight about the time percentage bar chart...',
      xAxisLabel: 'Percentage of Total Runtime (Model Time %)',
      yAxisLabel: '',
      // ignore this
      yAxisDataKey: 'scaffold-model',
    },
    costBarChart: {
      title: 'The Cost of Success vs. The Cost of Failure',
      description:
        'How many tokens did the agent scaffold use on successfully resolved instances compared to failed attempts.',
      overview: 'Overview of the cost bar chart...',
      insight: 'Insight about the cost bar chart...',
      xAxisLabel: 'Average Token Cost (Log Scale)',
      yAxisLabel: '',
      // ignore this
      yAxisDataKey: 'scaffold-model',
    },
    metricsRadarChart: {
      title: 'Efficiency in multiple dimensions',
      description:
        'How efficient is the agent scaffold in terms of resolving issues, use of tokens, monetary cost, use of local resources, and LLM inference duration. Measured in normalized AUC (Area Under Curve). Higher is better.',
      overview: 'Overview of the metrics radar chart...',
      insight: 'Insight about the metrics radar chart...',
      // ignore this
      polarAngleAxisDataKey: 'metric',
    },
  },
  citation: {
    citationTitle: 'Citation',
    citationDescription: 'Lead description about the citation...',
    bibtex: `@misc{xxxx2025, 
    title={Holistic Evaluation of LLM-Based SWE Scaffolds},
    author={xxx Team}, 
    year={2025},
    url={https://xxx},
    note={Accessed: ${new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}}
}`,
    apa: `some apa citation here`,
  },
});
