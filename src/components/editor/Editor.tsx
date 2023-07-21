import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import s from "./Editor.module.css";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { ToolbarPlugin } from "../ToolbarPlugin/ToolbarPlugin.tsx";

const theme = {};

function onError(error: Error) {
  console.error(error);
}

export const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={s.wrapper}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className={s.contentEditable} />}
          placeholder={<div className={s.placeholder}>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
};
