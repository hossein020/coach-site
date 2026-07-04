export default function Footer() {
    return (
        <footer className="text-white bg-black py-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-2xl font-bold">
                        FitCoach
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Helping people build strength and confindent.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-gray-400 flex items-center justify-center
                    gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">
                        Contact
                    </h3>
                    <p className="text-gray-400">
                        Email : alirezaei1380@gmail.com
                    </p>
                    <p className="text-gray-400 mt-2">
                        phone : 0939 918 2190
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
                2026 FitCoach. All rights reseeved
            </div>
        </footer>
    );
}