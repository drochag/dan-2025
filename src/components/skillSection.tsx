import React, { memo } from 'react'

const skillsColumns = [
  [
    {
      title: 'TECHNICAL SKILLS',
      subsections: [
        {
          subtitle: 'FRONT END DEVELOPMENT',
          content:
            'ReactJS, SEO Optimization, Remix, NextJS, GatsbyJS, Apollo, ' +
            'Tailwind, React Native',
        },
        {
          subtitle: 'BACK END DEVELOPMENT',
          content: 'NodeJS, ExpressJS, Prisma, GraphQL',
        },
        {
          subtitle: 'DB DEVELOPMENT',
          content: 'MongoDB, MySQL, Postgres, Supabase',
        },
        {
          subtitle: 'DESKTOP APPLICATIONS',
          content: 'Electron',
        },
        {
          subtitle: 'DEVOPS',
          content:
            'AWS, EC2, S3, EBS, ASG, Serverless, Microservices architecture',
        },
      ],
    },
  ],
  [
    {
      title: 'NON-TECHNICAL',
      subsections: [
        {
          content:
            'Project Management, Team Management, Sprint Planning, ' +
            'Budget Planning, Business Analysis, Requirements Discovery.',
        },
      ],
    },
    {
      title: 'SOFTWARE',
      subsections: [
        {
          content:
            'Jira, Notion, Trello, Slack, Pivotal, ' +
            'InVision, Sketch, Zeplin, Miro, Figma',
        },
      ],
    },
  ],
]

const SkillSection = () => (
  <div className="md:flex flex-none">
    {skillsColumns.map((column, index) => (
      <div
        className={`${index === 0 ? 'md:mr-1.5' : 'md:ml-1.5'} md:w-1/2 w-full`}
        key={index}
      >
        {column.map(skill => (
          <div key={skill.title} className="mb-5">
            <div className="mb-5 text-xl font-bold text-white animate-background rainbow-background inline-block px-6 py-1 rounded-lg">
              {skill.title}
            </div>
            {skill.subsections.map(subsection => (
              <div className="mb-3" key={subsection.content}>
                {subsection.subtitle && (
                  <div className="text-themePink text-lg mb-1 list-element list-element--medium">
                    {subsection.subtitle}
                  </div>
                )}
                <div className="text-gray-200 text-lg">
                  {subsection.content}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    ))}
  </div>
)

export default memo(SkillSection)
