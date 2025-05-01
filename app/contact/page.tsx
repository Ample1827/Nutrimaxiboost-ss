import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6">
              ¡Nos encantaría saber de ti! Ya sea que tengas una pregunta sobre nuestros productos, necesites ayuda con
              un pedido, o quieras proporcionar comentarios, estamos aquí para ayudarte.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-muted-foreground">
                    Calle Fitness 123
                    <br />
                    Ciudad Saludable, CS 12345
                    <br />
                    México
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-muted-foreground">
                    soporte@nutrimaxi.com
                    <br />
                    ventas@nutrimaxi.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">
                    +52 (55) 1234-5678
                    <br />
                    Lunes - Viernes, 9am - 5pm CST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="first-name" placeholder="Juan" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Apellido
                    </label>
                    <Input id="last-name" placeholder="Pérez" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo Electrónico
                  </label>
                  <Input id="email" type="email" placeholder="juan.perez@ejemplo.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="subject" placeholder="¿Cómo podemos ayudarte?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Por favor proporciona tantos detalles como sea posible..."
                    rows={5}
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enviar Mensaje</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
