import React, { useState } from "react";
import { Integration } from "../../content/integrations.ts";
import { IntegrationLogo } from "../ui/IntegrationLogos.tsx";

export interface IntegrationCardProps {
  integration: Integration;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  integration,
  isSelected = false,
  onSelect,
}) => {
  const [showPayload, setShowPayload] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [lastSimulatedTime, setLastSimulatedTime] = useState<string | null>(
    null,
  );

  const handleSimulate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSimulating(true);
    setTimeout(() => {
      setSimulating(false);
      setLastSimulatedTime(new Date().toLocaleTimeString());
    }, 600);
  };

  return (
    <div
      onClick={onSelect}
      className={`relative group bg-[#131318] border rounded-[16px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-[#C6FF3D] shadow-[0_0_24px_rgba(198,255,61,0.08)]"
          : "border-[#26262E] hover:border-[#F4EFE6]/40"
      }`}
    >
      <div>
        {/* Top Bar: Icon + Category + Status */}
        <div className="mb-5">
          <div className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-[12px] bg-[#09090B] border border-[#26262E] flex items-center justify-center group-hover:border-[#C6FF3D]/50 transition-colors">
              <IntegrationLogo id={integration.id} size={28} />
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#C6FF3D] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {integration.name}
              </h3>
              <span className="font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em] block mt-1">
                {integration.categoryLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm text-[#F4EFE6]/90 mb-4 leading-relaxed font-normal">
          {integration.description}
        </p>

        {/* Highlight Architecture Note */}
        {/* <div className="border-l-2 border-[#C6FF3D] pl-3 py-1 mb-5 bg-[#09090B]/40">
          <p className="font-mono text-xs text-[#A7A29A] leading-relaxed">
            {integration.highlight}
          </p>
        </div> */}

        {/* Unboxed Feature Tags */}
        {/* <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-xs text-[#A7A29A] font-mono">
          {integration.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="hover:text-[#F4EFE6] transition-colors">
                {tag}
              </span>
              {idx < integration.tags.length - 1 && (
                <span className="text-[#26262E]" aria-hidden="true">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div> */}
      </div>
      {/* Action Footer: Interactive Trigger Simulation & Payload Inspector Toggle */}

      {/* Live Simulation feedback stamp
      {lastSimulatedTime && !showPayload && (
        <div className="mt-2 text-right">
          <span className="font-mono text-[10px] text-[#C6FF3D] uppercase tracking-wider">
            ✓ Webhook 200 OK · {lastSimulatedTime}
          </span>
        </div>
      )}
      Expandable Terminal Code Inspector
      {showPayload && (
        <div
          className="mt-4 bg-[#09090B] border border-[#26262E] rounded-[8px] p-3.5 overflow-x-auto text-[11px] font-mono text-[#A7A29A]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-[#26262E]/70 text-[10px] text-[#C6FF3D]">
            <span>// SAMPLE WEBHOOK PAYLOAD</span>
            <span>JSON 200</span>
          </div>
          <pre className="text-[#F4EFE6] leading-relaxed whitespace-pre font-mono">
            {JSON.stringify(integration.samplePayload, null, 2)}
          </pre>
        </div>
      )} */}
    </div>
  );
};
