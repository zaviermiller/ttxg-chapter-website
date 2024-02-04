import { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/Layout";

import "./src/styles/global.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}