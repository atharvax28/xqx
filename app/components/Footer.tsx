import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dr. Vinayak Vitthal Tayade. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

