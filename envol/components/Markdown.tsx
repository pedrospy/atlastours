import { Fragment, type ReactNode } from "react";

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\))/g;
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(pattern)) {
    const token = match[0];
    const index = match.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    const key = `${keyBase}-${i++}`;
    if (token.startsWith("**")) {
      out.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      out.push(
        <code key={key} className="rounded bg-ink/5 px-1.5 py-0.5 text-[0.9em]">
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const [, label, href] = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/) ?? [];
      const external = href.startsWith("http");
      out.push(
        <a key={key} href={href} className="font-medium text-brand underline underline-offset-2" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {label}
        </a>,
      );
    }
    last = index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parse(source: string): Block[] {
  const blocks: Block[] = [];
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let paragraph: string[] = [];
  const flush = () => {
    if (paragraph.length) blocks.push({ type: "p", text: paragraph.join(" ") });
    paragraph = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    const last = blocks[blocks.length - 1];
    if (!line) {
      flush();
    } else if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "h3", text: line.slice(4) });
    } else if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("> ")) {
      flush();
      if (last?.type === "quote") last.text += ` ${line.slice(2)}`;
      else blocks.push({ type: "quote", text: line.slice(2) });
    } else if (/^[-*] /.test(line)) {
      flush();
      if (last?.type === "ul") last.items.push(line.slice(2));
      else blocks.push({ type: "ul", items: [line.slice(2)] });
    } else if (/^\d+[.)] /.test(line)) {
      flush();
      const item = line.replace(/^\d+[.)] /, "");
      if (last?.type === "ol") last.items.push(item);
      else blocks.push({ type: "ol", items: [item] });
    } else {
      paragraph.push(line);
    }
  }
  flush();
  return blocks;
}

export function Markdown({ source }: { source: string }) {
  return (
    <div className="space-y-4 text-[15px] leading-7 text-ink/85">
      {parse(source).map((block, i) => {
        const k = `b${i}`;
        switch (block.type) {
          case "h2":
            return <h2 key={k} className="pt-4 font-display text-xl font-bold text-ink">{inline(block.text, k)}</h2>;
          case "h3":
            return <h3 key={k} className="pt-2 font-semibold text-ink">{inline(block.text, k)}</h3>;
          case "quote":
            return (
              <div key={k} className="rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-ink/90">
                {inline(block.text, k)}
              </div>
            );
          case "ul":
          case "ol": {
            const List = block.type === "ul" ? "ul" : "ol";
            return (
              <List key={k} className={`space-y-1.5 pl-5 ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-brand`}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item, `${k}-${j}`)}</li>
                ))}
              </List>
            );
          }
          default:
            return <p key={k}>{inline(block.text, k).map((n, j) => <Fragment key={j}>{n}</Fragment>)}</p>;
        }
      })}
    </div>
  );
}
