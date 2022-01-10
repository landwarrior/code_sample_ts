// "react" から useContext を import
import { useContext } from "react";

// 作成した Context を import
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  // Context 内の isAdmin を取得
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
