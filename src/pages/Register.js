import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

export default function Register () {

    const navigate = useNavigate()

    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigate('/')
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <div className="min-h-screen w-full flex justify-center items-center">
                <div className="w-full max-w-xl mx-auto">
                    <form method="POST" onSubmit={handleSubmit}>
                        <h1 className="font-semibold text-2xl">Yeni bir hesap oluştur.</h1>
                        <h1 className="font-semibold text-sm text-gray-600 mt-3">Zaten bir hesabın var mı? <span onClick={() => navigate('/')} className="underline cursor-pointer">Giriş Yap</span></h1>
                        <div className="input-group flex flex-col gap-y-2 mt-5">
                            <label htmlFor="user-email" className="font-semibold">E-Posta</label>
                            <input type="text" id="user-email" placeholder="E-posta adresinizi giriniz." className="outline-indigo-300 w-full border border-rose-300 h-10 px-4" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group flex flex-col gap-y-2 mt-5">
                            <label htmlFor="user-password" className="font-semibold">Şifre</label>
                            <input type="password" id="user-password" placeholder="Şifrenizi giriniz." className="outline-indigo-300 w-full border border-rose-300 h-10 px-4" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white disabled:bg-blue-300 h-12 w-full mt-7" disabled={!email || !password}>Kayıt Ol</button>
                    </form>
                </div>
            </div>
        </>
    )
}