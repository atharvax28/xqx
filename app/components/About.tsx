import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">About Dr. Tayade</h2>
      <Card>
        <CardHeader>
          <CardTitle>Professional Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4"><strong>Birth Date:</strong> 27th March 1955</p>
          <p className="mb-4"><strong>Address:</strong> F-1501, Kanakia Paris, BKC, Bandra (E), Mumbai – 400 051</p>
          <p className="mb-4"><strong>Contact:</strong> 9869247153</p>
          <p className="mb-4"><strong>Qualifications:</strong> B.A.M.S. MD (Ayurveda), Ph.D (Ayurveda)</p>
          <p className="mb-4"><strong>Designation:</strong> Retired Professor Medicine Department, Smt. K.G.M.P. Ayurved Mahavidyalaya, Charni Road, Mumbai</p>
          <p><strong>Current Roles:</strong> Advisor at Ashrya Pratisthan Mumbai, Patron at Maharashtra Ayurved Sambhalan South Mumbai</p>
        </CardContent>
      </Card>
    </section>
  )
}

