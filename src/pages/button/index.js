import React, { Component } from 'react'
import { Page, Navbar, ContentBlock, Button } from 'components'
import styles from './index.less'

export default class ButtonPage extends Component {
  render() {
    return (
      <Page className={styles.page}>
        <Navbar>Button</Navbar>
        <ContentBlock title="default">
          <Button>Button</Button>
        </ContentBlock>
        <ContentBlock title="size small">
          <Button small>Button</Button>
          <Button small color="primary">primary</Button>
          <Button small color="green">Button</Button>
          <Button small color="orange">Button</Button>
        </ContentBlock>
        <ContentBlock title="color">
          <Button>Button</Button>
          <Button small color="primary">primary</Button>
          <Button small color="green">green</Button>
          <Button small color="orange">orange</Button>
        </ContentBlock>
        <ContentBlock title="fill">
          <Button fill>Button</Button>
          <Button fill small color="primary">primary</Button>
          <Button fill small color="green">green</Button>
          <Button fill small color="orange">orange</Button>
        </ContentBlock>
        <ContentBlock title="radius">
          <Button radius>Button</Button>
          <Button radius color="green">Button</Button>
          <Button radius small>small</Button>
          <Button radius small fill>small</Button>
        </ContentBlock>
        <ContentBlock title="icon">
          <Button icon="up" small />
          <Button icon="down" />
          <Button icon="right" />
          <Button icon="left" />
          <Button icon="wifi" />
          <Button icon="comment" />
          <Button icon="send" />
          <Button icon="share" />
        </ContentBlock>
        <ContentBlock title="disabled">
          <Button disabled>disabled</Button>
          <Button disabled small>small</Button>
          <Button disabled radius small>radius</Button>
        </ContentBlock>
        <ContentBlock title="row">
          <div className="buttons-row">
            <Button radius small>Button</Button>
            <Button radius color="primary" small>Button</Button>
            <Button radius color="green" small>Button</Button>
            <Button radius color="orange" small>Button</Button>
          </div>
          <div className="buttons-row">
            <Button small>Button</Button>
            <Button color="primary" small>Button</Button>
            <Button color="green" small>Button</Button>
            <Button color="orange" small>Button</Button>
          </div>
        </ContentBlock>
        <ContentBlock title="full">
          <Button full radius>Button</Button>
          <Button full>Button</Button>
        </ContentBlock>
      </Page>
    )
  }
}
