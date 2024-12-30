/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TosLazyImport = createFileRoute('/tos')()
const PrivacyLazyImport = createFileRoute('/privacy')()
const CookiesLazyImport = createFileRoute('/cookies')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TosLazyRoute = TosLazyImport.update({
  id: '/tos',
  path: '/tos',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tos.lazy').then((d) => d.Route))

const PrivacyLazyRoute = PrivacyLazyImport.update({
  id: '/privacy',
  path: '/privacy',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/privacy.lazy').then((d) => d.Route))

const CookiesLazyRoute = CookiesLazyImport.update({
  id: '/cookies',
  path: '/cookies',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cookies.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/cookies': {
      id: '/cookies'
      path: '/cookies'
      fullPath: '/cookies'
      preLoaderRoute: typeof CookiesLazyImport
      parentRoute: typeof rootRoute
    }
    '/privacy': {
      id: '/privacy'
      path: '/privacy'
      fullPath: '/privacy'
      preLoaderRoute: typeof PrivacyLazyImport
      parentRoute: typeof rootRoute
    }
    '/tos': {
      id: '/tos'
      path: '/tos'
      fullPath: '/tos'
      preLoaderRoute: typeof TosLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/cookies': typeof CookiesLazyRoute
  '/privacy': typeof PrivacyLazyRoute
  '/tos': typeof TosLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/cookies': typeof CookiesLazyRoute
  '/privacy': typeof PrivacyLazyRoute
  '/tos': typeof TosLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/cookies': typeof CookiesLazyRoute
  '/privacy': typeof PrivacyLazyRoute
  '/tos': typeof TosLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/cookies' | '/privacy' | '/tos'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/cookies' | '/privacy' | '/tos'
  id: '__root__' | '/' | '/about' | '/cookies' | '/privacy' | '/tos'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  CookiesLazyRoute: typeof CookiesLazyRoute
  PrivacyLazyRoute: typeof PrivacyLazyRoute
  TosLazyRoute: typeof TosLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  CookiesLazyRoute: CookiesLazyRoute,
  PrivacyLazyRoute: PrivacyLazyRoute,
  TosLazyRoute: TosLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/cookies",
        "/privacy",
        "/tos"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/cookies": {
      "filePath": "cookies.lazy.tsx"
    },
    "/privacy": {
      "filePath": "privacy.lazy.tsx"
    },
    "/tos": {
      "filePath": "tos.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */