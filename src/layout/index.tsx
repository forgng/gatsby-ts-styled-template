import React, { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren<{}>) {

  return (
    <>
        <main>{children}</main>
    </>
  )
}

export default Layout
