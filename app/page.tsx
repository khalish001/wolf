import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'black'}}>
      <h1 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '5rem', color: 'hotpink', textTransform: 'uppercase', marginBottom: '2rem'}}>hellow khalima</h1>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <img src="/1.jpg" alt="Image 1" className="w-full h-auto" />
          </CarouselItem>
          <CarouselItem>
            <img src="/2.jpg" alt="Image 2" className="w-full h-auto" />
          </CarouselItem>
          <CarouselItem>
            <img src="/3.jpg" alt="Image 3" className="w-full h-auto" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  )
}
