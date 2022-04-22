import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInPutText] = useState("");

  const handleKeyUP = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText) {
      onEnter(inputText);
      setInPutText("");
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => {
          setInPutText(e.target.value);
        }}
        onKeyUp={handleKeyUP}
      />
    </C.Container>
  );
};
