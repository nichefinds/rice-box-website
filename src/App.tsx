import { siteConfig } from './config/site';
import './index.css';

// Placeholder image component
const PlaceholderImg = ({ className, text }: { className?: string; text?: string }) => (
  <div className={`bg-gradient-to-br from-boba-brown/20 to-terracotta/20 flex items-center justify-center ${className}`}>
    <span className="text-boba-brown/40 font-display font-bold text-lg">{text || 'Photo'}</span>
  </div>
);

// Hero Section
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Image Placeholder */}
    <div className="absolute inset-0 z-0">
      <PlaceholderImg className="w-full h-full" text="Hero Food Photo" />
      <div className="absolute inset-0 bg-gradient-to-r from-rice-cream via-rice-cream/95 to-transparent" />
    </div>
    
    {/* Content */}
    <div className="relative z-10 section-padding w-full max-w-7xl mx-auto py-20">
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="animate-fade-up">
          <span className="inline-block bg-matcha/20 text-matcha-dark px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            {siteConfig.hero.badge}
          </span>
        </div>
        
        {/* Stacked Title */}
        <div className="mt-8 animate-fade-up animation-delay-100">
          <h1 className="text-stacked text-[clamp(80px,20vw,180px)] text-boba-dark">
            {siteConfig.hero.titleLine1}
          </h1>
          <h1 className="text-stacked text-[clamp(80px,20vw,180px)] text-terracotta -mt-4 sm:-mt-8">
            {siteConfig.hero.titleLine2}
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-boba-brown max-w-md animate-fade-up animation-delay-200">
          {siteConfig.hero.subtitle}
        </p>
        
        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up animation-delay-300">
          <a href={siteConfig.hero.cta.href} className="btn-primary">
            {siteConfig.hero.cta.text}
          </a>
          <a href={siteConfig.hero.secondaryCta.href} className="btn-secondary">
            {siteConfig.hero.secondaryCta.text}
          </a>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-mango/20 rounded-full blur-3xl animate-float" />
    <div className="absolute top-20 right-1/4 w-24 h-24 bg-matcha/20 rounded-full blur-2xl animate-float animation-delay-200" />
  </section>
);

// Sam's Story Section
const Story = () => (
  <section id="story" className="py-24 sm:py-32 bg-rice-warm grain-overlay">
    <div className="section-padding max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <PlaceholderImg className="w-full aspect-[4/5] rounded-3xl shadow-2xl" text="Sam's Photo" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta/10 rounded-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-matcha/10 rounded-full -z-10" />
        </div>
        
        {/* Content */}
        <div>
          <span className="inline-block text-terracotta font-semibold tracking-wide uppercase text-sm">
            {siteConfig.story.badge}
          </span>
          <h2 className="mt-4 text-stacked-sm text-4xl sm:text-5xl lg:text-6xl text-boba-dark">
            {siteConfig.story.title}
          </h2>
          
          <div className="mt-8 space-y-4 text-boba-brown leading-relaxed">
            {siteConfig.story.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <blockquote className="mt-10 pl-6 border-l-4 border-terracotta">
            <p className="text-xl sm:text-2xl font-display font-medium text-boba-dark italic">
              "{siteConfig.story.quote}"
            </p>
            <cite className="mt-4 block text-terracotta font-semibold not-italic">
              {siteConfig.story.signature}
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

// Menu Section
const Menu = () => (
  <section id="menu" className="py-24 sm:py-32 bg-rice-cream">
    <div className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-terracotta font-semibold tracking-wide uppercase text-sm">
          {siteConfig.menu.badge}
        </span>
        <h2 className="mt-4 text-stacked-sm text-4xl sm:text-5xl lg:text-6xl text-boba-dark">
          {siteConfig.menu.title}
        </h2>
      </div>
      
      {/* Menu Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.menu.items.map((item, idx) => (
          <div 
            key={idx} 
            className="menu-item group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <PlaceholderImg className="w-full h-full group-hover:scale-105 transition-transform duration-500" text={item.name} />
              {/* Tag */}
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white
                ${item.tagColor === 'terracotta' ? 'bg-terracotta' : ''}
                ${item.tagColor === 'matcha' ? 'bg-matcha' : ''}
                ${item.tagColor === 'mango' ? 'bg-mango text-boba-dark' : ''}
                ${item.tagColor === 'taro' ? 'bg-taro' : ''}
              `}>
                {item.tag}
              </span>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-display font-bold text-xl text-boba-dark">{item.name}</h3>
                <span className="font-display font-bold text-terracotta text-lg whitespace-nowrap">{item.price}</span>
              </div>
              <p className="mt-2 text-boba-brown/80 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* View Full Menu CTA */}
      <div className="mt-12 text-center">
        <a href="#" className="btn-secondary inline-block">
          View Full Menu
        </a>
      </div>
    </div>
  </section>
);

// Location Section
const Location = () => (
  <section id="location" className="py-24 sm:py-32 bg-boba-dark text-white">
    <div className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <div>
          <span className="inline-block text-matcha font-semibold tracking-wide uppercase text-sm">
            {siteConfig.location.badge}
          </span>
          <h2 className="mt-4 text-stacked-sm text-4xl sm:text-5xl lg:text-6xl text-white">
            {siteConfig.location.title}
          </h2>
          
          <div className="mt-10 space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-matcha font-semibold uppercase text-sm tracking-wide mb-2">Address</h3>
              <p className="text-xl">{siteConfig.location.address}</p>
              <p className="text-white/70">{siteConfig.location.city}</p>
            </div>
            
            {/* Phone */}
            <div>
              <h3 className="text-matcha font-semibold uppercase text-sm tracking-wide mb-2">Phone</h3>
              <a href={`tel:${siteConfig.location.phone}`} className="text-xl hover:text-matcha transition-colors">
                {siteConfig.location.phone}
              </a>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="text-matcha font-semibold uppercase text-sm tracking-wide mb-3">Hours</h3>
              <div className="space-y-2">
                {siteConfig.location.hours.map((hour, idx) => (
                  <div key={idx} className="flex justify-between max-w-xs">
                    <span className="text-white/70">{hour.day}</span>
                    <span>{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Note */}
            <p className="text-matcha font-medium">{siteConfig.location.note}</p>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="relative">
          <PlaceholderImg className="w-full h-full min-h-[400px] rounded-3xl bg-white/10" text="Map" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-boba-dark px-6 py-4 rounded-xl shadow-xl">
              <p className="font-display font-bold text-lg">📍 Albuquerque, NM</p>
              <p className="text-sm text-boba-brown">123 Central Ave NE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-16 bg-rice-cream border-t border-boba-brown/10">
    <div className="section-padding max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="font-display font-bold text-3xl text-boba-dark">
            RICE BOX <span className="text-terracotta">&</span> BOBA
          </h3>
          <p className="mt-4 text-boba-brown max-w-sm">
            Family-owned Asian comfort food and handcrafted boba tea. Made with love in Albuquerque.
          </p>
          
          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            {siteConfig.footer.social.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href}
                className="w-10 h-10 rounded-full bg-boba-dark/10 flex items-center justify-center text-boba-dark hover:bg-terracotta hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                <span className="text-sm font-bold">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-boba-dark mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {siteConfig.footer.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-boba-brown hover:text-terracotta transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Order Online */}
        <div>
          <h4 className="font-display font-bold text-boba-dark mb-4">Order Online</h4>
          <ul className="space-y-3">
            {siteConfig.footer.orderLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-boba-brown hover:text-terracotta transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#order" className="mt-6 btn-primary inline-block text-sm py-3 px-6">
            Order Now
          </a>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-boba-brown/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-boba-brown/60 text-sm">
          © {new Date().getFullYear()} Rice Box & Boba. All rights reserved.
        </p>
        <p className="text-boba-brown/60 text-sm">
          Made with ❤️ in Albuquerque
        </p>
      </div>
    </div>
  </footer>
);

// Navigation
const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rice-cream/90 backdrop-blur-md border-b border-boba-brown/5">
      <div className="section-padding max-w-7xl mx-auto py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl text-boba-dark">
          RICE<span className="text-terracotta">BOX</span>
        </a>
        
        <div className="hidden sm:flex items-center gap-8">
          <button onClick={() => scrollToSection('story')} className="text-boba-brown hover:text-terracotta transition-colors font-medium">
            Story
          </button>
          <button onClick={() => scrollToSection('menu')} className="text-boba-brown hover:text-terracotta transition-colors font-medium">
            Menu
          </button>
          <button onClick={() => scrollToSection('location')} className="text-boba-brown hover:text-terracotta transition-colors font-medium">
            Location
          </button>
          <a href="#order" className="btn-primary text-sm py-2 px-5">
            Order
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5">
          <span className="w-6 h-0.5 bg-boba-dark"></span>
          <span className="w-6 h-0.5 bg-boba-dark"></span>
          <span className="w-4 h-0.5 bg-boba-dark self-end"></span>
        </button>
      </div>
    </nav>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;