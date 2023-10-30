import Input from "@/components/input";
import { useCallback, useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    return (
        <div className="relative min-h-screen h-full w-full bg-[url('/images/hero.webp')] bg-no-repeat bg-center bg-fixed">
            <div className="bg-slate-100 w-full h-full lg:bg-opacity-0">
                <nav className="px-12 py-5 flex justify-between items-center bg-slate-100">
                        <img src="/images/logo-freetv-dark.svg" alt="Logo"/>
                        <div className="text-left color-#13152C font-ploni-d-bold text-base">
                            כניסה לשירות
                        </div>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-slate-100 px-30 py-16 self-center mt-20 lg:w-2/5 lg:max-w-lg rounded-2xl w-full">
                        <h2 className=" text-slate-900 font-ploni-d-bold text-3xl">
                            {variant === 'login' ? 'כניסה מהירה דרך דוא"ל' : 'הרשמה מהיה דרך דוא"ל'}
                        </h2>
                        <div className="flex flex-col gap4">
                            <Input
                                label="דואר אלקטרוני"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="סיסמה"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="py-3 text-slate-900 text-none bg-gradient-to-r from-brandPrimary to-brandSecondry hover:from-lime-300 hover:to-emerald-500 font-ploni-d-bold rounded-full w-full mt-10 transition duration-300 ease-in-out">
                            {variant === 'login' ? 'התחבר' : 'הירשם'}
                        </button>

                        <p className="text-neutral-500 mt-8 font-ploni-d-bold">
                            {variant === 'login' ? 'פעם ראשונה ב-Free TV?' : 'יש לך כבר חשבון?'}
                            <span onClick={toggleVariant} className="text-slate-900 mr-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'צור חשבון' : 'התחבר'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;