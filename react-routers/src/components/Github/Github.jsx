import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const followers = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/dhruviin")
  //       .then((response) => response.json())
  //       .then((data) => setFollowers(data))
  //       .catch((error) => console.error("Error fetching followers:", error));
  //   }, []);
  return (
    <div className="bg-gray-800 text-white p-4">
      Github Followers : {followers.followers}
      <img
        src={followers.avatar_url}
        alt="Avatar"
        className="w-16 h-16 rounded-full mt-2"
      />
    </div>
  );
}

export default Github;

export async function githubLoader() {
  const response = await fetch("https://api.github.com/users/dhruviin");
  if (!response.ok) {
    throw new Error("Failed to fetch followers");
  }
  const data = await response.json();
  return data;
}
