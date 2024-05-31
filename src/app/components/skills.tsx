import Image from "next/image"

export const Skills =()=>{
    return (
        <div className="container flex flex-col items-center my-10 gap-[10px]">
            <p className="text-[24px] px-[20px] my-[20px] bg-gray-800 rounded-lg">The skills, tools and technologies i use for projects:</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[200px]">
                <div className="flex flex-col gap-[10px] place-content-between">
                    <h3 className="text-center font-bold text-[18px]">Front-End Development</h3>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/html.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>Hypertext Markup Language</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/css.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>Cascading Style Sheets</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/javascript.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>Programming Language</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/typescript.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>Superset of JavaScript</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/react.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>JavaScript Library for Building User Interfaces</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/next-js.svg'} width={200} height={200} className="h-[50px] w-[50px] invert" alt="html"/>
                        <p>React Framework for Server-Side Rendering and Static Site Generation</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/bootstrap.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>CSS Framework</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/material-ui.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>React UI Framework</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <Image src={'/logos/tailwind.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                        <p>Utility-First CSS Framework</p>
                    </div>
                </div>
                <div  className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[10px]">
                        <h3 className="text-center font-bold text-[18px]">BackEnd</h3>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/node-js.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>Nodejs:JavaScript Runtime Environment</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/express.svg'} width={200} height={200} className="h-[50px] w-[50px] invert" alt="html"/>
                            <p>Web Application Framework for Node.js</p>
                        </div>
                    </div>
                    <div  className="flex flex-col gap-[10px]">
                        <h3 className="text-center font-bold text-[18px]">Database</h3>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/mongodb.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>NoSQL Database</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h3 className="text-center font-bold text-[18px]">API</h3>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/rest-api.svg'} width={200} height={200} className="h-[50px] w-[50px] invert" alt="html"/>
                            <p>Representational State Transfer</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/graphql.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>Query Language for APIs</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/jwt.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>Standard for Creating Access Tokens</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h3 className="text-center font-bold text-[18px]">Testing</h3>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/jest-js-icon.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>JavaScript Testing Framework</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/cypress.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>End-to-End Testing Framework</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h3 className="text-center font-bold text-[18px]">Tools & Utilities</h3>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/github.svg'} width={200} height={200} className="h-[50px] w-[50px] invert" alt="html"/>
                            <p>Version Control and Collaboration Platform</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image src={'/logos/eslint.svg'} width={200} height={200} className="h-[50px] w-[50px]" alt="html"/>
                            <p>Linting Tool for JavaScript and TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}