export interface Integration {
  id: string;
  name: string;
  category: "automation" | "data" | "email" | "auth" | "payments";
  categoryLabel: string;
  description: string;
  highlight: string;
  brandColor: string;
  tags: string[];
  latency: string;
  samplePayload: Record<string, unknown>;
  recipeUsage: string;
}

export interface WorkflowRecipe {
  id: string;
  title: string;
  description: string;
  steps: Array<{
    app: string;
    action: string;
    badge: string;
  }>;
  throughput: string;
  reliability: string;
}

export const integrationsData: Integration[] = [
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    categoryLabel: "WORKFLOW AUTOMATION",
    description:
      "Multi-branch logic connecting Webflow frontend forms to external databases, notifying internal teams, and syncing leads in real time.",
    highlight:
      "Instant webhook trigger on Webflow form submission with zero dropped leads.",
    brandColor: "#FF4F00",
    tags: ["Webhooks", "Multi-Path Zaps", "Instant Triggers", "Filters"],
    latency: "< 250ms",
    samplePayload: {
      event: "form_submission.completed",
      source: "webflow.site.contact_form",
      timestamp: "2026-10-16T05:30:00Z",
      payload: {
        lead_id: "lead_9921_dx",
        name: "Sarah Chen",
        email: "sarah@hypergrowth.co",
        project_type: "Webflow Rebuild",
        budget_range: "$8,000 - $15,000",
      },
      routing_decision: "auto_route_to_airtable_and_slack",
    },
    recipeUsage: "Triggered when client submits quote request or enquiry form.",
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "data",
    categoryLabel: "DATABASE & RELATIONAL CRM",
    description:
      "Clean tabular backend serving as the single source of truth for dynamic Webflow collections, content pipelines, and client editorial rosters.",
    highlight:
      "Relational data modeling synced seamlessly with Webflow CMS items.",
    brandColor: "#FCB400",
    tags: ["Relational Schema", "Two-Way Sync", "Formula Fields", "REST API"],
    latency: "< 180ms",
    samplePayload: {
      record_id: "rec_84b7f830a",
      table: "Client_Leads_2026",
      fields: {
        Contact_Name: "Sarah Chen",
        Company: "Hypergrowth Studio",
        Stage: "Proposal Dispatched",
        Estimated_Value_USD: 12500,
        Assigned_Architect: "Ranjit Rajan",
        Last_Activity: "2026-10-16",
      },
      status: "synced_to_webflow_cms",
    },
    recipeUsage:
      "Central repository where inbound submissions are stored and indexed.",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "email",
    categoryLabel: "AUDIENCE & DRIP CAMPAIGNS",
    description:
      "Automatic list tagging, segmented client onboarding journeys, and transactional autoresponders initiated directly upon form validation.",
    highlight:
      "High-deliverability newsletter and automated welcome sequence execution.",
    brandColor: "#FFE01B",
    tags: [
      "Merge Tags",
      "Audience Segments",
      "Autoresponders",
      "Deliverability",
    ],
    latency: "< 320ms",
    samplePayload: {
      action: "subscribe_or_update",
      list_id: "list_global_inbound",
      subscriber: {
        email_address: "sarah@hypergrowth.co",
        status: "subscribed",
        tags: ["webflow_enquiry", "q4_intake", "high_intent"],
        merge_fields: {
          FNAME: "Sarah",
          INTEREST: "Webflow CMS",
        },
      },
      campaign_triggered: "welcome_series_step_01",
    },
    recipeUsage:
      "Sends immediate client confirmation and triggers targeted nurture sequence.",
  },
  {
    id: "memberstack",
    name: "Memberstack",
    category: "auth",
    categoryLabel: "AUTH & GATED CONTENT",
    description:
      "Seamless client authentication, gated portal sections, and tiered membership models layered smoothly on top of native Webflow CMS pages.",
    highlight:
      "Secure user sessions with zero redirects and full style customization.",
    brandColor: "#2563EB",
    tags: ["Client Auth", "Gated CMS", "User Dashboards", "Session Tokens"],
    latency: "< 150ms",
    samplePayload: {
      member_id: "mem_cl984j12a",
      auth_state: "authenticated",
      plan: {
        id: "plan_pro_enterprise",
        status: "active",
        billing_interval: "annual",
      },
      permissions: ["can_view_premium_cms", "can_download_assets"],
      custom_fields: {
        client_tier: "Gold",
      },
    },
    recipeUsage:
      "Controls access to private client portals, resource libraries, or paywalled articles.",
  },
  {
    id: "make",
    name: "Make (Integromat)",
    category: "automation",
    categoryLabel: "ADVANCED SCENARIO LOGIC",
    description:
      "Visual API orchestration for complex conditional branching, JSON data transformation, webhook buffering, and error-recovery loops.",
    highlight: "High-volume data pipelines with custom algorithmic routers.",
    brandColor: "#6D28D9",
    tags: ["Visual Scenarios", "Error Handling", "JSON Parsing", "Iterators"],
    latency: "< 210ms",
    samplePayload: {
      scenario_id: "scen_webflow_content_feed",
      execution_status: "success",
      bundles_processed: 14,
      operations_consumed: 3,
      data_flow: {
        raw_source: "external_rss_feed",
        sanitized_json: "markdown_to_html_converted",
        destination: "webflow_cms_live_item_patch",
      },
    },
    recipeUsage:
      "Transforms external feeds and complex schemas before pushing to Webflow.",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "data",
    categoryLabel: "ENTERPRISE INBOUND CRM",
    description:
      "Full-funnel attribution, contact property synchronization, and automated deal pipeline creation without slowing down client page loads.",
    highlight:
      "Asynchronous tracking that maintains 98+ PageSpeed Core Web Vitals.",
    brandColor: "#FF7A59",
    tags: ["Lifecycle Stages", "Deal Pipelines", "UTM Tracking", "Async Sync"],
    latency: "< 290ms",
    samplePayload: {
      hubspot_contact_id: "vid_9012481",
      properties: {
        firstname: "Sarah",
        email: "sarah@hypergrowth.co",
        lifecyclestage: "marketingqualifiedlead",
        hs_lead_status: "NEW",
        webflow_referrer: "ranjitkrajan.com/work",
      },
      deal_created: {
        dealname: "Hypergrowth Studio — Webflow Rebuild",
        pipeline: "default",
        amount: 12500,
      },
    },
    recipeUsage:
      "Enriches marketing qualified leads and records touchpoint attribution.",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "payments",
    categoryLabel: "PAYMENTS & BILLING",
    description:
      "Direct Checkout Sessions, Customer Billing Portals, and automated webhook listeners for digital products, invoices, and service retainer billing.",
    highlight:
      "PCI-compliant checkout embedded cleanly into bespoke Webflow designs.",
    brandColor: "#635BFF",
    tags: [
      "Checkout Sessions",
      "Webhook Security",
      "Customer Portal",
      "Invoicing",
    ],
    latency: "< 190ms",
    samplePayload: {
      event_type: "checkout.session.completed",
      session_id: "cs_live_b123984019a",
      customer_email: "sarah@hypergrowth.co",
      amount_total: 1250000,
      currency: "usd",
      payment_status: "paid",
      metadata: {
        project_ref: "cocaimo_webflow_sprint",
      },
    },
    recipeUsage:
      "Processes deposit payments and initiates project onboarding automatically.",
  },
  {
    id: "finsweet",
    name: "Finsweet Attributes",
    category: "data",
    categoryLabel: "CLIENT-SIDE CMS LOGIC",
    description:
      "Blazing-fast client-side CMS enhancements including multi-category instant filtering, live fuzzy search, infinite pagination, and nested references.",
    highlight:
      "Zero latency UI interactions running purely in the browser with no reloads.",
    brandColor: "#00E599",
    tags: ["CMS Filter", "Live Search", "Nested Lists", "Client-First"],
    latency: "< 16ms (Instant)",
    samplePayload: {
      attribute_module: "fs-cmsfilter",
      version: "2.4.0",
      active_filters: {
        category: ["Webflow", "React"],
        year: ["2026"],
      },
      dom_nodes_evaluated: 48,
      render_time_ms: 12.4,
      smooth_transition: true,
    },
    recipeUsage:
      "Powers instant real-time filtering and search across large portfolio/blog collections.",
  },
];

export const workflowRecipes: WorkflowRecipe[] = [
  {
    id: "recipe-lead-routing",
    title: "Lead Intake & CRM Dispatch Pipeline",
    description:
      "When a prospect submits an enquiry on Webflow, the payload validates asynchronously, creates an Airtable record, provisions a HubSpot deal, and registers the contact in Mailchimp.",
    steps: [
      {
        app: "Webflow Form",
        action: "Submit Event Triggered",
        badge: "STEP 01",
      },
      {
        app: "Zapier Webhook",
        action: "Validation & Deduplication",
        badge: "STEP 02",
      },
      {
        app: "Airtable Base",
        action: "Record Created & Tagged",
        badge: "STEP 03",
      },
      {
        app: "Mailchimp & Slack",
        action: "Autoresponder & Team Ping",
        badge: "STEP 04",
      },
    ],
    throughput: "100% Reliable Delivery",
    reliability: "99.98% Uptime",
  },
  {
    id: "recipe-member-paywall",
    title: "Gated Member Portal & Paywall Flow",
    description:
      "Seamless user authentication allowing paying clients or community members to unlock dynamic Webflow CMS collections while synchronizing subscription status via Stripe.",
    steps: [
      {
        app: "Webflow CMS",
        action: "Private Collection Template",
        badge: "STEP 01",
      },
      {
        app: "Memberstack",
        action: "Client Auth & Cookie Validation",
        badge: "STEP 02",
      },
      {
        app: "Stripe Billing",
        action: "Subscription State Sync",
        badge: "STEP 03",
      },
      {
        app: "Dynamic Portal",
        action: "Content Rendered (< 150ms)",
        badge: "STEP 04",
      },
    ],
    throughput: "< 150ms Auth Latency",
    reliability: "Bank-Grade SSL/TLS",
  },
  {
    id: "recipe-cms-sync",
    title: "Automated Headless Content Sync",
    description:
      "Client marketing team drafts content in Airtable or Sanity CMS. Make scenario executes sanitization, optimizes image assets, and publishes live Webflow CMS items automatically.",
    steps: [
      {
        app: "Airtable / Sanity",
        action: 'Editorial Draft Marked "Ready"',
        badge: "STEP 01",
      },
      {
        app: "Make Scenario",
        action: "Asset Optimization & HTML Parsing",
        badge: "STEP 02",
      },
      {
        app: "Webflow API",
        action: "Item Published to Live Domain",
        badge: "STEP 03",
      },
      {
        app: "Algolia / Finsweet",
        action: "Search Index Refreshed",
        badge: "STEP 04",
      },
    ],
    throughput: "Zero Manual Work",
    reliability: "Atomic Sync Guarantee",
  },
  {
    id: "recipe-ecom-fulfillment",
    title: "Checkout & Transactional Automation",
    description:
      "Customers complete checkout via Stripe. Webhook fires instantly to generate invoices, update customer access privileges, and notify the operations team.",
    steps: [
      {
        app: "Webflow Store",
        action: "Bespoke Cart & Checkout Trigger",
        badge: "STEP 01",
      },
      {
        app: "Stripe Webhook",
        action: "Cryptographic Signature Verified",
        badge: "STEP 02",
      },
      {
        app: "Airtable Invoices",
        action: "Invoice & Accounting Logged",
        badge: "STEP 03",
      },
      {
        app: "Customer Portal",
        action: "Instant Dashboard Provisioning",
        badge: "STEP 04",
      },
    ],
    throughput: "Instant Confirmation",
    reliability: "Signed Webhooks",
  },
];
