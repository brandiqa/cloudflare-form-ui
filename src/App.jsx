import React from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <div>
      <header className="bg-cyan-500">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="text-4xl font-bold text-white">
            CLOUDFLARE FORM HANDLING DEMO
          </h1>
          <p className="text-sm font-semibold text-cyan-100">
            Powered by <span className="highlight">React</span>,{' '}
            <span className="highlight">TailwindCSS</span> and{' '}
            <span className="highlight">Cloudflare Workers</span>
          </p>
        </div>
      </header>
      <div className="flex justify-center mt-8">
        <Form />
      </div>
    </div>
  )
}

export default App
