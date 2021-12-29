import React, { createRef } from 'react'
import { ButtonClear, Heading, WrapperSettings } from '@/pages/Settings/components'
import SwitchTheme from '@/components/A6_SwitchTheme'
import { connect } from 'react-redux'
import { clearHistoryAC } from '@/actions'
import { ErrorBoundary } from '@/components/A7_ErrorBoundary/ErrorBoundary'


class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.settings = createRef()
    this.dispatch = this.props.dispatch
    this.handleClearHistory = this.props.handleClearHistory
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
          <ButtonClear onClick={this.handleClearHistory}>
            Clear All History
          </ButtonClear>
        </WrapperSettings>
      </ErrorBoundary>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleClearHistory: () => dispatch(clearHistoryAC()),
})

export default connect(null,mapDispatchToProps)(SettingsPage)
