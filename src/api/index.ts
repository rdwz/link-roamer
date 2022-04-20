import { http } from '@google-cloud/functions-framework'
import fetch from 'node-fetch'
import LinkStatus from './LinkStatus'

const getStatus = (link: string) => {
  async function fetchStatus(retries: number, method = 'HEAD') {
    const controller = new globalThis.AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 12000)

    try {
      const response = await fetch(link, {
        signal: controller.signal,
        method,
      })

      clearTimeout(timeout)

      if (response.status === 405 && retries >= 0) {
        fetchStatus(retries - 1, 'GET')
      }

      if (response.status === 404 && retries >= 0) {
        fetchStatus(retries - 1, method)
      }

      return new LinkStatus(link, response)
    } catch (error) {
      if (retries >= 0) {
        fetchStatus(retries - 1, method)
      }

      return new LinkStatus(link)
    }
  }

  return fetchStatus(5)
}

const resolveSettledPromises = (promise: PromiseSettledResult<LinkStatus>) => {
  switch (promise.status) {
    case 'fulfilled':
      return promise.value

    case 'rejected':
      return new LinkStatus('')
  }
}

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)
  const results = (await Promise.allSettled(links.map(getStatus))).map(
    resolveSettledPromises
  )
  response.send(JSON.stringify(results))
})
