import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

export default function Login () {

    const navigate = useNavigate()

    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        await signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigate('/profile')
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <div className="min-h-screen w-full flex justify-center items-center">
                <div className="w-full max-w-xl mx-auto">
                    <form method="POST" onSubmit={handleSubmit}>
                        <h1 className="font-semibold text-2xl">Hesabına giriş yap.</h1>
                        <h1 className="font-semibold text-sm text-gray-600 mt-3">Oluşturulmuş bir hesabın yok mu? <span onClick={() => navigate('/register')} className="underline cursor-pointer">Kayıt Ol</span></h1>
                        <div className="input-group flex flex-col gap-y-2 mt-5">
                            <label htmlFor="user-email" className="font-semibold">E-Posta</label>
                            <input type="text" id="user-email" placeholder="E-posta adresinizi giriniz." className="outline-indigo-300 w-full border border-rose-300 h-10 px-4" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group flex flex-col gap-y-2 mt-5">
                            <label htmlFor="user-password" className="font-semibold">Şifre</label>
                            <input type="password" id="user-password" placeholder="Şifrenizi giriniz." className="outline-indigo-300 w-full border border-rose-300 h-10 px-4" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white disabled:bg-blue-300 h-12 w-full mt-7" disabled={!email || !password}>Giriş Yap</button>
                    </form>
                </div>
            </div>
        </>
    )
}