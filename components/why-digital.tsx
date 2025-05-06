import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
const data = [
  { name: 'Digitalizadas', ventas: 65, automatizacion: 45, redes: 55 },
  { name: 'No Digitalizadas', ventas: 20, automatizacion: 10, redes: 5 },
];
const WhyDigital = () => (
  <section className="py-20 px-6 bg-white text-primaryText text-center">
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">¿Por qué digitalizar tu negocio?</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div>
        <h3 className="text-xl font-semibold mb-2">Más ventas</h3>
        <p>Llega a más personas con una tienda online o una presencia sólida en la web.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Automatización</h3>
        <p>Ahorra tiempo y dinero con sistemas que trabajan por vos.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Imagen profesional</h3>
        <p>Genera confianza desde el primer contacto con un diseño moderno y funcional.</p>
      </div>
    </div>
    
    {/* Aquí insertamos el gráfico */}
    <div className="mt-16 max-w-4xl mx-auto">
    <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventas" fill="#8884d8" name="Aumento en Ventas (%)" />
      <Bar dataKey="automatizacion" fill="#82ca9d" name="Aumento por Automatización (%)" />
      <Bar dataKey="redes" fill="#ffc658" name="Aumento por Redes Sociales (%)" />
    </BarChart>
  </ResponsiveContainer>
      </div>
      <p className="mt-8 text-sm text-gray-600">
      Fuente de datos: Cámara Argentina de Comercio Electrónico (CACE), Telefónica, Statista y otros estudios sobre digitalización empresarial en Argentina.
    </p>
    </motion.div>

  </section>
);

export default WhyDigital;
