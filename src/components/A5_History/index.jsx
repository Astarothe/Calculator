import React from 'react'
import { HistoryItem, HistoryTitle, HistoryWrapper, HistoryItemWrapper } from '@/components/A5_History/components'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from '@/components/A7_ErrorBoundary/ErrorBoundary'

export const History = () => {
  const historyItems = useSelector(state => state.history.historyItems)

  return (
    <ErrorBoundary>
      <HistoryWrapper>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryItemWrapper>
          {historyItems.map((element, index) => <HistoryItem key={index}>{element}</HistoryItem>)}
        </HistoryItemWrapper>
      </HistoryWrapper>
    </ErrorBoundary>
  )
}
