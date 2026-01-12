# streamwave

Streamwave is a video streaming web app akin to YouTube, leveraging the power of React and TypeScript. Viewers can explore a vast library of content, enjoy high-quality streaming, and interact through comments, likes, and subscriptions. The application boasts an intuitive user interface, responsive design, and robust video playback capabilities, delivering an engaging and immersive video-sharing experience.

### [Live Site](https://streamwave-sk.vercel.app/)

<img src="https://github.com/user-attachments/assets/b91ebfb9-7dd5-4890-87eb-2e580d134ef1" />

#

### Tech Stack

- **React 18** with **TypeScript** for type-safe component development
- **Vite** for fast development and optimized production builds
- **Redux Toolkit** for efficient state management
- **React Router** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Clerk** for authentication
- **Axios** for API requests

### Features

- **Embedded YouTube API:** Seamlessly integrated YouTube's API for real-time content updates and an immersive user experience.
- **Dynamic Routing with React Router:** Enabled smooth and seamless navigation without page reloads using `react-router-dom`.
- **Efficient State Management with Redux:** Utilized Redux and Redux Toolkit for synchronized data and UI interactions.
- **Enhanced UX with Debouncing:** Implemented a 200ms debounce for lag-free, lightning-fast interactions.
- **Optimized Caching:** Employed clever caching strategies for faster search results and suggestions.
- **Code Splitting:** Lazy-loaded route components for faster initial page loads and smaller bundle sizes.
- **Sleek Design with Tailwind CSS:** A visually stunning, modern design created with Tailwind CSS.
- **Real-time Chat with API Polling:** Engage in real-time conversations without refreshing the page.
- **Nested Comment System:** Join organized, interactive discussions seamlessly.
- **Efficient Live Chat:** Auto-deleting messages after 20 entries to keep the chat streamlined and optimized.
- **Streamlined Navigation:** Easily explore video categories via the left navigation bar.
- **Full Video Playback Controls:** Enjoy video playback with comprehensive controls similar to YouTube.
- **Smart Suggestions:** Receive curated video suggestions while watching content.
- **Seamless Offline Experience:** Stay informed with a user-friendly UI notifying you of internet connection interruptions.
- **Automatic Redirection:** Effortlessly return to your content once the internet connection is restored.
- **Universal Compatibility:** Experience our fully responsive design, ensuring compatibility across all devices.
- **Shimmering UI:** It employs the Shimmer UI effect for subtle yet captivating content loading animations, enhancing user experience and visual appeal.
- **Adaptive Theme Modes:** Offers both Light and Dark mode options that automatically match your browser's theme preference, with a toggle for personalized viewing.

#

### Installation Steps

You need to install the dependencies:

```
npm install
```

### Available Scripts

In the project directory, you can run:

```
npm run dev
```

To build for production:

```
npm run build
```

To run type checking:

```
npx tsc --noEmit
```

