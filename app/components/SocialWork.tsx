import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SocialWork() {
  const camps = [
    "Free Medical Camps – Konkan, Marathwada, Vidharbha, Gujarat, Bengal (1979 to 2018)",
    "Free Medical Camps – Ahmednagar, Raj Bhavan, Mantralaya & Income Tax Office at Mumbai",
    "Free Medical Camp At Igatpuri (1984 to 2023)",
    "Free Medical Camp at Kankavli (Sindhudurg) Shivsena",
    "Free Medical Camp At Mira Road",
    "Free Medical Camp At Bandra East Gandhinagar",
    "Free Medical Camp at Bandha Goa Border",
    "Free Medical Camp at Deaf & Dumb in Igatpuri",
    "Free Medical Camp at High court, Mumbai",
    "Free Medical Camp at Vatsalya, Nashik"
  ]

  return (
    <section id="social-work" className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Social Work</h2>
      <Card>
        <CardHeader>
          <CardTitle>Free Medical Camps</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            {camps.map((camp, index) => (
              <li key={index} className="mb-2">{camp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

