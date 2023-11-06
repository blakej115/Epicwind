import { SolidMarkdown } from "solid-markdown";
import content from "../../content/documentation/index.md";

export default function Documentation() {
  return <SolidMarkdown children={content} />;
}
