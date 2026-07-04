import coachimage from '../../assets/image/coachimage.jpg'
export default function AboutCoach(){
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <img src={coachimage} alt="Fitness Coach " className="w-full rounded-3xl shadow-lg" />
            </div>
            <div>
                <span className="text-blue-600 font-semibold uppercase">About Coach</span>
                <h2 className="text-4xl font-bold mt-4">Helping People Biuld Strength And Confidence</h2>
                <p className="text-gray-600 mt-6 leading-8">I help peple transform their bodies through personalized training plans, healthy habits and continuous support</p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                    <div>
                        <h3 className="text-3xl font-bold">5+</h3>
                        <p className="text-gray-500">Years Exporience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">300+</h3>
                        <p className="text-gray-500">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">500+</h3>
                        <p className="text-gray-500">Training Sessions</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">24/7</h3>
                        <p className="text-gray-500">Online Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
};