"use client"

import Link from "next/link";
import Hello from '@/content/hello.mdx';


export default function Example() {
    return(
        <div>
            <div className="bg-red-500 text-xl p-4 rounded-md">
                <Hello />
            </div>
            <br />
            <Link href="/">Return</Link>
        </div>
    )
}