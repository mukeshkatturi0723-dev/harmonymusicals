/* eslint-disable */
// @ts-nocheck
// Generated route tree. Keep this file in sync when adding file routes.
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as InstrumentsRouteImport } from './routes/instruments'
import { Route as ProductRouteImport } from './routes/instruments/$productId'
import { Route as CartRouteImport } from './routes/cart'
import { Route as CheckoutRouteImport } from './routes/checkout'
import { Route as AdminRouteImport } from './routes/admin'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const InstrumentsRoute = InstrumentsRouteImport.update({ id: '/instruments', path: '/instruments', getParentRoute: () => rootRouteImport } as any)
const ProductRoute = ProductRouteImport.update({ id: '/$productId', path: '/$productId', getParentRoute: () => InstrumentsRoute } as any)
const CartRoute = CartRouteImport.update({ id: '/cart', path: '/cart', getParentRoute: () => rootRouteImport } as any)
const CheckoutRoute = CheckoutRouteImport.update({ id: '/checkout', path: '/checkout', getParentRoute: () => rootRouteImport } as any)
const AdminRoute = AdminRouteImport.update({ id: '/admin', path: '/admin', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath { '/': typeof IndexRoute; '/instruments': typeof InstrumentsRoute; '/instruments/$productId': typeof ProductRoute; '/cart': typeof CartRoute; '/checkout': typeof CheckoutRoute; '/admin': typeof AdminRoute }
export interface FileRoutesByTo { '/': typeof IndexRoute; '/instruments': typeof InstrumentsRoute; '/instruments/$productId': typeof ProductRoute; '/cart': typeof CartRoute; '/checkout': typeof CheckoutRoute; '/admin': typeof AdminRoute }
export interface FileRoutesById { __root__: typeof rootRouteImport; '/': typeof IndexRoute; '/instruments': typeof InstrumentsRoute; '/instruments/$productId': typeof ProductRoute; '/cart': typeof CartRoute; '/checkout': typeof CheckoutRoute; '/admin': typeof AdminRoute }
export interface FileRouteTypes { fileRoutesByFullPath: FileRoutesByFullPath; fullPaths: keyof FileRoutesByFullPath; fileRoutesByTo: FileRoutesByTo; to: keyof FileRoutesByTo; id: keyof FileRoutesById; fileRoutesById: FileRoutesById }
declare module '@tanstack/react-router' { interface FileRoutesByPath { '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }; '/instruments': { id: '/instruments'; path: '/instruments'; fullPath: '/instruments'; preLoaderRoute: typeof InstrumentsRouteImport; parentRoute: typeof rootRouteImport }; '/instruments/$productId': { id: '/$productId'; path: '/$productId'; fullPath: '/instruments/$productId'; preLoaderRoute: typeof ProductRouteImport; parentRoute: typeof InstrumentsRouteImport }; '/cart': { id: '/cart'; path: '/cart'; fullPath: '/cart'; preLoaderRoute: typeof CartRouteImport; parentRoute: typeof rootRouteImport }; '/checkout': { id: '/checkout'; path: '/checkout'; fullPath: '/checkout'; preLoaderRoute: typeof CheckoutRouteImport; parentRoute: typeof rootRouteImport }; '/admin': { id: '/admin'; path: '/admin'; fullPath: '/admin'; preLoaderRoute: typeof AdminRouteImport; parentRoute: typeof rootRouteImport } } }
const rootRouteChildren = { IndexRoute, InstrumentsRoute: InstrumentsRoute.addChildren({ ProductRoute }), CartRoute, CheckoutRoute, AdminRoute }
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' { interface Register { ssr: true; router: Awaited<ReturnType<typeof getRouter>>; config: Awaited<ReturnType<typeof startInstance.getOptions>> } }
