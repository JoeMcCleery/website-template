import type { MainMenu } from '@common/payload-types'

export const useMainMenu = () => {
  const query = gql`
    query {
      MainMenu {
        navItems {
          id
          link {
            type
            newTab
            url
            label
            reference {
              value {
                ... on Page {
                  path
                }
              }
            }
            icon {
              type
              name
              filled
              media {
                url
                alt
              }
              position
            }
          }
        }
      }
    }
  `
  return useAsyncQuery<{ MainMenu: MainMenu }>(query)
}
