import React from 'react'

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`rounded-2xl ${theme.backgroundColor} ${theme.textColor} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${theme.avatarBg}`}
        >
          {user.avatar}
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-sm text-slate-300">{user.email}</p>
          <p className="text-sm text-slate-400">{user.role}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.badgeBg}`}
        >
          {user.status}
        </span>
      </div>

      {/* Stats */}
      <div className="my-6 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{user.stats.posts}</p>
          <p className="text-xs text-slate-300">Posts</p>
        </div>

        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{user.stats.followers}</p>
          <p className="text-xs text-slate-300">Followers</p>
        </div>

        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{user.stats.following}</p>
          <p className="text-xs text-slate-300">Following</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={`${actions.primary.className} flex-1 transition`}
        >
          {actions.primary.label}
        </button>

        <button
          onClick={actions.secondary.onClick}
          className={`${actions.secondary.className} flex-1 transition`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

const ComplexProps = () => {

  const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    avatar: "JD",
    role: "Frontend Developer",
    status: "Online",

    stats: {
      posts: 128,
      followers: 2450,
      following: 310,
    },

    theme: {
      backgroundColor: "bg-slate-800",
      textColor: "text-white",
      avatarBg: "bg-blue-500",
      badgeBg: "bg-green-500",
    },

    actions: {
      primary: {
        label: "View Profile",
        onClick: () => setMessage("Viewing John Doe's profile"),
        className:
          "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg",
      },

      secondary: {
        label: "Message",
        onClick: () => setMessage("Opening message"),
        className:
          "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg",
      },
    },
  },

  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "SW",
    role: "UI/UX Designer",
    status: "Away",

    stats: {
      posts: 89,
      followers: 1820,
      following: 215,
    },

    theme: {
      backgroundColor: "bg-slate-800",
      textColor: "text-white",
      avatarBg: "bg-purple-500",
      badgeBg: "bg-yellow-500",
    },

    actions: {
      primary: {
        label: "View Profile",
        onClick: () => setMessage("Viewing Sarah Wilson's profile"),
        className:
          "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg",
      },

      secondary: {
        label: "Message",
        onClick: () => setMessage("Opening message"),
        className:
          "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg",
      },
    },
  },
];


  return (
  <section className="rounded-2xl bg-slate-900 p-8 shadow-lg">
    <h2 className="text-3xl font-bold text-white">Complex Props</h2>

    <p className="mt-2 max-w-3xl text-slate-400">
      Passing complex objects as props allows a component to receive structured
      data like user information, theme configuration, and action handlers.
    </p>

    <div className="mt-10">
      <h3 className="mb-6 text-xl font-semibold text-white">
        User Profile Cards
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {users.map((user, index) => (
          <UserProfileCard
            key={index}
            user={user}
            theme={user.theme}
            actions={user.actions}
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default ComplexProps