import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, Globe, BookOpen } from 'lucide-react'
import LanguageSwitcher from '@/components/stwitch/LanguageSwitcher';

export default function Resume() {
  return (
      <div
        className="max-w-7xl mx-auto pt-20 px-4 sm:px-12 bg-white"
        style={{
          fontFamily: 'Pretendard, sans-serif',
          fontWeight: 300,
          wordWrap: 'break-word',
          wordBreak: 'keep-all',
          lineHeight: 1.8,
        }}
      >
      <header className="flex flex-col sm:flex-row justify-end items-center p-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <LanguageSwitcher />
        {/* Download PDF Button */}
        <Button asChild variant="outline" size="lg">
          <a href="/Resume.pdf" download aria-label="Download Korean Resume as PDF" className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            PDF Download
          </a>
        </Button>
      </header>
      {/* <Card className="mb-12">
        <CardContent className="pt-8"> */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <Image
              src="/face/1692036669246(2).jpg"
              alt="Profile Picture of 이차훈 (Lee Cha Hun)"
              width={235}
              height={235}
              className="rounded-full shadow-lg"
            />
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl font-bold mb-2 text-blue-500">이차훈 (Lee Cha Hun)</h1>
              <p className="text-2xl text-muted-foreground mb-4">Software Developer</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap- mb-6">
                <Badge variant="secondary">Age: 26 (1998.05.04)</Badge>
                <Badge variant="secondary">Seoul, South Korea</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <ContactItem icon={<Mail className="h-5 w-5" />} text="hoon33710@gmail.com" />
                <ContactItem icon={<Phone className="h-5 w-5" />} text="010-2733-3710" /> 
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <SocialButton href="https://github.com/ASGDLO" icon={<Github />} label="GitHub" />
                <SocialButton href="https://www.linkedin.com/in/ethan-cooper-30a4b9213/" icon={<Linkedin />} label="LinkedIn" />
                <SocialButton href="https://www.crypto-build.com" icon={<Globe />} label="Website" />
                <SocialButton href="https://medium.com/@hoon33710" icon={<BookOpen />} label="Medium Blog" />
              </div>
            </div>
          </div>
        {/* </CardContent>
      </Card> */}

      <Card className="mt-16 mb-16">
        <CardHeader>
          <CardTitle className="text-blue-500 text-lg md:text-xl">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <p className="text-muted-foreground text-sm md:text-base">
            I have accumulated diverse experiences as a web service and infrastructure engineer. I have designed, developed, and operated production services using various technologies such as Python, AWS, Next.js, Docker, FastAPI, and Kubernetes, and I am always considering architectures and patterns that offer high scalability and maintainability.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            I am highly interested in open-source projects and strive to apply and contribute to them in various ways. I enjoy gaining diverse development experiences through personal projects and involvement in development communities. I like to share or document useful aspects of my development experiences and have written over 70 technical posts on Medium.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            I always aspire to be the best software developer, and with the goal of becoming the best software leader in the future, I am learning, using, and gaining experience in various technologies.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            I believe that communication between development and business is most important in service development. I strive for problem-solving and business advancement through proactive and active communication. Based on these principles, I continuously learn, experience, and make efforts to grow into a better developer.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-blue-500">SKILL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="text-lg text-muted-foreground">Languages</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ul className="space-y-2">
              <li>• Python</li>
              <li>• GO</li>
            </ul>
            <ul className="space-y-2">
              <li>• TypeScript</li>
              <li>• javascript</li>
            </ul>
            <ul className="space-y-2">
              <li>• HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="text-lg text-muted-foreground">Frameworks & Libraries</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ul className="space-y-2">
              <li>• FastAPI</li>
              <li>• Node.js</li>
            </ul>
            <ul className="space-y-2">
              <li>• Next.js</li>
              <li>• React.js</li>
            </ul>
            <ul className="space-y-2">
              <li>• Express.js</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="text-lg text-muted-foreground">Infrastructure & Databases</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ul className="space-y-2">
              <li>• AWS</li>
              <li>• GCP</li>
              <li>• Kubernetes</li>
              <li>• Docker</li>
            </ul>
            <ul className="space-y-2">
              <li>• Nginx</li>
              <li>• Celery</li>
              <li>• RabbitMQ</li>
              <li>• MySQL</li>
            </ul>
            <ul className="space-y-2">
              <li>• Redis</li>
              <li>• MongoDB</li>
              <li>• Linux</li>
              <li>• Prometheus & Grafana</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="text-lg text-muted-foreground">Tools & IDEs</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ul className="space-y-2">
              <li>• Vim</li>
              <li>• VS Code</li>
              <li>• Cursor</li>
            </ul>
            <ul className="space-y-2">
              <li>• Git</li>
              <li>• Github</li>
              <li>• GitLab CI</li>
            </ul>
            <ul className="space-y-2">
              <li>• Jira</li>
              <li>• Confluence</li>
            </ul>
          </div>
        </div>

      </CardContent>
    </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-500">EXPERIENCE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-blue-500">2024.01 ~ 2024.04</p>
              {/* <Badge variant="secondary">3 months</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">Quantec Investment Advisory</h3>
            <p className="italic text-muted-foreground">Robo-advisor Automation Developer</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Financial Industry / 2.5 trillion KRW scale robo-advisor startup</li>
              <li>Automated stock market rebalancing algorithms using Dagster / Cloud-native orchestration framework</li>
              <li>Refactored and optimized execution speed of stock rebalancing algorithms using Scalene</li>
              <li>Designed and managed AWS infrastructure and MySQL database monitoring using Grafana & Prometheus</li>
              <li>Designed and managed Kubernetes-based container clusters</li>
              <li>Skill Keywords</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Dagster</Badge>
              <Badge variant="outline">Kubernetes</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">MySQL</Badge>
              <Badge variant="outline">Grafana</Badge>
              <Badge variant="outline">Prometheus</Badge>
              <Badge variant="outline">AWS</Badge>
              <Badge variant="outline">Scalene</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-blue-500">2023.04 ~ 2023.12</p>
              {/* <Badge variant="secondary">9 months</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">Werfen</h3>
            <p className="italic text-muted-foreground">Middleware Infrastructure Engineer for University Hospital Medical Data</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>University Hospital Medical Equipment / Blood coagulation, autoimmune disease, testing equipment IT middleware software infrastructure maintenance and management</li>
              <li>Improved usability according to university hospital needs and close communication with overseas partners</li>
              <li>Maintained and managed Kubernetes-based data management system clusters</li>
              <li>Linux server troubleshooting, updates, and monitoring</li>
              <li>Skill Keywords</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Kubernetes</Badge>
              <Badge variant="outline">Oracle</Badge>
              <Badge variant="outline">MS SQL</Badge>
              <Badge variant="outline">ASTM</Badge>
              <Badge variant="outline">HL7</Badge>
              <Badge variant="outline">Linux</Badge>
              <Badge variant="outline">VMware</Badge>
              <Badge variant="outline">C++</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-blue-500">2023.1 ~ 2023.4</p>
              {/* <Badge variant="secondary">3 months</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">mobileapp</h3>
            <p className="italic text-muted-foreground">Intern</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Collected image training data and model training</li>
              <li>Image analysis and inference using Hugging Face environment</li>
              <li>Configured and managed AWS GPU server with CUDA environment</li>
              <li>Skill Keywords</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Yolov7</Badge>
              <Badge variant="outline">Pytorch</Badge>
              <Badge variant="outline">CUDA</Badge>
              <Badge variant="outline">AWS</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-blue-500">Development and Operation of Quantitative Investment Algorithm</h3>
            <p className="text-sm text-muted-foreground">2024.05 ~ </p>
            <p className="text-gray-500">crypto-build</p>
            <p>• Launched Quant investment fund products based on Binance copy trading</p>    
            <p>• Developed logic that receives trading signals via RESTful API and performs automatic trading according to user accounts</p> 
            <p>• Applied Ansible parallel execution on 250 AWS servers for algorithm performance comparison experiments, reducing deployment time by N times</p>  
            <p>• Integrated LemonSqueezy payment system, designed and developed subscription system's access token management DB as a full-stack developer</p>
            <Image
              src="/project/image1.png"
              alt="Quantitative Trading Project"
              width={3000}
              height={9000}
              className="rounded-lg shadow-md mt-4"
            />
          </div>
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
            Robo-advisor Rebalancing Automation 
            </h3>
            <Button asChild variant="outline" className="gap-2">
              <Link 
                href="https://github.com/ASGDLO/Dagster_example" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View project on GitHub"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">2024.1 ~ 2024.4</p>
            <p className="text-gray-500">Quantec</p>
            <li>Built an orchestration workflow that performs N times monthly rebalancing of U.S. and Korean stocks using Dagster</li>
            <li>Designed ETL tasks for collecting and analyzing stock market data, set up for periodic execution at specified times</li>
            <li>Used Scalene profiler to analyze code execution time and memory usage patterns to optimize the performance of stock rebalancing algorithms</li>
            <li>Identified bottlenecks and optimized inefficient computations, improving data processing speed by N%</li>
            <li>Created monitoring dashboards including metrics such as CPU, memory, network traffic, MySQL query response times, and set up alerts for immediate response in case of issues</li>
            <li>Designed and built a hybrid/high-availability Kubernetes architecture</li>
            <Image
              src="/project/Screenshot from 2024-04-02 17-57-15.png"
              alt="Quantitative-trading Service"
              width={3000}
              height={9000}
              className="rounded-lg shadow-md mt-4"
            />
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">Built Middleware Infrastructure for Samsung Hospital Medical Data</h3>
            <p className="text-sm text-muted-foreground">2023.4 ~ 2023.12</p>
            <p className="text-gray-500">Werfen</p>
            <li>Implemented high availability by distributing middleware traffic of Kubernetes clusters with NSX-T in VMware environment, and automatically switching traffic upon failure through health checks</li>
            <li>Activated SSH service on ESXi servers using vSphere Client and carried out security settings</li>
            <li>Wrote SQL query commands to activate Oracle DB asynchronous reception and optimized performance</li>
            <li>Fixed format errors in previous queries, prevented performance degradation and timeouts in synchronous mode, improved MultiOnline result reception speed</li>
            <li>Performed regular troubleshooting and software updates to ensure server performance and stability</li>
            <Image
              src="/project/1686299560483.jpg"
              alt="Quantitative-trading Service"
              width={700}
              height={700}
              className="rounded-lg shadow-md mt-4"
            />
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">Developed Yolov7 Image Analysis Model</h3>
            <p className="text-sm text-muted-foreground">2023.01 ~ 2023.4</p>
            <p className="text-gray-500">mobileapp Intern</p>
            <p>• Built GPU-based CUDA environment for YOLOv7 model training</p>
            <p>• Collected, processed, and preprocessed data, then split into training/validation/test datasets to perform model training</p>
            <p>• Optimized and validated model performance through hyperparameter tuning and testing on test datasets</p>
          </div>
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
            Fund Subscription Project Using ERC-721 NFT
            </h3>
            <Button asChild variant="outline" className="gap-2">
              <Link 
                href="https://github.com/ASGDLO/Blockchain_fund_nft" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View project on GitHub"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
          </div>
          <div>
            <h3 className="font-semibold text-blue-500"> </h3>
            <p className="text-sm text-muted-foreground">2022.07 ~ 2022.12</p>
            <p>• Implemented ERC-721 standard-based NFT issuance logic using Solidity</p>
            <p>• Developed user wallet connection and NFT purchase interface by integrating React with MetaMask</p>
            <p>• Built backend using Node.js and Express to manage transaction records and user data, established database with MongoDB</p>
            <p>• Deployed and tested smart contracts using Truffle and Hardhat, conducted beta testing on Ropsten Network</p>
          </div>
          <Image
              src="/project/Untitled(7).png"
              alt="Quantitative-trading Service"
              width={700}
              height={700}
              className="rounded-lg shadow-md mt-4"
            />
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
              VGG19 Image Generator AI Image Synthesis Service
            </h3>
            <Button asChild variant="outline" className="gap-2">
              <Link 
                href="https://github.com/ASGDLO/Pictoon-project_Main" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View project on GitHub"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">2021.12 ~ 2022.02</p>
          <p className="text-gray-500">AI Silicon Valley Hackathon</p>
          <p>• Implemented image synthesis function by tuning VGG19 model, handled asynchronous processing through RabbitMQ and Celery, and processed multiple requests stably using CUDA GPU</p>
          <p>• Experienced various server issues such as GPU server overload, increased API request counts, and performance tuning as a backend developer</p>
          <p>• Gained experience as a team leader in setting directions and designs with five developers, and collaborating with other professions</p>
          <p>• Service discontinued due to decreased demand with the release of DALL·E 2</p>
          <Image
              src="/project/Untitled(8).png"
              alt="Quantitative-trading Service"
              width={700}
              height={700}
              className="rounded-lg shadow-md mt-4"
            />
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">OPEN SOURCE</CardTitle>
          <CardDescription className="text-muted-foreground">
            {/* A showcase of my contributions to various open-source projects. */}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-blue-600">freqtrade</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Contributed to freqtrade open-source project by implementing futures trading features, improving leverage functions, and integrating with TradingView platform
            </p>
            <div className="flex space-x-2">
              <Link href="https://github.com/freqtrade/freqtrade" className="text-blue-500 hover:underline">
                GitHub
              </Link>
              <Link href="https://www.freqtrade.io" className="text-blue-500 hover:underline">
                Website
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            </div>
          </div>
          {/* Open Source Project 1 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-blue-600">XMR-mining with Kubernetes</h4>
            <p className="text-sm text-muted-foreground mb-2">
              An open-source project automating XMR mining processes in a Kubernetes-based cluster
            </p>
            <div className="flex space-x-2">
              <Link href="https://github.com/ASGDLO/XMR-mining-kubernetes" className="text-blue-500 hover:underline">
                GitHub
              </Link>
              {/* <Link href="https://projectwebsite.com" className="text-blue-500 hover:underline">
                Website
              </Link> */}
            </div>
            {/* <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Open Source</Badge>
            </div> */}
          </div>

          {/* Open Source Project 2 */}

          {/* Add more projects as needed */}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-blue-500">AI Silicon Valley Hackathon / Completed 3rd Training Course</h3>
            <p className="text-sm text-muted-foreground">2021.12 ~ 2022.02</p>
            <p>Team B Leader</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">Korea University of Technology and Education / Bachelor's Degree in Computer Engineering</h3>
            <p className="text-sm text-muted-foreground">2020.03 ~ 2023.02</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-blue-500">Certified Asset Manager</h3>
          <p>Korea Institute of Financial Investment</p>
          <p className="text-sm text-muted-foreground">Obtained on 2018-11-23</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Additional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-blue-500">Discharged from Army</h3>
          <p className="text-sm text-muted-foreground">2018-04-24 - 2020-02-13</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-500">Favorite Books</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>"Beat the Dealer" - Edward O. Thorp</li>
            <li>"The Man Who Solved the Market: How Jim Simons Launched the Quant Revolution"</li>
            <li>"Principles for Navigating Big Debt Crises" - Ray Dalio</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      {icon}
      <span>{text}</span>
    </div>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactElement; label: string }) {
  return (
    <Button variant="outline" size="lg" asChild>
      <Link href={href}>
        {React.cloneElement(icon, { className: "mr-2 h-5 w-5" })}
        {label}
      </Link>
    </Button>
  )
}
