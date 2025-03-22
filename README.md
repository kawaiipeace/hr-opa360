# HR-OPA360 (Frontend)

## ระบบประเมินพนักงานดีเด่น 360 (ส่วนของ Frontend)


*ตอนนี้ได้ Deploy ขึ้น Vercel แล้วที่ [https://xcho.vercel.app/](https://xcho.vercel.app/) (เฉพาะ Frontend) สามารถเล่นได้ในโหมด Progressive Web Application (PWA)*

#### Frontend Stack
- [x] **NextJS** 14.1.3
- [x] **Tailwind CSS** 3.4
- [x] **DashTail Template** [Documentation ที่นี่](https://dash-tail.vercel.app/docs/quick-start) [Demo Component ที่นี่](https://dash-tail.vercel.app/en/dashboard)

#### การรันผ่าน Node
```bash
npm i
npm run dev
```

#### การรันผ่าน Docker Compose
```bash
docker compose up -d --build
```

#### ลิงก์สำหรับการเข้าทดสอบ
```bash
http://localhost:3000/th/evaluate
```