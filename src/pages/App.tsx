import React from 'react'
import ThemeProvider from '../providers/ThemeProvider'
import { CategoryTabs, Header, Layout } from '../components'
import { DataProvider } from '../providers/DataProvider'
import { CheckedItemsProvider } from '../providers/CheckedItems'
import Footer from '../components/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <CheckedItemsProvider>
          <Layout>
            <Header />
            <CategoryTabs />
            <Footer />
          </Layout>
        </CheckedItemsProvider>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
