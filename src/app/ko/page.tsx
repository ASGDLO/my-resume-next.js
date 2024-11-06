import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, Globe, BookOpen } from 'lucide-react'
import LanguageSwitcher from '@/components/stwitch/LanguageSwitcher';
import * as PDFIcon from 'lucide-react'; // Import an appropriate icon if desired

export default function Resume() {
  return (
    <div
      className="max-w-7xl mx-auto pt-20 px-12 bg-white"
      style={{
        fontFamily: 'Pretendard, sans-serif',
        fontWeight: 300,
        wordWrap: 'break-word',
        wordBreak: 'keep-all',
        lineHeight: 1.8,
      }}
    >
      <header className="flex justify-end items-center p-4 space-x-4">
        <LanguageSwitcher />
        {/* Download PDF Button */}
        <Button asChild variant="outline" size="lg">
          <a href="/Resume.pdf" download aria-label="Download Korean Resume as PDF" className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            PDF 다운로드
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
            웹 서비스와 인프라 엔지니어로서 다양한 경험을 쌓아왔습니다. Python, AWS, Next.js, Docker, Fastapi, Kubernetes 등 다양한 기술을 활용하여 프로덕션 서비스를 설계, 개발, 운영한 경험이 있으며, 확장성과 유지 보수성이 높은 아키텍처와 패턴에 대해 항상 고민하고 있습니다.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            오픈소스 프로젝트에 관심이 많고 다양한 방법으로 응용하고 기여를 하려고 노력하고 있습니다. 개인 프로젝트나 개발 커뮤니티 활동 등을 통해 다양한 개발 경험을 즐기고 있습니다. 평소 개발 경험의 유익한 내용은 공유하거나 기록하는 것을 좋아하여 미디움 블로그에 70여 개의 기술 포스트를 작성했습니다.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            언제나 최고의 소프트웨어 개발자를 꿈꾸고 있으며, 조금 더 나중에는 최고의 소프트웨어 리더라는 목표를 가지고 다양한 기술을 학습하거나 사용하고 경험을 쌓고 있습니다.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            서비스 개발에서는 개발과 비즈니스 간의 커뮤니케이션이 가장 중요하다고 생각합니다. 능동적이고 적극적인 커뮤니케이션을 통해 문제 해결과 비즈니스 발전을 위해 노력하고 있습니다. 이러한 점을 바탕으로 더 좋은 개발자로 성장하기 위해 끊임없이 학습하고, 경험하고, 노력하고 있습니다.
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
              {/* <Badge variant="secondary">3개월</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">콴텍투자일임</h3>
            <p className="italic text-muted-foreground">로보어드바이저 자동화 개발자</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>금융업 / 2.5조 규모 로보어드바이저 스타트업</li>
              <li>Dagster / Cloud-native orchestration 프레임워크를 활용한 증시 리벨런싱 고리즘 자동화</li>
              <li>Scalene 통한 주식 리벨런싱 알고리즘 실행속도 최적화 리펙토링</li>
              <li>AWS 인프라 및 MySQL 데이터베이스 Grafana & Prometheus 모니터링 설계 및 관리</li>
              <li>Kubernetes 기반 컨테이너 클러스터 설계 및 관리</li>
              <li>Skill Keywords</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Dagter</Badge>
              <Badge variant="outline">Kubernetes</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">Mysql</Badge>
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
              {/* <Badge variant="secondary">9개월</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">Werfen</h3>
            <p className="italic text-muted-foreground">대학 병원 의료 ���이터 Middleware 인프라 엔지니어</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>대학병원 의료장비 / 혈액응고, 자가면역질환, 검사 기기 IT 미들웨어 소프트웨어 인프라 유지보수 및 관리</li>
              <li>대학병원 Needs 에 맞는 사용성 개선과 해외 협력사와의 긴밀한 커뮤니케이션</li>
              <li>Kubernetes 기반 데이터 관리 시스템 클러스터 유지보수 및 관리</li>
              <li>linux 서버 트러블 슈팅, 업데이트 와 모니터링</li>

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
              {/* <Badge variant="secondary">9개월</Badge> */}
            </div>
            <h3 className="text-xl font-bold text-blue-500">mobileapp</h3>
            <p className="italic text-muted-foreground">인턴</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>이미지 학습 데이터 수집 및 모델 학습</li>
              <li>huggingface 환경 활용 이미지 분석 및 추론</li>
              <li>AWS GPU 서버 cuda 환경 설정 및 관리</li>
              <li>Skill Keywords</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Yolov7</Badge>
              <Badge variant="outline">Pytorch</Badge>
              <Badge variant="outline">cuda</Badge>
              <Badge variant="outline">aws</Badge>



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
            <h3 className="font-semibold text-blue-500">퀀트 투자 알고리즘 개발 및 운영</h3>
            <p className="text-sm text-muted-foreground">2024.05 ~ </p>
            <p className="text-gray-500">crypto-build (1인)</p>
            <p>• 바이낸스 카피 트레이딩 기반 Quant 투자 펀드 상품 출시</p>    
            <p>• RESTful API를 통해 거래 신호를 수신하고, 사용자 계정에 따라 자동 매매를 수행하는 로직 개발</p> 
            <p>• 알고리즘 성능 비교 실험을 위한 AWS 서버 250대에 Ansible 병렬 실행을 적용해 배포 시간 N배 단축</p>  
            <p>• LemonSqueezy 결제 시스템 연동, 구독형 시스템의 access token 관리 DB 설계 및 풀스택 개발</p>
            <Image
              src="/project/image1.png"
              alt="Quantitative Trading Project"
              width={3000} // Adjust the width as needed
              height={9000} // Adjust the height as needed
              className="rounded-lg shadow-md mt-4" // Optional styling
            />
          </div>
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
            로보어드바이저 리벨런싱 자동화 
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
            <p className="text-gray-500">Quantec (자동화 팀원 3명)</p>
            <li>Dagster를 활용하여 미국 및 한국 주식 리밸런싱을 매월 N회 동으로 수행하는 오케스트레이션 워크플로우 구축</li>
            <li>주식 시장 데이터 수집 및 분석을 위한 ETL 작업을 설계하고, 정해진 시간에 주기적으로 실행되도록 설정</li>
            <li>주식 리밸런싱 알고리즘의 성능을 최적화하기 위해 Scalene 프로파일러를 사용하여 코드의 실행 시간 및 메모리 사용 패턴을 분석</li>
            <li>병목 지점을 식별하고 비효율적인 연산을 최적화하여 데이터 처리 속도 N% 향상</li>
            <li>CPU, 메모, 네트워크 래픽, MySQL 쿼리 응답 시간 등의 지표를 포함한 모니터링 대시보드 생성 및 알림 ���정으로 문제 발생 시 즉각적인 대응 가능</li>
            <li>하이브리드 / 고가용성 Kubernetes 설계 구축</li>
            <Image
              src="/project/Screenshot from 2024-04-02 17-57-15.png"
              alt="Quantitative-trading Service"
              width={3000} // Adjust the width as needed
              height={9000} // Adjust the height as needed
              className="rounded-lg shadow-md mt-4" // Optional styling
            />
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">삼성병원 의료 데이터 Middleware 인프라 구축</h3>
            <p className="text-sm text-muted-foreground">2023.4 ~ 2023.12</p>
            <p className="text-gray-500">werfen (팀원 3명)</p>
            <li>VMware 환경에서 NSX-T로 Kubernetes 클러스터의 미들웨어 트래픽을 분산하고, 헬스 체크를 통해 장애 시 자동으로 트래픽을 전환하여 고가용성 구현</li>
            <li>vSphere Client를 사용해 ESXi 서버의 SSH 서비스 활성화 및 보안 설정 진행</li>
              <li>Oracle DB 비동기 수신 활성화를 위한 SQL 쿼리 명령어 작성 및 성능 최적화</li>
              <li>이전 쿼리의 형식 오류 수정, 동기 모드 성능 저하 및 타임아웃 방지, MultiOnline의 결과 수신 속도 개선</li>
              <li>서버 성능 및 안정성을 보장하기 위한 정기적인 트러블슈팅 및 소프트웨어 업데이트 수행</li>

            <Image
              src="/project/1686299560483.jpg"
              alt="Quantitative-trading Service"
              width={700} // Adjust the width as needed
              height={700} // Adjust the height as needed
              className="rounded-lg shadow-md mt-4" // Optional styling
            />
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">Yolov7 이미지 분석 모델 개발</h3>
            <p className="text-sm text-muted-foreground">2023.01 ~ 2023.4</p>
            <p className="text-gray-500">mobileapp 인턴 (인공지능 팀원 3명)</p>
            <p>• YOlov7 모델 학습을 위한 GPU 기반 CUDA 환경 구축</p>
            <p>• 데이터 수집, 가공 및 전처리 후 학습/검증/테스트 데이터셋으로 분할하여 모델 학습 수행</p>
            <p>• 하이퍼파라미터 튜닝과 테스트 데이터셋을 통한 모델 성능 최적화 및 검증</p>

          </div>
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
            ERC-721 NFT를 이용한 펀드 가입 프로젝트
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
            <p className="text-gray-500">개인 프로젝트</p>
            <p>• Solidity를 사용해 ERC-721 표준 기반의 NFT 발행 로직 구현</p>
            <p>• React와 MetaMask 연동으로 사용자 지갑 연결 및 NFT 구매 인터페이스 개발</p>
            <p>• Node.js와 Express로 거래 기록 및 사용자 데이터를 관리하고, MongoDB로 데이터베이스 구축</p>
            <p>• Truffle 및 Hardhat을 사용해 스마트 컨트랙트 배포 및 테스트, Ropsten Network에서 베타 테스트</p>
          </div>
          <Image
              src="/project/Untitled(7).png"
              alt="Quantitative-trading Service"
              width={700} // Adjust the width as needed
              height={700} // Adjust the height as needed
              className="rounded-lg shadow-md mt-4" // Optional styling
            />
          <Separator />
          <div className="flex items-center gap-4"> 
            <h3 className="font-semibold text-blue-500">
              VGG19 Image Generator AI 미지 합성 서비스
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
          <p className="text-gray-500">AI 실리콘벨리 해커톤 (팀원 5명)</p>
          <p>• VGG19 모델 튜닝으로 이미지 합성 기능 구현, RabbitMQ와 Celery를 통한 비동기 처리 및 CUDA GPU 사용으로 다중 요청 안정적 처리</p>
          <p>• 백엔드 개발자로서 gpu 서버 과부화, api 요청 횟수 증가로 인한 오류, 성능 튜닝 등 다양한 서버 문제를 경험</p>
          <p>• 팀장으로서 5명의 개발자와 방향성 수립 및 설계, 다른 직군과의 협업 등을 경험</p>
          <p>• dalle 2 출시와 함께 서비스 수요 감소로 서비스 중단</p>
          <Image
              src="/project/Untitled(8).png"
              alt="Quantitative-trading Service"
              width={700} // Adjust the width as needed
              height={700} // Adjust the height as needed
              className="rounded-lg shadow-md mt-4" // Optional styling
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
              freqtrade 오픈소스 기여 선물 기능 구현, leverage 기능 개선, tradingview 플랫폼 연동
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
              Kubernetes 기반 클러스터에서 XMR 마이닝 프로세스를 자동화하는 오픈소스 프로젝트
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
            <h3 className="font-semibold text-blue-500">AI 실리콘벨리 해커톤 / 제3기 연수과정 수료</h3>
            <p className="text-sm text-muted-foreground">2021.12 ~ 2022.02</p>
            <p>B 팀 리더</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-blue-500">한국공학대학교 / 컴퓨터공학과 학사 졸업</h3>
            <p className="text-sm text-muted-foreground">2020.03 ~ 2023.02</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-blue-500">자산관리사자격증</h3>
          <p>한국금융연수</p>
          <p className="text-sm text-muted-foreground">2018-11-23 취득</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500">Additional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-blue-500">육군 전역</h3>
          <p className="text-sm text-muted-foreground">2018-04-24 - 2020-02-13</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-500">Favorite Books</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>나는 어떻게 시장을 이겼나 - 에드워드 O. 소프</li>
            <li>시장을 풀어낸 수학자 (짐 사이먼스가 일으킨 퀀트 혁명의 역사)</li>
            <li>Principles for Navigating Big Debt Crises - Ray Dalio</li>
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