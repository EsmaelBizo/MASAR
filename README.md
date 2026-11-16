# MASAR

### A modern intercity bus booking platform for Syria

MASAR helps travelers search for bus trips, compare available options, select their preferred seat, complete a booking, and receive a digital QR-code ticket — all through one simple and seamless experience.

<p>
  <a href="https://masar-pullman.netlify.app/"><strong>Visit the Website</strong></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://masar-dash.netlify.app/"><strong>Open the Dashboard</strong></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/EsmaelBizo/masar-dash"><strong>Dashboard Repository</strong></a>
</p>

![MASAR](src/assets/images/hero.svg)

## ✨ Key Features

- **Trip search:** Choose your departure city, destination, and travel date.
- **Clear results:** Compare trips, transport companies, departure times, and arrival times.
- **Seat selection:** Use an interactive **2+1** bus cabin layout to choose a seat.
- **Complete booking flow:** Enter passenger details and review the booking before confirmation.
- **Digital tickets:** Receive an electronic ticket with a scannable QR code.
- **Trip tracking:** Follow the trip status and journey stages on an interactive map.
- **Booking management:** Access current and previous bookings from your account.
- **Responsive design:** Optimized for mobile, tablet, and desktop screens.
- **Arabic-first experience:** RTL interface designed for Arabic-speaking travelers.

## 🧭 User Journey

```text
Search for a trip  →  Choose a trip and seat  →  Enter passenger details
       →  Review the booking  →  Receive your digital ticket  →  Track your trip
```

## 🖥️ Related Projects

| Project | Description | Link |
|---|---|---|
| **MASAR Website** | Passenger-facing booking and trip management experience | [Live website](https://masar-pullman.netlify.app/) |
| **MASAR Dashboard** | Operations and administration dashboard | [Live dashboard](https://masar-dash.netlify.app/) |
| **Dashboard Repository** | Source code for the administration dashboard | [GitHub](https://github.com/EsmaelBizo/masar-dash) |

## 🛠️ Technology Stack

- **React 19** for the user interface.
- **Vite** for fast development and production builds.
- **React Router** for page and route management.
- **TanStack Query** for server-state and data fetching.
- **Zustand** for local application state.
- **Axios** for API communication.
- **Tailwind CSS 4** and **Lucide React** for the interface.
- **ESLint** for code quality and consistency.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later.
- npm.

### Installation and Development

```bash
git clone https://github.com/EsmaelBizo/MASAR.git
cd MASAR
npm install
npm run dev
```

Then open the URL displayed by Vite in your terminal, usually:

```text
http://localhost:5173
```

### Environment Variables

The application uses the API endpoint configured in `src/services/api-client.js` by default. To customize it, create a `.env` file in the project root:

```env
VITE_WEBSITE_API_BASE_URL=https://your-api.example.com/api/v1/website
```

The alternative `VITE_API_BASE_URL` variable is also supported.

## 📦 Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 🗂️ Project Structure

```text
src/
├── app/          # Application setup and routes
├── assets/       # Images and graphics
├── components/   # Shared UI and application components
├── constants/    # Cities, companies, and route definitions
├── hooks/        # Custom React hooks
├── layouts/      # Shared page layouts
├── pages/        # Application pages and sections
├── services/     # API communication
├── store/        # Global application state
└── lib/          # Shared utilities and helpers
```

## 🤝 Contributing

Contributions and suggestions are welcome:

1. Fork the repository.
2. Create a branch for your change.
3. Implement the change and run the relevant checks.
4. Open a pull request with a clear description.

## 📄 License

No open-source license has been specified for this project yet. Please contact the project owners before reusing or distributing the code.
