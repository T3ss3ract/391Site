import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>One stop shopping for all things ECE391!</h1>
    <br/>
    <Button variant="contained" color="purple">
    <Link to="/isa/">x86 ISA</Link>
    </Button>
    <br />
    <Button variant="contained" color="red">
    <Link to="/systemcalls/">System Calls and Interrupts</Link>
    </Button>
  </Layout>
)

export default IndexPage
 