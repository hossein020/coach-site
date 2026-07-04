import MainLayout from "../layout/MainLayout";

export default function Login() {
    return (
        <MainLayout>
            <div className="min-h-[80vh] flex items-center justify-center">
                <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Login
                    </h1>
                    <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg mb-4"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    className="w-full border p-3 rounded-lg mb-6"
                    />
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}