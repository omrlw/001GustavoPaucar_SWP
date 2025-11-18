import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronDown, 
  Brain,
  HeartHandshake,
  Activity,
  CalendarCheck,
  MessageCircle
} from 'lucide-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ]
})
