import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🌞" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 overflow-x-auto px-6 py-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
          >
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
    <header className={`mx-auto max-w-7xl px-6 py-16 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          React Props Explained
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          A comprehensive guide to understanding Props in React.
        </p>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Your sections/components go here */}
      </main>
    </div>
  );
}

function App() {

  return (
    <AppContent />
  )
}

export default App
