import React, { Component } from 'react'
import { ContentBlock, List, Icon, Page, Navbar } from 'clover-ui'
import styles from './index.less'

const Title = ContentBlock.Title
const { Element, Item } = List

export default class SwitchPage extends Component {
  render() {
    const iconProps = {
      fill: true,
      circle: true,
      size: 42,
    }
    return (
      <Page className={styles.home} header={<Navbar>Clover UI</Navbar>}>
        <Title>Basic</Title>
        <List>
          <Item link="/button" media={<Icon type="star" {...iconProps} color="primary" />}>
            <Element type="title">
            Button
            </Element>
          </Item>
          <Item link="/list" media={<Icon type="sound" {...iconProps} color="green" />}>
            <Element type="title">
            List
            </Element>
          </Item>

          <Item link="/icon" media={<Icon type="file" {...iconProps} color="secondary" />}>
            <Element type="title">
            Icon
            </Element>
          </Item>
          <Item link="/grid" media={<Icon type="voice" {...iconProps} color="#4fa5f1" />}>
            <Element type="title">
            Grid
            </Element>
          </Item>
          <Item link="/switch" media={<Icon type="reply" {...iconProps} color="#e91e63" />}>
            <Element type="title">
            Switch
            </Element>
          </Item>
        </List>
      </Page>
    )
  }
}
