# Pokémon Browser

A responsive Pokémon browser built with React, TypeScript, TanStack Query (React Query), and Tailwind CSS. This project demonstrates advanced React patterns, clean architecture, and modern data fetching strategies.

## Live Demo

- **Live Preview**: [https://pokemon-browser-task.netlify.app/](https://pokemon-browser-task.netlify.app/)
- **Repository**: [https://github.com/AhmedMahmoud100/Pok-mon-browser](https://github.com/AhmedMahmoud100/Pok-mon-browser)

## Features

### Dual View Modes
- **Pagination View**: Classic page-based navigation with page numbers and controls
- **Load More View**: Infinite scroll with "Load More" button
- Seamless switching between modes with URL-based state preservation

### Detailed Pokémon Pages
- Dedicated route for each Pokémon with comprehensive stats
- Displays: sprite, types, height/weight, base stats, abilities, and experience
- Color-coded type badges with dynamic theming

### Fully Responsive
- Mobile-first approach with adaptive grid layouts
- Optimized for mobile, tablet, and desktop breakpoints

## Tech Stack

- **React 19.2** + **TypeScript 5.9** - Type-safe component development
- **Vite 7.2** - Fast build tool and dev server
- **TanStack React Query 5.90** - Server state management with caching
- **React Router DOM 7.9** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first styling
- **React Error Boundary 6.0** - Declarative error handling

## Architecture

### Project Structure
The codebase follows a **feature-based architecture** with clear separation of concerns:

- **Pages as modules**: Each page (`PokemonList`, `PokemonDetail`) is self-contained with its own components, hooks, and views
- **Colocation**: Related code lives together - components near the features that use them
- **Shared abstractions**: Common UI components and utilities at the root level
- **Service layer**: API calls isolated in dedicated service files
- **Type-safe utilities**: Helpers and configurations in dedicated folders

### Key Patterns

**Three-Layer State Management:**
- **Server state** (React Query) - API data, caching, synchronization
- **URL state** (React Router) - View mode and pagination
- **Local state** (useState) - Component-specific UI state

**Component Composition:**
- Layout components provide consistent structure
- Feature components are composed from smaller, focused pieces
- Separation of views (Pagination vs Infinite) with shared components

### API Architecture

**Custom API Client:**
Built a centralized API client (`createApiClient`) with:
- Base URL configuration from environment variables
- Automatic header management (Content-Type, custom headers)
- URL construction with query parameters
- Comprehensive error handling with custom `ApiError` class
- Method-based functions: `get()`, `post()`, `put()`, `patch()`, `delete()`

**TanStack Query Integration:**
Custom hooks wrapping the API client with React Query:
- `useApiQuery` - GET requests with caching and background sync
- `useApiMutation` - POST/PUT/PATCH/DELETE with automatic query invalidation
- `useApiInfiniteQuery` - Infinite scroll with cursor-based pagination

This architecture provides:
- Type-safe API calls across the application
- Centralized request/response handling
- Separation of concerns (API logic vs. Query logic)
- Easy testing and mocking capabilities

## Development Decisions

**React Query** - Eliminates boilerplate for loading/error states, provides caching and background sync

**TypeScript** - Type safety across API boundaries, better refactoring, self-documenting code

**Tailwind CSS** - Rapid development, consistent design system, optimized bundle size

**Feature-based Structure** - Scales better than type-based folders, easier to locate related code

**URL State** - Shareable links, browser back/forward support, no prop drilling

## Performance Optimizations

- Route-based code splitting
- React Query caching prevents redundant API calls
- Skeleton screens for perceived performance
- Pagination and Suspense for optimal UX

## Getting Started

This project uses **pnpm** for package management, offering:
- **Faster installs** - Up to 2x faster than npm
- **Efficient disk usage** - Content-addressable storage eliminates duplication
- **Strict dependency resolution** - Prevents phantom dependencies

```bash
pnpm install
pnpm run dev      # Development server
pnpm run build    # Production build
```

## API Integration

Uses [PokéAPI v2](https://pokeapi.co/api/v2):
- `/pokemon?limit={n}&offset={n}` - Paginated list
- `/pokemon/{id}` - Individual Pokémon details

## Bonus Features Implemented

✅ React Query for data fetching and caching
✅ React Suspense for loading state management
✅ Error Boundaries for graceful error handling
