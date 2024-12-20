# Meditation App

A modern meditation application built with React, TypeScript, TailwindCSS, and Shadcn/ui, featuring:

- A **carousel** showcasing user reviews.
- An **accordion-style FAQ section** for easy navigation.
- A **customizable countdown timer**, accessible globally through React Context API.

This app is a practical example of how to leverage React's Context API for state management across an application, while combining it with a clean and responsive design using TailwindCSS and Shadcn/ui components.

## Features

- **Global Timer Management**: The countdown timer can be accessed and controlled from any page or component thanks to React Context API.
- **Responsive UI**: Designed with TailwindCSS for an optimized user experience across devices.
- **Modern Component Library**: Components from Shadcn/ui enhance consistency and ease of development.
- **Interactive Elements**: Includes a carousel for reviews and an FAQ accordion to improve user engagement.

---

## Live Demo

Check out the deployed application: [Meditation App on Vercel](https://meditation-app-puce.vercel.app/)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/DavideAvagnano/Meditation-App.git
cd Meditation-App
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

### 3. Development Server

Start the development server with:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app in your browser.

---

## Project Stack

### Tools & Frameworks

- **React + TypeScript**: For building robust and type-safe components.
- **Vite**: A fast build tool for modern web projects.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Shadcn/ui**: A component library for reusable and accessible UI elements.

### Installation Steps for Tools

#### React + TypeScript + Vite

```bash
npm create vite@latest
# Select React and TypeScript during setup
```

#### TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js` with your custom settings if necessary.

#### Shadcn/ui

```bash
npx shadcn-ui@latest init
# Follow the prompts for configuration
npx shadcn-ui@latest add button
```

Import Shadcn/ui components as needed.

---

## Deployment

This project is deployed on Vercel for easy access and demonstration.

To deploy it yourself:

1. Connect your GitHub repository to Vercel.
2. Follow the deployment wizard.

More details: [Vercel Documentation](https://vercel.com/docs)

---

## License

This project is open-source and available under the MIT License. Feel free to use it, modify it, and share it.

---

## Contributions

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## Author

Created by [Davide Avagnano](https://github.com/DavideAvagnano).

For any inquiries or suggestions, feel free to reach out!
