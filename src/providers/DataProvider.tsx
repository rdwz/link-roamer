import React, { useEffect, useMemo, useState } from 'react'
import LinkStatus from '../api/LinkStatus'
import c from '../scripts/Chrome'
import { gatherHrefs } from '../scripts/execute-scripts'
import Link from '../scripts/Link'
import { default as LinksHandler } from '../scripts/LinksHandler'
import { Children, LinkData } from '../types'

interface DataContextProps {
  data: LinkData
  setData: React.Dispatch<React.SetStateAction<LinkData>>
}

const DataContext = React.createContext({} as DataContextProps)

export const DataProvider = ({ children }: Children) => {
  const [data, setData] = useState<LinkData>({
    links: [],
    loading: true,
  })

  const dataMemo = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  )

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await c.getActiveTab()

      if (id) {
        const { links } = new LinksHandler(
          (await c.executeScript<string[]>(id, gatherHrefs))
            .map((link) => new Link(link))
            .filter((link) => link.isHttp)
        )

        links.length > 0
          ? setData({ links, loading: true })
          : setData({ links: [], loading: false })
      }
    }

    fetchData().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (data.links.length > 0) {
        const result = await c.fetchLinks(data.links)

        const links = data.links.map((link) => {
          link.status =
            result.find(({ originUrl }) => originUrl === link.href) ??
            new LinkStatus(link.href)
          return link
        })

        if ('isDevEnv') {
          const lp = new LinksHandler(links)
          const invalid = links.filter((link) => !link.status.validResponse)
          const notOk = lp.notOkLinks
          const redirected = lp.redirectedLinks
          const invalidQty = invalid.length
          const resultQty = result.length

          console.log('Redirected -> ', redirected)
          console.log('After Status Fetch -> ', result, resultQty)
          console.log('Not ok -> ', notOk, notOk.length)
          console.log('Empty link status -> ', invalid, invalidQty)
          console.log('Links -> ', links)
        }

        setData({ links, loading: false })
      }
    }

    fetchData().catch(console.error)
  }, [data.links.length])

  return (
    <DataContext.Provider value={dataMemo}>{children}</DataContext.Provider>
  )
}

export const useData = () => React.useContext(DataContext)
