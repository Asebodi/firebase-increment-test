import React from "react"
import { Link } from "gatsby"
// import { db } from "../firebase";

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <input type="text" className="name"/>
    <input type="text" className="email"/>
    <Link to="/registrasi/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
