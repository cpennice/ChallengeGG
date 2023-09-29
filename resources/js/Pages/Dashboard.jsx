import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="text-center p-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        DASHBOARD
                    </div>
                    <Button variant="primary" className="d-flex justify-content-center btn-3d mt-5" onClick={() => window.location.href = 'http://127.0.0.1:8000/todolistmanager'}>Go to To Do List Manager</Button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
