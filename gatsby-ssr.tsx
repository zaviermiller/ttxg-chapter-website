import { GatsbySSR } from 'gatsby'
import React from 'react'
import Layout from './src/components/Layout'
const headComponents = [
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />,
]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents)
}

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}