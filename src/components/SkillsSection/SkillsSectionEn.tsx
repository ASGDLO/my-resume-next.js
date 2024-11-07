'use client'
import React, { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Skill = {
  name: string
  description: string
}

type SkillCategory = {
  category: string
  skills: Skill[]
}

const sanitizeId = (name: string) => {
  return name.replace(/[^a-zA-Z0-9-_]/g, '_');
};

function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showAll, setShowAll] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: [
        {
          name: "Python",
          description: "Participated in the freqtrade open-source project to develop features necessary for trading and designed scalable code using object-oriented programming techniques. This included adding multiple timeframe functionality to enhance the system's flexibility and capabilities."
        },
        {
          name: "GO",
          description: "Used to build high-performance microservices and data processing middleware. Efficiently implemented concurrency to increase system throughput and stability."
        },
        {
          name: "TypeScript",
          description: "Utilized in the development of the fund subscription system and the frontend of the VGG19 image generation AI service. Enhanced code stability and maintainability through static typing, and systematically managed the structure of complex applications."
        },
        {
          name: "JavaScript",
          description: "Employed for client and server-side scripting in projects like the ERC-721 NFT fund subscription. Implemented seamless communication between the user interface and server logic using asynchronous programming and event-driven architecture."
        },
        {
          name: "HTML/CSS",
          description: "Used to build responsive and visually appealing user interfaces in web-based projects. Leveraged frameworks like shadcn and Tailwind to provide a consistent user experience across various devices."
        }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {
          name: "FastAPI",
          description: "Designed and implemented high-performance middleware communicating with over 250 servers. Optimized asynchronous request handling and data validation to build an API system that ensures high scalability and fast response times."
        },
        {
          name: "Node.js",
          description: "Developed high-performance server applications using asynchronous programming and the event loop. Built RESTful APIs and integrated with databases to implement backend logic."
        },
        {
          name: "Express.js",
          description: "Used alongside Node.js to build RESTful API servers. Utilized middleware to control the flow of requests and responses, efficiently managing routing and error handling."
        },
        {
          name: "Next.js",
          description: "Developed SEO-optimized web applications using server-side rendering and static site generation. Improved performance and scalability of complex websites through dynamic routing and API routes."
        },
        {
          name: "React.js",
          description: "Used for frontend development in projects like the VGG19 image generation AI service. Created reusable UI components using a component-based architecture and maintained UI consistency through state management."
        },
        {
          name: "Flask",
          description: "Designed and implemented RESTful APIs for projects requiring rapid web service development and deployment. Ensured smooth communication between multiple containers to launch reliable and scalable web services."
        },
        {
          name: "TensorFlow",
          description: "Designed and trained deep learning models for image recognition projects. Managed the entire process from data preprocessing to model optimization, achieving over 95% accuracy."
        },
        {
          name: "Hardhat & Truffle",
          description: "Set up Hardhat and Truffle environments for smart contract development and wrote contracts in Solidity. Enhanced development efficiency by utilizing testing and debugging features, and deployed and tested on local networks."
        }
      ]
    },
    {
      category: "Infrastructure & Databases",
      skills: [
        {
          name: "AWS",
          description: "Built efficient cloud infrastructure by integrating EC2, ECS, EKS, ECR, IGW, ELB, and CDN. Optimized automation scripts and security settings, designed architectures for cost reduction, and successfully completed cloud migration of services."
        },
        {
          name: "Kubernetes",
          description: "Deployed applications to Kubernetes clusters through containerization. Configured auto-scaling and load balancing to ensure system availability and scalability."
        },
        {
          name: "Docker",
          description: "Packaged applications into containers and simplified the deployment of complex services using Docker Compose. Managed image versioning and deployment efficiently using Docker Hub."
        },
        {
          name: "Nginx",
          description: "Configured Nginx as a web server and reverse proxy for traffic management and server load balancing. Optimized caching and SSL/TLS settings to improve response times and enhance security."
        },
        {
          name: "Celery",
          description: "Integrated Celery into applications requiring asynchronous task processing to manage job queues. Efficiently distributed time-consuming tasks to enhance system performance."
        },
        {
          name: "RabbitMQ",
          description: "Used alongside Celery as a message broker to manage task priorities and retry logic. Enhanced system reliability and response speed through stable message delivery."
        },
        {
          name: "MySQL",
          description: "Designed database schemas and optimized complex SQL queries to improve data access speeds. Increased the efficiency of handling large-scale data processing through indexing and join optimizations."
        },
        {
          name: "Redis",
          description: "Developed caching middleware to improve transaction processing speed by 70%. Enhanced system responsiveness and throughput through session management and real-time data processing."
        },
        {
          name: "Linux",
          description: "Automated development and deployment environments using advanced commands and scripts. Optimized system resource management and security settings to ensure stable server operations."
        },
        {
          name: "Prometheus & Grafana",
          description: "Collected metrics using Prometheus and visualized them with Grafana for system monitoring. Set up alerts to detect and respond to system anomalies in real-time."
        },
        {
          name: "Asyncio",
          description: "Built a system that delivers webhooks to multiple servers simultaneously using asynchronous programming. Achieved efficient communication and low latency even under high traffic conditions."
        }
      ]
    },
    {
      category: "Tools & IDEs",
      skills: [
        {
          name: "Vim",
          description: "Established an efficient code editing environment through custom configurations and quickly performed server management tasks."
        },
        {
          name: "VS Code",
          description: "Enhanced development productivity by utilizing various plugins and extensions, making it the primary IDE for most projects."
        },
        {
          name: "Cursor",
          description: "Improved development speed and reduced errors by leveraging AI-based code completion features."
        },
        {
          name: "Git",
          description: "Used for version control in all projects, efficiently managing branch strategies and collaborative workflows."
        },
        {
          name: "GitHub",
          description: "Hosted project source code and improved team collaboration through issue tracking and code reviews."
        },
        {
          name: "GitLab CI",
          description: "Automated the build, test, and deployment processes by setting up continuous integration and deployment pipelines."
        },
        {
          name: "Jira",
          description: "Managed agile development processes and tracked issues and tasks to enhance project transparency and efficiency."
        },
        {
          name: "Confluence",
          description: "Facilitated team collaboration and information sharing by utilizing as a platform for project documentation and knowledge sharing."
        }
      ]
    }
  ]

  const handleMouseEnter = (skill: Skill, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = skillsRef.current?.getBoundingClientRect()
    if (rect) {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setPosition({ x, y })
      setActiveSkill(skill)
    }
  }

  const handleMouseLeave = () => {
    setActiveSkill(null)
  }

  const toggleShowAll = () => {
    setShowAll(prev => !prev)
  }

  return (
    <Card className="mb-8 relative">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-3xl font-bold text-blue-500">SKILLS</CardTitle>
          <Button onClick={toggleShowAll} variant="outline" size="sm">
            {showAll ? 'Hide All' : 'Show All'}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-8" ref={skillsRef}>
        {skillCategories.map((category, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
            <div className="text-lg text-muted-foreground">{category.category}</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div
                    id={`skill-${sanitizeId(skill.name)}`}
                    className="text-gray-700 cursor-pointer"
                    onMouseEnter={(e) => handleMouseEnter(skill, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    • {skill.name}
                  </div>
                  {showAll && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {!showAll && activeSkill && (
          <div
            className="absolute z-10 bg-popover text-popover-foreground p-4 rounded-md shadow-lg w-96"
            style={{
              left: `${position.x + 20}px`,
              top: `${position.y + 20}px`,
            }}
          >
            <h3 className="font-semibold mb-2 text-lg">{activeSkill.name}</h3>
            <p className="text-base">{activeSkill.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default SkillsSection