import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-slate-100 pt-16 pb-12 text-slate-500">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                <img src ={logo} alt="Dev Stack Logo"/>
              </span>
            </div>
            <p className="font-sans text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-5 pt-2 font-sans text-sm font-medium text-slate-600">
              <a href="#github" className="hover:text-magenta transition-colors">
                GitHub
              </a>
              <a href="#twitter" className="hover:text-magenta transition-colors">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-magenta transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="font-sans space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;