import MainLayout from "../layout/MainLayout";

export default function Signup() {
    return (
        <MainLayout>
            <div className="min-h-[80vh] flex items-center justify-center">
                <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Sing Up
                    </h1>
                    <input 
                    type="text"
                    placeholder="full name"
                    className="w-full border p-3 rounded-lg mb-4"
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg mb-6"
                    />
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                        Create Accound
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}