import type { FC } from "react"
import React, { createContext, useState } from "react"

export const AdminFlagContext = createContext(
  {} as {
    isAdmin: boolean
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
  }
)

type Children = {
  children: React.ReactNode
}

export const AdminFlagProvider: FC<Children> = (props) => {
  const { children } = props

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false)

  // Context オブジェクトとして isAdmin と setIsAdmin を設定（オブジェクトの省略記法）
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  )
}
