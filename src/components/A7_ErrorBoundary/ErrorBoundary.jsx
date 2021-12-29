import React from 'react'

import { ErrorText } from '@/components/A7_ErrorBoundary/components'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      textError: null,
    }
  }

  // static getDerivedStateFromError(error) {
  //   this.setState({ hasError: true, textError: 'Произошла непредвиденная ошибка, перезапустите приложение' })
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo,textError: 'Произошла непредвиденная ошибка, перезапустите приложение' })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorText>{this.state.textError}</ErrorText>
    }
    return this.props.children
  }
}
