import React, { useState } from "react";

function UserProfileCard({
  name,
  email,
  avatar,
  role,
  status,
  stats,
  theme,
  actions,
}) {
  return (
    <div
      className={`rounded-2xl ${theme.backgroundColor} ${theme.textColor} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${theme.avatarBg}`}
        >
          {avatar}
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-slate-300">{email}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.badgeBg}`}
        >
          {status}
        </span>
      </div>

      {/* Stats */}
      <div className="my-6 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{stats.posts}</p>
          <p className="text-xs text-slate-300">Posts</p>
        </div>

        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{stats.followers}</p>
          <p className="text-xs text-slate-300">Followers</p>
        </div>

        <div className="rounded-lg bg-slate-700/40 p-3">
          <p className="text-xl font-bold">{stats.following}</p>
          <p className="text-xs text-slate-300">Following</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={`${actions.primary.className} flex-1`}
        >
          {actions.primary.label}
        </button>

        <button
          onClick={actions.secondary.onClick}
          className={`${actions.secondary.className} flex-1`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

const ComplexProps = () => {
  const [message, setMessage] = useState("");

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
        badgeBg: "bg-green-500 text-white",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing John Doe's profile"),
          className:
            "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition",
        },

        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message"),
          className:
            "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition",
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
        badgeBg: "bg-yellow-500 text-black",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Sarah Wilson's profile"),
          className:
            "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition",
        },

        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message"),
          className:
            "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition",
        },
      },
    },
  ];

  return (
    <section className="rounded-2xl bg-slate-900 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white">Complex Props</h2>

      <p className="mt-2 max-w-3xl text-slate-400">
        Passing complex objects as props allows components to receive structured
        data such as user information, themes, and actions.
      </p>

      {message && (
        <div className="mt-6 rounded-lg border border-blue-500 bg-blue-500/20 p-4 text-blue-200">
          {message}
        </div>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {users.map((user, index) => (
          <UserProfileCard key={index} {...user} />
        ))}
      </div>
    </section>
  );
};

export default ComplexProps;