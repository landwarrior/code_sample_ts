import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    window.alert("alert");
  };
  return (
    <>
      <h1 style={{ color: "teal" }}>こんにちは！</h1>
      { /* コンポーネントのタグで囲まれた内容が children としてコンポーネントに渡される */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
