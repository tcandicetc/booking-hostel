# booking-hostel

GitHub Page: https://tcandicetc.github.io/booking-hostel/

## TODO List

### 第一階段：前端基礎建設（Vue + 模板整合）

- [x] 初始化 Vue 專案
- [ ] 將 HTML/CSS 模板轉換為 Vue 組件
  - [ ]  Nav bar
  - [ ]  Hero 區塊（首頁大圖）
  - [ ]  房型介紹
  - [ ]  關於我們
  - [ ]  地圖位置
  - [ ]  Footer
- [ ]  依據區塊建立 Vue components 資料夾結構
- [ ]  引入 Bootstrap 組件
  - [ ] 圖片輪播
  - [ ] 日曆
- [ ] 調整路由架構（Vue Router），讓網站支援多頁面（ex: /rooms、/about）

### 第二階段：資料抽離（避免寫死在 HTML）

- [ ] 建立假資料檔（JSON 或 JS 檔）模擬房型、服務項目等
- [ ] 所有顯示內容（文字、圖）用 v-for 或 props 控制
- [ ] 預留資料結構與 API 整合的接點（未來對接後端）

### 第三階段：後端系統與資料庫

- [ ] 設計資料表（rooms、bookings、users）
- [ ] 撰寫「查詢空房」的 API（支援條件查詢、日期篩選）
