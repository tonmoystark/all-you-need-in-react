import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

function Navigation() {
  const sections = [
    { id: "basic", name: "Basic Props", icon: "📦" },
    { id: "ref", name: "Ref Props", icon: "🔗" },
    { id: "children", name: "Children Props", icon: "👶" },
    { id: "complex", name: "Complex Props", icon: "🧩" },
    { id: "theme", name: "Theme Props", icon: "🌞" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 overflow-x-auto px-4 py-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white hover:shadow-md"
          >
            <span className="text-lg">{section.icon}</span>
            <span>{section.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function App() {

  return (
    <div>
        <Navigation />
    </div>
  )
}

export default App
