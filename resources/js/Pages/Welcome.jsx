import { Link, Head } from '@inertiajs/react';
import "../../css/welcome.css"

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="To-do" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="flex flex-col items-center">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="button"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="button"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="button"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}