import React from 'react'
import { showMore } from '~/assets/images'

const MoreActions = React.memo(() => {
  const handleShowMoreActions = () => {
    alert('Are you OKE!')
  }

  return (
    <div
      className="flex bg-button fixed justify-center items-center text-center rounded-full transition-all cursor-pointer opacity-100 bottom-12 left-5 z-10 w-10 h-10 hover:opacity-60"
      onClick={() => handleShowMoreActions()}
      onKeyDown={() => handleShowMoreActions()}
      tabIndex={0}
      role="button"
    >
      <img className="w-8 h-8" src={showMore} alt="more action" />
    </div>
  )
})

MoreActions.displayName = 'MoreActions'

export default MoreActions
