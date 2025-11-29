# Tuplaa.com Design System Guidelines

## Visual Identity

### Colors
- **Primary:** Dark theme (deep purple, navy, black)
- **Accents:** Gold, neon green, electric blue for wins/CTAs
- **Semantic:** Success (wins), warning (low balance), error states
- **Contrast:** WCAG AA minimum (4.5:1 text, 3:1 UI)

### Typography
- **Display:** Bold, exciting font for headings
- **Body:** Clean sans-serif for UI/text
- **Scale:** Consistent sizing for titles, balances, buttons, legal text

### Icons
- Consistent set: spin, bet adjust, autoplay, sound, fullscreen, info, menu
- Optimized for small sizes/mobile

---

## Core Components

| Component | Requirements |
|-----------|-------------|
| **Buttons** | Primary (spin) visually dominant; hover, active, disabled, loading states |
| **Game Tiles** | 4:3 or 16:9 ratio; thumbnail, title, provider badge; "new/hot/jackpot" badges |
| **Balance Display** | Always visible, real-time updates, separate real/bonus funds |
| **Bet Controls** | +/- steppers, quick-select chips, touch-friendly (44px minimum) |
| **Modals** | Consistent headers, close patterns, backdrop, animations |

---

## Layout

### Grid
- Mobile-first responsive
- Breakpoints: mobile, tablet, desktop
- Game lobby: 2 cols (mobile) → 4-6 cols (desktop)

### Sticky Elements
- Navigation, balance, primary CTAs always accessible
- Bottom nav pattern for mobile

### Spacing Scale
`4px → 8px → 16px → 24px → 32px → 48px`

---

## Motion & Interaction

- **Feedback:** Button states, hover effects, balance updates (<300ms)
- **Wins:** Tiered celebration intensity by win size
- **Loading:** Skeleton screens, spinners, progressive image loading
- **Transitions:** Consistent easing curves throughout

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

---

## Responsible Gambling

- Session time/net position display
- Deposit/loss/session limit controls
- Self-exclusion in account settings
- Reality check modals (periodic reminders)

---

## Accessibility

- Keyboard navigable with visible focus states
- Screen reader support (semantic HTML, ARIA labels)
- `prefers-reduced-motion` support
- Sufficient color contrast

---

## Design Tokens

```
colors/
  primary, secondary, accent
  success, warning, error
  background, surface, text

typography/
  fontFamily, fontSize, fontWeight, lineHeight

spacing/
  xs(4), sm(8), md(16), lg(24), xl(32), xxl(48)

radii/
  sm(4), md(8), lg(16), full(9999)

shadows/
  sm, md, lg

motion/
  duration: fast(150ms), normal(300ms), slow(500ms)
  easing: ease-out, ease-in-out

breakpoints/
  mobile(0), tablet(768), desktop(1024), wide(1440)

zIndex/
  dropdown(100), sticky(200), modal(300), toast(400)
```