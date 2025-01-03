/* eslint-disable @next/next/no-img-element */
"use client";

export default function HomePage() {
  return (
    <main className="w-screen h-screen bg-gradient-to-b flex flex-col justify-center from-[#18153d] to-[#0b0a1d]">
      <div className="flex flex-col justify-center m-auto">
        <div className="-mt-80">
          <img
            className="w-32 flex justify-center m-auto"
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9OeVdwN25WOXFyZ3JXWTdIOG01di5wbmcifQ:supercell:z5sk3iKKQv455AMtjTuUFXqI12eNbBhTU3b8Zv8dbME?width=800"
          />
          <p className="text-indigo-200 text-sm sm:text-xl min-w-32 flex">
            Type 'YJ9UJ8CLQ' into the search bar for an example !
          </p>
        </div>
      </div>
    </main>
  );
}
