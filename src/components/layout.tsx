import React, { memo } from 'react'
import Information from './information'
import Menu from './menu'
import Icons from './icons'

const Layout = refs => (
  <div>
    <Information />
    <Menu {...refs} />
    <Icons />
  </div>
)

export default memo(Layout)
