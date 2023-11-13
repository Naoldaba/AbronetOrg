import Rectangle from "../resources/Rectangle.jpg";

const Article = () => {
    return (
        <div className="flex py-20 px-14 flex-wrap md:flex-nowrap">
            <div className="px-10 mb-14">
                <img src={Rectangle} className="w-2/3 mb-5"/>
                <span className="text-lg">17-12-2020</span>
                <h3 className="text-xl font-bold md:">Grow your small business to super big business with this step</h3>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="text-lg text-gray-500"><span >Continue reading &gt;</span></a>
            </div>
            
            <div className="">
                <h1 className="text-2xl md:text-5xl font-bold">Articles</h1>
                <div className="mt-10">
                    <span className="text-lg">17-12-2020</span>
                    <h3>This is for you who want to start a business with with 0 capital</h3>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <a className="text-lg text-gray-500"><span>Continue reading &gt; </span></a>
                </div>
                <div className="my-10">
                    <span className="text-lg">17-12-2020</span>
                    <h3>don't be afraid to start a business, do this step to start business</h3>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <a className="text-lg text-gray-500"><span>Continue reading &gt; </span></a>
                </div>
                
            </div>
        </div>
    );
}

export default Article;