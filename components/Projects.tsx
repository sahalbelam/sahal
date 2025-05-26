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
        link: 'chat-app-tan-eight-94.vercel.app',
        githubLink:'https://github.com/sahalbelam/Chat_APP'
    }
]
const Projects = () => {

    return (
        <div id='projects' className='flex justify-center'>
            <div className='max-w-5xl w-full p-4 mt-4 text-xl'>
                <div className='font-bold'>Projects</div>
                <div className='mt-4 px-4 '>
                    {project.map(p =>
                        <div key={p.id} className='mb-4 flex items-center space-x-3'>
                            <span><img src={p.logo} alt="web logo" height={70} width={70} /></span>
                            <div className=' flex flex-col'>
                                <p><Link className='underline' href={p.link || ''}>{p.name}</Link>{' | '}
                                    <Link className='underline' href={p.githubLink || ''}>GitHub</Link></p>
                                <p>{p.description}</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects