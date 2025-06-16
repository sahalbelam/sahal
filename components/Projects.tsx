import React from 'react'
import Link from 'next/link'

const project = [
    {
        id: 1,
        name: 'DebateHub',
        description: 'Debate platform where users can debate upon trending topics.',
        logo: 'https://vercel.com/api/v0/deployments/dpl_9HKydCj5r2PTXJvuhH1hHkPigdNG/favicon?project=debatehub&readyState=READY&teamId=team_16q9gZPxUJ18FA6JiLkNRTSJ',
        link: 'https://debatehub-five.vercel.app/',
        githubLink:'https://github.com/sahalbelam/debatehub'
    },
    {
        id: 2,
        name: 'Large',
        description: 'Blogging website like Medium but Large.',
        logo: 'https://vercel.com/api/v0/deployments/dpl_BN6TPUVM3yUxiTxjeysUJyff2dCW/favicon?project=large-1lpd&readyState=READY&teamId=team_16q9gZPxUJ18FA6JiLkNRTSJ',
        link: 'https://large-1lpd.vercel.app/',
        githubLink:'https://github.com/sahalbelam/large'
    },
    {
        id: 3,
        name: 'ChatApp',
        description: 'Real-time chat app. Join or Create room. Chat with anyone',
        logo: 'https://vercel.com/api/v0/deployments/dpl_DLjqy3tugbNHAk2sw1yD41oeRNK4/favicon?project=chat-app&readyState=READY&teamId=team_16q9gZPxUJ18FA6JiLkNRTSJ',
        link: 'https://chat-app-tan-eight-94.vercel.app',
        githubLink:'https://github.com/sahalbelam/Chat_APP'
    }
]
const Projects = () => {

    return (
        <div id='projects' className='flex justify-center'>
            <div className='max-w-5xl w-full p-4 mt-4 text-xl'>
                <div className='font-bold text-2xl sm:text-xl'>Projects</div>
                <div className='mt-4 px-2 sm:px-4'>
                    {project.map(p =>
                        <div
                            key={p.id}
                            className='mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 rounded-lg p-4'
                        >
                            <span>
                                <img
                                    src={p.logo}
                                    alt="web logo"
                                    height={60}
                                    width={60}
                                    className="rounded-md object-contain w-16 h-16 sm:w-[70px] sm:h-[70px]"
                                />
                            </span>
                            <div className='flex flex-col'>
                                <p className="text-lg font-semibold">
                                    <Link className='underline' href={p.link || ''} target="_blank" rel="noopener noreferrer">{p.name}</Link>{' | '}
                                    <Link className='underline' href={p.githubLink || ''} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </p>
                                <p className="text-base text-gray-500 dark:text-gray-300">{p.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects