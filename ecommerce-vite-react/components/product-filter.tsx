"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 2000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filtros</h3>
        <Button variant="outline" size="sm" className="w-full">
          Limpiar Todo
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "brands"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="protein" />
                <label
                  htmlFor="protein"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proteínas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vitamins" />
                <label
                  htmlFor="vitamins"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Vitaminas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="food" />
                <label
                  htmlFor="food"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Comida
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="weight-loss" />
                <label
                  htmlFor="weight-loss"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Pérdida de Peso
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Rango de Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 2000]} max={4000} step={100} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">MXN ${priceRange[0]}</span>
                <span className="text-sm">MXN ${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Marcas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="optimum" />
                <label
                  htmlFor="optimum"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Optimum Nutrition
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="myprotein" />
                <label
                  htmlFor="myprotein"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  MyProtein
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="muscletech" />
                <label
                  htmlFor="muscletech"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  MuscleTech
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bsn" />
                <label
                  htmlFor="bsn"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  BSN
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger>Calificaciones</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="5stars" />
                <label
                  htmlFor="5stars"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  5 Estrellas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="4stars" />
                <label
                  htmlFor="4stars"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  4 Estrellas y más
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="3stars" />
                <label
                  htmlFor="3stars"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  3 Estrellas y más
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Aplicar Filtros</Button>
    </div>
  )
}
