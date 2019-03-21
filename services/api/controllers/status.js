import { router, get } from 'microrouter'

export const getStatus = () => ({ status: 200 })

export default router(get('/api/status', getStatus))
