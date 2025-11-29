# Implemented Use Cases on brand application

## Authentication

### Sign In
- User can sign in with email and password via modal dialog
- Credentials are validated against PAM API `/v1/signin`
- Access token and user data stored in localStorage
- Auth state managed via React Context

### Sign Out
- User can sign out from dropdown menu or sidebar
- Clears localStorage and auth context state

### Token-based Sign In
- After payment success, user can be authenticated via `/v1/signinWithToken`
- Used when redirected back from payment gateway with `trumo_order_id`

## Player

### View Balance
- Authenticated users see their balance in the header
- Balance fetched from `/v1/players/me` API
- Displays real money balance in EUR

### Refresh User Data
- Auth context provides `refreshUser()` to fetch latest player data
- `reloadFromStorage()` syncs auth state from localStorage (used after iframe operations)

## Deposit

### Quick Deposit
- Hero section displays quick deposit options for authenticated users
- Predefined amounts: 20€, 50€, 80€
- Clicking opens deposit modal with pre-selected amount

### Deposit Modal
- Shows loading state while initializing deposit
- Calls PAM API `/v1/deposit/request` with amount and payment details
- Displays payment gateway (Trumo) in iframe
- Listens for postMessage from payment result pages
- Shows success state with 5-second auto-close timeout
- Handles payment failure with error display

### Payment Success Page
- Route: `/:lang/payment/success`
- Detects if running in iframe (deposit modal)
- If authenticated: refreshes user balance
- If not authenticated with token: calls `signinWithToken`
- Sends postMessage to parent frame to update state and close modal

### Payment Failure Page
- Route: `/:lang/payment/failure`
- Displays error message
- Sends postMessage to parent frame if in iframe

## Games

### Games Gallery
- Displays all enabled games from Sanity CMS
- Search input to filter games by name (case-insensitive)
- Category filter chips
- Responsive grid layout

### Game Page
- Route: `/:lang/:vendorSlug/:gameSlug`
- Displays game details (name, description, RTP, volatility, max win, release date)
- Game thumbnail image

### Launch Demo Game
- Unauthenticated users can play games in demo mode
- Calls PAM API `/v1/games/launchDemo`
- Opens game in iframe

### Launch Real Money Game
- Authenticated users see "Play" button instead of "Fun Play"
- Calls PAM API `/v1/games/launch` with Authorization header
- Opens game in iframe for real money play

## Navigation

### Collapsible Sidebar (Desktop)
- Left sidebar with navigation links
- Toggle button to collapse/expand
- Links: Games, FAQ, Sign In/Sign Out
- Initially collapsed

### Language Switcher
- Switch between English (en) and Finnish (fi)
- Updates URL and content

### Theme Switcher
- Toggle between light and dark mode

## Content (Sanity CMS)

### Promotions Carousel
- Displays promotional banners from Sanity
- Auto-rotating carousel

### FAQ Section
- Displays frequently asked questions
- Localized content (EN/FI)

### Games Management
- Games stored in Sanity CMS
- Fields: name, slug, description, vendor, type, publicId, enabled, pic3_4, rtp, volatility, rank, maxwin, releaseDate, categories, themes
- Sanity Studio with filters by vendor and category
- Scripts for bulk operations (enable/disable games)
