
function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  return (
    <div
      className={`rounded-xl border-l-4 ${colorClasses[color]} bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
    >
      {title && (
        <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      )}

      <div className="space-y-2 text-slate-300">
        {children}
      </div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-6",
    horizontal: "flex flex-col gap-6 lg:flex-row",
    grid: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
  };

  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}

const ChildrenProps = () => {
  return (
    <section className="mx-auto border my-6 max-w-5xl rounded-xl bg-slate-900 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white">
        Children Props
      </h2>

      <p className="mt-3 max-w-3xl text-slate-400">
        The <code className="rounded bg-slate-800 px-1">children</code> prop
        allows a component to render any JSX passed between its opening and
        closing tags, making components flexible and reusable.
      </p>

      <div className="mt-10">
        <h3 className="mb-6 text-xl font-semibold text-white">
          Card Component with Children
        </h3>

        <Container layout="horizontal">
          <Card title="User Profile" color="green">
            <p>👤 Name: John Doe</p>
            <p>🎂 Age: 30</p>
            <p>📍 Location: New York</p>
          </Card>

          <Card title="Statistics" color="purple">
            <p>👁️ Views: 1,000</p>
            <p>💬 Comments: 50</p>
            <p>📤 Shares: 20</p>
          </Card>
        </Container>
      </div>
    </section>
  );
};
export default ChildrenProps