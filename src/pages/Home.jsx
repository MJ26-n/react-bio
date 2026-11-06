import Header from "../components/Header";

function Home () {
    return (
        <div>
            <Header title="My Wellness Tracker"/>
            <section className="p-6"> 
            <h2 className="text-x1 font-bold">
                Welcome
                </h2>

                <p className="mt-4">.
                    This is a simple wellness tracker application that helps you moniter your daily habit and overall wellness.           </p>
               
           
            </section>
        </div>
    )
}
export default Home