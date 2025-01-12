type MainMenuResult = {
  MainMenu: {
    navItems: {
      id: string
      link: {
        type: string
        label: string
        newTab: boolean
        url: string
        reference: {
          value: {
            path: string
          }
        }
      }
    }[]
  }
}

export const useMainMenu = () => {
  const query = gql`
    query {
      MainMenu {
        navItems {
          id
          link {
            type
            label
            newTab
            url
            reference {
              value {
                ... on Page {
                  path
                }
              }
            }
          }
        }
      }
    }
  `
  return useAsyncQuery<MainMenuResult>(query)
}
