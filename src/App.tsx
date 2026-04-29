import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Sparkles, 
  GraduationCap, 
  MessageSquare, 
  ArrowRight, 
  ChevronDown,
  Cpu,
  Globe,
  Award,
  BookOpen,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  CheckCircle2,
  Rocket,
  Zap,
  Bot,
  Facebook,
  Github,
  Video,
  UserCheck
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-beige/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-xl border-2 border-gold/30 transition-transform group-hover:scale-110 duration-500">
            <img 
              src="/logo.png" 
              alt="Amaya Con IA Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1620712943543-bcc4628c6bb5?q=80&w=100&h=100&auto=format&fit=crop";
              }}
            />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight">Amaya <span className="text-gold">Con IA</span></span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-bold">
          {["Inicio", "Cursos", "IA Media", "Sobre Mí", "Contacto"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 py-2.5 border border-gold text-gold text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-300 rounded-full"
        >
          Contactar Ahora
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const tools = [
    { name: "ChatGPT", color: "text-emerald-600" },
    { name: "Gemini", color: "text-blue-500" },
    { name: "Claude", color: "text-orange-600" },
    { name: "HeyGen", color: "text-purple-600" },
    { name: "Sora", color: "text-pink-600" },
    { name: "Runway", color: "text-gray-900" },
    { name: "Genspark", color: "text-indigo-500" }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-beige via-transparent to-beige z-10"></div>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
          alt="AI Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tools.map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-gold/10 rounded-full text-[10px] font-bold uppercase tracking-widest ${tool.color} shadow-sm`}
              >
                {tool.name}
              </motion.span>
            ))}
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8">
            Domina la <span className="italic gold-gradient font-medium text-glow-gold">Productividad Digital</span> <br />
            con <span className="font-medium text-ink">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-lg text-ink/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Soy <span className="font-bold text-ink">Yamilet Chirino Amaya</span>. Te enseño a optimizar la gestión administrativa de tu empresa y a crear contenido de alto impacto para tus redes sociales utilizando las herramientas de IA más avanzadas del mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#cursos" className="px-10 py-4 gold-bg-gradient text-white rounded-full shadow-xl shadow-gold/20 flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
              <span className="uppercase tracking-widest text-sm font-bold">Ver Servicios</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="px-10 py-4 border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              Solicitar Demo
            </a>
          </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Alumnos Formados", value: "500+" },
            { label: "Proyectos IA", value: "120+" },
            { label: "Eficiencia", value: "10X" },
            { label: "Herramientas IA", value: "25+" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <h4 className="text-3xl font-serif text-gold font-bold mb-1">{stat.value}</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIVideoShowcase = () => {
  const mediaItems = [
    {
      title: "Gestión Administrativa",
      description: "Automatiza tareas repetitivas y optimiza tus procesos empresariales con herramientas de IA.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Prompts de Imagen y Video",
      description: "Aprende a comunicarte con la IA para generar visuales potentes y videos dinámicos para tus redes.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Estrategia para Redes",
      description: "Escala tu marca personal o empresarial con contenido inteligente y automatizado.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="ia-media" className="py-32 bg-ink text-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="lg:w-2/3">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Formación Avanzada</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              IA para la <br /><span className="italic gold-gradient">Excelencia Empresarial</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-beige/60 font-light leading-relaxed">
              Descubre cómo la integración de la IA en los flujos de trabajo administrativos y creativos está transformando la competitividad de las empresas modernas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-[40px] aspect-[4/5]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold mb-4 backdrop-blur-md">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 font-light group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
  features: string[];
  isFeatured?: boolean;
  key?: number | string;
}

const ServiceCard = ({ icon: Icon, title, description, delay, features, isFeatured }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`p-8 rounded-[32px] border transition-all duration-500 group relative ${isFeatured ? "bg-paper border-gold shadow-2xl scale-105 z-10" : "bg-white border-gold/10 hover:border-gold/30"}`}
  >
    {isFeatured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-bg-gradient text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
        Más Popular
      </div>
    )}
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm ${isFeatured ? "gold-bg-gradient text-white" : "bg-beige text-gold group-hover:gold-bg-gradient group-hover:text-white"}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-ink/60 font-light leading-relaxed text-sm mb-6">
      {description}
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-ink/70">
          <CheckCircle2 className="w-4 h-4 text-gold" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${isFeatured ? "gold-bg-gradient text-white shadow-lg" : "border border-gold text-gold hover:bg-gold hover:text-white"}`}>
      Más Información
    </button>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Aclimatación a la IA",
      description: "Introducción completa al mundo de la IA generativa. Ideal para dar los primeros pasos con confianza.",
      features: ["Fundamentos de IA", "ChatGPT efectivo", "Gemini y Claude", "Casos prácticos"]
    },
    {
      icon: Zap,
      title: "Prompts Profesionales",
      description: "Domina el arte de la ingeniería de prompts para obtener resultados extraordinarios y precisos.",
      isFeatured: true,
      features: ["Ingeniería avanzada", "Técnicas CoT", "Prompts visuales", "Plantillas VIP"]
    },
    {
      icon: Bot,
      title: "GPTs y Agentes IA",
      description: "Crea tus propios asistentes personalizados adaptados a las necesidades únicas de tu negocio.",
      features: ["GPTs personalizados", "Gems en Gemini", "Super Agentes", "Automatización"]
    }
  ];

  return (
    <section id="cursos" className="py-32 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Formación de Élite</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Programas de <span className="italic font-light">Alto Impacto</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
            Cursos prácticos diseñados para que domines la Inteligencia Artificial desde el primer día, 
            con un enfoque profesional y sofisticado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={i * 0.1} 
              features={service.features} 
              isFeatured={service.isFeatured} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/Amaya.con_IA/", label: "Amaya.con_IA" },
    { icon: Facebook, url: "https://www.facebook.com/amayachirino", label: "Amaya chirino" },
    { icon: Github, url: "https://github.com/amayachirino369-ux/Yamilet-Chirino-Amaya", label: "Yamilet-Chirino-Amaya" }
  ];

  return (
    <section id="sobre-mi" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2"
        >
          <div className="aspect-[4/5] overflow-hidden oval-mask shadow-2xl relative z-10 border-8 border-white">
            <img 
              src="/profile.jpg" 
              alt="Yamilet Chirino Amaya" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-gold/20 rounded-full z-0 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 gold-bg-gradient opacity-10 rounded-full blur-3xl z-0"></div>
          
          <div className="absolute bottom-10 right-0 glass-card p-6 rounded-2xl z-20 max-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-beige overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-gold">+500</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold leading-tight">Mentes Transformadas</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">La Mente Detrás</span>
          <h2 className="text-5xl font-serif mb-8 leading-tight">Yamilet Chirino Amaya: <br /><span className="italic font-light">Tu Mentora en IA</span></h2>
          <div className="space-y-6 text-ink/70 font-light leading-relaxed text-lg">
            <p>
              Soy una apasionada de la tecnología y la docencia, dedicada a empoderar a profesionales a través del dominio práctico de la Inteligencia Artificial.
            </p>
            <p>
              Mi enfoque une la eficiencia administrativa con la creatividad digital, permitiéndote no solo usar IA, sino transformar radicalmente tu forma de trabajar. 
              Especialista en optimización de flujos con IA y estrategias de contenido automáticas.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Eficiencia Administrativa",
                "Ingeniería de Prompts",
                "Contenido para Redes",
                "Optimización de Procesos"
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-wider">amayachirino369@gmail.com</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a 
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-ink/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{label.split('/').pop()}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("¡Gracias! Me pondré en contacto contigo pronto.");
  };

  return (
    <section id="contacto" className="py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[48px] p-8 md:p-20 shadow-2xl border border-gold/10 relative overflow-hidden flex flex-col lg:flex-row gap-16">
          <div className="absolute top-0 right-0 w-96 h-96 gold-bg-gradient opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="lg:w-2/5 relative z-10">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Hablemos</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">¿Listo para <span className="italic font-light">Evolucionar</span>?</h2>
            <p className="text-ink/60 font-light mb-12 leading-relaxed">
              Escríbeme y diseñemos juntos el camino hacia tu maestría en Inteligencia Artificial.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl gold-bg-gradient flex items-center justify-center text-white shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Teléfono</h4>
                  <p className="font-bold tracking-wider">604 266 708</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl gold-bg-gradient flex items-center justify-center text-white shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Email</h4>
                  <p className="font-bold tracking-wider">amayachirino369@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/Amaya.con_IA/" },
                { Icon: Facebook, url: "https://www.facebook.com/amayachirino" },
                { Icon: Github, url: "https://github.com/amayachirino369-ux/Yamilet-Chirino-Amaya" }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:gold-bg-gradient hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-4">Nombre</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Tu nombre completo" 
                    className="w-full px-6 py-4 rounded-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-4">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="tu@email.com" 
                    className="w-full px-6 py-4 rounded-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-4">¿Qué necesitas?</label>
                <div className="relative">
                  <select 
                    required
                    className="w-full px-6 py-4 rounded-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="informacion">Información General</option>
                    <option value="programacion">Servicios de Programación de IAs</option>
                    <option value="formacion">Formación Personalizada</option>
                    <option value="presupuesto">Solicitar Presupuesto</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 ml-4">Mensaje</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Cuéntame sobre tu proyecto o dudas..." 
                  className="w-full px-6 py-4 rounded-3xl bg-beige/50 border border-transparent focus:border-gold focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button className="w-full py-5 gold-bg-gradient text-white rounded-full shadow-xl shadow-gold/20 uppercase tracking-[0.2em] text-sm font-bold hover:scale-[1.01] active:scale-95 transition-all">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-ink text-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                <img 
                  src="/logo.png" 
                  alt="Footer Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1620712943543-bcc4628c6bb5?q=80&w=100&h=100&auto=format&fit=crop";
                  }}
                />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">Amaya <span className="text-gold">Con IA</span></span>
            </div>
            <p className="text-sm opacity-50 max-w-sm leading-relaxed font-light">
              Transformando el futuro a través de la educación y la consultoría estratégica en Inteligencia Artificial. 
              Elegancia y conocimiento al servicio de tu éxito.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gold">Contacto</h4>
            <ul className="space-y-4 text-sm opacity-70 font-light">
              <li className="flex items-center gap-2"><Phone className="w-3 h-3 text-gold" /> 604 266 708</li>
              <li className="flex items-center gap-2"><Mail className="w-3 h-3 text-gold" /> amayachirino369@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gold">Legal</h4>
            <ul className="space-y-4 text-sm opacity-70 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
          <p>© 2026 Amaya Con IA. Yamilet Chirino Amaya.</p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/Amaya.con_IA/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
            <a href="https://www.facebook.com/amayachirino" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
            <a href="https://github.com/amayachirino369-ux/Yamilet-Chirino-Amaya" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <AIVideoShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
