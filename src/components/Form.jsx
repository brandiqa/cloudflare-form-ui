import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Alert from './Alert'

import './form.css'

async function sendMessage(data) {
  const url = 'https://contact-form-worker.wallesdevelopers.com'

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return response
}

function Form() {
  const [message, setMessage] = useState({
    status: null,
    content: '',
  })
  const { register, errors, handleSubmit, reset } = useForm()

  // Post data to our Workers application
  const onSubmit = async (data) => {
    const response = await sendMessage(data)
    const results = await response.json()
    setMessage({
      status: response.status,
      content: results.message,
    })
    if (response.status === 200) {
      reset()
    }
  }

  return (
    <div className="p-8 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-xl font-bold text-center text-gray-800 ">
        Sign Online Guestbook
      </h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        {message.status && <Alert message={message} />}
        <section className="flex flex-col lg:flex-row field">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              ref={register({ required: true })}
            />
            <span className="errors">
              {errors.firstName && 'First name is required'}
            </span>
          </div>

          <div className="mt-2 lg:ml-4 lg:mt-0">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              ref={register({ required: true })}
            />
            <span className="errors">
              {errors.lastName && 'Last name is required'}
            </span>
          </div>
        </section>

        <section className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {errors.email &&
              errors.email.type === 'required' &&
              'Email is required'}
            {errors.email &&
              errors.email.type === 'pattern' &&
              'Provide a valid email address'}
          </span>
        </section>

        <section className="field">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="4"
            ref={register({ required: true, minLength: 10 })}
          ></textarea>
          <span className="errors">
            {errors.message &&
              errors.message.type === 'required' &&
              'Message is required'}
            {errors.message &&
              errors.message.type === 'minLength' &&
              'Too short'}
          </span>
        </section>

        <section className="my-2">
          <input
            className="border rounded"
            type="checkbox"
            name="subscribe"
            id="subscribe"
            ref={register()}
          />
          <label htmlFor="subscribe" className="inline ml-2">
            Keep me posted
          </label>
        </section>

        <div className="mt-4 text-right">
          <button className="px-4 py-2 font-semibold text-white rounded shadow-md bg-amber-600 hover:bg-amber-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:ring-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
