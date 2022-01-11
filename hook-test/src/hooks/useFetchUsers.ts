import { useState } from "react"
import axios from "axios"
import type { UserList } from "../types/userList"
import type { User } from "../types/User"

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  const [userList, setUserList] = useState<UserList | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグ on、エラーフラグ off
    setIsLoading(true)
    setIsError(false)

    // API の実行
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        // 苗字と名前を統合するように変換
        const users = result.data.map((user: User) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }))
        // ユーザー一覧 State を更新
        setUserList(users)
      })
      // エラーの場合はエラーフラグを on
      .catch(() => setIsError(true))
      // 処理完了後はローディングフラグを off
      .finally(() => setIsLoading(false))
  }

  // まとめて返却したいのでオブジェクトに設定する
  return { userList, isLoading, isError, onClickFetchUser }
}
