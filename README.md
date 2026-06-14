<p align=center><img width="35%" src="https://user-images.githubusercontent.com/28853329/183432749-5acff973-a5be-4bf2-ac68-86d3ddd5b123.png"/><p/>

<p align=center>
<a href="#-수상-내역">
  <img src="https://img.shields.io/badge/숭실대_소프트웨어_공모전-🥈_은상-silver?style=flat-square">
</a>
<a href="#-수상-내역">
  <img src="https://img.shields.io/badge/오픈인프라_개발_경진대회(OIDC)-🏅_장려상-cd7f32?style=flat-square">
</a>
</p>

<p align=center>
<a href="https://nextjs.org/">
<img src="https://img.shields.io/badge/next.js-v12.1.0-blue?style=flat-square">
</a>
<a href="https://nodejs.org/">
<img src="https://img.shields.io/badge/node.js-v16.13.2-blue?style=flat-square">
</a>
<a href="https://www.npmjs.com/">
<img src="https://img.shields.io/badge/npm-v8.1.2-blue?style=flat-square">
</a>
<img src="https://img.shields.io/badge/status-archived-lightgrey?style=flat-square">
</p>

<p align=center>
Build and Monitoring on
</p>
<p align=center>
<a href="https://accordions.co.kr/">
<img src="https://user-images.githubusercontent.com/28720642/179758210-c724957e-c2a9-4c14-93da-973cb66bc774.png">
</a>
  </p>

#
###               👋 안녕하세요. 문해력 향상을 위한 Kotudy 애플리케이션을 개발하는 팀 SlowStarter 입니다.
 ![image](https://user-images.githubusercontent.com/28853329/179004765-6ae17bcc-0a17-4bbd-a41a-0cd60d7b24b7.png)

## 🏆 수상 내역
> 본 프로젝트(문해력 향상 웹, Kotudy)는 두 차례의 공모전에서 수상하였습니다.

| 수상 | 대회 | 주최 | 일자 | 출품작 |
| --- | --- | --- | --- | --- |
| 🥈 **은상** | 숭실대학교 IT대학 소프트웨어 공모전 | 숭실대학교 | 2021.09 | "API를 활용한 문해력 향상 웹 사이트" |
| 🏅 **장려상** | 제4회 **오픈인프라 개발 경진대회 (OIDC)** | (주)맨텍 | 2022.08 | "아동을 위한 Kubernetes 기반 한국어 학습 웹 애플리케이션" |

## 😉 프로젝트 소개
> 본 프로젝트는 아동의 한국어 문해력 향상에 도움을 주는 웹사이트 개발을 목표로 한다. 사용자에게 ‘나만의 단어장’이라는 개인 단어장 서비스를 제공해 사용자가 원하는 때에 반복 학습을 할 수 있도록 하고 단어 퀴즈 랭킹 서비스를 통해서 사용자의 경쟁심을 동력으로 단어 학습을 증진 시킨다. 오픈 사전 서비스를 통해 다른 사용자들에게 새로운 정보를 제공받으며 문해력을 향상시킬 수 있도록 한다.

#### 🧩 OIDC (오픈인프라 개발 경진대회) 란?
> `OIDC`(**O**pen **I**nfra **D**evelopment **C**ompetition)는 (주)맨텍이 주최하는 **오픈인프라 개발 경진대회**로, 본 GitHub Organization(`slowStarter-OIDC`)의 이름이자 이 프로젝트가 출품된 대회입니다. 팀 SlowStarter는 기존 문해력 향상 웹을 **MSA(Micro Service Architecture)** 구조로 재설계하고 **Kubernetes** 기반으로 배포·모니터링하여 제4회 대회에서 **장려상**을 수상하였습니다.

## 🤔 구현 기능
1. 계정 관리
2. 일일 단어 추천
3. 나만의 단어장
4. 단어 검색, 문장 분석
5. 퀴즈
6. 랭킹
7. 오픈 사전

## 🏗 아키텍처 & 기술 스택
서비스 단위 개발·배포를 위해 **MSA** 구조를 채택하고, 각 서비스를 Docker 이미지로 컨테이너화하여 **Kubernetes(AWS EKS)** 위에 배포한 뒤 (주)맨텍의 **아코디언(Accordion)** 플랫폼으로 빌드·모니터링하였습니다.

**Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

**Backend**

![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white)

**Infra / DevOps**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![AWS EKS](https://img.shields.io/badge/AWS_EKS-FF9900?style=for-the-badge&logo=amazoneks&logoColor=white)

#### 마이크로서비스 구성
| 서비스 | 설명 |
| --- | --- |
| `login` | 계정 관리 / 로그인 |
| `dailyWords` | 일일 단어 추천 |
| `searchWord` | 문장 분석 |
| `oneWord` | 단어 검색 (단어 뜻) |
| `mypage` | 나만의 단어장 |
| `wordQuiz` | 단어 퀴즈 |
| `ranking` | 랭킹 |
| `openDictionary` | 오픈 사전 |

## 🍎 역할 및 담당

| 이름 | 역할 | 담당 |
| ------ | -- | -- |
| 박철순 | 팀장 | Front-End |
| 김정원 | 팀원 | Front-End |
| 김시우 | 팀원 | Infra |
| 황선형 | 팀원 | Back-End |

## 🎥 시연 영상
https://github.com/slowStarter-OIDC/Literacy-Improvement-Web/assets/72070679/8c26d07b-287b-430e-b58d-5d3edfdc0a3b

## 💬 참조 Wiki & API
#### [카카오 REST-API][카카오 로그인 서비스]
> https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api
#### [AI-HUB API][ETRI 문장분석기]
> https://aiopen.etri.re.kr/service_api.php
#### [표준국어대사전API][단어 뜻]
> https://stdict.korean.go.kr/openapi/openApiInfo.do
#### [마더텅 초등국어 대사전][초등단어]
> https://www.toptutor.co.kr/main/index.jsp

## 📌 프로젝트 상태
> 본 프로젝트는 2022년 공모전 종료 후 **더 이상 유지보수되지 않는 아카이브(archived) 프로젝트**입니다. 코드와 기록은 학습 및 포트폴리오 목적으로 보존됩니다.

---
