# Celsius Art Web

藝術家品牌網站 — www.celsiusart.com

## 技術棧

- **框架**: Next.js 16 (App Router) + React 19 + TypeScript
- **樣式**: Tailwind CSS v4
- **AI 聊天**: Vercel AI SDK + Anthropic Claude
- **部署**: Vercel

## 常用指令

```bash
npm run dev      # 開發伺服器 (localhost:3000)
npm run build    # 正式建置
npm run lint     # ESLint 檢查
```

## 專案結構

```
src/
  app/
    page.tsx          # 首頁（單頁式）
    layout.tsx        # 全站 layout
    globals.css       # 全域樣式（Tailwind + 自訂動畫）
    api/chat/         # AI 聊天 API route
    works/            # 作品頁面
    courses/          # 課程頁面
  components/         # UI 元件（Hero, Works, About, Reveal 等）
public/
  works/              # 作品圖片（色鉛筆/油畫/羊毛氈分類）
```

## 設計原則

- 精品路線：大量留白、極簡排版、細膩動態
- 色調以暖灰米色為主，字體用 serif + sans-serif 搭配
- 作品圖片使用暖色調濾鏡，hover 還原真實色彩
- 所有動畫使用 CSS transition，不依賴動畫庫

## 注意事項

- 圖片使用 Next.js `<Image>` 元件，確保有適當的 `sizes` 屬性
- 作品資料目前寫在 `Works.tsx` 內，未來會改接 API
