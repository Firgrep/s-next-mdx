"use client"

import Link from "next/link";
import Hello from '@/content/hello.mdx';
import { TestC } from "@/components/TestC";

// ! The .md formatting is lost when the mdx file is displayed 

export default function Example() {
    return(
        <div>
            <div className="bg-red-500 text-xl p-4 rounded-md">
                <Hello components={{TestC: TestC}}/>
            </div>
            <br />
            <Link href="/">Return</Link>
        </div>
    )
}