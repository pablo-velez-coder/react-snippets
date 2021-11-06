import { useRouter } from 'next/router'

const Hook = () => {

    const router = useRouter()
  const { hook } = router.query
  console.log(router)
    return (
        <div>
            {hook[0]}
        </div>
    )
}

export default Hook
