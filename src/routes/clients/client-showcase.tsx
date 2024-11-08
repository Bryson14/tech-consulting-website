import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import crockerLogo from "/clients/crocker-ventures/crocker-ventures-logo.jpeg";
import sublimeLogo from "/clients/sublime-decor/sublime-logo.jpeg";
import tmtLogo from "/clients/the-massapequa-tutor/tmt-logo.png";

// This would typically come from a database or API
const clients = [
  {
    id: "tmt",
    name: "The Massapequa Tutor",
    description: "Compelling Peer Tutors for the New York Area",
    image: tmtLogo,
    url: "https://themassapequatutor.com",
  },
  {
    id: "sublime-events",
    name: "Sublime Events and Decor",
    description: "Beautiful local parties and decor",
    image: sublimeLogo,
    url: "https://sublimeeventsdecor.com",
  },
  {
    id: "crocker-ventures",
    name: "Crocker Ventures",
    description:
      "Private Firm investing in life science, healthcare, and emerging technology",
    image: crockerLogo,
    url: "https://crockerventures.com",
  },
];

export default function ClientShowcase() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Our Clients
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client) => (
                <a key={client.id} href={`/clients/${client.id}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <img
                        src={client.image}
                        alt={`${client.name} logo`}
                        width={75}
                        height={75}
                        className="rounded-full"
                      />
                      <CardTitle>{client.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{client.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
