"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Awards() {
  const [showAll, setShowAll] = useState(false)

  const awards = [
    "Lifetime Achievement Award by Maharishi Yogi, USA at Nepal (10th April, 2018)",
    "Dhanvantari Puraskar by Mumbai Vaidya Sabha (2017)",
    "Awarded by Brahaman Vignyan Mandal (Granth Puraskar) for Astomahagadam (2012)",
    "Vishakalpamahaprakalpa 'Arogya' Organized by Manshakti Prayoga Kendra, Lonavala",
    "Dr. Babasaheb Ambedkar National Award, New Delhi for Medical Social Services",
    "Rajabhau Joshi Puraskar for Vaidyakiya Lekhan and Samaj Karya",
    "International Excellency Award, Malaysia",
    "Jeevan Gaurav Puraskar By Vanaaushadi Vihyapit, Kolhapur",
    "Esteemed Medical Practitioner Award",
    "Distinguished Doctor Award at JRK sidhi, Chennai",
    "Arogya mitra puraskar at Kothe Mahakal Sangli"
  ]

  const displayedAwards = showAll ? awards : awards.slice(0, 5)

  return (
    <section id="awards" className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Awards and Recognitions</h2>
      <Card>
        <CardHeader>
          <CardTitle>Honors Received</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            {displayedAwards.map((award, index) => (
              <li key={index} className="mb-2">{award}</li>
            ))}
          </ul>
          {!showAll && (
            <Button onClick={() => setShowAll(true)} className="mt-4">
              Show All Awards
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

