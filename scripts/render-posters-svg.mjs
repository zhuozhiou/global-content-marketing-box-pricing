import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const exec = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "posters/20260803");

const plans = [
  {
    id: "trial", color: "#54D8FF", color2: "#3974FF", label: "TRY FIRST · 轻松开始",
    title1: "先跑通一次", title2: "完整内容工作流", price: "¥68", period: "30天体验包",
    lead: "用 30 天验证选题、脚本、图片与视频的真实生产效率。",
    image: "约 1,250 张", imageSub: "轻量图片", video: "约 9 条", videoSub: "10秒轻量视频",
    points: "5,000 平台积分", capability: "选题 · 脚本 · 图片 · 视频", footer1: "30天完整体验", footer2: "新客限购一次",
    headline: "感兴趣，就先买一份试试", cta: "低门槛开始，用一次真实业务验证效果。"
  },
  {
    id: "personal", color: "#FFBE68", color2: "#FF7A45", label: "PERSONAL · 持续内容生产",
    title1: "一个人，也能持续做", title2: "全球内容营销", price: "¥3,000", period: "一年个人版",
    lead: "让每天的选题、脚本、图片与视频，变成稳定的内容生产习惯。",
    image: "约 50,000 张", imageSub: "轻量图片", video: "约 377 条", videoSub: "10秒轻量视频",
    points: "200,000 年度积分", capability: "一年软件许可证 · 按需增值", footer1: "全年内容生产", footer2: "个人创作者 · 一人公司",
    headline: "把内容生产变成长期能力", cta: "一年许可证和年度额度，按你的节奏持续生产。"
  },
  {
    id: "enterprise", color: "#B39AFF", color2: "#55D6FF", label: "ENTERPRISE · 团队规模化生产",
    title1: "让团队拥有自己的", title2: "内容营销生产中心", price: "¥30,000", period: "一年企业版",
    lead: "一套年度服务，统一承接团队的内容生产、协作与管理。",
    image: "约 675,000 张", imageSub: "轻量图片", video: "约 5,094 条", videoSub: "10秒轻量视频",
    points: "2,700,000 企业共享积分", capability: "企业后台 · 团队协作 · 内容营销盒子硬件", footer1: "企业后台与团队协作", footer2: "许可证与硬件一次配齐",
    headline: "一次配齐团队年度内容能力", cta: "从个人创作升级为可协作、可管理的生产中心。"
  }
];

function poster(p) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1440" viewBox="0 0 1080 1440">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07101f"/><stop offset=".55" stop-color="#08182e"/><stop offset="1" stop-color="#0b1022"/></linearGradient>
  <radialGradient id="glow" cx="82%" cy="11%" r="64%"><stop stop-color="${p.color}" stop-opacity=".27"/><stop offset="1" stop-color="${p.color}" stop-opacity="0"/></radialGradient>
  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p.color}"/><stop offset="1" stop-color="${p.color2}"/></linearGradient>
  <filter id="shadow"><feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000" flood-opacity=".35"/></filter>
</defs>
<rect width="1080" height="1440" fill="url(#bg)"/><rect width="1080" height="1440" fill="url(#glow)"/>
<g opacity=".09" stroke="#FFF"><path d="M0 90H1080M0 180H1080M0 270H1080M0 360H1080M0 450H1080M0 540H1080M0 630H1080M0 720H1080M0 810H1080M0 900H1080M0 990H1080M0 1080H1080M0 1170H1080M0 1260H1080M0 1350H1080"/><path d="M90 0V1440M180 0V1440M270 0V1440M360 0V1440M450 0V1440M540 0V1440M630 0V1440M720 0V1440M810 0V1440M900 0V1440M990 0V1440"/></g>
<g font-family="PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif">
  <rect x="64" y="60" width="34" height="34" rx="10" fill="none" stroke="${p.color}" stroke-width="8" transform="rotate(10 81 77)"/>
  <text x="120" y="88" fill="#F7F8FB" font-size="28" font-weight="700">全球内容营销盒子</text>
  <rect x="757" y="55" width="259" height="48" rx="24" fill="${p.color}" fill-opacity=".11" stroke="${p.color}" stroke-opacity=".6"/>
  <text x="886" y="86" fill="${p.color}" font-size="17" font-weight="700" text-anchor="middle">扫码即购 · 现场专享</text>
  <line x1="64" y1="128" x2="1016" y2="128" stroke="#FFF" stroke-opacity=".16"/>
  <text x="64" y="197" fill="${p.color}" font-size="19" font-weight="800" letter-spacing="3">${p.label}</text>
  <text x="64" y="279" fill="#F7F8FB" font-size="62" font-weight="800">${p.title1}</text>
  <text x="64" y="350" fill="#F7F8FB" font-size="62" font-weight="800">${p.title2}</text>
  <text x="64" y="399" fill="#BEC7D7" font-size="22">${p.lead}</text>
  <text x="64" y="540" fill="#FFF" font-size="104" font-weight="800">${p.price}</text>
  <text x="${p.id === "enterprise" ? "630" : "415"}" y="530" fill="${p.color}" font-size="25" font-weight="700">${p.period}</text>
  <rect x="64" y="590" width="952" height="404" rx="32" fill="#09172B" fill-opacity=".88" stroke="${p.color}" stroke-opacity=".42" filter="url(#shadow)"/>
  <text x="102" y="654" fill="#F7F8FB" font-size="28" font-weight="800">套餐包含什么</text>
  <text x="102" y="692" fill="#AEB8CB" font-size="17">以下产出均按全部额度只用于一种轻量内容估算</text>
  <rect x="102" y="730" width="424" height="152" rx="22" fill="#FFF" fill-opacity=".07" stroke="#FFF" stroke-opacity=".10"/>
  <text x="132" y="796" fill="${p.color}" font-size="36" font-weight="800">${p.image}</text>
  <text x="132" y="838" fill="#CFD6E3" font-size="20">${p.imageSub} · 全部额度投入图片</text>
  <rect x="554" y="730" width="424" height="152" rx="22" fill="#FFF" fill-opacity=".07" stroke="#FFF" stroke-opacity=".10"/>
  <text x="584" y="796" fill="${p.color}" font-size="36" font-weight="800">${p.video}</text>
  <text x="584" y="838" fill="#CFD6E3" font-size="20">${p.videoSub} · 全部额度投入视频</text>
  <line x1="102" y1="914" x2="978" y2="914" stroke="#FFF" stroke-opacity=".13"/>
  <text x="102" y="956" fill="${p.color}" font-size="21" font-weight="800">${p.points}</text>
  <text x="102" y="984" fill="#DFE4EF" font-size="18">${p.capability}</text>
  <rect x="64" y="1042" width="703" height="244" rx="30" fill="#FFF" fill-opacity=".04" stroke="#FFF" stroke-opacity=".12"/>
  <text x="104" y="1100" fill="${p.color}" font-size="18" font-weight="800" letter-spacing="2">立即开始</text>
  <text x="104" y="1160" fill="#F7F8FB" font-size="35" font-weight="800">${p.headline}</text>
  <text x="104" y="1210" fill="#BFC8D8" font-size="19">${p.cta}</text>
  <rect x="801" y="1042" width="215" height="215" rx="26" fill="#FFF" stroke="${p.color}" stroke-width="3" stroke-dasharray="9 7"/>
  <g fill="${p.color2}" opacity=".8"><rect x="836" y="1077" width="22" height="22"/><rect x="872" y="1077" width="16" height="16"/><rect x="916" y="1077" width="30" height="30"/><rect x="836" y="1115" width="15" height="15"/><rect x="875" y="1113" width="27" height="27"/><rect x="922" y="1126" width="17" height="17"/><rect x="838" y="1157" width="32" height="32"/><rect x="890" y="1160" width="16" height="16"/><rect x="925" y="1165" width="24" height="24"/></g>
  <text x="908" y="1221" fill="#18223A" font-size="17" font-weight="800" text-anchor="middle">购买二维码</text>
  <text x="908" y="1244" fill="#64708A" font-size="13" text-anchor="middle">后续嵌入</text>
  <rect x="64" y="1320" width="952" height="1" fill="#FFF" fill-opacity=".16"/>
  <text x="64" y="1366" fill="${p.color}" font-size="20" font-weight="800">${p.footer1}</text>
  <text x="1016" y="1366" fill="#B8C2D4" font-size="17" text-anchor="end">${p.footer2}</text>
  <text x="64" y="1406" fill="#8E99AD" font-size="13">约可生成数量按轻量基础规格估算；混用或选择更高规格时数量会相应变化</text>
</g></svg>`;
}

await mkdir(out, { recursive: true });
for (const plan of plans) {
  const svg = path.join(out, `${plan.id}-poster-source.svg`);
  const png = path.join(out, `${({ trial: "体验包_68元_5000积分_30天.png", personal: "个人版_3000元年费_20万积分.png", enterprise: "企业版_30000元年费_270万积分.png" })[plan.id]}`);
  await writeFile(svg, poster(plan), "utf8");
  await exec("/usr/bin/sips", ["-s", "format", "png", svg, "--out", png]);
}
