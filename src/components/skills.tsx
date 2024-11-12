import React, { forwardRef, memo } from 'react'
import SectionTitle from './sectionTitle'
import Title from './title'
import SkillSection from './skillSection'

const Skills = (props, ref) => (
  <div className="mb-5" ref={ref} id="skills">
    <SectionTitle displayText="Skills" />
    <Title>Skills</Title>
    <SkillSection />
  </div>
)

export default memo(forwardRef(Skills))
