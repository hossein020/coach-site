import img1 from '../../assets/image/1.jpg';
import img2 from '../../assets/image/2.jpg';
import img3 from '../../assets/image/3.jpg';
export default function Gallery() {
    const images =[
        'https://thfvnext.bing.com/th/id/OIP.ZV-KMq6ylz5UQs7NO6ALrgHaE7?w=286&h=191&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.0GeNo0FqOWSvbE-B57yn2wHaE8?w=302&h=201&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.U57vvOtLq1D_tuHTPEnFDwHaFL?w=221&h=189&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.yHaqeZCln7qEw6BkY2e1UwHaE8?w=276&h=184&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.8LE7wL5HaK_VNUxv-2dF1wHaE8?w=238&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.vcO8n4EJtZuU3ljhz0IjTQHaE7?w=237&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.SZyLRsv7iMSZUeS6cLGdMAHaE8?w=236&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th?id=OIF.hOB%2f3lOrTLKtriecpD6vWA&w=264&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        'https://thfvnext.bing.com/th/id/OIP.lX_udpbqv3kaq75yCUB80gHaD0?w=320&h=179&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3',
        img1,
        img2,
        img3

    ]
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <span className="text-blue-600 font-semibold uppercase">
                        Gallery
                    </span>
                    <h2 className="text-4xl font-bold mt-4">
                        TransFormations & Training
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        A look at our training sessions and client transformations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                    {images.map((image, index)=>(
                        <div key={index} className="overflow-hidden rounded-2xl">
                            <img 
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-80 object-cover rounded-2xl group-hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}