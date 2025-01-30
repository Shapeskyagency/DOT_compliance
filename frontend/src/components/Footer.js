const Footer = () => {
  return (
    <footer className="bg-[#fff] text-black py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Kargon */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Kargon</h3>
            <p>We pride ourselves on providing the best transport and shipping services.</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-primary">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Address:</span> 8 THE GRN STE A, Dover, DE 19901-3618</li>
              <li><span className="font-semibold">Mail:</span> support@mydotcabinet.com</li>
              <li><span className="font-semibold">Phone:</span>(302) 520-2246</li>
              <li><span className="font-semibold">Fax:</span> (+1) 523-567-987</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Newsletter</h3>
            <form>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Subscribe with us"
                  className="px-4 py-2 rounded-full w-full text-black border"
                />
                <button type="submit" className="px-6 border bg-red-600  py-2 bg-primary text-black rounded-full hover:bg-primary-dark">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Logo & Links */}
        <div className="border-t border-gray-200 mt-4 pt-4 text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-black hover:text-primary">About Us</a>
            <a href="#" className="text-black hover:text-primary">Services</a>
            <a href="#" className="text-black hover:text-primary">Get In Touch</a>
          </div>
          <div className="mb-4">
            <a href="#">
              <img
                src="/logo.png"
                alt="footer logo"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
