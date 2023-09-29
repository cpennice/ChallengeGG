import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TodoModal from '@/Components/modal-form/modal-form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListRender from '@/Components/modal-form/todolistrender';
import "../../css/TodoListManager.css"

export default function TodoListManager({ auth }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List Manager</h2>}
        >
            <Head title="TodoListManager" />

            <div className="py-12 todo-list-manager">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <Button className="add-task-button" variant="primary" onClick={handleShow}>  Add Task </Button>
                    </div>
                </div>
            </div>
           <TodoModal show={show} handleClose={handleClose}></TodoModal>
           <TodoListRender></TodoListRender>
        </AuthenticatedLayout>
    );
}
