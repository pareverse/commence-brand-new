import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Loading from 'components/loading'
import Unauthorized from 'components/unauthorized'

const AppLayout = ({ children, authentication }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	const router = useRouter()
	const { data: session, status } = useSession()

	if (!mounted || status === 'loading') {
		return <Loading />
	} else {
		if (!session && authentication) {
			router.push('/login')
			return <Loading />
		}

		if (session && router.pathname === '/login') {
			router.push('/')
			return <Loading />
		}

		if (session && authentication && authentication.authorized) {
			if (session.user.role !== authentication.authorized) {
				return <Unauthorized />
			}
		}

		if (session) {
			return children
		} else {
			return children
		}
	}
}

export default AppLayout
