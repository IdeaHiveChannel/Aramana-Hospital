import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { MedicalSchema } from "../components/site/MedicalSchema";
import { InstitutionalMap } from "../components/sections/InstitutionalMap";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F2EB] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page not found.</h2>
        <p className="mt-2 text-sm text-[#59666C]">This page doesn't exist or has been moved.</p>
        <Link to="/" className="btn-outline mt-8 inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F2EB] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl">This page didn't load.</h1>
        <p className="mt-2 text-sm text-[#59666C]">Try refreshing or return to the homepage.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aramana Hospital & Heart Centre / Kasaragod" },
      {
        name: "description",
        content:
          "Cardiology and multi-specialty hospital at Ashwini Nagar, Kasaragod. 24x7 emergency, cath lab, ICU, diagnostics and OP consultation.",
      },
      { name: "author", content: "Aramana Hospital & Heart Centre" },
      { property: "og:title", content: "Aramana Hospital & Heart Centre" },
      {
        property: "og:description",
        content: "Cardiology and multi-specialty care at Ashwini Nagar, Kasaragod.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <MedicalSchema />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="pt-0">
        <Outlet />
      </main>
      <InstitutionalMap />
      <Footer />
    </QueryClientProvider>
  );
}
