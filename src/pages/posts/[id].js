import React from 'react'
import { useRouter } from 'next/router'
export default function page() {
    const router = useRouter()
    return (
        <div>{router.query.id}</div>
    )
}
