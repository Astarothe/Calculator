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
          {historyItems.map((t, i) => <HistoryItem key={i}>{t}</HistoryItem>)}
        </HistoryItemWrapper>
      </HistoryWrapper>
    </ErrorBoundary>
  )
}
