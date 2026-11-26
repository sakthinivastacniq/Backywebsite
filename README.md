# Backy website redesign

Responsive, buildless static marketing site for Backy by TacnIQ.ai.

## Pages

- `index.html` follows the product introduction flow: field experience, workplace problem, Backy system, signal-to-action process, selected pilot results, industry fit, demo video and a two-week pilot.
- Product page follows the deck’s product sequence: hardware, USD pricing, specifications, software, proposed Backy Rewards, and enquiry. Its product image carousel supports automatic rotation, manual controls and reduced-motion preferences; pricing tabs remain interactive.


## Backy ROI calculator (November 2026)

- `roi.html` is the customer-facing multi-country financial impact calculator based on the supplied Backy ROI by Country HTML model. It covers Singapore, the US, Australia, Canada, the UK, Germany and the Netherlands.
- It models illustrative conservative/expected/optimistic reductions; Year 1, later-year and three-year economics; sector multipliers; device/dashboard pricing; and a configurable employer-retained claim share.
- It separately displays avoidable downtime, employer-retained claim costs and other disruption/treatment costs. Results are scenarios, not demonstrated Backy injury or premium reductions.
- `roi-methodology.html` documents the formulas, selected official source links, country input provenance and assumptions. The home page links to the calculator via a business-impact panel.
- Before using these figures in a binding quotation or external insurance claim, confirm current Backy prices, customer claims history, actual premium/deductible exposure, sector injury rates and evidence connecting Backy posture outcomes with later injuries.

## Industry HRP impact dashboard (November 2026)

- `roi-industries.html` compares six industry segments with independently selectable country/currency, baseline case-severity and insurance tariff assumptions for Singapore, United States, Australia (Queensland), Canada (British Columbia), UK, Germany and Netherlands.
- The 67% logistics high-risk posture reduction is an **internally reported Backy behavior outcome**, not a claim reduction; other industry HRP inputs are explicitly hypothetical ranges.
- An adjustable HRP-to-injury translation coefficient converts HRP improvement into a **hypothetical reduction in injury-frequency and nonclaim absence exposure**. No fixed conversion is independently validated. Never show the projection as demonstrated prevented claims.
- Country policy premium references are from-price, jurisdiction-specific averages or broker estimates, **not comparable national quotes**. The calculation excludes unverified premium savings and separately shows employer-retained compensation, insurer claims and non-claim treatment bills to avoid double counting.
- The landing-page ROI CTA points to this new industry comparison; the original country calculator, company-specific calculator, benchmarks and methodology remain accessible.
- Customer-facing industry panels use **positive-ROI qualification**: positive projected net return and ROI figures appear only when the modeled net exceeds zero. Otherwise the panel displays a break-even annual avoidable loss requirement and a not-yet-demonstrated outcome, not a fabricated positive return. An optional positive-ROI-only filter excludes nonqualifying scenarios; the underlying calculations and original detailed calculators remain available for transparency.

## Preview

Open `index.html` locally or visit the Render static site. The website uses plain HTML, CSS and JavaScript. The Backy demo plays from a locally hosted MP4 in a landscape video frame; portrait footage stays letterboxed rather than cropped.

## Product information

The home page follows the Backy story in the uploaded TacnIQ.ai introduction deck, including employer cost context, stakeholder outcomes, proposed rewards and the five-stage pilot flow. Selected pilot results and the 5,112-hour deployment baseline are labeled as company-reported, with client names anonymised. The site has no live device-usage data feed, so the deployment count remains a verified baseline until a telemetry/API source is connected. The product specification table follows the details previously published on backy.ai. Product kit configuration should be confirmed with TacnIQ.ai before ordering.

## Images

The home hero uses the supplied full Backy-on-shift image; the product hero gallery uses the Backy device panel from slide one and the new feature overview. The technical specifications panel uses the supplied Backy device photo. The TacnIQ.ai wordmark is also taken from slide one. Other workplace, wearable, hardware, accessory and dashboard images come from the supplied introduction deck.

## Competitor-informed design choices

A review of [SoterCoach](https://www.soter.com/sotercoach), [SoterEHS](https://www.soter.com/ergonomic-assessment-software) and [Kinetic Reflex](https://kineticcomp.com/reflex-wearable) found repeated emphasis on in-shift wearable feedback, team-level risk trends, targeted coaching and outcome reporting. This site applies those conventions to Backy's movement-cue and tactile data story.

## Before replacing backy.ai

Confirm public pilot results and product claims, confirm current unit fit and battery specifications, review the demo-kit security wording, and replace or validate all enquiry destinations and legal pages.

## 2026-11-26: Source-locked HRP and injury financial case studies

- Public `roi-industries.html` no longer permits visitors to edit HRP reduction or the hypothetical HRP-to-injury coefficient. Its fixed conversion remains 40%, solely as a planning sensitivity without clinical validation.
- The measured values now match the Backy for Safety Teams presentation: logistics 67% fewer HRP events/day, hospitality 29.5% less risky-posture exposure time, healthcare 21.4% less exposure time (and separate 14.5% fewer risky events, 34% fewer forward bends). Other industries remain unmistakably hypothetical.
- The public dashboard includes legally documented Singapore cases: [2024] SGHC 249 WICA back injury award S$26,200 and [2004] SGHC 100 civil lumbar-disc pain/suffering S$15,000. A checked, opt-in Singapore sensitivity allows using S$26,200 as an illustrative claim severity, not a market average.
- The financial methodology and insurance page reiterate that court damages, lump-sum compensation, insured claims and company-retained costs are separate buckets. Never claim the 40% HRP-to-injury assumption has been validated or that Backy prevented a documented court case.

## 2026-11-26 employer-funded industry benchmark update

- `roi-industries.html` is exclusively an **employer-purchased Backy** business case. Removed insurer-funded/combined payer selector, insurer payout savings tile, and insurer financing math. Only the employer-retained claim fraction counts in employer savings; an insurance premium adjustment requires actual broker confirmation.
- Every one of seven industry panels shows Australia's official provisional 2024–25 **all-injury** serious-claim frequency, count, median weeks lost and median compensation (Safe Work Australia, Key WHS Statistics 2026). Administrative/support services is explicitly only a proxy for cleaning.
- Singapore panels add MOM 2025 serious injury context for logistics/construction/manufacturing or 2020–H1 2024 national WRMSD back-share context for the other industries. UK panels show HSE 2023/24–2025/26 three-year average nonfatal injury rates (all injury types). Figures from Australia never morph into local injury statistics on country selection.
- Each panel cites independent intervention or occupational injury research to explain ergonomic potential. **Not Backy outcomes**. Backy-reported 67% logistics HRP, 29.5% hospitality risk-exposure and 21.4% healthcare risk-exposure results are the only company-reported improvements shown as measured.
- The 40% conversion from posture improvement to injury reduction is fixed, hypothetical and not clinically established, so the financial outputs remain prospective and do not guarantee positive ROI.

## Latest public Impact Explorer UX (2026-11-26)

- Current public experience is `roi-industries.html` (link from home page) with **exactly three editable fields**: industry, country/region and number of employees. The public regions are **APAC, US, Canada, UK, Germany, Netherlands**; separate Australia and Singapore selectors are removed. **APAC uses Australian serious-injury benchmarks and AUD estimates, not regional averages.**
- Public page shows the actual signed **3-year estimated ROI percentage**, potential operating costs avoided, estimated Backy investment and a single posture-improvement chip. If ROI is negative, display it rather than fabricate a positive result.
- Logistics 67%, hospitality 29.5%, and healthcare 21.4% are labeled as company-reported posture improvements. Percentages for four sectors without Backy results are **indicative pilot targets** only, not "minimum results proven by trials". No invented minimum efficacy is claimed.
- The 40% posture-to-injury conversion is **a fixed illustrative assumption without a validated empirical basis**; it is not shown in the main public experience. Methodology remains separately accessible from a quiet footer link. Avoid presenting injury reduction as observed clinical effect.
- Region pricing previously had null/zero device and monthly costs for CA, UK, DE and NL due to missing exchange multipliers. Corrected with fixed original pricing proxy conversions: CA 1.38, UK 0.76, Germany/Netherlands 0.88; APAC uses AUD 1.53. Currency conversions are assumptions, not live FX rates.
- This section supersedes historical notes in this README about the old seven-panel, insurer-view, insurer case sensitivity, Singapore and Australia options. Those historic pages may still exist separately, but the primary public explorer is deliberately minimal.
