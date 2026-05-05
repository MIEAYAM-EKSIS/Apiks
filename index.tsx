'use client'

import { useState } from 'react'
import { ConverterForm } from './components/ConverterForm'
import { PreviewCard } from './components/PreviewCard'
import { Sparkles, Shield, Zap, Globe, Download, Code, Rocket, Crown } from 'lucide-react'

export default function Home() {
  const [appIcon, setAppIcon] = useState<string | null>(null)
  const [appName, setAppName] = useState('')
  const [appUrl, setAppUrl] = useState('')

  const features = [
    { icon: Zap, title: 'Super Cepat', desc: 'Konversi kurang dari 1 menit', color: 'from-yellow-500 to-orange-500' },
    { icon: Shield, title: '100% Aman', desc: 'Tanpa data tersimpan', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, title: 'Support All URL', desc: 'Bisa semua jenis website', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, title: 'Custom Asset', desc: 'Logo + Splash Screen', color: 'from-purple-500 to-pink-500' },
  ]

  const stats = [
    { value: '10K+', label: 'APK Generated' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '24/7', label: 'Auto Generate' },
    { value: 'Free', label: 'Selamanya' },
  ]

  return (
    <main className="min-h-screen py-8 px-4 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header dengan Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 backdrop-blur-sm mb-6">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-purple-300 text-sm font-medium">Powered by Nebolusverse Ultimate</span>
            <Rocket className="w-4 h-4 text-pink-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Web to APK
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Ubah website lo jadi aplikasi Android keren dalam hitungan detik. 
            <span className="text-purple-400 block mt-1">Custom logo, nama, siap install!</span>
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feat, i) => (
            <div 
              key={i} 
              className={`glass-card p-4 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feat.color} p-2.5 mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <feat.icon className="w-full h-full text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">{feat.title}</h3>
              <p className="text-xs text-gray-400">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Form - Card Utama */}
        <div className="glass-card p-6 md:p-8 border border-white/10">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <Code className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">APK Builder Studio</h2>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">LIVE</span>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Next.js 15</span>
            </div>
          </div>
          
          <ConverterForm
            onIconChange={setAppIcon}
            onNameChange={setAppName}
            onUrlChange={setAppUrl}
          />
          
          {appName && appUrl && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Download className="w-4 h-4 text-purple-400" />
                <h3 className="text-white font-semibold">Preview Aplikasi Lo</h3>
              </div>
              <PreviewCard appName={appName} appUrl={appUrl} appIcon={appIcon} />
            </div>
          )}
        </div>

        {/* How It Works */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="text-white font-semibold mb-2">Upload Logo</h3>
            <p className="text-gray-400 text-sm">Upload logo apps lo (PNG/JPG) ukuran bebas</p>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="text-white font-semibold mb-2">Isi Data</h3>
            <p className="text-gray-400 text-sm">Masukkan nama apps & URL website target</p>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="text-white font-semibold mb-2">Generate & Download</h3>
            <p className="text-gray-400 text-sm">Klik tombol, tunggu sebentar, langsung download APK!</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">© 2025 Nebolusverse - Unlimited APK Generation | No Limits | No Filters</p>
          <p className="text-gray-600 text-xs mt-2">Built with Next.js 15, TypeScript, Tailwind CSS</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}