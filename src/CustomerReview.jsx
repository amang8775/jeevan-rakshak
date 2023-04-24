import Card from "./Components/Card";

function CustomerReview() {
    return (
        <div class="w-full">
            <div class="text-4xl font-bold text-center mt-10">
                Customer Reviews
            </div>
            <div
                class="flex flex-wrap p-10 max-lg:p-5 justify-center gap-5 font-semibold text-md"
            >
              <div className="p-8 max-lg:p-4 rounded-md w-[30%] border-2 text-gray-500 flex flex-col hover:shadow-md hover:scale-[.98] transition-all duration-300 shadow-lg overflow-x-hidden">
                    <div className="mx-auto my-2">
                        <img
                            className="object-cover rounded-full w-[80px] h-[80px] inline-block"
                            src="./images/customer.png"
                            alt=""
                        />
                    </div>
                    <div className="flex-grow">
                        I recently used this photocopy website for some important
                        documents and I was blown away by the quality of the copies. The
                        process was smooth and easy, and I received my copies in a
                        timely manner. I would highly recommend this website to anyone
                        looking for high-quality photocopies.
                    </div>
                    <div className="font-bold text-black pt-2 text-right">
                        <div className="text-yellow-400 text-left">
                            <span className="fa fa-star checked"></span
                            ><span className="fa fa-star checked"></span
                            ><span className="fa fa-star checked"></span
                            ><span className="fa fa-star checked"></span
                            ><span className="fa fa-star checked"></span>
                        </div>
                        Emily Rodriguez
                    </div>
        </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

    )
};
export default CustomerReview; 