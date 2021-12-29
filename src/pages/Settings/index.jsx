import React, { createRef } from 'react'
import { ButtonClear, Heading, WrapperSettings } from '@/pages/Settings/components'
import SwitchTheme from '@/components/SwitchTheme'
import { connect } from 'react-redux'
import { clearHistoryAC } from '@/actions'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'


class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.settings = createRef()
    this.dispatch = this.props.dispatch
  }

  componentDidMount() {
    setTimeout(() => {
      this.settings.current.style.transition = '0.5s'
      this.settings.current.style.transform = 'translateX(0%)'
      document.body.style.overflowX = 'hidden'
    }, 0)

  }

  componentWillUnmount() {
    this.settings.current.style.transform = 'translateX(100%)'
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    this.settings.current.style.transition = '0.5s'
    this.settings.current.style.transform = 'translateX(0%)'
    document.body.style.overflowX = 'hidden'
  }


  render() {

    return (
      <ErrorBoundary>
        <WrapperSettings ref={this.settings}>
          <Heading>
            Settings
          </Heading>
          <SwitchTheme />
          <ButtonClear onClick={() => this.dispatch(clearHistoryAC())}>
            Clear All History
          </ButtonClear>
        </WrapperSettings>
      </ErrorBoundary>
    )
  }
}

export default connect()(SettingsPage)
