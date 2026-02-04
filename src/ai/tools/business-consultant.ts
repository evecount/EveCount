'use server';

/**
 * @fileOverview A suite of AI-powered business consultant tools.
 * This file implements the 10 AI prompts from the "R.I.P McKinsey" list
 * as Genkit tools that can be used by other agents.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// 1. SWOT Analysis
const SWOTSchema = z.object({
  strengths: z.array(z.string()).describe('List of internal strengths.'),
  weaknesses: z.array(z.string()).describe('List of internal weaknesses.'),
  opportunities: z.array(z.string()).describe('List of external opportunities.'),
  threats: z.array(z.string()).describe('List of external threats.'),
});

export const swotAnalysis = ai.defineTool(
  {
    name: 'swotAnalysis',
    description: 'Create a SWOT analysis for a business in a specific industry using competitive landscape data and internal factors.',
    inputSchema: z.object({
      business: z.string().describe('The business to analyze.'),
      industry: z.string().describe('The industry the business operates in.'),
    }),
    outputSchema: SWOTSchema,
  },
  async (input) => {
    const prompt = `Act as a business strategist. Create a SWOT analysis for '${input.business}' in the '${input.industry}' industry using competitive landscape data and internal factors.`;
    const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: SWOTSchema },
    });
    return output!;
  }
);

// 2. Growth Levers
const GrowthLeversSchema = z.object({
  levers: z.array(z.object({
    name: z.string().describe('Name of the growth lever.'),
    description: z.string().describe('Description of how it drives growth (revenue expansion, operational leverage, brand amplification).')
  })).describe('An array of 5 scalable growth levers.')
});

export const identifyGrowthLevers = ai.defineTool(
  {
    name: 'identifyGrowthLevers',
    description: 'Identify 5 scalable growth levers for a type of business, focusing on revenue expansion, operational leverage, and brand amplification.',
    inputSchema: z.object({
      businessType: z.string().describe('The type of business (e.g., SaaS, e-commerce, marketplace).'),
    }),
    outputSchema: GrowthLeversSchema,
  },
  async (input) => {
    const prompt = `Identify 5 scalable growth levers for a '${input.businessType}' business, focusing on revenue expansion, operational leverage, and brand amplification.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: GrowthLeversSchema },
    });
    return output!;
  }
);

// 3. 30-60-90 Day Plan
const PlanPhaseSchema = z.object({
  goals: z.array(z.string()).describe('Key goals for this phase.'),
  kpis: z.array(z.string()).describe('KPIs to measure success.'),
  earlyWins: z.array(z.string()).describe('Potential early wins to aim for.'),
});

const Plan306090Schema = z.object({
  day30: PlanPhaseSchema.describe('Plan for the first 30 days.'),
  day60: PlanPhaseSchema.describe('Plan for the next 30 days (days 31-60).'),
  day90: PlanPhaseSchema.describe('Plan for the final 30 days (days 61-90).'),
});

export const create306090Plan = ai.defineTool(
  {
    name: 'create306090Plan',
    description: 'Create a 30-60-90 day performance plan for a new role joining a company, including onboarding goals, KPIs, and early wins.',
    inputSchema: z.object({
      role: z.string().describe('The new role (e.g., Head of Marketing).'),
      company: z.string().describe('The name of the company.'),
    }),
    outputSchema: Plan306090Schema,
  },
  async (input) => {
    const prompt = `Create a 30-60-90 day performance plan for a new '${input.role}' joining '${input.company}', including onboarding goals, KPIs, and early wins.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: Plan306090Schema },
    });
    return output!;
  }
);


// 4. Revenue Model Canvas
const RevenueModelSchema = z.object({
  idealPricing: z.string().describe('The suggested ideal pricing strategy.'),
  customerAcquisitionCost: z.string().describe('An analysis or projection for Customer Acquisition Cost (CAC).'),
  lifetimeValue: z.string().describe('An analysis or projection for Lifetime Value (LTV).'),
  monthlyRecurringRevenueProjection: z.string().describe('A projection for monthly recurring revenue (MRR).'),
});

export const buildRevenueModelCanvas = ai.defineTool(
  {
    name: 'buildRevenueModelCanvas',
    description: 'Build a lean revenue model for a business offering a product/service, including ideal pricing, CAC, LTV, and monthly recurring revenue projection.',
    inputSchema: z.object({
      productOrService: z.string().describe('The product or service being offered.'),
    }),
    outputSchema: RevenueModelSchema,
  },
  async (input) => {
    const prompt = `Build a lean revenue model for a business offering '${input.productOrService}', including ideal pricing, Customer Acquisition Cost (CAC), Lifetime Value (LTV), and monthly recurring revenue projection.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: RevenueModelSchema },
    });
    return output!;
  }
);

// 5. Churn Fix
const ChurnFixSchema = z.object({
  strategies: z.array(z.object({
    name: z.string().describe('Name of the strategy.'),
    description: z.string().describe('Description of the strategy and the evidence it is based on (customer behavior, feedback loops).')
  })).describe('An array of 3 evidence-based strategies to reduce churn.')
});

export const recommendChurnFixStrategies = ai.defineTool(
  {
    name: 'recommendChurnFixStrategies',
    description: 'Recommend 3 evidence-based strategies to reduce churn for a SaaS product serving a target customer, using customer behavior and feedback loops.',
    inputSchema: z.object({
      saasProduct: z.string().describe('The name or description of the SaaS product.'),
      targetCustomer: z.string().describe('The target customer profile.'),
    }),
    outputSchema: ChurnFixSchema,
  },
  async (input) => {
    const prompt = `Recommend 3 evidence-based strategies to reduce churn for a SaaS product ('${input.saasProduct}') serving '${input.targetCustomer}', using customer behavior and feedback loops.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: ChurnFixSchema },
    });
    return output!;
  }
);

// 6. KPI Dashboard Blueprint
const KpiBlueprintSchema = z.object({
  kpis: z.array(z.object({
    name: z.string().describe('Name of the KPI.'),
    description: z.string().describe('Why this KPI is important for the specified business type across acquisition, retention, product usage, or financial health.')
  })).describe('A list of the 7 most important KPIs.')
});

export const defineKpiDashboardBlueprint = ai.defineTool(
  {
    name: 'defineKpiDashboardBlueprint',
    description: 'List the 7 most important KPIs for a business type to track across acquisition, retention, product usage, and financial health.',
    inputSchema: z.object({
      businessType: z.string().describe('The type of business (e.g., SaaS, e-commerce).'),
    }),
    outputSchema: KpiBlueprintSchema,
  },
  async (input) => {
    const prompt = `List the 7 most important KPIs for a '${input.businessType}' business to track across acquisition, retention, product usage, and financial health.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: KpiBlueprintSchema },
    });
    return output!;
  }
);

// 7. Pricing Strategy
const PricingStrategySchema = z.object({
  strategies: z.array(z.object({
    name: z.string().describe('Name of the pricing strategy.'),
    description: z.string().describe('Details on the strategy, including value-based pricing, tiering, and competitive positioning.')
  })).describe('A list of 3 suggested pricing strategies.')
});

export const suggestPricingStrategies = ai.defineTool(
  {
    name: 'suggestPricingStrategies',
    description: 'Suggest 3 pricing strategies for an offer targeting a segment, using value-based pricing, tiering, and competitive positioning.',
    inputSchema: z.object({
      offer: z.string().describe('The product or service offer.'),
      segment: z.string().describe('The target customer segment.'),
    }),
    outputSchema: PricingStrategySchema,
  },
  async (input) => {
    const prompt = `Act as a pricing expert. Suggest 3 pricing strategies for an offer ('${input.offer}') targeting the '${input.segment}' segment, using value-based pricing, tiering, and competitive positioning.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: PricingStrategySchema },
    });
    return output!;
  }
);

// 8. Go-to-Market Plan
const GoToMarketPlanSchema = z.object({
  positioning: z.string().describe('The product positioning strategy.'),
  channels: z.array(z.string()).describe('Recommended acquisition channels.'),
  acquisitionStrategy: z.string().describe('The overall customer acquisition strategy.'),
  launchMetrics: z.array(z.string()).describe('Key metrics to track at launch.'),
});

export const developGoToMarketPlan = ai.defineTool(
  {
    name: 'developGoToMarketPlan',
    description: 'Develop a go-to-market strategy for launching a product to a target market, covering positioning, channels, acquisition, and launch metrics.',
    inputSchema: z.object({
      product: z.string().describe('The product being launched.'),
      targetMarket: z.string().describe('The target market for the launch.'),
    }),
    outputSchema: GoToMarketPlanSchema,
  },
  async (input) => {
    const prompt = `Develop a go-to-market strategy for launching '${input.product}' to the '${input.targetMarket}' market, covering positioning, channels, acquisition, and launch metrics.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: GoToMarketPlanSchema },
    });
    return output!;
  }
);

// 9. Value Proposition
export const writeValueProposition = ai.defineTool(
  {
    name: 'writeValueProposition',
    description: 'Write a compelling value proposition for a brand or product that highlights customer pain, the solution, and key differentiators.',
    inputSchema: z.object({
      brandOrProduct: z.string().describe('The brand or product name.'),
    }),
    outputSchema: z.string().describe('The compelling value proposition.'),
  },
  async (input) => {
    const prompt = `Write a compelling value proposition for '${input.brandOrProduct}' that highlights customer pain, the solution, and key differentiators.`;
     const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: z.string() },
    });
    return output!;
  }
);

// 10. Pivot Ideas
const PivotIdeasSchema = z.object({
  pivotDirections: z.array(z.object({
    name: z.string().describe('Name for the pivot idea.'),
    description: z.string().describe('Description of the pivot, including new customer segments, use cases, or product angles.')
  })).describe('A list of 3 smart pivot directions.')
});

export const suggestPivotIdeas = ai.defineTool(
  {
    name: 'suggestPivotIdeas',
    description: 'Suggest 3 smart pivot directions for a startup struggling with a specific problem, including new customer segments, use cases, or product angles.',
    inputSchema: z.object({
      specificProblem: z.string().describe('The specific problem the startup is struggling with.'),
    }),
    outputSchema: PivotIdeasSchema,
  },
  async (input) => {
    const prompt = `Suggest 3 smart pivot directions for a startup struggling with '${input.specificProblem}', including new customer segments, use cases, or product angles.`;
    const { output } = await ai.generate({
      prompt: prompt,
      output: { schema: PivotIdeasSchema },
    });
    return output!;
  }
);
