# Rick and Morty — Tech Design Guide

## 1. How to Run the Application

```bash
git clone https://github.com/tomerbabila/rick-and-morty.git
npm ci
npm start
```

**Environment:**

- React 19 (Create React App with TypeScript template)
- Node 18+ and npm 9+

---

## 2. Component Breakdown

**Overall layout:**
Two main panels side by side:

- **Left:** Searchable character list (with pagination, modal for details)
- **Right:** Favorites list (with color customization)

**Main components:**

- `App.tsx` — root, layout, wraps everything in `FavoritesProvider`
- `Layout.tsx` — main page layout
- `Home.tsx` — main page content
- `Modal.tsx` - using `react-portal` to show the modal

**Left side (Character List)**

- `CharacterList.tsx` — fetches and renders character cards with pagination and search
- `Input.tsx` — controlled input for search
- `CharacterCard.tsx` — shows character info and favorite toggle
- `CharacterModal.tsx` — shows character details in a modal (using portal)

**Right side (Favorites Panel)**

- `FavoritesList.tsx` — list of favorite cards (using `CharacterCard.tsx`)
- `ColorPicker.tsx` — lets user customize panel background

---

## 3. Services and State Management

### API (`api/client.ts`)

- Fetches characters data from Rick & Morty API using search and pagination
- Type definitions are based on the API documentation

### State Management (`state/FavoritesContext.tsx`)

- Uses `useReducer` + `useContext`
- Global state:

```ts
{
  favorites: Record<number, Character[]>; // {[id]: Character}
  color: string;
}
```

- Actions:
- **Actions:**
  - `toggle`: Adds or removes a character from favorites
  - `removeAll`: Clears all favorites
  - `setColor`: Updates the background color of the favorites panel
  - `has`: Checks if a character is currently favorited
- State is persisted in `localStorage`

---

## 4. Interaction Flow Diagram

```
App
 ├── Layout
 │    ├── Modal (root)
 │    └── Home
 │         ├── CharacterList
 │         │     ├── SearchBar (Input)
 │         │     ├── CharacterCard[]
 │         │     └── CharacterModal
 │         └── FavoritesList
 │               ├── CharacterCard[]
 │               └── ColorPicker
```

**Search flow:**
type in `SearchBar` → debounced query → fetch API → display results

**Favorites flow:**
click favorite button → update context → save to localStorage → show in panel

**Modal flow:**
click card → open modal and show data → fetch origin → close on outside click or X

---

## 7. Future Features & Developments

To continue building on this assignment, here are planned or possible features:

### Testing

- Add unit tests (Jest + React Testing Library) for:
  - `FavoritesContext` reducer logic
  - Character list rendering and search behavior
  - Modal open/close behavior
- Add integration tests for the full user flow (search → select → favorite)

### Favorites Improvements

- Add favorite/unfavorite button inside the `CharacterModal`
- Allow drag & reorder favorites

### Performance

- Cache API responses to avoid refetching characters already loaded

### Deployment

- Add simple deployment using GitHub Pages (via `gh-pages` branch) or Vercel for instant hosting

---

## 8. Links

- API Docs: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
- Repo: [https://github.com/tomerbabila/rick-and-morty](https://github.com/tomerbabila/rick-and-morty)
