export default function Hero(){
    return(
        <section className="min-h-[90vh] flex items-center bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                    <span className="text-blue-500 font-semibold uppercase">
                        personalixed Fitness Coach
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">Build your Strongest Verstion</h1>
                    <p className="mt-6 text-lg text-gray-300">Personalized training progrms to help you lose fat, bulid mucle and become more disciplined</p>
                    <div className="mt-8 flex gap-4">
                        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:text-blue-900 transition">Get Started</button>
                    <button className="border border-white px-6 py-3 rounded-lg hover:text-black transition">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}