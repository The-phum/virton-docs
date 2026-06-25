# **2.2 제품 설치**

아래 순서에 따라 VirtOn 백업 파일을 복구하고 실행 환경을 설정합니다.

1. 백업 파일을 백업 스토리지 경로에 위치시킵니다.
2. 백업 파일 경로는 **Datacenter > Storage** 목록을 기준으로 확인합니다.
3. 예시: `local (Directory)` 스토리지
4. 복구(restore) 시 **MAC Address unique** 옵션을 확인합니다.
5. Restore 작업은 **Task OK** 상태를 기준으로 완료 여부를 판단합니다.
6. 복구 후 하드웨어 항목을 점검합니다.
   - **CD/DVD**: 현재 구성에 없을 수 있음
   - **Network**: bridge 설정이 기존과 다를 수 있음
   - **MAC 주소**: 중복/오설정 여부 확인
7. OS 계정은 시험 또는 납품 시 별도 통보된 임시 비밀번호로 접속합니다.
8. `docker ps` 실행 후 컨테이너 항목 4개가 정상 표시되는지 확인합니다.
9. `netplan`으로 네트워크(고정 IP)를 설정합니다.
10. VirtOn 홈 디렉터리 확인: `/opt/virton`
11. Proxmox 인증서 등록: `/opt/virton/scripts/setup-ca.sh {pve-ip}`
12. 새 설정 적용 시 컨테이너 재시작보다 시스템 재부팅을 권장합니다.
