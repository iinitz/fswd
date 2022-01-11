import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import {
  Page, PageReferences, PageReferencesLink, PageSection,
} from '../../components/Page'

const FutureOfWebPage: NextPage = () => (
  <Page slug="future-of-web">
    <PageSection id="web3" title="Web 3.0">
      <Typography gutterBottom>
        Artificial intelligence has matured and is now embedded in every user interaction on web pages. Algorithms analyze and extrapolate the data generated by user interactions to suggest additional articles or merchandise based on their preferences. Tim Berners-Lee envisioned Semantic Web as the Web 3.0 where machines eventually process information like a human brain. In short, messages would be understood contextually and conceptually
      </Typography>
      <Typography gutterBottom>
        Thus Web 3.0 was fully projected: machines that understood all data (Semantic Web) would solve issues with optimization through machine learning (Artificial Intelligence) providing an ideal premise for a digital ecosystem where data can be shared among devices (Internet of Things). However, the trajectory of Web 3.0 has headed in another direction after the rise of blockchain
      </Typography>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://medium.com/polkadot-network/one-article-to-understand-the-past-present-and-future-of-web-3-0-5433962b7c3e" title="One Article to Understand The Past, Present, and Future of Web 3.0" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default FutureOfWebPage