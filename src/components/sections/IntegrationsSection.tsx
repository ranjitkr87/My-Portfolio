import React, { useState } from "react";
import {
  integrationsData,
  workflowRecipes,
  WorkflowRecipe,
  Integration,
} from "../../content/integrations.ts";
import { IntegrationCard } from "../cards/IntegrationCard.tsx";

export const IntegrationsSection: React.FC = () => {
  const [activeRecipe, setActiveRecipe] = useState<WorkflowRecipe>(
    workflowRecipes[0],
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [simulatingRecipe, setSimulatingRecipe] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  // Filter integrations
  const filteredIntegrations = integrationsData.filter((item: Integration) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "automation") return item.category === "automation";
    if (activeCategory === "data") return item.category === "data";
    if (activeCategory === "auth_payments")
      return item.category === "auth" || item.category === "payments";
    return true;
  });

  const handleSimulateWorkflow = () => {
    if (simulatingRecipe) return;
    setSimulatingRecipe(true);
    setActiveStepIndex(0);

    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev === null) return 0;
        if (prev >= activeRecipe.steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setSimulatingRecipe(false);
            setActiveStepIndex(null);
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section
      id="integrations"
      aria-labelledby="integrations-heading"
      className="w-full bg-[#09090B]sm:py-32 border-t border-[#26262E] reveal-section"
      data-mode="void"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[#26262E] pb-6 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#C6FF3D] uppercase tracking-[0.08em] block mb-3">
              ECOSYSTEM &amp; AUTOMATION PIPELINES
            </span>
            <h2
              id="integrations-heading"
              className="text-4xl sm:text-5xl lg:text-6xl text-[#F4EFE6] uppercase font-bold tracking-tight max-w-2xl leading-[1.02]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Connecting Webflow to your entire stack.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A7A29A] max-w-md leading-relaxed uppercase tracking-[0.04em]">
            Websites shouldn't live in isolation. I engineer production grade
            webhooks, relational CMS syncs, gated client authentication, and
            payment workflows.
          </p>
        </div>

        {/* Integration Category Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#26262E] gap-4">
          <span className="font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em]">
            SUPPORTED PLATFORMS &amp; STACK MODULES
          </span>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Modules (8)" },
              { id: "automation", label: "Automation & Zaps" },
              { id: "data", label: "Databases & CRM" },
              { id: "auth_payments", label: "Auth & Payments" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#F4EFE6] text-[#09090B] border-[#F4EFE6] font-bold"
                    : "bg-[#131318] text-[#A7A29A] border-[#26262E] hover:text-[#F4EFE6]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredIntegrations.map((item) => (
            <IntegrationCard key={item.id} integration={item} />
          ))}
        </div>

        {/* Custom API & Micro-services Banner */}
        <div className="bg-[#131318] border border-[#26262E] rounded-[16px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#C6FF3D] uppercase tracking-[0.08em] block mb-1">
              CUSTOM PROPRIETARY APIS &amp; SERVERLESS ENDPOINTS
            </span>
            <h4
              className="text-2xl font-bold uppercase tracking-tight text-[#F4EFE6] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need a bespoke integration or private webhook handler?
            </h4>
            <p className="text-sm text-[#A7A29A] max-w-2xl leading-relaxed">
              When no-code tools hit their limit, I build lightweight
              Node.js/TypeScript serverless endpoints on Cloudflare Workers or
              AWS Lambda to handle cryptographic signatures, rate limiting, and
              complex SQL/PostgreSQL syncs.
            </p>
          </div>

          <a
            href="#cta"
            className="shrink-0 rounded-full bg-[#09090B] border border-[#26262E] hover:border-[#C6FF3D] px-6 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#F4EFE6] hover:bg-[#C6FF3D] hover:text-[#09090B] transition-colors"
          >
            [ DISCUSS INTEGRATION ]
          </a>
        </div>
      </div>
    </section>
  );
};
