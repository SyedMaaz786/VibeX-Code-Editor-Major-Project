"use client";

import { useSession, signOut } from "next-auth/react";

export default function UserButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={() => (window.location.href = "/auth/sign-in")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign In
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">{session.user?.email}</span>
      <button
        onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
