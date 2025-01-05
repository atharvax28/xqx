"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Publications() {
  const [showAll, setShowAll] = useState(false)

  const books = [
    "Panchakarma Vignyan",
    "Cardiology in Ayurveda",
    "Aavran",
    "Pathya hi Arogya Mulam",
    "Astomahagadam",
    "Editor Umbertha Chadisicha",
    "Comparative study of Bhadranimbkulthaydi Kwath Basti and Madhuham Rasayan w.s.r. to Diabetes Mellitus type 2",
    "Nadi Nidan",
    "Clinical Aspect Thyrodism In Ayurveda",
    "Ayurvedic Management Of Critical Diseases",
    "Chemical Aspect of Thyrodism in Ayurveda",
    "Critical disease and Ayurvedic Management",
    "Parpatikalpana"
  ]

  const displayedBooks = showAll ? books : books.slice(0, 5)

  return (
    <section id="publications" className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Publications</h2>
      <Card>
        <CardHeader>
          <CardTitle>Published Books</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            {displayedBooks.map((book, index) => (
              <li key={index} className="mb-2">{book}</li>
            ))}
          </ul>
          {!showAll && (
            <Button onClick={() => setShowAll(true)} className="mt-4">
              Show All Publications
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

