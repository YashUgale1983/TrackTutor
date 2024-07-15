"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";


const Page = ()=>{
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success})=>{
            if(success){
                // user is synced to db
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        },
        onError: (err)=>{
            if (err.data?.code === 'UNAUTHORIZED') {
                router.push('/api/auth/login');
              }
        },
        retry: 5,
        retryDelay: 500,
    })


    return(
        <div className="w-full mt-24 flex justify-center bg-gray-950">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-16 w-16 animate-spin text-white"/>
                <h3 className="font-semibold text-2xl text-white">Loading your account...</h3>
            </div>
        </div>
    )
}

export default Page;