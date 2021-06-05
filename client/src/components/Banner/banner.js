import './banner.css';

const Banner = () =>{
	return(
        <div className="banner">
            <div className="bannertext">
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>		
            <div className="bannerform">
                <form action="/action_page.php">
                    <input type="Email" placeholder="Enter your email"  />
                    <button type="submit">Subscribe</button>	
                </form>
            </div>
        </div>

	)
}

export default Banner;