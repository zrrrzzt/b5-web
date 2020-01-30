import Layout from './Layout'
import Navbar from './Navbar'
import Main from './Main'

export default ({ children }) => (
  <Layout>
    <Navbar />
    <Main>
      {children}
    </Main>
  </Layout>
)
