// @flow

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import H4 from "../components/typography/H4"
import H5 from "../components/typography/H5"
import H6 from "../components/typography/H6"
import Body1 from "../components/typography/Body1"

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  padding: 24px;
`

const MenuTitle = styled(H4)`
  padding-bottom: 24px;
  text-align: center;
  text-transform: uppercase;
`

const Section = styled.div`
  margin-bottom: 36px;
`

const SectionTitle = styled(H5)`
  color: ${props => props.theme.secondaryText};
  margin-bottom: 26px;
  text-transform: uppercase;
`

const ItemList = styled.ul`
  list-style: none;

  li {
    margin-bottom: 24px;
  }
`

const ItemInfo = styled(Body1)`
  color: ${props => props.theme.blackAt60};
`

type Props = {}

function MenuPage(props: Props): React.node {
  const data = useStaticQuery(graphql`
    query MenuItemsQuery {
      allMenuItemsJson {
        edges {
          node {
            description
            id
            name
            items {
              id
              title
              description
            }
          }
        }
      }
    }
  `)
  const [items, setItems] = React.useState(() => [])

  React.useEffect(() => {
    function getItems(): React.Node {
      return data.allMenuItemsJson.edges.map(obj => (
        <Section key={obj.node.id}>
          <SectionTitle>{obj.node.name}</SectionTitle>
          <ItemList>
            {obj.node.items.map(menuItem => (
              <li key={menuItem.id}>
                <H6>{menuItem.title}</H6>
                <ItemInfo>{menuItem.description}</ItemInfo>
              </li>
            ))}
          </ItemList>
        </Section>
      ))
    }

    if (!items.length) {
      setItems(getItems())
    }
  }, [items])

  return (
    <Layout>
      <SEO title="El Palote Foods | Menu" />
      <Wrapper>
        <MenuTitle>menu</MenuTitle>
        {items}
      </Wrapper>
    </Layout>
  )
}

export default React.memo(MenuPage)
