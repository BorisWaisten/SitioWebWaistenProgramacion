import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { rubro: 'Indumentaria', porcentaje: 80 },
  { rubro: 'Tecnología', porcentaje: 75 },
  { rubro: 'Alimentos y bebidas', porcentaje: 68 },
  { rubro: 'Hogar y decoración', porcentaje: 60 },
  { rubro: 'Salud y belleza', porcentaje: 58 },
  { rubro: 'Deportes', porcentaje: 54 },
];

const WhyDigital = () => (
  <section className="py-20 px-6 bg-white text-primaryText text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">
        ¿Por qué digitalizar tu negocio?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Más ventas</h3>
          <p>Tu rubro ya está vendiendo online. No te quedes afuera.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Automatización</h3>
          <p>Ahorra tiempo y dinero con sistemas que trabajan por vos.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Imagen profesional</h3>
          <p>Generá confianza desde el primer clic con un sitio moderno.</p>
        </div>
      </div>

      {/* Nuevo gráfico con rubros de eCommerce */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          ¿Qué rubros ya están vendiendo online?
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical" margin={{ left: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
            <YAxis type="category" dataKey="rubro" />
            <Tooltip formatter={(value) => `${value}% de empresas en este rubro`} />
            <Bar dataKey="porcentaje" fill="#82ca9d" name="Presencia online" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        Fuente: Informe Anual de Tendencias en eCommerce 2024 – CACE.
      </p>
    </motion.div>
  </section>
);

export default WhyDigital;
