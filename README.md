````markdown
# NestJS Bookmarks API – REST API with Authentication and PostgreSQL

This project is built by following the YouTube course:  
[NestJs Course for Beginners - Create a REST API](https://youtu.be/GHTA143_b-s?si=ezSTtoisfV1lv3F3)

It demonstrates how to build a **CRUD REST API** from scratch using **NestJS** with modern backend practices:  
- Authentication & Authorization with JWT  
- Dockerized PostgreSQL database  
- Prisma ORM for schema & migrations  
- Guards, Decorators, and Pipes  
- End-to-End testing with PactumJS  
- Environment-based configuration  

---

## 📚 Summary

In this project, we build a **Bookmarks API** with:  
- User Authentication (Sign up / Sign in)  
- Protected routes with JWT tokens  
- CRUD operations for Bookmarks  
- DTO validation & whitelisting  
- Prisma for database modeling and queries  
- e2e tests with Pactum for API contract testing  

---

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <project-directory>
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create `.env` and `.env.test` files in the project root.

**.env**

```env
DATABASE_URL="postgresql://postgres:pass@localhost:5434/nest?schema=public"
JWT_SECRET="secret"
```

**.env.test**

```env
DATABASE_URL="postgresql://postgres:pass@localhost:5435/nest?schema=public"
JWT_SECRET="secret"
```

---

## ▶️ Running the Application

Start development server:

```bash
npm run start:dev
```

Build and run in production:

```bash
npm run build
npm run start:prod
```

---

## 🐳 Database with Docker

The project uses **Docker Compose** for Postgres (dev & test).

```bash
# Start dev database
npm run db:dev:up

# Restart dev DB & apply migrations
npm run db:dev:restart

# Start test database
npm run db:test:up

# Restart test DB & apply migrations
npm run db:test:restart
```

---

## 📜 Prisma

Apply migrations manually:

```bash
npm run prisma:dev:deploy
npm run prisma:test:deploy
```

---

## 📫 API Endpoints

### 🔐 Auth

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | `/auth/signup` | Register user |
| POST   | `/auth/signin` | Login user    |

---

### 👤 Users

| Method | Endpoint    | Description                |
| ------ | ----------- | -------------------------- |
| GET    | `/users/me` | Get current logged-in user |
| PATCH  | `/users`    | Edit user details          |

---

### 🔖 Bookmarks

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/bookmarks`     | Get all bookmarks     |
| GET    | `/bookmarks/:id` | Get bookmark by ID    |
| POST   | `/bookmarks`     | Create new bookmark   |
| PATCH  | `/bookmarks/:id` | Update bookmark by ID |
| DELETE | `/bookmarks/:id` | Delete bookmark by ID |

---

## 🧪 Testing

The project uses **Jest** & **PactumJS** for end-to-end tests.

```bash
# Run unit tests
npm run test

# Run e2e tests (with test DB)
npm run test:e2e
```

e2e tests cover:

* Auth validation & JWT token storage
* User profile fetching & editing
* Bookmarks CRUD (create, read, update, delete)

---

## 📁 Project Structure

```
src
├── app.module.ts
├── auth
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── decorator
│   │   ├── get-user.decorator.ts
│   │   └── index.ts
│   ├── dto
│   │   ├── auth.dto.ts
│   │   └── index.ts
│   ├── guard
│   │   ├── index.ts
│   │   └── jwt.guard.ts
│   └── strategy
│       ├── index.ts
│       └── jwt.strategy.ts
├── bookmark
│   ├── bookmark.controller.ts
│   ├── bookmark.module.ts
│   ├── bookmark.service.ts
│   └── dto
│       ├── create-bookmark.dto.ts
│       ├── edit-bookmark.dto.ts
│       └── index.ts
├── main.ts
├── prisma
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── user
    ├── dto
    │   ├── edit-user.dto.ts
    │   └── index.ts
    ├── user.controller.ts
    ├── user.module.ts
    └── user.service.ts

10 directories, 26 files
```

---

## 🛠️ Technologies Used

* **NestJS**
* **PostgreSQL** (Dockerized)
* **Prisma ORM**
* **PassportJS & JWT**
* **PactumJS** (for e2e tests)
* **dotenv**

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
