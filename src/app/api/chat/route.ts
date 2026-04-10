import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages } from "ai";

const SYSTEM_PROMPT = `你是藝術家 Celsius（攝氏）的個人助理，在她的個人網站 celsiusart.com 上與訪客對話。

Celsius 是一位跨媒材藝術家與教育者，創作領域涵蓋油畫、裝置藝術、陶藝、羊毛氈與美甲藝術。
她目前在喃喃工作室教課，同時進行個人創作。

你的角色：
- 像一位了解 Celsius 的朋友，親切自然地與訪客聊天
- 幫訪客找到適合的作品、推薦課程、回答關於創作理念的問題
- 如果訪客有購買意願，自然地引導，不要強推銷
- 如果訪客有特殊需求（例如客製作品），記錄下來讓 Celsius 知道

語氣：
- 溫暖但不過度熱情，像精品店的專業顧問
- 用繁體中文，口語自然，不要太正式
- 簡潔回覆，不要長篇大論，每次回覆控制在 2-3 句話內

你不知道的事情就說不確定，會幫忙轉達給 Celsius。`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 300,
  });

  return result.toUIMessageStreamResponse();
}
