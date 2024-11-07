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
          description: "freqtrade 오픈소스에 참여하여 트레이딩에 필요한 기능을 개발하고, 객체지향 프로그래밍 기법을 활용하여 확장 가능한 코드를 설계했습니다. 이를 통해 multiple timeframe 기능을 추가하여 시스템의 유연성과 기능성을 향상시켰습니다."
        },
        {
          name: "GO",
          description: "고성능 마이크로서비스와 데이터 처리 미들웨어를 구축하는 데 사용했습니다. 동시성 처리를 효율적으로 구현하여 시스템의 처리량과 안정성을 높였습니다."
        },
        {
          name: "TypeScript",
          description: "펀드 구독 시스템과 VGG19 이미지 생성 AI 서비스의 프론트엔드 개발에 활용했습니다. 정적 타이핑을 통해 코드의 안정성과 유지보수성을 향상시켰으며, 복잡한 애플리케이션의 구조를 체계적으로 관리했습니다."
        },
        {
          name: "JavaScript",
          description: "ERC-721 NFT 펀드 구독 프로젝트 등에서 클라이언트 및 서버 사이드 스크립팅을 위해 사용했습니다. 비동기 프로그래밍과 이벤트 기반 아키텍처를 활용하여 사용자 인터페이스와 서버 로직 간의 원활한 통신을 구현했습니다."
        },
        {
          name: "HTML/CSS",
          description: "웹 기반 프로젝트에서 반응형이고 시각적으로 매력적인 사용자 인터페이스를 구축하기 위해 사용했습니다. shadcn와 Tailwind 등을 활용하여 다양한 디바이스에서 일관된 사용자 경험을 제공했습니다."
        }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {
          name: "FastAPI",
          description: "250개 이상의 서버와 통신하는 고성능 미들웨어를 설계 및 구현했습니다. 비동기 요청 처리와 데이터 검증을 최적화하여 높은 확장성과 빠른 응답 시간을 보장하는 API 시스템을 구축했습니다."
        },
        {
          name: "Node.js",
          description: "비동기 프로그래밍과 이벤트 루프를 활용하여 고성능 서버 애플리케이션을 개발했습니다. RESTful API를 구축하고 데이터베이스와의 통합을 통해 백엔드 로직을 구현했습니다."
        },
        {
          name: "Express.js",
          description: "Node.js와 함께 RESTful API 서버를 구축하는 데 사용했습니다. 미들웨어를 활용하여 요청 및 응답의 흐름을 제어하고, 라우팅 및 오류 처리를 효율적으로 관리했습니다."
        },
        {
          name: "Next.js",
          description: "서버 사이드 렌더링과 정적 사이트 생성을 활용하여 SEO에 최적화된 웹 애플리케이션을 개발했습니다. 동적 라우팅과 API 경로를 통해 복잡한 웹사이트의 성능과 확장성을 개선했습니다."
        },
        {
          name: "React.js",
          description: "VGG19 이미지 생성 AI 서비스 등에서 프론트엔드 개발을 위해 사용했습니다. 컴포넌트 기반 아키텍처를 활용하여 재사용 가능한 UI 요소를 만들고 상태 관리를 통해 사용자 인터페이스의 일관성을 유지했습니다."
        },
        {
          name: "Flask",
          description: "신속한 웹 서비스 개발과 배포가 필요한 프로젝트에서 RESTful API를 설계 및 구현했습니다. 여러 컨테이너 간의 원활한 통신을 구현하여 안정적이고 확장 가능한 웹 서비스를 론칭했습니다."
        },
        {
          name: "TensorFlow",
          description: "이미지 인식 기능 개발 프로젝트에서 딥 러닝 모델을 설계하고 훈련했습니다. 데이터 전처리부터 모델 최적화까지의 과정을 수행하여 95% 이상의 정확도를 달성했습니다."
        },
        {
          name: "Hardhat & Truffle",
          description: "스마트 컨트랙트 개발을 위해 Hardhat과 Truffle 환경을 설정하고 Solidity로 컨트랙트를 작성했습니다. 테스팅 및 디버깅 기능을 활용하여 개발 효율성을 높이고, 로컬 네트워크에서 배포 및 테스트를 진행했습니다."
        }
      ]
    },
    {
      category: "Infrastructure & Databases",
      skills: [
        {
          name: "AWS",
          description: "EC2, ECS,EKS, ECR, IGW, ELB, CDN을 통합하여 효율적인 클라우드 인프라를 구축했습니다. 자동화 스크립트와 보안 설정을 최적화하고, 비용 절감을 위한 아키텍처를 설계하여 서비스의 클라우드 마이그레이션을 성공적으로 완료했습니다."
        },
        {
          name: "Kubernetes",
          description: "애플리케이션의 컨테이너화를 통해 Kubernetes 클러스터에 배포했습니다. 자동 스케일링과 로드 밸런싱을 설정하여 시스템의 가용성과 확장성을 확보했습니다."
        },
        {
          name: "Docker",
          description: "애플리케이션을 컨테이너로 패키징하고 Docker Compose를 사용하여 복잡한 서비스들의 배포를 간소화했습니다. Docker Hub를 활용하여 이미지의 버전 관리와 배포를 효율적으로 수행했습니다."
        },
        {
          name: "Nginx",
          description: "트래픽 관리와 서버 부하 분산을 위해 Nginx를 웹 서버 및 리버스 프록시로 구성했습니다. 캐싱과 SSL/TLS 설정을 최적화하여 응답 시간을 개선하고 보안을 강화했습니다."
        },
        {
          name: "Celery",
          description: "비동기 작업 처리가 필요한 애플리케이션에 Celery를 통합하여 작업 큐를 관리했습니다. 시간 소요가 큰 작업들을 효율적으로 분산 처리하여 시스템의 성능을 향상시켰습니다."
        },
        {
          name: "RabbitMQ",
          description: "Celery와 함께 메시지 브로커로 사용하여 작업의 우선순위와 재시도 로직을 관리했습니다. 안정적인 메시지 전달을 통해 시스템의 신뢰성과 응답 속도를 높였습니다."
        },
        {
          name: "MySQL",
          description: "데이터베이스 스키마를 설계하고 복잡한 SQL 쿼리를 최적화하여 데이터 접근 속도를 향상시켰습니다. 인덱싱과 조인 최적화를 통해 대용량 데이터 처리의 효율성을 높였습니다."
        },
        {
          name: "Redis",
          description: "캐싱 미들웨어를 개발하여 거래 처리 속도를 70% 향상시켰습니다. 세션 관리와 실시간 데이터 처리를 통해 시스템의 응답성과 처리량을 개선했습니다."
        },
        {
          name: "Linux",
          description: "고급 명령어와 스크립트를 활용하여 개발 및 배포 환경을 자동화했습니다. 시스템 자원 관리와 보안 설정을 최적화하여 안정적인 서버 운영을 구현했습니다."
        },
        {
          name: "Prometheus & Grafana",
          description: "시스템 모니터링을 위해 Prometheus로 메트릭을 수집하고 Grafana로 시각화했습니다. 알림 설정을 통해 실시간으로 시스템 이상을 감지하고 대응할 수 있도록 했습니다."
        },
        {
          name: "Asyncio",
          description: "비동기 프로그래밍을 활용하여 여러 서버에 동시에 웹훅을 전달하는 시스템을 구축했습니다. 이로써 대규모 트래픽 상황에서도 효율적인 통신과 낮은 지연 시간을 달성했습니다."
        }
      ]
    },
    {
      category: "Tools & IDEs",
      skills: [
        {
          name: "Vim",
          description: "커스텀 설정을 통해 효율적인 코드 편집 환경을 구축하고, 서버 관리 작업을 신속하게 수행했습니다."
        },
        {
          name: "VS Code",
          description: "다양한 플러그인과 확장을 활용하여 개발 생산성을 높였으며, 대부분의 프로젝트에서 주요 IDE로 사용했습니다."
        },
        {
          name: "Cursor",
          description: "AI 기반 코드 완성 기능을 활용하여 개발 속도를 향상시키고 오류를 감소시켰습니다."
        },
        {
          name: "Git",
          description: "모든 프로젝트에서 버전 관리를 위해 사용했으며, 브랜치 전략과 협업 워크플로를 효율적으로 관리했습니다."
        },
        {
          name: "GitHub",
          description: "프로젝트의 소스 코드를 호스팅하고 이슈 트래킹과 코드 리뷰를 통해 팀 협업을 개선했습니다."
        },
        {
          name: "GitLab CI",
          description: "지속적 통합 및 배포 파이프라인을 구축하여 코드의 빌드, 테스트, 배포를 자동화했습니다."
        },
        {
          name: "Jira",
          description: "애자일 개발 프로세스를 관리하고 이슈와 작업 항목을 추적하여 프로젝트의 투명성과 효율성을 높였습니다."
        },
        {
          name: "Confluence",
          description: "프로젝트 문서화와 지식 공유를 위한 플랫폼으로 활용하여 팀 내 협업과 정보 전달을 원활하게 했습니다."
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
          <CardTitle className="text-3xl font-bold text-blue-500">SKILL</CardTitle>
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
