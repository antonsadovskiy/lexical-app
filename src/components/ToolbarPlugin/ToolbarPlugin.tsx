import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const onClickBold = () => {
    editor.update(() => {
      const root = $getRoot();
      const paragraph = $createParagraphNode();
      const text = $createTextNode("bold");
      paragraph.append(text);
      root.append(paragraph);
    });
  };
  const onClickItalic = () => {
    editor.update(() => {
      const root = $getRoot();
      const paragraph = $createParagraphNode();
      const text = $createTextNode("italic");
      paragraph.append(text);
      root.append(paragraph);
    });
  };
  return (
    <ToggleButtonGroup>
      <ToggleButton value="bold" onClick={onClickBold}>
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" onClick={onClickItalic}>
        <FormatItalicIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
