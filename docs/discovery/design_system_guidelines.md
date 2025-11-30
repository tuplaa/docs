# Tuplaa.com Design System Guidelines

## Visual Identity

## Background
- **Dark** for game content
- **Black on white** for texts to read, FAQ, TC, EULA, Bonus terms

### Colors
- **Primary:** TBD 
- **Accents:** TBD
- **Semantic:** TBD

### Typography
- **Display:** Exciting font for headings
- **FAQ:** Clear monospace font to read text and terms

### Icons
- Consistent set: game categories
- Optimized for iphone size

---

## Core Components

| Component           | Requirements                                                                 |
|---------------------|------------------------------------------------------------------------------|
| **Buttons**         | Primary (Deposit) visually dominant; hover, active, disabled, loading states |
| **Game Thumbs**     | 3:4 ratio; thumbnail, title, provider badge; "new/hot/jackpot", rtp badges   |
| **Balance Display** | Visible while not playing, real-time updates, separate real/bonus funds      |
| **Modals**          | Consistent headers, close patterns, backdrop, animations                     |

---

## Layout

### Grid
- Mobile-first responsive
- Breakpoints: mobile, tablet, desktop
- Game lobby: 2 cols (mobile) → 4-6 cols (desktop)

### Sticky Elements
- Navigation, balance, primary CTAs always accessible
- Bottom nav pattern for mobile

---

## Motion & Interaction

- **Feedback:** Button states, hover effects, balance updates (\<300ms)
- **Loading:** Skeleton screens, spinners, progressive image loading
- **Game grid transitions:** framer animations

---

## Navigation

- **Primary:** Home, categories (popular/new/jackpots/providers), promos, account
- **Search:** Autocomplete, filter by provider/features
- **Quick Access:** Recently played, favorites

---

## Mobile

- Touch targets: 44x44px minimum
- Landscape orientation prompts for games
- Thumb-zone friendly action placement
- Performance: lazy-load tiles, optimized assets

