'use client'

import { useRouter,usePathname } from 'next/navigation'
import React, { MouseEvent } from 'react'

export default function LoginButton(): React.JSX.Element {
  // TypeScript infers the type as AppRouterInstance automatically
  const router = useRouter()
  const pathname = usePathname()
  const handleLogin = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    
    // Perform authentication logic here...
    
    // Redirect programmatically
    router.push('/dashboard')
  }

  return (
	<div>
		<h1>GeeksforGeeks</h1> 
		<h2>pathname:- {pathname}</h2> 
		<button type="button" onClick={handleLogin}>
			Log In
		</button>
	</div>
  )
}