# **3.4 클러스터 (Cluster)**

클러스터(Cluster)는 **여러 대의 서버를 하나로 묶어 단일 시스템처럼 통합 관리하고 가용성을 극대화하는 환경**입니다.

![클러스터 현황](../_static/images/main/cluster/cluster_status.png)

## 사용 전 확인사항

| **구분** | **내용** |
| --- | --- |
| **필요 권한** | 클러스터 생성과 조인은 Proxmox 클러스터 구성을 변경하는 관리자 기능입니다. 관리자 권한 계정으로 수행합니다. |
| **사전 조건** | 각 노드의 네트워크 연결, 시간 동기화, 호스트명/IP 설정, Proxmox 계정 권한을 확인합니다. |
| **비밀정보 처리** | Proxmox Password는 화면 입력용 비밀값이며 제출문서에는 원문을 기재하지 않습니다. |
| **영향 범위** | 클러스터 구성은 대시보드, HA, 마이그레이션, 공유 스토리지 기능에 영향을 줍니다. |

## 3.4.1 클러스터 현황

- 클러스터 이름 및 구성 노드 목록을 확인합니다.
- 각 노드의 ID, 온라인 상태, IP 주소(LINK) 를 확인 할 수 있습니다.

## 3.4.2 노드 관리

- 클러스터의 조인 정보 확인 (Join Information) 및 클러스터 생성/조인을 합니다.

### 3.4.2.1 클러스터가 구성이 안되어 있을 때

![클러스터 구성이 안되어 있을 때](../_static/images/main/cluster/cluster_x1.png)

![클러스터 구성이 안되어 있을 때2](../_static/images/main/cluster/cluster_x2.png)

- 클러스터 구성이 안되어 있으면 **클러스터 생성** 섹션과 **클러스터 가입** 섹션이 표시됩니다.

![클러스터 구성이 안되어 있을 때3](../_static/images/main/cluster/cluster_dashboard.png)

- 클러스터 구성이 안되어 있을 때 대시보드에  **클러스터 구성 필요** 메시지와 함께 조회가 불가능합니다.

### 3.4.2.2 클러스터 생성

![클러스터 생성](../_static/images/main/cluster/cluster_create.png)

- 클러스터 이름: 클러스터의 이름을 입력하며, 한글 입력은 제한됩니다.
- Proxmox Password : 프록스목스 계정의 비밀번호를 입력합니다.
- 클러스터 네트워크: 현재 서버의 기본 네트워크가 자동으로 할당되며, 추가 할 수 있습니다.

| **항목** | **입력/선택 기준** |
| --- | --- |
| **클러스터 이름** | 영문, 숫자, 하이픈 등 허용된 문자로 입력합니다. 한글 입력은 제한됩니다. |
| **Proxmox Password** | 클러스터 생성 권한이 있는 Proxmox 계정의 비밀번호를 입력합니다. |
| **클러스터 네트워크** | 노드 간 통신이 가능한 네트워크를 선택합니다. 복수 링크를 사용할 경우 모든 참여 노드에 동일한 수의 네트워크를 준비합니다. |

![클러스터 생성 완료](../_static/images/main/cluster/cluster_create_complete.png)

- 클러스터 생성 후 **새로고침** 하면 클러스터 구성 상태로 변경됩니다.
  ![클러스터 구성 상태](../_static/images/main/cluster/cluster_composition.png)

### 3.4.2.3 클러스터 조인

![클러스터 조인](../_static/images/main/cluster/cluster_join.png)

- Manual Join: **수동으로** 클러스터의 정보를 입력하여 Join을 진행합니다.
- Assisted Join: **복사한 Join Information** 정보를 붙여 넣으면 **조인할 클러스터 정보(Peer Cluster)가 자동으로 할당** 됩니다.

![클러스터 조인 정보](../_static/images/main/cluster/cluster_joininformation.png)

- 우측 상단의 **Join Information 확인** 버튼을 통해 생성된 클러스터의 정보를 확인 및 복사합니다.

![클러스터 AssistedJoin](../_static/images/main/cluster/cluster_assistedjoin.png)

- Join Information을 복사하고 조인되는 클러스터에 접속 후 Join 정보를 입력합니다.
- **조인할 클러스터 정보(Peer Cluster)** 와 **조인되는 네트워크(현재 서버)** 가 자동으로 할당 됩니다.
- Password 입력 후 Assisted Join 버튼을 누르고 **새로고침** 하면 클러스터가 구성된걸 확인할 수 있습니다

> ⚠️ **참고**  
> 클러스터 **생성 시 네트워크를 추가** 했다면,  
> **조인되는 노드의 네트워크도 Peer 클러스터와 동일한 수의 네트워크를 추가** 해야 합니다.

![클러스터 조인 완료](../_static/images/main/cluster/cluster_join_complete.png)

- 비밀번호 입력 후 Join이 완료되면 성공 및 실패 알림이 표시됩니다.
- **새로고침** 후 클러스터 구성 상태를 확인 하실 수 있습니다.

![클러스터 조인 완료2](../_static/images/main/cluster/cluster_join_complate2.png)

- 현재 접속 중인 서버는 **로컬 노드** 로 표시됩니다.

## 3.4.3 문제 해결 방법

| **증상** | **확인 항목** | **조치 방법** |
| --- | --- | --- |
| 클러스터 생성 실패 | 클러스터 이름, Proxmox Password, 노드 네트워크 | 입력값을 확인하고 노드 간 통신 가능 여부를 점검합니다. |
| Join Information 적용 실패 | 복사한 조인 정보, Peer Cluster 정보 | Join Information을 다시 복사하고 공백/누락 없이 붙여 넣습니다. |
| 조인 실패 | 네트워크 개수, 노드 시간, 계정 권한 | Peer 클러스터와 동일한 네트워크 수를 구성하고 시간 동기화 상태를 확인합니다. |
| 클러스터 구성 후 조회 실패 | 새로고침, 쿼럼 상태, Proxmox API 연결 | 새로고침 후에도 실패하면 대시보드와 알림 페이지에서 클러스터 로그를 확인합니다. |
