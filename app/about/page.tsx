import StoreLayout from "@/components/store-layout"
import { ShoppingCart  } from "lucide-react"

export default function AboutPage() {
  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-store-dark-green text-center">Sobre nosotros</h1>

        <div className="flex justify-center mb-8">
          <div className="bg-store-dark-green text-white p-4 rounded-full">
            <ShoppingCart  className="h-16 w-16 text-store-bright-green" />
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Bienvenido a Nutrimaxiboost, tu tienda de confianza para complementos alimenticios y productos saludables.
            Creemos en mejorar tu calidad de vida ofreciéndote productos de alta calidad, sostenibles y respetuosos
            con el medio ambiente. Nuestro compromiso es ayudarte a alcanzar tus objetivos de bienestar de forma natural y responsable.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Nuestra MISIÓN</h2>
          <p className="mb-6">
            Nuestra misión en Nutrimaxiboost es brindar productos de alta calidad que impulsen el rendimiento físico, fortalezcan la salud y promuevan el bienestar integral de nuestros clientes. Nos enfocamos en acompañarlos en cada paso hacia sus metas fitness, ofreciendo suplementos confiables, seguros y eficaces que se adaptan a su estilo de vida.
            Queremos ser más que una tienda: ser un aliado en su transformación, ayudándoles a alcanzar sus objetivos de forma efectiva, saludable y sostenible.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Nuestra historia</h2>
          <p className="mb-6">
            Nutrimaxiboost nació en 2020 gracias al sueño de un grupo de emprendedores comprometidos con la salud y el bienestar natural.
            Lo que comenzó como una pequeña tienda en línea, se transformó en una comunidad de personas que comparten la pasión por cuidarse y cuidar el planeta.
            Cada producto que ofrecemos refleja nuestro deseo de hacer una diferencia positiva en la vida de nuestros clientes y en el mundo que todos compartimos.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Nuestra VALORES</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>🔶 <strong>Compromiso con la calidad:</strong> Seleccionamos cuidadosamente cada producto, garantizando su eficacia, seguridad y durabilidad para apoyar la salud y el rendimiento físico de nuestros clientes.</li>
            <li>💡 <strong>Innovación constante:</strong> Nos adaptamos y evolucionamos, siempre en búsqueda de nuevas soluciones y estrategias que respondan a las necesidades del mercado actual.</li>
            <li>🤝 <strong>Integridad y transparencia:</strong> Actuamos con honestidad y claridad, construyendo relaciones basadas en la confianza con nuestros clientes y aliados.</li>
            <li>❤️ <strong>Pasión por el bienestar:</strong> Nos inspira mejorar la vida de las personas, promoviendo hábitos saludables y un estilo de vida activo y equilibrado.</li>
            <li>🌱 <strong>Compromiso con la sostenibilidad:</strong> Adoptamos prácticas responsables que minimizan el impacto ambiental y fomentan un consumo consciente.</li>
            <li>🎧 <strong>Excelencia en la atención al cliente:</strong> Brindamos un servicio cercano, empático y personalizado para asegurar una experiencia de compra memorable.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">VISIÓN</h2>
          <p className="mb-6">
            Nuestra visión en Nutrimaxiboost es convertirnos en la empresa líder en el mercado de suplementos y bienestar físico, reconocida por ofrecer soluciones innovadoras, accesibles y de alta calidad que transformen vidas.
            Aspiramos a inspirar a millones de personas, no solo a mejorar su salud y rendimiento, sino también a adoptar un estilo de vida más activo, consciente y equilibrado.
            Queremos trascender fronteras y posicionarnos a nivel global como una marca confiable, moderna y comprometida con el bienestar integral de cada persona.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Política de privacidad</h2>
          <p className="mb-6">
            En Nutrimaxiboost, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal. 
            Nos comprometemos a garantizar que tu privacidad esté protegida en todo momento. Solo recopilamos la información necesaria para ofrecerte la mejor experiencia de compra y mejorar nuestros servicios. 
            No compartiremos tus datos con terceros sin tu consentimiento, salvo en los casos que lo exija la ley.
          </p>
        </div>
      </div>
    </StoreLayout>
  )
}
