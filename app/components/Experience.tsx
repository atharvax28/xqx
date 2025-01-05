import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    "Undergraduate Teaching Exp – 18 yrs",
    "Post graduate Teaching Exp – 10 yrs",
    "Guiding Teacher – M.D. Ph.D (Ayur)",
    "Examiner Undergraduate post graduate",
    "Mumbai University, Mumbai Pune MUHS",
    "Maharashtra University of Health Sciences",
    "Guiding Subjects - DM (Prameha/Madhueha), CAD, Leukamia, HIV/AIDS, Thyrodism, Arthritis",
    "Committee Member for UG & PG Syllabus Organized by CCIM at Jamnagar 2012",
    "Chairman, PG.Ethical Committee, Padmashri Dr. D.Y.Patil Medical College, Navi Mumbai",
    "Chairman, P.G.Ethical Committee, Sion Ayurved College, Sion, Mumbai"
  ]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
      <Card>
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-2">{exp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

