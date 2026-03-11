# **3. 백업 & 복구 (backup&restore)**

![VirtOn PBS 백업 및 복구 메인 페이지](../_static/images/pbs/pbs_backup_main.png)

실제 백업 데이터를 조회하고 새로운 백업을 생성하거나, 과거 시점으로 시스템을 복원하는 핵심 메뉴입니다.

## **3.1. 백업**

![VirtOn PBS 백업 폼](../_static/images/pbs/pbs_backup.png)

- **지금 백업 실행 (Run Backup)**:
    1. 대상 VM ID, 백업을 수행할 노드(Node), 그리고 타겟 스토리지 (PBS Storage) 정보를 입력하여 즉시 수동 백업을 시작합니다.
    2. 백업은 백그라운드에서 안전하게 실행되며, 상단 진행률 바를 통해 1% 단위로 실시간 확인이 가능합니다.

## **3.2. 복구**

![VirtOn PBS 복구 폼](../_static/images/pbs/pbs_restore.png)

![VirtOn PBS vm 확인 토스트](../_static/images/pbs/pbs_restore2.png)

- **복원 (Restore)**:
    1. 특정 백업본의 복구 버튼을 누르면, 시스템이 가장 최적의 새로운 VM ID를 자동으로 추천합니다. 또한 복구를 수행할 노드(Node), 타겟 스토리지 (모든 스토리지 가능) 정보를 입력합니다.
    2. 기존 데이터를 덮어쓰지 않고 새로운 인스턴스로 분리 생성하여 안전성을 높일 수 있습니다. (기존의 VM ID를 사용하면 덮어쓰기도 가능합니다.)
    3. 복구가 완료되면 알림창(Toast)의 **[VM 상세 보기 🚀]** 버튼을 통해 방금 태어난 VM의 관리 페이지로 즉시 이동할 수 있습니다.

## **3.3. 삭제 및 중단**

- **안전한 백업 삭제 (Delete Backup)** :
    1. 불필요한 백업본을 선택해 삭제합니다. Proxmox 서버에 실제 삭제 명령(volid 기반 정밀 타겟팅)을 내려 물리적인 스토리지 용량을 즉시 확보합니다.

- **작업 강제 중단 (Abort Task):** :
    1. 진행률 바 옆의 <kbd>X</kbd> 버튼을 누르면, Proxmox 서버 레벨에서 실행 중인 백업/복구 프로세스(Task)를 강제로 Kill(중단) 하고 DB 상태를 동기화합니다.
