import { useAuth } from "../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'

export default function Profile () {

    const { user } = useAuth()

    const navigate = useNavigate()

    const handleClick = () => {
        signOut(auth)

        navigate('/')
    }

    return (
        <>
            <div className="w-full container mx-auto my-20">
                <h1 className="font-semibold text-2xl">Kullanıcı profili</h1>
                <h1 className="text-2xl mt-5">E-Mail : <span>{user.email}</span></h1>
                <button className="mt-10 bg-gray-200 px-16 rounded py-3 text-gray-600" onClick={handleClick}>Çıkış Yap</button>
            </div>
        </>
    )
}