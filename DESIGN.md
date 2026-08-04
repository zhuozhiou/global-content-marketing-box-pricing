# 全球内容营销盒子定价页设计系统

## Color

- Canvas: `#F6F7FB`
- Surface: `#FFFFFF`
- Surface soft: `#F0F2F8`
- Ink: `#161A2B`
- Ink muted: `#667085`
- Border: `#E2E6F0`
- Primary: `#4E5DE7`
- Primary deep: `#3544CB`
- Primary soft: `#EEF0FF`
- Accent: `#7A5AF8`
- Success: `#16A36A`
- Warning: `#F79009`
- Footer: `#10142D`

## Typography

- Chinese and UI: `Inter`, `"PingFang SC"`, `"Microsoft YaHei"`, sans-serif
- Display: `Inter`, `"PingFang SC"`, sans-serif
- Hero: `clamp(38px, 6vw, 68px)`, 760 weight
- Section heading: `clamp(28px, 4vw, 42px)`, 720 weight
- Price number: `48px`, 760 weight
- Body: `16px`, 1.7 line height
- Small: `13px`–`14px`

## Layout

- Maximum content width: `1180px`
- Desktop gutter: `28px`
- Mobile gutter: `18px`
- Section spacing: `96px`; mobile `64px`
- Card radius: `22px`
- Small component radius: `14px`
- Subtle shadow: `0 18px 50px rgba(31, 38, 86, .08)`

## Components

- Navigation: white translucent surface, compact wordmark, restrained links.
- Hero: centered title, short explanation, three proof chips.
- Pricing cards: white cards, one purple recommended card, clear price and credit amount.
- Pricing cards: exactly three cards—trial, personal, enterprise. No standalone hardware package or hidden fourth tier.
- Add-on cards: show the customer's flexible use story only; do not show channels, rebates, or cooperation policies.
- Output section: use customer-readable “approximately how many light images / 10-second light videos” estimates, never model names or per-task point consumption.
- Comparison table: follow a LinkFox-style detailed comparison of purchase terms, content output references, and product / team rights rather than artificial feature tiers.
- FAQ: native `details/summary`.
- CTA: dark footer band with one primary white button.

## UX rules

- The personal plan is the only visually dominant plan.
- “目前有且只有三个套餐” must be explicit.
- Trial is not tied to hardware; personal does not imply hardware; enterprise explicitly includes gifted hardware.
- Public output examples use the ordinary table internally but do not expose the point table; the lowest-quality baseline must be named as “轻量图片” or “10秒轻量视频”.
- Customer-facing posters do not display channel incentives, supplier costs, margin rules, or internal hardware-binding language.
- Internal costs, suppliers, margins, token pricing and model route names must never appear.
- Every output estimate says it is an approximate all-credit, single-content-type estimate and states image quality or video duration.
- Mobile pricing cards stack; comparison table scrolls horizontally.
