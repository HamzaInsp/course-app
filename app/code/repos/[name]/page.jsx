import Repo from "@/app/components/Repo";
import RepoDirc from "@/app/components/RepoDirc";
import Link from "next/link";
import { Suspense } from "react";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading Directory...</div>}>
      <RepoDirc name={name} />
      </Suspense>
    </div>
  );
}
