const landingFooter = () => {
  return (
    <footer className="bg-black px-6 py-16 text-gray-400 md:px-14">
      <p className="mb-8">
        Questions? Call 01880677473
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <a href="#">FAQ</a>
        <a href="#">Help Centre</a>
        <a href="#">Account</a>
        <a href="#">Media Centre</a>

        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>

        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>

        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
        <a href="#">Only on Netflix</a>
      </div>

      <div className="mt-8">
        <select className="rounded border border-gray-600 bg-black px-4 py-2 text-white">
          <option>English</option>
        </select>
      </div>

      <p className="mt-8">Netflix Bangladesh</p>
    </footer>
  );
};

export default landingFooter;