import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "./footer";
import Header from "./header";

export interface ClientDetails {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  url: string;
  projectImages: string[];
}

export default function ClientPage(client: ClientDetails) {
  // In a real application, you would fetch the client data based on the ID
  // const client = await getClient(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <a
              href="/clients"
              className="flex items-center mb-4 text-sm text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clients
            </a>
            <div className="grid gap-6 lg:grid-cols-2 items-start">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  {client.name}
                </h1>
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  width={300}
                  height={300}
                  className="rounded-lg mb-6"
                />
                <p className="text-xl mb-4">{client.description}</p>
                <p className="mb-6">{client.longDescription}</p>
                <Button asChild>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {client.name}
                  </a>
                </Button>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Highlights</h2>
                <div className="grid gap-4">
                  {client.projectImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${client.name} project image ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
