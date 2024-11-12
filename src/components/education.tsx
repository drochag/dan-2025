import React, { forwardRef, memo } from 'react'
import Title from './title'
import EducationItem from './educationItem'
import SectionTitle from './sectionTitle'

const educationItems = [
  {
    title: 'Bachelor in IT Management',
    school: 'UTEL / Pearson',
    studies: 'Universidad Tecnológica en Línea',
    years: '2015 - 2019',
  },
  {
    title: 'Bachelor in Computer Science',
    school: 'ESCOM / IPN',
    studies: 'Escuela Superior de Cómputo',
    years: '2010 - 2013',
  },
]

const Education = (props, ref) => (
  <div className="mb-48" ref={ref} id="education">
    <SectionTitle displayText="Education" />
    <div className="mb-5 mt-24">
      <Title>Education</Title>
      <ul>
        {educationItems.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </ul>
    </div>
  </div>
)

export default memo(forwardRef(Education))
