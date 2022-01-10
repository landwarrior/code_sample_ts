import type { FC } from "react"
import type { User } from "../types/user"

// FC はコンポーネントの型定義
// JSXを返却していないとエラーになったりするらしい
// children の型定義は明示的にした方がいい
// children: React.ReactNode

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor, hobbies } = props
  return (
    <p style={{ color: personalColor }}>
      {id} : {name}({age}) {hobbies?.join(" / ")}
    </p>
  )
}

ListItem.defaultProps = {
  personalColor: "grey",
}
